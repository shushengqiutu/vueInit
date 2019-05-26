<template >

  <div class="header">
    <div class="top clearfixed">
      <h1> <i class="el-icon-service"></i>网易音乐云 </h1>
      <a href="javaScript:;">登录/注册</a>
    </div>
    <nav>
      <span href="javaScript:;"
     
       v-for=" (item,index) in nav" 
       :key="index" 
       :class="{line:item.pathName==num}"
       @click="jump(item,index)"
       > {{item.name}}

       </span>
    
    </nav>
    <div class="wire"></div>

  </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
    data(){
        return{
            num:"",
            nav:[
               {name:"推荐音乐",pathName:"music"},
               {name:"热歌榜",pathName:"hot"},
               {name:"搜索",pathName:"search"},
            ]
        }
        
    },
    
     mounted () {
      this.num= this.$route.name
       
    },
    watch:{
         
         "$route.name"(route){
                this.num=route
          }
      
    },
      
    
    
    methods:{
        
        
        jump(obj,index){

            
            this.$router.push({
                name:obj.pathName,
                params:{
                    name:obj.name
                }
            })
        }
    },
 
   
};
 
</script>


 <style lang="scss" scoped>
.header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  height: px2rem(104);
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: px2rem(64);
    padding: 0 px2rem(10);
    background-color: #d43c33;
 
   
    
   
    h1 {
      font-size: px2rem(18);
      color: #ffffff;
       flex: 2;
       i{
           margin-right:px2rem(10);
       }
       
    }
    a {
      
      font-size: px2rem(15);
      color: #ffffff;
      border: 1px solid #ffffff;
      flex: 1;
      text-align: center;
      padding:px2rem(8) px2rem(2);
      border-radius: px2rem(33);
      
    }
  }
  nav {
    height: px2rem(40);
    
    display: flex;
    background-color: #fff;
    justify-content: space-around;
    align-items: center;
    span {
      line-height: px2rem(39);
      text-align: center;
      font-size: px2rem(15);
     
      color: #333;
      
    }
     .line{
         color: #dd001b;
         border-bottom:  px2rem(1) solid #dd001b;
     }
    
  }
  .wire{
         margin-top:px2rem(-1);
         height:  px2rem(1);
         background: #CCC;
   }
}
</style>
 