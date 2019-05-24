<template>
        <h2 class="title">
              {{song}}
        </h2>
</template>
   <script>
   export default {
        props:{
            song:{
                type:String
            }

        }
   }
   </script>
   
<style lang="scss" scoped>
 .title{
          position: relative;
          line-height: px2rem(20);
          font-size:px2rem(17);
          padding:px2rem(14) 0;
          height:px2rem(20) ;
          padding-left:px2rem(9);
          &::after{
                content: " ";
                position: absolute;
                left: 0;
                top: 50%;
                margin-top: px2rem(-9);
                width: px2rem(2);
                height: px2rem(16);
                background-color: #d33a31;
          }
    }

</style>