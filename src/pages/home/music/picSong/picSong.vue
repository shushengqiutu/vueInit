<template>
  <ul class="picSong">

    <li class="sub_song">
      <img
    
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558708636693&di=7ab5f3286f143f5e11b9c73095128188&imgtype=0&src=http%3A%2F%2Fimg3.redocn.com%2F20100720%2F20100719_4843ddbb65030267a0a1SGNwJFEZKTRT.jpg"
        alt=""
      >
      <span> <i class="el-icon-service"> </i>51.4万 </span>
      <p class="sub-text"> 而我在这里是不是说社保查询我去看到撒下擦完成为汽车的</p>
    </li>
    <li class="sub_song">
      <img
        
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558708636693&di=7ab5f3286f143f5e11b9c73095128188&imgtype=0&src=http%3A%2F%2Fimg3.redocn.com%2F20100720%2F20100719_4843ddbb65030267a0a1SGNwJFEZKTRT.jpg"
        alt=""
      >
      <span> <i class="el-icon-service"> </i>51.4万 </span>
      <p class="sub-text"> 而我在这里是不是说社保查询我去看到撒下擦完成为汽车的</p>
      
    </li>
    <li class="sub_song">
      <img
      
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558708636693&di=7ab5f3286f143f5e11b9c73095128188&imgtype=0&src=http%3A%2F%2Fimg3.redocn.com%2F20100720%2F20100719_4843ddbb65030267a0a1SGNwJFEZKTRT.jpg"
        alt=""
      >
      <span> <i class="el-icon-service"> </i>51.4万 </span>
     
      <p class="sub-text"> 而我在这里是不是说社保查询我去看到撒下擦完成为汽车的</p>
    </li>
    <li class="sub_song">
      <img
      
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558708636693&di=7ab5f3286f143f5e11b9c73095128188&imgtype=0&src=http%3A%2F%2Fimg3.redocn.com%2F20100720%2F20100719_4843ddbb65030267a0a1SGNwJFEZKTRT.jpg"
        alt=""
      >
      <span> <i class="el-icon-service"> </i>51.4万 </span>
      <p class="sub-text"> 而我在这里是不是说社保查询我去看到撒下擦完成为汽车的</p>
    </li>
    <li class="sub_song">
      <img
    
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558708636693&di=7ab5f3286f143f5e11b9c73095128188&imgtype=0&src=http%3A%2F%2Fimg3.redocn.com%2F20100720%2F20100719_4843ddbb65030267a0a1SGNwJFEZKTRT.jpg"
        alt=""
      >
      <span> 51.4万 </span>
      <p class="sub-text"> 而我在这里是不是说社保查询我去看到撒下擦完成为汽车的</p>
    </li>
  </ul>
</template>
   <script>
export default {};
</script>
   
<style lang="scss" scoped>
.picSong {
    display: flex;
    flex-wrap:wrap;
    justify-content:space-between;
    .sub_song {
        width: 33%;
        float: left;
        position: relative;
        left: 0;
        top: 0;
        margin-bottom: px2rem(20);
        img{
            display: block;
            width: 100%;
            
        }
        span{
            position: absolute;
            right: px2rem(8);
            top:px2rem(6);
            color: #fff;
            font-size: px2rem(12);
            z-index: 3;
            text-shadow: 1px 0 0 rgba(0,0,0,.15);
          
            

        }
        span::after{
          
        }
        .sub-text{
            font-size: px2rem(13);
            color: #333;
            -webkit-line-clamp: 2;
            overflow: hidden;
            padding: 6px 2px 0 6px;
            line-height: 1.2;
              &:after{
               content: "";
               width: 100%;
               height: px2rem(40);
               position: absolute;
               top: 0;
               left: 0;
              background:linear-gradient(180deg,rgba(0,0,0,.2),transparent);
               z-index: 2;
            }
           
        }
    }
}

</style>
