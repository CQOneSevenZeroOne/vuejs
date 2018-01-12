<template>
  <header @click="showSildeBar">今日头条</header>    
</template>
<script>
import bus from "../bus.js";
export default {
  data() {
    return {
      isShowSildeBar: false
    };
  },
  methods: {
    showSildeBar() {
      this.isShowSildeBar = !this.isShowSildeBar;
      bus.$emit("show-silde-bar", this.isShowSildeBar);
    }
  }
};
</script>

<style scoped>
header {
  color: white;
  background-color: red;
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
}
</style>
