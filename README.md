# Flaretion Blog

一个使用 Next.js 14 (App Router) 和 Tailwind CSS 构建的现代化个人博客网站。

## 特性

- 🚀 **Next.js 14** - 使用最新的 App Router 架构
- 🎨 **Tailwind CSS** - 现代化的 CSS 框架，快速构建美观界面
- 📱 **响应式设计** - 完美适配各种设备尺寸
- 🔍 **SEO 优化** - 内置元数据和结构化数据
- ⚡ **性能优化** - 快速加载和渲染
- 🎯 **TypeScript** - 类型安全的开发体验

## 技术栈

- **前端框架**: Next.js 14
- **样式**: Tailwind CSS
- **语言**: TypeScript
- **字体**: Inter (Google Fonts)
- **图标**: Heroicons (SVG)

## 快速开始

### 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 开发模式

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看结果。

### 构建生产版本

```bash
npm run build
npm start
```

## 项目结构

```
flaretion-blog/
├── app/                    # Next.js App Router 目录
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页
│   ├── blog/              # 博客页面
│   ├── about/             # 关于页面
│   └── contact/           # 联系页面
├── components/             # React 组件
│   ├── Header.tsx         # 头部导航
│   ├── Footer.tsx         # 底部信息
│   ├── BlogList.tsx       # 博客列表
│   └── BlogCard.tsx       # 博客卡片
├── public/                 # 静态资源
├── tailwind.config.js      # Tailwind 配置
├── next.config.js          # Next.js 配置
└── package.json            # 项目依赖
```

## 自定义

### 修改颜色主题

在 `tailwind.config.js` 中修改 `primary` 颜色：

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        // ... 其他色阶
      },
    },
  },
}
```

### 添加新页面

1. 在 `app/` 目录下创建新的文件夹
2. 添加 `page.tsx` 文件
3. 在 `components/Header.tsx` 中添加导航链接

### 修改博客内容

编辑 `components/BlogList.tsx` 中的 `samplePosts` 数组来更新博客文章。

## 部署

### Vercel (推荐)

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 中导入项目
3. 自动部署完成

### 其他平台

```bash
npm run build
npm start
```

## 贡献

欢迎提交 Issue 和 Pull Request！

## 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件。