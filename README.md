**React 打卡第七天**

1. `ref` 属性获取元素的 `DOM` 节点 (同 `Vue`)  ~~*能不用`ref` 就不用*~~

2. `porps.children` 自定义组件, 类似 `Vue` 中的插槽, 可直接写 `jsx` 传递

3. 组件嵌套的结构, 可通过 `this.props.children` 获取到    **据说较为常用的**

4. 出于安全考虑(XSS 攻击), `React` 当中所有表达式插入的内容都会被自动转义

5. `dangerouslySetHTML` 类似 `Vue` 中 `v-html` 效果

6. 验证组件的配置参数以及类型验证

   ```yaml
   $ npm install --save prop-types
   $ &&
   $$ yarn add prop-types
   ```
