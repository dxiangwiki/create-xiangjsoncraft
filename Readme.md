# create-xiangjsoncraft
🚀 XiangJsonCraft 2.0 官方脚手架 - 一键创建「纯JSON驱动」的前端项目

## 🔥 核心优势
- ⚡ 零配置：无需手动搭建环境，一键生成可运行的项目
- 🎨 开箱即用：自带高颜值默认欢迎页，JSON改改就能用
- 🛡️ 低风险：核心渲染逻辑无漏洞，仅开发依赖有可选替换方案

## 📦 快速使用
### 1. 创建项目（推荐）
```bash
# 最新版
npm create xiangjsoncraft@latest my-xjc-app

# 指定版本（比如2.0.4）
npm create xiangjsoncraft@2.0.4 my-xjc-app
```

### 2. 启动项目
```bash
# 进入项目目录
cd my-xjc-app

# 安装依赖
npm install

# 方式1：便捷启动（含live-server，快速体验）
npm run start

# 方式2：纯净启动（无高危漏洞，推荐生产/严谨场景）
npm run start:clean
```

### 3. 自定义页面
修改项目根目录的 `config.json` 文件，无需改 HTML/CSS/JS，即可：
- 调整页面样式（颜色、布局、动效）
- 修改文字内容（标题、按钮、描述）
- 扩展功能模块（特性卡片、社交图标）

## 📂 生成的项目结构
```
my-xjc-app/
├── config.json       # 核心配置文件（样式+内容全在这里）
├── index.html        # 默认欢迎页模板（无需修改）
└── package.json      # 项目依赖配置
```

## ⚠️ 注意事项
- `live-server` 依赖存在老旧包警告：仅影响开发阶段启动服务，**不影响框架核心渲染**；
- 生产环境建议：使用 `npm run start:clean`（基于 `http-server`），或替换为 `vite`/`nginx`；
- 框架核心无任何漏洞：仅负责 JSON → DOM/CSS 渲染，无网络/存储/内存风险。

## 🔗 关联仓库
- XiangJsonCraft 主框架核心：https://github.com/diangwiki/xiangjsoncraft


## 📄 开源协议
MIT License - 可自由使用、修改、分发，商用无限制（详见 LICENSE 文件）


