# Glancake's Blog

个人技术博客，基于 [Jekyll](https://jekyllrb.com) 构建，托管于 [GitHub Pages](https://pages.github.com)。

## 特性

- 📝 Markdown 写作，`git push` 自动发布
- 🌓 明暗双模式，跟随系统或手动切换
- 📱 响应式布局，移动端友好
- 🔍 SEO 优化（Open Graph / Twitter Card）
- 📡 RSS 订阅
- 🎨 极简阅读风格，专注内容

## 本地预览

```bash
# 安装依赖（需要 Ruby >= 3.0）
bundle install

# 启动本地服务器
bundle exec jekyll serve

# 访问 http://localhost:4000
```

## 写文章

在 `_posts/` 目录下创建 Markdown 文件，命名格式：`YYYY-MM-DD-title.md`。

```markdown
---
title: "文章标题"
date: 2025-01-15 12:00:00 +0800
description: "简短描述"
tags: [标签1, 标签2]
---

文章内容...
```

## 部署

推送 `main` 分支后，GitHub Actions 会自动构建并部署到 GitHub Pages。

## License

MIT
