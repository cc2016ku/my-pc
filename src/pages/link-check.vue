<template>
  <div class="link-check">
    <!-- 我的关注列表 -->
    <ul class="personal-broadcast">
      <li v-for="item in broadcastList" :key="item.id">
        {{ item.id + '-' + item.name }}
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
        { id: "1", name: "小花花聊天请单", vistors: "100" },
        { id: "2", name: "小猪猪聊天请单", vistors: "200" },
        { id: "3", name: "小鱼儿聊天请单", vistors: "300" },
        { id: "4", name: "酷酷聊天请单", vistors: "400" },
        { id: "5", name: "郡主聊天请单", vistors: "500" },
        { id: "6", name: "泪痕聊天请单", vistors: "600" },
        { id: "7", name: "天选之子聊天请单", vistors: "700" },
        { id: "8", name: "玉城之子聊天请单", vistors: "800" },
        { id: "9", name: "风城之子聊天请单", vistors: "900" },
        { id: "10", name: "版本之子聊天请单", vistors: "10000" },
        { id: "11", name: "小花花聊天请单", vistors: "100" },
        { id: "12", name: "小猪猪聊天请单", vistors: "200" },
        { id: "13", name: "小鱼儿聊天请单", vistors: "300" },
        { id: "14", name: "酷酷聊天请单", vistors: "400" },
        { id: "15", name: "郡主聊天请单", vistors: "500" },
        { id: "16", name: "泪痕聊天请单", vistors: "600" },
        { id: "17", name: "天选之子聊天请单", vistors: "700" },
        { id: "18", name: "玉城之子聊天请单", vistors: "800" },
        { id: "19", name: "风城之子聊天请单", vistors: "900" },
        { id: "20", name: "版本之子聊天请单", vistors: "10000" },
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
.link-check .personal-broadcast li {
  width: 20%;
  height: 100px;
  line-height: 100px;
  margin-left: 3.3%;
  border-radius: 20px;
}
</style>