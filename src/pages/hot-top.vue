<template>
  <div class="hot-top">
    <!-- 热榜排行: 边框 -->
    <h3 class="hot-tip">当前时间：{{ hotTime }} / 热榜每60分钟刷新一次</h3>
    <ul class="personal-broadcast">
      <li v-for="item in broadcastList" :key="item.id">
        <span class="guests">Top:{{ item.top }} / {{ item.vistors }}</span>
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hotTime: new Date(),
      // 热榜排行数据
      broadcastList: [
        { id: 1, name: "小花花的广播", vistors: "100", top: "状元" },
        { id: 2, name: "小猪猪的广播", vistors: "200", top: "榜眼" },
        { id: 3, name: "小鱼儿的广播", vistors: "300", top: "探花" },
        { id: 4, name: "酷酷的广播", vistors: "400", top: "4" },
        { id: 5, name: "郡主的广播", vistors: "500", top: "5" },
        { id: 6, name: "泪痕的广播", vistors: "600", top: "6" },
        { id: 7, name: "天选之子的广播", vistors: "700", top: "7" },
        { id: 8, name: "玉城之子的广播", vistors: "800", top: "8" },
        { id: 9, name: "风城之子的广播", vistors: "900", top: "9" },
        { id: 10, name: "版本之子的广播", vistors: "10000", top: "10" },
      ],
    };
  },
  created() {
    this.hotTime = this.$moment(this.hotTime).format("YYYY-MM-DD HH:mm:ss");
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
@import url("../assets/broadcoast.less");
</style>
<style lang="less" scoped>
.hot-top {
  height: 100%;
}
.hot-tip {
  padding: 10px 30px;
}
.hot-top .personal-broadcast li {
  width: 30%;
  height: 300px;
  line-height: 300px;
  margin-left: 2%;
  color: #ffffee;
  border-radius: 12px;

  &:nth-of-type(1) {
    border-radius: 20px;
    background: rgb(233, 59, 114);
    box-shadow: 0 0 30px rgb(233, 59, 114);
  }
  &:nth-of-type(2) {
    border-radius: 20px;
    background: rgb(238, 91, 130);
    box-shadow: 0 0 20px rgb(233, 59, 114);
  }
  &:nth-of-type(3) {
    border-radius: 20px;
    background: rgb(240, 116, 155);
    box-shadow: 0 0 15px rgb(233, 59, 114);
  }
  &:nth-of-type(4),
  &:nth-of-type(5),
  &:nth-of-type(6),
  &:nth-of-type(7),
  &:nth-of-type(8),
  &:nth-of-type(9) {
    border-radius: 15px;
    background: rgb(246, 150, 180);
    box-shadow: 0 0 10px rgb(233, 59, 114);
  }
  &:hover {
    box-shadow: 3px -5px 5px rgb(251, 247, 207);
  }
}
</style>