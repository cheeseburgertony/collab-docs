import { Liveblocks } from "@liveblocks/node";
import { ConvexHttpClient } from "convex/browser";
import { auth, currentUser } from "@clerk/nextjs/server";

import { api } from "../../../../convex/_generated/api";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

const liveblocks = new Liveblocks({
  secret: process.env.LIVEBLOCKS_SECRET_KEY!,
});

export async function POST(req: Request) {
  const { sessionClaims } = await auth();
  if (!sessionClaims) {
    return new Response("Unauthorized", { status: 401 });
  }

  const user = await currentUser();
  if (!user) {
    return new Response("Unauthorized", { status: 401 });
  }

  const { room } = await req.json();

  const document = await convex.query(api.documents.getById, { id: room });

  if (!document) {
    return new Response("Unauthorized", { status: 401 });
  }

  const isOwner = document.ownerId === user.id;
  const isOrganizationMember =
    document.organizationId && document.organizationId === sessionClaims.org_id;

  if (!isOwner && !isOrganizationMember) {
    return new Response("Unauthorized", { status: 401 });
  }

  const name =
    user.fullName ?? user.primaryEmailAddress?.emailAddress ?? "Anonymous";
  // 通过名字生成一个简单的哈希值
  const hash = Array.from(name).reduce(
    (acc, char) => acc + char.charCodeAt(0),
    0
  );
  // 使用哈希值生成一个色值，确保色值在 0 到 360 之间
  const hue = hash % 360;
  // 生成 HSL 颜色
  const color = `hsl(${hue}, 80%, 60%)`;

  // 经过层层用户权限验证后，我们可以为用户创建一个会话，允许用户访问房间
  // 通过prepareSession方法为用户创建一个会话，并且为会话设置用户信息
  const session = liveblocks.prepareSession(user.id, {
    userInfo: {
      name,
      avatar: user.imageUrl,
      color,
    },
  });
  // 给用户授权访问房间并且授权用户有完全访问权限
  session.allow(room, session.FULL_ACCESS);
  // 完成授权，返回会话的授权信息
  const { body, status } = await session.authorize();

  return new Response(body, { status });
}
