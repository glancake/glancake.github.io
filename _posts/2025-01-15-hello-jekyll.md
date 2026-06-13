---
title: "从聊天室到博客：我的 Jekyll 建站之旅"
date: 2025-01-15 12:00:00 +0800
description: "记录将 Firebase 聊天室改造为 Jekyll 静态博客的过程与思考。"
tags: [博客, Jekyll, GitHub Pages]
---

从零搭建一个个人博客，在今天的选择实在太多了。你可以用动态的 WordPress、Hexo、Hugo，也可以选择托管平台的 Medium、Notion。但如果你和我一样，想要**完全掌控**数据和样式，又不想花钱买服务器，那么 Jekyll + GitHub Pages 可能是最优雅的解决方案。

## 为什么选择 Jekyll

1. **零成本托管**：GitHub Pages 免费提供 HTTPS、全球 CDN
2. **版本控制**：所有文章以 Markdown 存在 Git 仓库中，永远不会丢失
3. **极简工作流**：写完文章 `git push`，自动构建发布
4. **高度可定制**：从布局到配色，一切由你控制

## 从聊天室到博客

这个站点之前是一个基于 Firebase 的实时聊天室应用。虽然功能齐全，但作为个人主页，一个博客显然更合适——它可以沉淀内容，而不仅仅是即时通讯。

改造过程并不复杂：

- 保留 GitHub Pages 的部署流程（`.github/workflows/static.yml`）
- 用 Jekyll 替换掉原来的 SPA 架构
- 将文章数据从 Firebase 迁移到 Markdown 文件
- 重新设计了极简阅读风格的样式

## 一些设计决策

### 明暗模式

我在 CSS 中使用了 `data-theme` 属性配合 CSS 变量来实现明暗切换。首次加载时通过 `prefers-color-scheme` 媒体查询跟随系统设置，用户手动切换后存入 `localStorage` 持久化。

```css
:root {
  --bg: #ffffff;
  --text: #2d3436;
}

[data-theme="dark"] {
  --bg: #1a1a2e;
  --text: #e0e0e0;
}
```

### 代码高亮

Jekyll 默认使用 Rouge 作为代码高亮器。我在样式中定义了浅色和深色两套 token 颜色，确保代码块在两种模式下都有良好的可读性。

## 接下来的计划

- [ ] 添加标签聚合页面
- [ ] 集成 Giscus 评论系统
- [ ] 优化图片懒加载
- [ ] 添加文章搜索

如果你也想搭建类似的博客，不妨从我的[仓库](https://github.com/glancake/glancake.github.io) fork 一份开始。
