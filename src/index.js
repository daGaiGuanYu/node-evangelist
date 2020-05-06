const Chopstick = require('chopstick') // 不知道在 c# 怎么说，相当于 java 中的 import

// 启动服务器，监听 8666 端口
Chopstick.server.start(8666)

/**
 * 添加一个处理请求的函数
 * 第一个参数是“处理哪个请求？”
 * 第二个参数（函数也可以是其他函数的参数），怎么处理这个请求
 */
Chopstick.router.add('GET', '/hello', function(ctx){
  ctx.res.write('hhhhhello   ') // 返回给前端一个字符串
  ctx.res.write('yo') // 可以多返回点东西，次数不限

  ctx.res.end() // 标记“后端响应完毕”（类似于数据库存取操作中的 commit）
})