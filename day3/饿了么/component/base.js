new Vue({
    el:"#demo",
    template:`
        <div>
            <xwaimai v-show="id==0">
                <xheader></xheader>
                <xsearch></xsearch>
                <xswiper></xswiper>
                <xadvertise></xadvertise>
                <xshoplisttitle></xshoplisttitle>
                <xshoplist></xshoplist>
            </xwaimai>
                
            <div v-show="id==1">
                <xtitle title="发现"></xtitle>
                发现
            </div>
            <div v-show="id==2">
                <xtitle title="订单"></xtitle>
                订单
            </div>
            <div v-show="id==3">
                <xtitle title="我的"></xtitle>
                我的
            </div>
            <xfooter></xfooter>
        </div>
    `,
    data:{
        id:0
    },
    mounted:function(){
        var self = this;
        bus.$on("select-tab",function(id){
            self.id = id
            console.log(id)
        })
    }
})