<template >
  <div class="listInfo">
    <div class="info_wrap" >
      <div class="content">
        <div class="left">
          <img
            :src="info.coverImgUrl"
            width="100%"
            alt=""
          >
        </div>
        <div class="right">
          <h3>{{info.name}}</h3>
          <a href="#">
            <img
              class="tip" 
              :src="info.creator.avatarUrl"
              height="100%"
              alt=""
            >

            <!-- <i class="el-icon-star-off star" :style="{background:`url(${info.creator.backgroundUrl})`}"></i> -->
            {{info.creator.nickname}}
          </a>
        </div>
      </div>
    </div>
    <div class="tagWrap">
      <p class="tag"> 标签：<span v-for="(tag,index) in info.tags" :key="index"> {{tag}}</span> </p>
      <div class="infoWrap">
        <div
          class="info"
          v-if="show"
          :key="4"
        >
          <p    :key="11"> 简介: {{description}} <i :key="1213"> ...</i> </p>
        </div>
        <div class="copy" v-else :key="3" >
          <p :key="21"> 简介:{{description}}
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
  mounted(){
    
  },
  // props:{
  //   // info:{
  //   //  type:{ 
  //   //    type:{}
  //   //  }
  //   // }
   
  // },
   props:["info"],
  data() {
    return {
      show: true
    };

  },
  computed: {
    description(){
    return   this.info.description
     
    }
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
  background: url()
}

.listInfo {
  background-color: #f8f8f8;
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
          color: #fff;
          // color: rgba(255, 255, 255, 0.9);

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
        border: 1px solid #cccccc;
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
 