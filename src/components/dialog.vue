<template>
<!-- 子组件绑定传值事件 -->
  <div @click="giveParams" class="dialog">这是一个弹框</div>
</template>

<script>
export default {
  methods: {
    // 子组件触发传值
    giveParams() {
      this.$emit("giveSome", { title: "子组件传值给父组件", type: "对象" });
    },
  },
};
</script>

<style lang="less" scoped>
.dialog {
  width: 400px;
  height: 400px;
  background: lightgoldenrodyellow;
}
</style>