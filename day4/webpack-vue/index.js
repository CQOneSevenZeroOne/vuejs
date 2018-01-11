var $ = require("jquery")
var Vue = require("vue")
var tool = require("./tool/tool.js")
require("./css/test.css")
console.log(1)
console.log(2)
console.log(Vue)
//$("body").html("helloworld")
new Vue({
    el:"#demo",
    data:{
        name:"abc",
        img:require("./images/logo.png"),
        text:require("./txt/test.txt"),
        json:require("./json/test.json"),
        html:require("./html/test.html")
    },
    template:`
        <div>
            <p style="color:red">1.img</p>
            <img :src="img" />
            <p style="color:red">2.txt</p>
            <p>{{text}}</p>
            <p style="color:red">3.json</p>
            <p>姓名：{{json.name}}  年龄：{{json.age}}</p>
            <p style="color:red">4.html</p>
            <div v-html="html"></div>
            <p style="color:red">5.css</p>
            <div id="testcss">abcdefg</div>
        </div>
    `,
    methods:{
        tool:tool.add
    },
    mounted(){
        console.log(this.tool(1,2))
    }
    // render:function(createElement){
    //     return createElement("div",this.name)
    // }
})