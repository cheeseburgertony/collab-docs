"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";

export async function getUser() {
  const { sessionClaims } = await auth();
  const clerk = await clerkClient();

  // 通过组织 ID 获取组织成员列表
  const response = await clerk.users.getUserList({
    organizationId: [sessionClaims?.org_id as string],
  });

  // 将成员列表转换为所需格式
  const users = response.data.map((user) => ({
    id: user.id,
    name:
      user.fullName ?? user.primaryEmailAddress?.emailAddress ?? "Anonymous",
    avatar: user.imageUrl,
  }));

  return users;
}
