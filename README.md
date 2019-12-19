## 项目信息
### 1. 项目名称
<p align="center"><a href="">项目名称</a></p>

### 2.项目简介

### 3. 版本
V1.0.0

### 4. 项目负责人
- 小A

### 5. 项目成员
- 小A
- 小B
- 小C

## 文档
<a href="">文档地址</a>
## 项目地址
- [开发]()
- [测试]()
- [预生产]()
- [生产]()

## 如何启动项目
- 开发者如何启动项目
   + 环境:  nodejs > 10.0
   + 启动
      + 克隆代码到本地 git clone http://xxxx.xxx.xx:0000
      + 安装依赖 npm install
      + 启动本地服务 npm run dev
      
- 使用者如何快速部署
   + npm run build

## 技术栈
|名称|版本|链接|
|:---:|:---:|---|
|vue2|2.6.10|<https://cn.vuejs.org/>|
|vuex|3.1.2|<https://vuex.vuejs.org/zh-cn/api.html>|
|vue-router|3.1.3|<https://router.vuejs.org/zh-cn/>|
|axios|0.19.0|<https://www.npmjs.com/package/axios/>|
|eslint|6.7.2|<https://www.sass.hk/>|
|ES6|2015+|<http://coenraets.org/present/es6/#0>|
|babel|7.0|<https://www.babeljs.cn>|
|webpack|4.0|<https://webpack.js.org/>|

## 项目结构
```
·
├── build                                                             // webpack配置
│   ├── build.js 
│   ├── check-versions.js 
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
│
├── config
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
│
├── dist 
│
├── src                                                             // 源码                                         
│   ├── api
│   │   ├── constant.js
│   │   └── index.js
│   │
│   ├── assets 
│   │   ├── css                                  
│   │   └── image 
│   │                           
│   ├── components   
│   │   ├── footer                                  
│   │   └── header  
│   │                         
│   ├── filters    
│   │                                                       
│   ├── router  
│   │   ├── index.js                                  
│   │   ├── router-home.js                                 
│   │   ├── router-login.js                                 
│   │   └── routes.js   
│   │                         
│   ├── store
│   │   ├── actions.js                                  
│   │   ├── getters.js                                
│   │   ├── index.js                                
│   │   ├── mutations.js                              
│   │   ├── mutations-types.js                             
│   │   └── state.js     
│   │                        
│   ├── utils  
│   │   ├── cookie.js                             
│   │   └── time-linear.js     
│   │                             
│   ├── views     
│   │   ├── home
│   │   │   └── Home.vue                 
│   │   ├── login    
│   │   │   └── Login.vue
│   │                        
│   ├── App.vue                         
│   └── main.js                          
│                           
├── static                                                         // 静态资源
│   ├── css 
│   │   └── reset.css     
│   │    
│   └── image                     
│               
├── .babelrc                    
├── .editorconfig                    
├── .eslintignore                   
├── .eslintrc.js                   
├── .gitignore                   
├── .postcssrc.js                  
├── alias.config.js                 
├── index.html                
├── package.json            
├── package-lock.json         
└── README.md                                
·
```

## 注意问题
- 在webpack配置了自定义路径之后，webstrom编辑器不认识这个变量，会给错误提示。在File > Settings > Languages & Frameworks > webpack 中加入alias.config.js配置

## 遇见问题及解决方案



