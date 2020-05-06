const Chopstick = require('chopstick') // 不知道在 c# 怎么说，相当于 java 中的 import
const Sequelize = require('sequelize')

// 数据库配置信息（放到一个叫“instance”的对象里）
const instance = new Sequelize({
  host: '118.25.100.53',
  port: '2333',
  username: 'root',
  password: '1234',
  dialect: 'mysql',
  database: 'chopstick-demo'
})

const User = instance.define('user', { // 定义一个叫 user 的数据表
  name: Sequelize.STRING, // 定义 name 字段，string 类型
  year: Sequelize.INTEGER // 定义 year 字段，整数型
})

// 启动服务器，监听 8666 端口
Chopstick.server.start(8666)

/**
 * 添加一个处理请求的函数
 * 前两个参数是“处理哪个请求？”（get 方法，/hello 路径）
 * 第二个参数（函数也可以是其他函数的参数），怎么处理这个请求
 */
Chopstick.router.add('GET', '/hello', function(ctx){
  ctx.res.write('hhhhhello   ') // 返回给前端一个字符串
  ctx.res.write('yo') // 可以多返回点东西，次数不限

  ctx.res.end() // 标记“后端响应完毕”（类似于数据库存取操作中的 commit）
})

// 处理另一个请求（获取所有用户）
Chopstick.router.add('GET', '/user', function(ctx){
  
  return User.findAll() 
})

// 处理另一个请求（新增一个用户）
Chopstick.router.add('GET', '/user/add', function(ctx){
  let data = ctx.getQuery() // 获取 query 数据 比如：?name=xxx&year=12
  return User.create(data)
})