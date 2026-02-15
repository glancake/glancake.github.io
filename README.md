# Chat Room

一个简洁的单页面聊天应用，基于 Vue.js 构建，无需服务器和数据库。

## 功能特性

- 💬 **实时聊天** - 发送消息并自动显示在右侧
- 💾 **本地存储** - 使用 localStorage 持久化消息，刷新页面不丢失
- 📤 **导出记录** - 支持将聊天记录导出为 JSON 文件
- 🗑️ **清空记录** - 一键清空所有聊天记录
- 🤖 **自动回复** - 模拟对方自动回复（演示用）
- 📱 **响应式设计** - 支持桌面和移动端

## 消息存储方案

由于这是一个纯前端单页面应用（SPA），没有服务器和数据库，采用以下存储方案：

### 1. localStorage 本地存储（主要方案）
- 消息实时保存在浏览器本地存储中
- 刷新页面后消息不丢失
- 存储容量约 5-10MB
- 数据仅在当前浏览器有效

### 2. JSON 文件导出（备份方案）
- 点击"导出"按钮可将聊天记录下载为 JSON 文件
- 文件格式：`chat_history_时间戳.json`
- 包含完整的消息记录和导出时间
- 可用于备份或迁移数据

### 数据结构
```json
{
  "exportTime": "2024-01-01T00:00:00.000Z",
  "messageCount": 10,
  "messages": [
    {
      "sender": "我",
      "content": "消息内容",
      "time": "12:00",
      "isSelf": true,
      "timestamp": 1704067200000
    }
  ]
}
```

## 技术栈

- **前端框架**: Vue.js 2.x
- **样式**: 原生 CSS + CSS 变量
- **存储**: localStorage
- **部署**: GitHub Pages

## 使用说明

1. 打开页面即可开始聊天
2. 输入消息按回车或点击发送按钮
3. 自己的消息显示在右侧（绿色气泡）
4. 对方的消息显示在左侧（白色气泡）
5. 点击"导出"可保存聊天记录
6. 点击"清空"可删除所有记录

## 本地开发

```bash
# 克隆仓库
git clone https://github.com/glancake/glancake.github.io.git

# 进入目录
cd glancake.github.io

# 使用任意本地服务器运行
# 例如 Python 3
python -m http.server 8000

# 或 Node.js
npx serve

# 然后访问 http://localhost:8000
```

## 浏览器兼容性

- Chrome / Edge / Firefox / Safari 最新版本
- 支持移动端浏览器
- 需要启用 JavaScript

## License

MIT License
