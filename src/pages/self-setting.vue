<template>
  <div class="self-setting">
    <ul class="setting-ul">
      <li v-for="item in settingArr" :key="item.id" class="setting-li">
        {{ item.settingType }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      settingArr: [
        { settingType: "用户名", id: "1" },
        { settingType: "用户密码", id: "11" },
        { settingType: "用户签名", id: "12" },
        { settingType: "用户头像", id: "13" },
        { settingType: "个人账户", id: "14" },
        { settingType: "账户详情", id: "15" },
        { settingType: "隐私设置", id: "16" },
        { settingType: "退出登录", id: "17" },
      ],
    };
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.setting-ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  .setting-li {
    text-align: center;
    width: 50%;
    height: 40px;
    line-height: 40px;
    border-radius: 20px;
    background: lemonchiffon;
    margin: 10px;
    color: #2c3e50;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
