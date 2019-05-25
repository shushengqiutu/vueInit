<template>
  <div class="topSwiper">
    <template>
  <div class="block">
   
    <el-carousel  trigger="click" height="px2rem(200)">
      <el-carousel-item v-for="item in 4" :key="item">
         <img src="" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
  </div>
</template>
   <script>
export default {};
</script>
   
<style lang="scss" scoped>
.topSwiper {
  margin-top: px2rem(105);

 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: px2rem(200);
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