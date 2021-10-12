# network_frontend

## 目录
- [network_frontend](#network_frontend)
  - [目录](#目录)
  - [简介](#简介)
    - [项目核心功能](#项目核心功能)
    - [主要依赖](#主要依赖)
  - [如何运行](#如何运行)
    - [本地运行](#本地运行)
      - [环境要求](#环境要求)
      - [运行步骤](#运行步骤)
    - [部署到服务器](#部署到服务器)
      - [环境要求](#环境要求-1)
      - [部署步骤](#部署步骤)
  - [开发须知](#开发须知)
    - [关于编程语言](#关于编程语言)
    - [项目文件结构](#项目文件结构)
      - [主要文件与目录](#主要文件与目录)
    - [关于React的使用](#关于react的使用)
    - [关于AntDesign的使用](#关于antdesign的使用)
    - [关于状态管理](#关于状态管理)
    - [关于CSS](#关于css)
    - [关于代码风格](#关于代码风格)
    - [关于提交](#关于提交)
  - [参考链接](#参考链接)

## 简介

### 项目核心功能
- 展示核心网、接入网拓扑结构
- 采集交换机相关数据可视化
- 采集显示k8集群相关数据（内嵌grafana）

### 主要依赖
- React: JS 组件开发框架
- React-redux: 应用状态管理工具
- Aphrodite: CSS in JS 的支持方案
- React-router: 基于 React 框架提供的页面路由
- Ant Design: UI 组件
- Axios: http 请求客户端

## 如何运行

### 本地运行

#### 环境要求
- Node.js (12.x 或以上)

#### 运行步骤
1. 安装依赖：`npm install`
2. 本地运行：`npm run start`
3. 运行成功后访问本地的 3000 端口（参见控制台输出）

### 部署到服务器

#### 环境要求
- Docker
- Kubernetes

#### 部署步骤
1. Docker 镜像打包：`docker build`
2. Kubernetes 服务部署：`kubectl apply -f deployment.yaml`
3. 部署成功后访问该节点 31000 端口（这个端口号定义在 `deployment.yaml` 当中）

## 开发须知

### 关于编程语言
项目目前采用 ES6 作为主要的编程语言，需要了解一些常用的 ES6 特性，包括但不限于箭头函数、类、`let` 与 `const`关键字等。如果不是很了解相关概念，推荐阅读
[重新介绍 JavaScript](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/A_re-introduction_to_JavaScript)

### 项目文件结构
#### 主要文件与目录
- `public`: 用于构建应用的静态文件
- `src`: 源代码
    - `assets`: 应用中可以访问的静态文件
    - `components`: 应用中一些通用组件
    - `mock`: 模拟网络请求的返回，用于前端测试
    - `pages`: 所有的页面
    - `services`: 封装各个 HTTP 请求
    - `utils`: 应用中的通用工具
    - `app.jsx`: 应用入口
    - `index.jsx`: 应用启动程序
    - `router.jsx`: 应用路由定义

- `package.json, package-lock.json`: 依赖定义文件（如果安装了新的依赖，npm 会自动更新这两个文件）
- `dockerfile, nginx.config, deployment.yaml`: 部署相关文件

### 关于React的使用
React 开发主要使用 JSX 语法来定义组件，和 Vue 或者 Angular 稍有区别，可以查阅 
[React 官方文档](https://reactjs.org/docs/getting-started.html)进行学习。

### 关于AntDesign的使用
Ant Design 是项目里主要使用的 UI 组件库，它为我们提供了大量的常用组件，减少了在 UI 
这方面的一些开发的工作量。可以查阅相关文档[AntD 官方文档](https://ant.design/docs/react/introduce-cn)
作为参考。

### 关于状态管理
项目使用 Redux 管理应用的状态，但不强制要求所有的状态都交由 Redux 管理。如果觉得不需要使用，就不必使用。

### 关于CSS
项目使用 [aphrodite](https://github.com/Khan/aphrodite) 管理 CSS 样式，来避免 inline css 
带来的诸多问题。关于 aphrodite 的用法请自行查阅官方文档或者参考项目中已有的代码。

### 关于代码风格
建议开发过程中结合编辑器插件来检查一些代码风格上的问题，这里给出下列参考链接：
- [ESLint 官方站点](https://eslint.org/)
- [ESLint 中文文档](https://eslint.bootcss.com/)
- [Setting up ESLint on VS Code](https://travishorn.com/setting-up-eslint-on-vs-code-with-javascript-standard-style-aa3ab75bcc1c)
- [VSCode + ESLint (中文博客)](https://segmentfault.com/a/1190000009077086/)
- [ESLint + React (中文博客)](https://juejin.im/post/58ff0de18d6d810058a69a26)


### 关于提交
每次开发应该在本地分支中进行，建议一个分支对应一个 Jira issue，开发完成后提出 Merge Request。 

## 参考链接

- [React Patterns](https://reactpatterns.com/): 一些在 React 当中常用的模式与技巧
- [Functional Programming in JavaScript: How and Why](https://blog.bitsrc.io/functional-programming-in-javascript-how-and-why-94e7a97343b):
  对于 JavaScript 当中函数式编程的入门介绍
- [Redux 入门教程](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html): 前端状态管理工具 Redux 的入门介绍
