**React 打卡第二天**

1. 项目中添加了 `TypeScript`

```yaml
# 在新项目中添加 TypeScript
$ npx create-react-app my-app --typescript
$ # 或者
$ yarn create react-app my-app --typescript

# 在已有项目中添加 TypeScript
$ npm install --save typescript @types/node @types/react @types/react-dom @types/jest
$ # 或者
$ yarn add typescript @types/node @types/react @types/react-dom @types/jest
```

2.安装  source-map-explorer  分析包大小

在`package.json` 中, 添加到 `scripts` 中

```json
"script": {
  "analyze": "source-map-explorer build/static/js/main.*",
  ...
}
```

然后打包分析

```yaml
$ npm run build
$ npm run analyze
```
