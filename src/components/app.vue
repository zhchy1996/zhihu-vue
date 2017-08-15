<template>
  <div id="app">
    <header>
      <ul>
        <li>
          <router-link to="/index">首页</router-link>
        </li>
        <li>
          <router-link to="subject">主题日报</router-link>
        </li>
        <li>
          <router-link to="about">关于</router-link>
        </li>
      </ul>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
* {
  padding:0;
  margin:0;
  list-style: none;
  text-decoration: none;
}
body{
  background:#F5F5F5;
}
header{
  height:50px;
  background:#252e39;
}
ul{
  display: flex;
  padding-left: 10%;
}
ul li{
 flex:1;
}
ul li a{
  text-align: center;
  display: block;
  max-width:70%;
  color:#fff;
  line-height: 45px;
}
ul li a.router-active {
  border-bottom:solid 5px skyblue;
}
a:focus{
  outline: none;
}


</style>
