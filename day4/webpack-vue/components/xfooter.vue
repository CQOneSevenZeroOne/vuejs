
<template>
    <div>
        <header>头部组件</header>
        <input v-model="name" />
        <p>{{name}}</p>
    </div>
</template>

<script>
// es5
//module.exports = {};
// es6
export default {
  data:function(){
      return {
          name:"ly"
      }
  },
  methods:{

  }
}
</script>
<style scoped>
header{
    color: white;
    background-color: red;
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px
}
</style>