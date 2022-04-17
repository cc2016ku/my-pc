<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">商城首页</router-link> |
      <router-link to="/goods">商品列表</router-link> |
      <router-link to="/setting">个人中心</router-link>
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
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
