<template>
  <div class="topSwiper">
    <template>
  <div class="block">
   
    <el-carousel  trigger="click" height="422px">

      <el-carousel-item v-for="(item,index) in top_mv" :key="index">
         <img :src="item.cover" alt="" width="100%">   
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
  </div>
</template>
   <script>
   import { mapState, mapActions } from "vuex";
export default {
   mounted(){
      this.get_mv()
   },
   computed:{
        ...mapState(["top_mv"])
   },
  methods: {
   
    ...mapActions(["get_mv"])
  }
};
</script>
   
<style lang="scss" scoped>
.topSwiper {
  margin-top: px2rem(105);

 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    //  line-height: px2rem(100);
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
}
</style>