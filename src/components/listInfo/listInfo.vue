<template >
  <div class="listInfo">
    <div class="info_wrap">
      <div class="content">
        <div class="left">
          <img
            src="./img/1.jpg"
            width="100%"
            alt=""
          >
        </div>
        <div class="right">
          <h3>那些独处时听的歌 别让悲伤逆流成河</h3>
          <a href="">
            <img
              class="tip"
              src="./img/1.jpg"
              height="100%"
              alt=""
            >

            <i class="el-icon-star-off star"></i>
            aa3333333333333333333333333
          </a>
        </div>
      </div>
    </div>
    <div class="tagWrap">
      <p class="tag"> 标签：<span> 日语</span> <span> 日语</span><span> 日语</span></p>
      <div class="infoWrap">
        <div
          class="info"
          v-if="show"
        >
          <p> 简介: 简介：季的喜爱。历尽心血逐一对照第四季全部出现的歌曲和BGM创建歌单。来纪念曾经的记忆和未燃尽的激情。如有缺漏请留言 <i> ...</i> </p>
        </div>
        <div class="copy" v-else>
          <p> 简介: 简介：季的喜爱。历尽心血逐一对照第四季全部出现的歌曲和BGM创建歌单。来纪念曾经的记忆和未燃尽的激情。如有缺漏请留言
           来纪念曾经的记忆和未燃尽的激情。
           Vue.js（读音 /vjuː/, 类似于 view）是一个构建数据驱动的 web 界面的渐进式框架。Vue.js 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件。
          </p>
        </div>

      </div>

      <div class="butWrap"> <span
          v-on:click="show = !show"
          class=" btn"
          :class="[show ? 'el-icon-arrow-down'  :'el-icon-arrow-up']"
        > </span></div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      show: true
    };
  }
};
</script>



 <style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity ;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.listInfo {
  .info_wrap {
    width: 100%;
    height: px2rem(195);
    background-image: url("./img/2.jpg");
    background-size: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .content {
      width: px2rem(350);
      height: px2rem(126);
     
      display: flex;
      justify-content: space-between;
      .left {
        width: 36%;
        height: 100%;
        
      }
      .right {
        width: 58%;
        height: 100%;
       
        h3 {
          color: #fff;
          font-size: px2rem(17);
          line-height: 1.3;
          height: px2rem(44);
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        a {
          position: relative;
          display: block;
          margin-top: px2rem(30);
          height: px2rem(30);
          width: px2rem(102);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        
          font-size: px2rem(16);
          line-height: px2rem(30);
          padding-left: px2rem(40);
          color: rgba(255, 255, 255, 0.7);

          .tip {
            position: absolute;
            top: 0;
            left: 0;
            border-radius: px2rem(15);
            overflow: hidden;
            vertical-align: top;
          }
          .star {
            position: absolute;
            top: px2rem(16);
            left: px2rem(24);
            font-size: px2rem(12);
            height: px2rem(12);
            height: px2rem(12);
            border-radius: px2rem(15);
            overflow: hidden;
            background: #fff;
            color: yellow;
          }
        }
      }
    }
  }
  .tagWrap {
    height: px2rem(115);
    padding-top: px2rem(10);
   
    margin: 0 px2rem(13);
    .tag {
      height: px2rem(22);
      line-height: px2rem(22);
      font-size: px2rem(16);
      span {
        display: inline-block;
        margin-right: px2rem(10);
        padding: px2rem(1) px2rem(10);
        font-size: px2rem(12);
        box-sizing: border-box;
        border-width: 1px;
        -webkit-transform-origin: top left;
        -ms-transform-origin: top left;
        transform-origin: top left;
        border: 0 rgba(0, 0, 0, 0.1) solid;
        border: 1px solid red;
        border-radius: 45%;
      }
    }
    .infoWrap {
      margin-top: px2rem(10);
      line-height: 1.4;
      font-size: px2rem(14);
      .info {
        height: px2rem(60);
       

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
    }
    .butWrap {
      text-align: right;

      height: px2rem(20);
      .btn {
        font-size: px2rem(20);
        line-height: px2rem(20);
      }
    }
  }
}
</style>
 