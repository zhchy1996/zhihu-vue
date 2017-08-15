


<template>
  <div class="index">
    <div class="wrapper">
      <h2  v-show="gridData.top_stories">热门</h2>
      <div class="stories top-stories">
        <router-link  :to="('news/' + item.id)" class="item today" v-for="item in gridData.top_stories"  tag="div" :key="item.id" >
          <img :src="item.image" :alt="item.title">
          <p>{{item.title}}</p>
        </router-link>
      </div>
      
      <h2>{{title}}</h2>
      <div class="stories today-stories">
        <router-link class="item today" :to="('news/' + item.id)" v-for="item in gridData.stories" :key="item.id" tag="div">
          <img :src="item.images" :alt="item.title">
          <p>{{item.title}}</p>
        </router-link>
      </div>
      <div class="show-more" @click="showMore">
        {{more}}
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/vuex/vuex'

export default {
  name: 'index',
  data () {
    return {
      gridData:'',
      msg: 'Welcome to Your Vue.js App',
      url:'',
      more:'',
      title:'',
    }
  },
  methods:{
    click:function (id) {
      this.url = 'news/' + id; 
    },
    showMore:function () {
      if(this.more.length == 13){
        return;
      }else{
        this.gridData = store.state.lastData;
        this.more = '若想查看过往信息请查看关于'
        this.title = '今日'
        store.commit('changeDate', store.state.today)
      }
    }
  },
  created:function () {
    var date = store.state.date;
    var url = "/api/4/news/latest";
    if(!isNaN(Number(date))){
      if(date === '' || date == store.state.today) {
        url = "/api/4/news/latest";
      }else{
        url = '/api/4/news/before/' + date;
        
      }
    }
    var $self = this;
    this.$http.get(url).then(function (data) {
      $self.gridData = data.body;
      
      if(data.url ==='/api/4/news/latest') {
        store.commit('setLastData', data.body)
        store.commit('setToday', Number(data.body.date) + 1)
        store.commit('changeDate', store.state.today)
        $self.more = '若想查看过往信息请查看关于'
        this.title = '今日'
      }else{
        $self.more = '点击此处返回今天'
        date = (date -1).toString();
        console.log(date)
        this.title = date.slice(0,4) + '年' + date.slice(4,6) + '月' + date.slice(6,8) + '日';
      }
    },function () {
        $self.gridData = store.state.lastData;
        $self.more = '若想查看过往信息请查看关于'
        this.title = '今日'
        store.commit('changeDate', store.state.today)
    })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @media screen and (max-width: 640px){
    .wrapper{
      width:100%;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #f5f5f5;
    }
    h1{
      text-align: center;
    }
    .item{ 
      height: 100px;
      flex:1;
      flex-grow: 0;
      padding:0 20px 0 0px;
      background:#fff;
      display:flex;
      align-items:center;
      overflow: hidden;
      flex-direction:row;
      margin:10px 10px 10px 10px;
    }
    .item img{
      width:100px;
      height: 100px;
      flex-grow: 0;
    }
    .item p {
      width:90%;
      overflow: hidden;
      margin-left:10px;
    }
  }
  @media screen and (min-width: 641px){
    .wrapper{
      display: flex;
      padding:50px;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      max-width: 1600px;
      margin: 0 auto;
      flex-direction: column;
      background: #f5f5f5;
    }
    .stories{
      flex:1;
      display: flex;
      flex-wrap: wrap;
    }
    .today-stories{
      max-width:1050px;
    }
    .item{
      flex-wrap: wrap;
      width:150px;
      height: 230px;
      flex:1;
      flex-grow: 0;
      flex-shrink:0;
      padding:0 20px 0 20px;
      background:#fff;
      margin:20px 10px 20px 10px; 
      text-align: center;
    }
    .item p{
      text-align: center;
      font-size:16px;
      overflow: hidden;
      height:64px;
      white-space:inherit;
    }
    .item img{
    width:150px;
    height: 150px;
    }
    .show-more{
      cursor: pointer;
    }
  }
  
  
</style>
