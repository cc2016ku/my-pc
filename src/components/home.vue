<template>
  <div class="home">
    <!-- 父组件里的子组件引入使用 -->
    <Dialog @giveSome="getSome" />
  </div>
</template>
<script>
import Dialog from "./dialog.vue";
export default {
  components: {
    Dialog,
  },
  methods: {
    // 父组件里面获取数据
    getSome(data) {
      console.log("获取子组件传过来的数据", data);
    },
  },
};
</script>
<style lang="less" scoped>
.title {
  cursor: pointer;
}
</style>