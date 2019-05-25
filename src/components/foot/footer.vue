<template>
  <div class="footer">
    <div class="logo"> <i class="el-icon-service"></i> 网易云音乐</div>
    <div class="open"> 打开APP,发现更多好音乐 > </div>
    <p class="copyright"> 网易公司版权所有©1997-2019 杭州乐读科技有限公司运营</p>
  </div>
</template>
   <script>
export default {};
</script>
   
<style lang="scss" scoped>
.footer {
    text-align: center;
    background: url("./img/bgfooter.jpg");

  .logo {
      padding-top: px2rem(80);
      color: #333;
      font-weight: 500;
      font-size: px2rem(30);
      line-height: 1.3;
      
  }
  .open{
      font-size: px2rem(16);
      line-height: px2rem(38);
      border: 1px solid #d33a31;
      border-radius: px2rem(38);
      color: #d33a31;
      margin: px2rem(15)  px2rem(37) px2rem(5);
  }
  .copyright{
       font-size: px2rem(12);
       line-height: px2rem(16);
       color: #888888;
       transform: scale(.75);
       padding-bottom: px2rem(15);
  }
}
</style>