# 框架与库

|框架|库|
|-|-|
|图纸|工具|
|`vue,express`|`jQuery`|

框架可以包含库
但是库不会是框架

框架>库


# 起步

1.引入vue.js
2.实例化vue
```js
new Vue({})
```
3.在实例化的过程中传入关键参数
```html
<script>
    // 1.起手式
    new Vue({
        // element 选择器
        el: "#demo", //id和class选择器
        data: {
            name: "laozhao",
            age: 18
        } //数据模型
    })
</script>
```
4.展示视图
配合`{{}}`方法展示视图
```html
<p>{{name}}</p>
<p>{{age}}</p>
```

# jQuery VS Vue

|jQuery|Vue|
|-|-|
|库|框架|
|节点驱动|数据驱动|
|操作节点|操作数据|