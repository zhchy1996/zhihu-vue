


<template>
  <div class="theme">
    <div class="wrapper">
      <h2>{{gridData.name}}</h2>
      <div class="stories top-stories">
        <router-link  :to="('/news/' + item.id)" class="item today" v-for="item in gridData.stories"  tag="div" :key="item.id" >
          <img :src="item.images ? item.images[0] : gridData.background" :alt="item.title">
          <p class="description">{{item.title}}</p>
        </router-link>
      </div>
      
     
     
    </div>
  </div>
</template>

<script>
import store from '@/vuex/vuex'

export default {
  name: 'subject',
  data () {
    return {
      gridData:'',
      msg: 'Welcome to Your Vue.js App',
      url:'',
    }
  },
  methods:{
    
  },
  created:function () {
    var id = this.$route.params[0];
    var url = '/api/4/theme/' + id;
    var $self = this;
    this.$http.get(url).then(function (data) {
      console.log(data)
      $self.gridData = data.body;
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
      background:#F5F5F5;
    }
    h1{
      text-align: center;
    }
    .theme .item{ 
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
      flex-shrink: 0;
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
    }
    .stories{
      flex:1;
      display: flex;
      flex-wrap: wrap;
      max-width:1050px;
    }
    .today-stories{
      
    }
    .item{
      flex-wrap: wrap;
      width:150px;
      height: 220px;
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
      white-space:inherit;
      color:#666;
    }
    .item .title{
      font-size:20px;
    }
    .item .description {
      font-size:15px;
      overflow: hidden;
      height:64px;
    }
  }
  
  .item img{
    width:150px;
    height: 150px;
  }
</style>
