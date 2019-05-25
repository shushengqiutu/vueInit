<template >
  <div class="home">
    <my-head :pathName="pathName"></my-head>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
<script>
import myHead from "../../components/header/header.vue"
export default {
    data(){
       return{
           pathName:""
       }
    },
    components:{
        myHead
    },
    mounted () {
      
    }
   
}
</script>


 <style lang="scss" scoped>
</style>
 