


<template>
  <div class="subject">
    <div class="wrapper">
      <h2>主题日报</h2>
      <div class="stories top-stories">
        <router-link  :to="('/subject/theme/' + item.id)" class="item today" v-for="item in gridData"  tag="div" :key="item.id" >
          <p class="title">{{item.name}}</p>
          <img :src="item.thumbnail" :alt="item.title">
          <p class="description">{{item.description}}</p>
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
    var url="/api/4/themes";
    var $self = this;
    this.$http.get(url).then(function (data) {
      console.log(data)
      $self.gridData = data.body.others;
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
      color:#666;
      background:#F5F5F5;
    }
    h1{
      text-align: center;
    }
    .subject .item{ 
      /* height: 200px; */
      flex:1;
      flex-grow: 0;
      padding:0 20px 0 0px;
      background:#fff;
      display:flex;
      align-items:center;
      overflow: hidden;
      flex-direction:column;
      margin:10px 10px 10px 10px;
    }
    .item img{
      width:150px;
      /* height: 100px; */
      /* flex-grow: 0;
      flex-shrink: 0; */
    }
    .item p {
      margin-top:10px;
      width:90%;
      overflow: hidden;
      margin-left:10px;
      flex-grow:0;
      text-align:center
    }
    .item p.title{
      width:inherit;
    }
  }
  @media screen and (min-width: 641px){
    .subject .wrapper{
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
      max-width:1050px;
    }
    .today-stories{
      max-width:1050px;
    }
    .subject .item{
      flex-wrap: wrap;
      width:150px;
      height: 245px;
      flex:1;
      flex-grow: 0;
      flex-shrink:0;
      padding:0 20px 0 20px;
      background:#fff;
      margin:20px 10px 20px 10px; 
      text-align: center;
    }
    .subject .item p{
      text-align: center;
      white-space:inherit;
      color:#666;
    }
    .subject .item .title{
      font-size:20px;
    }
    .subject .item .description {
      font-size:15px;
      overflow: hidden;
      height:64px;
    }
    .subject .item img{
    width:150px;
    height: 150px;
  }
  }
  
 
</style>
