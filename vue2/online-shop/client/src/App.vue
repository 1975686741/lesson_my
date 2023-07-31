<template>
  <div id="app">
    <!-- 单页应用  头部导航 -->
    <nav>
      <div class="container">
        <ul class="nav__left">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/admain">Admain</router-link>
          </li>
          <li>
            <router-link to="/cart">Cart</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
