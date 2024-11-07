# LinkView

> 一个用于管理和收藏个人网站导航的应用

LinkView 是一个网站导航应用，可以帮助用户收藏和分类管理自己喜欢的链接。该项目基于 **Next.js 14**、**Tailwind CSS**、**Vercel**、**PostgreSQL** 和 **Sentry**。使用 npm 作为包管理器，项目提供了简洁高效的用户体验。

## 技术栈

- ![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js&logoColor=white) **Next.js 14** - React 框架，用于构建高性能、现代化的 Web 应用。
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0-blue?logo=tailwind-css&logoColor=white) **Tailwind CSS** - 实用性优先的 CSS 框架，提供快速的样式构建。
- ![Vercel](https://img.shields.io/badge/Vercel-Platform-black?logo=vercel&logoColor=white) **Vercel** - 部署平台，专注于提升 Next.js 项目的部署体验。
- ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-336791?logo=postgresql&logoColor=white) **PostgreSQL** - 开源的关系型数据库管理系统，数据存储安全可靠。
- ![Sentry](https://img.shields.io/badge/Sentry-Monitoring-362D59?logo=sentry&logoColor=white) **Sentry** - 实时错误跟踪系统，用于监控应用状态。

## 功能特性

- **分类收藏**：支持将链接分类存储，方便管理和查找。
- **标签管理**：可为每个链接添加标签，实现更精确的分类。
- **安全和隐私**：数据存储在可靠的数据库中，保障用户隐私。
- **错误监控**：集成 Sentry 进行实时错误监控，提高系统稳定性。

## 安装与运行

### 环境要求

- Node.js 和 npm
- PostgreSQL 数据库

### 安装步骤

1. 克隆此项目：

   ```bash
   git clone https://github.com/your-username/linkview.git
   ```

2. 安装依赖：

   ```bash
   npm install
   ```

3. 配置环境变量：

   在项目根目录创建 `.env` 文件，填写数据库连接和 Sentry 配置信息。

4. 启动开发服务器：

   ```bash
   npm run dev
   ```

5. 打开浏览器访问 `http://localhost:3000`。

## 部署

本项目已配置适用于 [Vercel](https://vercel.com/) 的一键部署方案。

## 贡献

欢迎提交 PR 贡献代码，帮助我们一起优化 LinkView。

---

# LinkView

> A personalized web link manager for easy categorization and access

LinkView is a web link navigation tool that helps users store and organize their favorite links by categories. Built on **Next.js 14**, **Tailwind CSS**, **Vercel**, **PostgreSQL**, and **Sentry** with npm as the package manager, LinkView delivers a streamlined and efficient user experience.

## Tech Stack

- ![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js&logoColor=white) **Next.js 14** - A React framework for building high-performance, modern web applications.
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0-blue?logo=tailwind-css&logoColor=white) **Tailwind CSS** - A utility-first CSS framework for fast styling.
- ![Vercel](https://img.shields.io/badge/Vercel-Platform-black?logo=vercel&logoColor=white) **Vercel** - A deployment platform optimized for Next.js applications.
- ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-336791?logo=postgresql&logoColor=white) **PostgreSQL** - An open-source relational database system with secure data storage.
- ![Sentry](https://img.shields.io/badge/Sentry-Monitoring-362D59?logo=sentry&logoColor=white) **Sentry** - A real-time error tracking system for enhanced application monitoring.

## Features

- **Categorized Bookmarks**: Organize links into categories for easy management and access.
- **Tag Management**: Add tags to each link for more precise classification.
- **Security and Privacy**: Links are securely stored in a reliable database.
- **Error Monitoring**: Integrated with Sentry for real-time error tracking and improved stability.

## Installation and Setup

### Prerequisites

- Node.js and npm
- PostgreSQL database

### Installation Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/linkview.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:

   Create a `.env` file in the project root and add the database and Sentry configuration details.

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## Deployment

The project is pre-configured for a one-click deployment to [Vercel](https://vercel.com/).

## Contributing

We welcome contributions! Please submit a pull request to improve LinkView together.
