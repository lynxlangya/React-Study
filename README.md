**React 打卡第三天**
1. `setState` 方法, 接受一个对象或者函数作为参数, 以达到修改组件状态的效果
2. `setState` 会将传入的状态缓存起来, 稍后才会更新到 `state` 上

```js
handleClickOnLikeButton() {
  console.log(this.state.isLiked);		// false
  this.setState({
    isLiked: !this.state.isLiked
  })
  console.log(this.state.isLiked); 		// false
}
```

3.第二种方式更新 `state`

```jsx
...
  handleClickOnLikeButton () {
    this.setState((prevState) => {
      return { count: 0 }
    })
    this.setState((prevState) => {
      return { count: prevState.count + 1 } // 上一个 setState 的返回是 count 为 0，当前返回 1
    })
    this.setState((prevState) => {
      return { count: prevState.count + 2 } // 上一个 setState 的返回是 count 为 1，当前返回 3
    })
    // 最后的结果是 this.state.count 为 3
  }
...
```

上面我们进行了三次 `setState`，但是实际上组件只会重新渲染一次，而不是三次；这是因为在 React.js 内部会把 JavaScript 事件循环中的消息队列的同一个消息中的 `setState` 都进行合并以后再重新渲染组件。

