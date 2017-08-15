<template>
  <div class="about">
    <div class="wrapper">
      <div class="setDate">
        <p>为了方便使用，可以在下面的输入框内设置时间，设置时间后即可在首页的今日中查看设置日期的消息，设置日期格式如下：20170519,如果输入时间不合法，或者服务器没有那天的数据则会默认显示今天的信息</p>
      </div>
      <input type="text" @keyup="setDate($event)" :placeholder="date">
      <div class="message">
        <a href="https://github.com/izzyleung/ZhihuDailyPurify/wiki/%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5-API-%E5%88%86%E6%9E%90">
          本项目使用了github上的知乎日报的api
        </a>
        <a href="https://github.com/zhchy1996">
          个人github主页
        </a>
        <a href="#">
          如果喜欢或者对你有帮助可以点个星哦！
        </a>
      </div>
      
    </div>
  </div>
</template>

<script>
import store from '@/vuex/vuex'
export default {
  name: 'about',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  methods:{
    setDate:function (e) {
      store.commit('changeDate', Number(e.target.value) + 1)
      console.log((e.target.value))
    }
  },
  computed:{
    date () {
      return Number(store.state.date) - 1;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wrapper{
    display: flex;
    flex-direction: column;
    max-width:1050px;
    margin:10px auto;
    justify-content: center;
  }
  p{
    
    text-align:center;
    margin:20px auto 0 auto;
  }
  input{
    width:300px;
    height: 60px;
    margin:20px auto 0 auto;
    font-size:55px;
  }
  .message{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin:20px auto 0 auto;
  }
  .message a{
    color:#666;
    margin:10px auto 0 auto;
  }
</style>
