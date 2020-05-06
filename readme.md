# node 在 web 后端的使用

### 启动看看

##### 环境准备
+ 首先安装个 [node](https://nodejs.org/zh-cn/)，用来运行 js 代码
+ 还得有个 [git](https://git-scm.com/)，用来拉取本仓库

##### 下载此 demo 项目
+ 打开命令行，随便找一个目录（用来存放本仓库）
+ 运行下面的命令（下载项目源码）
```bash
git clone https://github.com/daGaiGuanYu/node-evangelist.git
```

##### Go!
命令行进行下面的操作
```
cd node-evangerlist # 进入刚才下载的文件
npm install # 安装依赖（npm 是 node 里的一个工具，它有很多功能）
npm run dev # 运行项目
```
好了，打开浏览器 访问 localhost:8666


### 项目结构
+ node_modules 存放依赖
+ package.json 项目的基本信息介绍，对代码没任何影响
+ package-lock.json 对依赖的版本的描述
+ src 源码

### 源码
就[这几行代码](https://github.com/daGaiGuanYu/node-evangelist/blob/master/src/index.js)
