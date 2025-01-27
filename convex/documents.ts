import { query } from "./_generated/server";

// 定义一个查询 documents 表的接口
export const get = query({
  handler: async (ctx) => {
    return await ctx.db.query("documents").collect();
  },
});
