<template>
    <transition name="toggle">
        <div class="sildebar" v-show="isShowSildeBar">
            侧边栏
        </div>
    </transition>
</template>
<script>
import bus from "../bus.js";
export default {
  data() {
    return {
      isShowSildeBar: false
    };
  },
  mounted() {
    bus.$on("show-silde-bar", data => {
      console.log(data);
      this.isShowSildeBar = data;
    });
  }
};
</script>
<style scoped>
.sildebar {
  width: 200px;
  position: fixed;
  height: 100%;
  z-index: 501;
  background-color: green;
}

.toggle-enter-active{
    animation: move .5s;
}

.toggle-leave-active{
    animation: move .5s reverse;
}

@keyframes move {
    from{
        left:-200px
    }
    to{
        left:0
    }
}
</style>
