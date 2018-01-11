var $ = require("jquery")
var Vue = require("vue")
var tool = require("./tool/tool.js")
require("./css/test.css")
console.log(1)
console.log(2)
console.log(Vue)
//$("body").html("helloworld")
Vue.component("xheader",{
    template:require("./components/xheader.html"),
})
import xfooter from "./components/xfooter.vue"
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
            <p style="color:red">6.组件</p>
            <xheader></xheader>
            <xfooter />
        </div>
    `,
    methods:{
        tool:tool.add
    },
    mounted(){
        class Abc{
            constructor(a,b){
                this.name = a;
                this.age = b
            }
            getNews(){

            }
        }
        new Abc("ly",89)
        console.log(this.tool(1,2))
    },
    components:{
        xfooter
    }
    // render:function(createElement){
    //     return createElement("div",this.name)
    // }
})