<template>
    <div>
        <xheader />
        <xsearch />
        <xpanel />
    </div>
</template>
<script>
import xheader from "../xheader.vue";
import xsearch from "../xsearch.vue";
import xpanel from "../xpanel.vue";
export default {
  components: {
    xheader,
    xsearch,
    xpanel
  }
};
</script>
