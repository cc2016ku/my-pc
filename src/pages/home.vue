<template>
  <div class="home">
    <div class="select-broadcast">
      <!-- 选择城市---------------------------------------------------------------------- -->
      <div class="block" style="margin: 10px 0">
        <span style="padding: 0 10px 0 0; font-weight: bolder; color: #eee"
          >选择城市
        </span>
        <el-cascader
          v-model="value"
          :options="citysArr"
          :props="{ expandTrigger: 'hover' }"
          @change="handleChange"
        ></el-cascader>
      </div>
      <!-- 选择分类--------------------------------------------------------------------- -->
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane
          v-for="item in typeArr"
          :key="item.id"
          :label="item.type"
          :name="item.id"
        ></el-tab-pane>
      </el-tabs>
    </div>
    <!-- 个人广播中心 -->
    <ul class="personal-broadcast">
      <li v-for="item in broadcastList" :key="item.id" @click="selectType">
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
      // 个人广播数据
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
      // 城市数据
      citysArr: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致",
                },
                {
                  value: "fankui",
                  label: "反馈",
                },
                {
                  value: "xiaolv",
                  label: "效率",
                },
                {
                  value: "kekong",
                  label: "可控",
                },
              ],
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航",
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航",
                },
              ],
            },
          ],
        },
      ],
      typeArr: [
        { type: "学习", id: "1" },
        { type: "生活", id: "2" },
        { type: "情感", id: "3" },
        { type: "运动", id: "4" },
        { type: "娱乐", id: "5" },
      ],
      activeName: "1",
    };
  },
  methods: {
    // 选择城市
    handleChange(v) {
      console.log(v);
    },
    selectType(id) {
      console.log(id);
    },
    handleClick() {
      console.log("选择分类");
    },
  },
};
</script>
<style lang="less" scoped>
@import url("../assets/broadcoast.less");
</style>
<style lang="less" scoped>
.select-broadcast {
  padding-left: 20px;
}
.select-broadcast ::v-deep .el-tabs__header {
  margin: 0 20px 0 0;
  background: rgb(255, 190, 211);
  .el-tabs__item {
    font-size: 16px;
    font-weight: bold;
    padding: 0 100px;
  }
  .is-active {
    background: palegreen;
  }
}
</style>