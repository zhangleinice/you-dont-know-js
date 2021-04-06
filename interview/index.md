# 面试流程
p5-p6
-  Hr 要求填表
-  时间要求：控制在45min - 1h
-  面试内容：
    1. 项目经验 60%
        - 用了哪些技术？为什么要用？提升了哪些效率？
    2. 技术能力 20%
    3. 逻辑思维 10%
    4. 工作态度 10%
    5. 职业规划 
-  介绍内容：10min
    1. 工作内容
        - 极速版，流量，用户
    2. 人员组成
        - 打算招4，5个前端
    3. 技术架构
    4. 问答环节
        - 你还有什么问题想问我的吗？
        - 为什么离职？

最后，你稍等一下

# 前端面试题

### javascript

- 判断js数据类型？
  - typeof
  - instanceof
  - Object.prototype.toString.call()

- 简单的描述一下this指向？
  - 默认绑定 window | global
  - 隐式绑定 obj.foo()
  - new？
  - 箭头函数？
  - 显示绑定 call，apply，bind？
  - 如果说 显示绑定，之后不能再改变this，那么有什么办法实现再次绑定呢？软绑定

- 说一下闭包？
  - 什么是闭包？
  - 为什么其他非闭包的函数没有权限访问另一个函数的内部作用域？
  - 为什么闭包有这个权限？
  - 什么是函数作用域？
  - 闭包作用？

- var和let，const的区别? 
  - 描述一下var 变量提升？  
  - 什么是块级作用域？
  - js 引擎是如何同时支持变量提升和块级作用域的？

- 继承有哪些方式？
  - 构造函数继承？
  - 原型链继承， Object.create(), Object.setPrototypeOf()
  - es6 extends? super()

- 深拷贝？

- event loop？
  - setTimeout, promise.then顺序？
  - 实现一个promise.all？实现一个promise.race()
  


### css

- 垂直水平居中
  - 4种方式
  - flex兼容性？


### 网络

- 说一下http缓存？
  - 协商缓存和强制缓存？
  - Expires？
  - res：Last-Modified 与 req：If-Modified-Since ？ 304 和200
  - res：Etag 与 req：If-None-Match ？ 
- http1.1 和http2.0有什么区别？
  - keep-alive作用？
  - http1.1缺点？
  - http2.0有什么改进？
  - http优化？

### react

- 你是如何理解react-filber的？
   - ：一种将 recocilation （递归 diff），拆分成无数个小任务的算法；它随时能够停止，恢复。停止恢复的时机取决于当前的一帧（16ms）内，还有没有足够的时间允许计算
   - 协程

- 虚拟dom优势，原理

- react-redux
  - Provider
  - connect


# vue

- 双向绑定原理？
 - Vue 则采用的是**数据劫持**与**发布订阅**相结合的方式实现双向绑定
 - 数据劫持主要通过 Object.defineProperty 来实现。getter，setter
 - 发布订阅监听数据变化

### nodejs

- express和koa有什么区别？


  
  