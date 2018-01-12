import Vue from "vue";
// 路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import "weui";
// 全局样式
import "./template/base.css";


// 选项卡组件
import wechat from "./components/tabs/wechat.vue";
import discovery from "./components/tabs/discovery.vue";
import contact from "./components/tabs/contact.vue";
import mine from "./components/tabs/mine.vue";

// 容器组件
import tab from "./components/container/tab.vue";
import chat from "./components/container/chat.vue";

// 配置路由
var router = new VueRouter({
    routes: [{
        path: "/tab",
        component: tab,
        children: [{
                path: 'wechat',
                component: wechat
            },
            {
                path: 'discovery',
                component: discovery
            },
            {
                path: 'contact',
                component: contact
            },
            {
                path: 'mine',
                component: mine
            }
        ]
    }, {
        path: "/chat",
        component: chat
    }]
})

new Vue({
    el: "#app",
    router,
    template: `
        <div>
            <router-view></router-view> 
        </div>
    `
})