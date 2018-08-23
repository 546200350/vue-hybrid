# vue-api-webpack

> 基于vue-cli脚手架，apicloud调用原生api，webpack多页面打包。

### 说明
##### -单页应用

> 1、vue-cli脚手架默认配置生成的是单页应用,页面切换跳转仍然是通过router来实现,优势在于切换场景可以完全自定义(毕竟转场动画都是css实现);<br/>
2、全局状态机vuex更使得不同页面间数据共通,而不需要使用原生全局广播事件注册监听;<br/>
3、在不使用原生模块或api的情况下,全面兼容浏览器;

##### -多页应用

>1、页面切换采用原生转场,如丝般的顺滑,但切换效果受框架限制,vue-router路由是不能用了;<br/>
2、页面传递数据通过原生api来实现,非父子页面数据传递则通过广播来实现,相对于状态机而言会繁琐的多;<br/>
3、在中大型项目中,不会出现因页面数据加载过多而影响渲染效率、造成页面卡顿的情况出现.尤其是在低端安卓机上尤为明显;

##### -介绍
>1、这套框架是自己在一个项目中不断实践修改最终生成的,有什么不规范或错误的希望各位大佬指正,有更好的实现方法也请不吝赐教.<br/>
2、采用多页vue应用结合apicloud(当然其他类似的比如 h5+也一样适用)调用原生的能力,完成hybrid混合APP.
3、将一些原生与网页端的方法封装(传参数,页面转场),使得应用可以在浏览器中方便的调试.<br/>
4、hot reload使得开发更迅速、更高效.
### 目录结构说明
``` bash
├─build //webpack编译配置
├─config //vue项目打包配置
├─dist //项目打包输出目录
├─lib //公用插件
├─src //存放项目页面
│  ├─assets //资源文件
│  ├─components //存放公用vue组建
│  ├─home //首页
│  ├─me //个人中心
│  └─index.html //模板文件
└─static //不需要进行编译打包的静态文件
```
多页配置主要是在build/webpack.base.conf.js文件里,通过HtmlWebpackPlugin插件,将JS打包到html中.<br/>
> 请注意:页面文件必须放到src二级目录下(比如:首页->src/home/index.html)</span>


### Build Setup

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

### 开发模式
#### 1、执行npm run start命令编译并开启热更新模式。
#### 2、在apicloud自定义loader修改config对应的首页地址。（192.168.1.1:8888/me/index.html）
#### 3、将lib/common.js下的isApiEnvironment修改成false,重新运行.浏览器打开地址(192.168.1.1:8888/me/index.html)
#### 4、修改并保存代码，自动刷新页面。
### 发布模式
#### 1、执行npm run build命令编译发布代码。此时会在当前项目下创建dist文件夹，然后就可以自己玩了。

### 当前项目只保留了个人中心和反馈页面,可以打开192.168.1.1:8888/me/index.html页面,点击意见反馈查看切换效果
