**React 打卡第六天**

1. `componentDidMount`:  组件挂载完成之后调用 (*DOM 元素已经插入到页面*)
2. `componentWillUnmount`:  组件对应的 `DOM` 元素从页面中删除
3. 定时器需要在组件销毁时清除
4. 已废弃的生命周期钩子函数:
   1. ~~`componentWillMount`~~
   2. ~~`componentWillMount`~~
   3. ~~`componentWillUpdate`~~
5. React v16.3引入两个新的生命周期函数
   1. **`getDerivedStateFromProps`**
   2. **`getSnapshotBeforeUpdate`**

