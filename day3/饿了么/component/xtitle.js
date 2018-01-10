Vue.component("xtitle",{
    props:["title"],
    template:`
        <header :style='{
            backgroundColor:"#0092ff",
            color:"white",
            textAlign:"center",
            lineHeight:"50px",
            height:"50px",
            width:"100%"
        }'>{{title}}</header>
    `
})