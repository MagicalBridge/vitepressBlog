---
sidebar: auto
---

# Node基础

## Node.js简介
在它官网上是这么讲的：
> Node.js® is an open-source, cross-platform JavaScript runtime environment.

翻译过来：Node.js 是一个开源的、跨平台的 JavaScript 运行时环境。这里要敲黑板划重点了，JavaScript 运行时环境。

### JavaScript 运行时环境
Node.js 并不是语言，而是一个 JavaScript 运行时环境，它的语言是 JavaScript。这就跟 PHP、Python、Ruby 这类不一样，它们既代表语言，也可代表执行它们的运行时环境（或解释器）。

## Node.js的安装
我们可以使⽤多种⽅式来安装Node.js Node.js本质上也是⼀种软件，我们可以使⽤直接下载⼆进制安装⽂件安装，通过系统包管理进⾏安装或者通过源码⾃⾏编译均可。

⼀般来讲，对于个⼈开发的电脑，我们推荐直接通过Node.js官⽹的⼆进制安装⽂件来安装。对于打包上线的⼀些 Node.js 环境，也可以通过⼆进制编译的形式来安装。

安装成功之后，我们的Node命令就会⾃动加⼊我们的系统环境变量`path`中，我们就能直接在全局任意位置，使⽤ Node 命令访问到我们刚才安装的 Node 可执⾏命令⾏⼯具。

## Node.js 版本切换
在个⼈电脑上，我们可以安装⼀些⼯具，对 Node.js 版本进⾏切换，例如`nvm`。

`nvm`的全称就是: node version manager，意思就是能够管理 node 版本的⼀个⼯具，它提供了⼀种直接通过 shell 执⾏的⽅式来进⾏安装。简单来说，就是通过将多个 node 版本安装在指定路径，然后通过 nvm 命令切换时，就会切换我们环境变量中 node命令指定的实际执⾏的软件路径。

> curl -o- https://raw.githubusercontent.com/nvmsh/nvm/v0.35.3/install.sh | bash

安装成功之后，我们就能在当前的操作系统中使⽤多个 Node 版本。

## Node.js 的包管理⼯具 npm
我们对 npm 应该都⽐较熟悉了，它是 Node.js 内置的⼀款⼯具，⽬的在于安装和发布符合 Node.js 标准的模块，从⽽实现社区共建的⽬的繁荣整个社区。

## Node.js 的底层依赖

Node.js 的主要依赖⼦模块有以下内容：

- V8引擎：主要是 JS 语法的解析，有了它才能识别 JS语法
- libuv: c 语⾔实现的⼀个⾼性能异步⾮阻塞 IO 库，⽤来实现 node.js 的事件循环
- http-parser/llhttp: 底层处理 http 请求，处理报⽂，解析请求包等内容
- openssl: 处理加密算法，各种框架运⽤⼴泛
- zlib: 处理压缩等内容

## Node中的模块
- 内置模块: node中自带的直接可以使用的模块
- 第三方模块: 这种模块的用法和内置模块一样
- 文件模块: 自己写的模块

### Node.js 常⻅内置模块
node.js 中最主要的内容，就是实现了⼀套 `CommonJS` 的模块化规范，以及内置了⼀些常⻅的模块。

- fs: ⽂件系统，能够读取写⼊当前安装系统环境中硬盘的数据
- path: 路径系统，能够处理路径之间的问题
- crypto: 加密相关模块，能够以标准的加密⽅式对我们的内容进⾏加解密
- dns: 处理 dns 相关内容，例如我们可以设置 dns 服务器等等
- http: 设置⼀个 http 服务器，发送 http 请求，监听响应等等
- readline: 读取 stdin 的⼀⾏内容，可以读取、增加、删除我们命令⾏中的内容
- os: 操作系统层⾯的⼀些 api，例如告诉你当前系统类型及⼀些参数
- vm: ⼀个专⻔处理沙箱的虚拟机模块，底层主要来调⽤ v8 相关 api 进⾏代码解析

