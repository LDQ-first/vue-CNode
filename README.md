# Vue全家桶开发开源的CNode社区

> Vue全家桶开发开源的CNode社区，实现了登录，回复，发帖，收藏，点赞，查看消息，更换主题色，退出等功能

>[预览地址](https://ldq-first.github.io/vue-CNode/dist/#/)


## 技术栈
* **Vue2.2**: [ 前端框架 ]
* **Vuex**: [ 状态管理,组件通信 ] 
* **Vue-router**: [ 配置路由，组件切换 ]
* **Vue-lazyload**: [ 图片懒加载 ]
* **ES6/7**: [ JS版本 ]
* **Webpack**: [ 模块化处理，编译打包 ]
* **Express**: [ 服务器 ]
* **Axios**: [ 基于Promise处理HTTP请求 ]
* **SASS**(**SCSS**): [ css预处理器 ]
* **Normalize.css**: [ 处理浏览器默认样式 ]
* **Font-awesome**: [ 字体图标 ]
* **Moment.js**: [ 处理时间显示 ]
* **Simplemde**: [ markdown编辑器 ]
* **Highlight.js**: [ 语法高亮 ]
* **Flex**: [ 弹性布局 ]
* **Canvas**: [ 首页loading效果，按钮的波纹效果 ]
* **loaclStorge**: [ 本地存储用户信息 ]


## 手机可访问二维码

![Vue版CNode]()  

## 源码
[GitHub](https://github.com/LDQ-first/vue-CNode)

## 项目结构

![项目结构思维导图](https://ldq-first.github.io/vue-CNode/static/img/项目结构.jpg)


## 注意
- 登录功能采用accessToken登录，需要到[CNode官网](https://cnodejs.org)注册并登录账号，
  到[设置](https://cnodejs.org/setting)页面中获取accessToken
- 建议使用Chrome等现代浏览器查看


## 效果图

![001](https://ldq-first.github.io/vue-CNode/static/result/001.jpg)  

![002](https://ldq-first.github.io/vue-CNode/static/result/002.jpg)  

![003](https://ldq-first.github.io/vue-CNode/static/result/003.jpg)  

![004](https://ldq-first.github.io/vue-CNode/static/result/004.jpg)  



## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


