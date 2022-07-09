<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" class="tab-page">首页</router-link>
      <router-link to="/link-check" class="tab-page">聊天广场</router-link>
      <router-link to="/hot-top" class="tab-page">热榜排行</router-link>
      <router-link to="/my-follow" class="tab-page">我的关注</router-link>
      <router-link to="/info-list" class="tab-page">消息列表</router-link>
      <router-link to="/self-setting" class="tab-page">个人中心</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {};
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #eee;  box-sizing: border-box;
}

#nav {
  padding: 15px 50px;
  background: #074685;
  display: flex;
  justify-content: space-between;
  .tab-page {
    width: 100px;
    text-align: center;
  }
  a {
    font-weight: bold;
    color: #eee;
    text-decoration: none;
    padding: 2px 0;
    &.router-link-exact-active {
      color: rgb(237, 233, 175);
      box-shadow: 0 2px 3px rgb(194, 12, 106);
    }
  }
}
</style>
