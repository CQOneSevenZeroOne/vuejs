import Vue from "vue";

import "weui";
// 全局样式
import "./template/base.css";

// 引入公共组件
import xheader from "./components/xheader.vue";
import xsearch from "./components/xsearch.vue";
import xpanel from "./components/xpanel.vue";
import xfooter from "./components/xfooter.vue";


new Vue({
    el:"#app",
    template:`
        <div>
            <xheader />
            <xsearch />
            <xpanel />
            <xfooter />
        </div>
    `,
    components:{
        xheader,
        xsearch,
        xpanel,
        xfooter
    }
})