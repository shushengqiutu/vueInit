<template>
      <div class="home"> 
            <h1> 首页</h1>
            <h1> {{get_msg}}</h1>
            <h3> {{get_msg1}}</h3>
 <el-button disabled>默认按钮</el-button>
 <el-input placeholder="请输入密码" v-model="input" show-password></el-input>

            <h4>{{msg}}</h4>
            <p> {{this.$store.state.list.title}}</p>
           
               <input type="text" v-model="mm">
               <input type="text" v-model="keywords">

                <button @click="sub"> 改变</button>

              change: <button @click="change"> change</button>
               <button @click="receive_add_msg({'mm':mm})"> 改变</button>
               <button @click="get_add_msg({'mm':mm})"> mapActions</button>

               <button @click="add"> adddddd</button>
 

      
      </div>
</template>
 <script> 
 // 引入vuex 里的状态管理模块 分支elmemt ui
  import {mapState,mapGetters,mapMutations,mapActions} from "vuex" 
    
 export default {

       data(){
             return {
                   mm:"",
                   keywords:"keywords",
             }
       },
       computed: {
           
             get_msg1(){
                   return this.$store.getters.get_msg //原始方法调用
             },
              ...mapGetters(["get_msg"]),//map 方法调用
              ...mapState(["msg"]),
             
       },
       methods:{

             // 调用mutation模块
              ...mapMutations(["receive_add_msg"]),
             change(){
                   console.log(this.$store)
                   //*** 这里的matution调用时 调用的时mutation-type里定义的函数名
                   const {mm}=this //解构
                   this.$store.commit("receive_add_msg", {mm}) //对象简写
             },
             // 调用action 发送异步请求   先用代理解决跨越
              ...mapActions(["get_add_msg"]),
            add(){
                const keywords=this
                this.get_add_msg({keywords})
            },
           ...mapActions("list",["change1","changeC"]), //子模块action A中可以获取 B的state
           ...mapMutations("list",["changeB"]),
           sub(){
                 this.change1()
                  this.changeB()
                  this.changeC()
           }
      
       },
       
          

        
     
 }
 </script>
 <style lang="scss" scoped>
// @import "../../assets/lib/px2rem.scss"; 

       .home{
             width:px2rem(700);
             background-color:red;
              
             input{
                   border: 1px solid #f40;
                   margin: px2rem(20);

             }
             button{
                   width: 100%;
                   height: px2rem(50);
             }
            
       }
    
  </style>
  