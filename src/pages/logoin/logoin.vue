<template >
      <div class="logoin"> 
               <h2> 登录</h2>
               <div class="logo"> 
                   <img src="" alt="">
               </div>
               <div class="write">
               <p>  <input type="text" class="phone"></p>
               <p>  <input type="password" class="password"> <button></button></p>
               <p>  <button class="btn" >  登录</button> </p>
               </div>   
                <p> 没有账号去<a href="/home">注册</a></p>
     
          
           </div>
</template>
       
<script>
export default {
    
}
</script>


 <style lang="scss" scoped>
   .logoin{
         text-align: center;
         h2{
             margin-top: px2rem(30);
             font-size: px2rem(18);
         }
         .write{

             p{
                 .phone{
                     width: px2rem(100);
                     height: px2rem(30);
                     border-bottom: 1px solid #f40;
                 }
                 .password{
                     width: px2rem(100);
                     height: px2rem(30);
                     border-bottom: 1px solid #f40;
                 }
                 .btn{
                     width: 50%;
                     outline: none;
                     height: px2rem(25);
                     border-radius: px2rem(25);
                      font-size: px2rem(18);

                 }
             }
         }
   }
 
 </style>