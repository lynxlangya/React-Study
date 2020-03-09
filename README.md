**React 打卡第一天**

1. JSX 长的像 HTML, 但并非 HTML. 

2. 所谓 JSX 其实就是 JavaScript 对象

3. React-dom 负责把描述 UI 信息的 JS 对象渲染成 DOM 元素, 插入到页面中 

4. 第一次了解到 react-canvas 

5. `{}` 内可以放任何 JavaScript 代码, 变量, 表达式, 函数等...

6. `on*` 事件建通只能用在普通的 `HTML` 标签上, 不能用在组件标签上

7. 事件监听函数内不能通过 `this` 获取实例. 需要手动绑定 `this`

```jsx
// bind 会把实例方法绑定到当前实例上

<h1 onClick={this.handleClick.bind(this)}></h1>

// 可以在绑定的时候传递一些参数进去
<h1 onClick={this.handleClick.bind(this, 'Hello React')}></h1>
```
