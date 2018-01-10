Vue.component("xfooter",{
    template:`
    <footer class="index-wrapper_1Rsz2pX">
    <div class="index-footer_Gtduid_">
        <a @click="selectTab(a.id)" v-for="a in arr" :style="{'color':a.id==id?'red':''}" href="void:javascript;" class="index-footerTab_bl0lbJN">
            <svg class="index-footerTabIcon_1EbB8wS">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#index.18edf5a"></use>
            </svg>
            <span class="index-footerTabText_1It8yh0 index-footerTabTextActive_3gjOLc6" v-text="a.title">
                
            </span>
        </a>
    </div>
    </footer>
    `,
    data:function(){
        return {
            arr:[{
                id:0,
                title:"外卖",
                href:""
            },{
                id:1,
                title:"发现",
                href:""
            },{
                id:2,
                title:"订单",
                href:""
            },{
                id:3,
                title:"我的",
                href:""
            }],
            id:0
        }
    },
    methods:{
        selectTab:function(id){
            //console.log(id)
            this.id = id
            bus.$emit("select-tab",id)
        }
    }
})