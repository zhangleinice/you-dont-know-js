# 模块机制

# this绑定例外


# 你不知道的js（上）
 - this绑定例外
 - 判断内存泄漏，并优化，闭包缓存与内存释放？
 - 内存堆栈存储与释放？垃圾回收？强引用和弱引用？Map和Weakmap
 - 实现一个箭头函数？
 - 实现一个深拷贝（考虑全面）？
 - getter和setter实现一个vue双向绑定？proxy？
 - 混入（mixin）例子
 - 闭包的应用？
 - 模块模式？

# 你不知道的js（中）
  - 依赖注入？

# 设计模式
 - 观察者模式阻塞流程问题？补偿机制？开关作用？

# react-hooks
  - useState
    - 原理：闭包缓存state，基于 Array+Cursor 来实现
    - 不能在循环、判断内部使用 Hook，不能打乱cursor与state之间对应关系

  - useEffect
    - 作用和用途：相比于直接裸写在函数组件顶层，useEffect 能根据需要，避免多余的 render

  - hooks vs class
    - class 代码逻辑清晰（构造函数、componentDidMount 等）
    - hooks 需要配合变量名和注释
    - hooks 容易发生内存泄漏
    - Hooks 对代码编写的要求较高，在没有有效机制保证代码可读性、规避风险的情况下，更倾向于class。


# 数据结构与算法之美
  - 电商交易系统中的“订单”排序。订单有两个属性，一个是下单时间，另一个是订单金额？
    1. 按照时间先排序
    2. 再按金额排序（使用稳定的排序算法）