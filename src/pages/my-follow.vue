<template>
  <div class="my-follow">
    <!-- 我的关注列表 -->
    <ul class="personal-broadcast">
      <li v-for="item in broadcastList" :key="item.id">
        <span class="guests">{{ item.vistors }}</span>
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 我的关注列表数据
      broadcastList: [
        { id: 1, name: "小花花的广播", vistors: "100" },
        { id: 2, name: "小猪猪的广播", vistors: "200" },
        { id: 3, name: "小鱼儿的广播", vistors: "300" },
        { id: 4, name: "酷酷的广播", vistors: "400" },
        { id: 5, name: "郡主的广播", vistors: "500" },
        { id: 6, name: "泪痕的广播", vistors: "600" },
        { id: 7, name: "天选之子的广播", vistors: "700" },
        { id: 8, name: "玉城之子的广播", vistors: "800" },
        { id: 9, name: "风城之子的广播", vistors: "900" },
        { id: 10, name: "版本之子的广播", vistors: "10000" },
      ],
    };
  },
  methods: {},
};
</script>
<style lang="less" scoped>
@import url("../assets/broadcoast.less");
</style>
<style lang="less" scoped>
.my-follow .personal-broadcast li {
  width: 40%;
  height: 320px;
  line-height: 320px;
  margin-left: 6%;
  border-radius: 20px;
}
</style>