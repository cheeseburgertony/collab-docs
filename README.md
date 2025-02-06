<div >
  <a href="#chinese">中文</a> | <a href="#english">English</a>
</div>

<div id="chinese">

# Collab Docs

一个基于 Next.js 构建的实时协作文档编辑平台，支持多人同时编辑、评论和实时预览。

## 功能特性

- 📝 实时协作文档编辑
- 👥 多人同时在线编辑
- 💬 文档评论和讨论
- 📊 丰富的文档模板
- 🔍 文档搜索功能
- 👤 用户身份验证
- 🏢 组织和团队管理
- 📱 响应式设计

## 技术栈

- **Frontend**: Next.js , React, TypeScript
- **Backend**: Convex
- **实时协作**: Liveblocks
- **认证**: Clerk
- **样式**: Tailwind CSS, shadcn/ui
- **编辑器**: Tiptap
- **部署**: Vercel

## 开始使用

1. 克隆项目

```bash
git clone https://github.com/cheeseburgertony/collab-docs.git
cd collab-docs
```

2. 安装依赖

```bash
npm install --legacy-peer-deps
```

3. 环境变量配置

创建 `.env.local` 文件并配置以下环境变量:

```env
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
LIVEBLOCKS_SECRET_KEY=
```

4. 启动开发服务器

```bash
npm run dev
npx convex dev
```

5. 打开浏览器访问 [http://localhost:3000](http://localhost:3000)

## 项目结构

```bash
collab-docs/
├── src/
│ ├── app/ # Next.js App Router
│ ├── components/ # 可复用组件
│ ├── hooks/ # 自定义 Hooks
│ └── lib/ # 工具函数和配置
├── convex/ # Convex 后端配置和函数
├── public/ # 静态资源
└── ...配置文件
```

## 主要功能

- 文档编辑
  - 富文本编辑
  - 实时协作
  - 文档历史记录
  - 评论和讨论
- 文档管理
  - 创建和删除
  - 模板选择
  - 搜索和过滤
- 团队协作
  - 组织管理
  - 成员权限
  - 实时状态同步

## 部署

项目可以轻松部署到 Vercel 平台:

1. Fork 本项目
2. 在 Vercel 中导入项目
3. 配置环境变量
4. 部署

## 体验地址

[collab-docs](https://collab-docs-theta.vercel.app/)

## 贡献

欢迎提交 Pull Request 和 Issue！

## 许可证

MIT License

</div>

<div id="english">

# Collab Docs

A real-time collaborative document editing platform built with Next.js, supporting multi-user editing, commenting, and real-time preview.

## Features

- 📝 Real-time collaborative document editing
- 👥 Multi-user simultaneous editing
- 💬 Document comments and discussions
- 📊 Rich document templates
- 🔍 Document search functionality
- 👤 User authentication
- 🏢 Organization and team management
- 📱 Responsive design

## Tech Stack

- **Frontend**: Next.js, React, TypeScript
- **Backend**: Convex
- **Real-time Collaboration**: Liveblocks
- **Authentication**: Clerk
- **Styling**: Tailwind CSS, shadcn/ui
- **Editor**: Tiptap
- **Deployment**: Vercel

## Getting Started

1. Clone the repository

```bash
git clone https://github.com/cheeseburgertony/collab-docs.git
cd collab-docs
```

2. Install dependencies

```bash
npm install --legacy-peer-deps
```

3. Environment Variables Configuration

Create a `.env.local` file and configure the following environment variables:

```env
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
LIVEBLOCKS_SECRET_KEY=
```

4. Start the development server

```bash
npm run dev
npx convex dev
```

5. Open your browser and visit [http://localhost:3000](http://localhost:3000)

## Project Structure

```bash
collab-docs/
├── src/
│ ├── app/ # Next.js App Router
│ ├── components/ # Reusable components
│ ├── hooks/ # Custom Hooks
│ └── lib/ # Utility functions and configurations
├── convex/ # Convex backend configurations and functions
├── public/ # Static assets
└── ...configuration files
```

## Key Features

- Document Editing
  - Rich text editing
  - Real-time collaboration
  - Document history
  - Comments and discussions
- Document Management
  - Create and delete
  - Template selection
  - Search and filter
- Team Collaboration
  - Organization management
  - Member permissions
  - Real-time status synchronization

## Deployment

The project can be easily deployed to the Vercel platform:

1. Fork this project
2. Import the project in Vercel
3. Configure environment variables
4. Deploy

## Demo

[collab-docs](https://collab-docs-theta.vercel.app/)

## Contributing

Pull requests and issues are welcome!

## License

MIT License

</div>
