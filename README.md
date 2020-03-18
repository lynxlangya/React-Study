**React 打卡第 9 天**

1. **高阶组件就是一个函数, 传给它一个组件, 它返回一个新组件**

```yaml
const NewComponent = higherOrderComponent(OlcComponent)
```

2. 高阶组件: 它接受一个组件作为参数, 返回一个新组件. 这个新组件会使用传给它的组件作为子组件
3. `React` 中布局必须在外层套一个`div`, 但是有时会影响布局样式, 所以我们可以引入 `Fragment`, 方式同 `Component` 引入一样. 将最外层的 `div` 换成 `Fragment` 即可
4. 在 `constructor` 构造方法中绑定`this` 有利于性能优化

```jsx
...
	constructor (props: any) {
		super(props)
  	this.handleClick = this.handleClick.bind(this)
  }
...
```

5. 高阶组件又利用代码复用, 可以把组件之间可复用的代码, 逻辑抽离到高阶组件中. 新的组件和传入的组件通过 `props` 传递信息