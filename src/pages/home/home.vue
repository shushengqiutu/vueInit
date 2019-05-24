<template >
      <div class="home">
          <my-head></my-head>
          
           <router-view></router-view>
           
      </div>
</template>
<script>
import myHead from "../../components/header/header.vue"
export default {
    components:{
        myHead
    }
}
</script>


 <style lang="scss" scoped>
        
 </style>
 