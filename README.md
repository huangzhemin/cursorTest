# 在线工具集合

一个基于 Vue.js 和 Element UI 构建的在线工具集合网站，提供简单高效的文件处理工具。

## 技术栈

- Vue.js 2.6.11
- Element UI 2.15.6
- Vue Router 3.2.0
- Vuex 3.4.0
- Axios 0.21.1

## 系统要求

- Node.js 12.x
- npm 6.x

## 安装

1. 克隆项目
```bash
git clone [项目地址]
cd [项目目录]
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
npm run serve
```

4. 构建生产版本
```bash
npm run build
```

## 项目结构

```
.
├── public/                 # 静态资源
│   ├── index.html         # HTML 模板
│   └── favicon.ico        # 网站图标
├── src/                   # 源代码
│   ├── App.vue           # 根组件
│   └── main.js           # 入口文件
├── package.json          # 项目配置文件
├── vue.config.js         # Vue CLI 配置文件
└── README.md            # 项目说明文档
```

## 功能特性

- 文件处理工具集合
- 响应式设计
- 简洁直观的用户界面

## 开发

- 开发服务器运行在 http://localhost:8080
- 支持热重载
- ESLint 代码检查

## 构建

运行 `npm run build` 将在 `dist` 目录生成生产版本文件。

## 许可证

[MIT License](LICENSE) 