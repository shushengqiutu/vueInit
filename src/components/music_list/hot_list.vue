<template>
  <div class="hot_list">

    <div
      class="sub_list"
      v-for="(item,index) in  hot_songs"
      :key="index"
      :id="item.id"
      @click="jumpPlay(item.id,item.name+'-' +item.ar[0].name)"
    > 
      <div class="sort" :class="{red:index<4}"> {{index+1>9?index+1: "0"+(index+1)}}</div>
      <div class="song">
        <h3 class=" songName f-thide"> {{item.name}}</h3>
        <p class="author f-thide">{{item.ar[0].name}} - {{item.al.name}}</p>
      </div>
      <div class="play">
        <i class="el-icon-caret-right icon-play"></i>
      </div>
    </div>

  </div>

</template>
   <script>
export default {
  props: {
    hot_songs: {
      type: Array
    },
  
  },
  mounted() {
    
  },
  methods:{
    jumpPlay(id,info){
      this.$router.push({name:"play",query:{
        id:id,
        info:info
      }})
    }
  }
};
</script>
   
<style lang="scss" scoped>
.hot_list {
  margin-top:5px;
  min-height: px2rem(200);

  .sub_list {
    width: 100%;
    display: flex;
    // justify-content: space-between;
    padding: px2rem(4) 0 px2rem(2) 0;

    transform-origin: top left;
    border: 0 solid rgba(0, 0, 0, 0.1);
    border-bottom-width: 1px;
    .sort {
      flex: 1;
      font-size: px2rem(16);
      text-align: center;
      line-height: px2rem(45);
    }
    .red{
      color: #df3436;
    }
    .song {
      
      // width: 87%;
      flex: 1;

      .songName {
        font-size: px2rem(17);
        line-height: px2rem(27);
        color: #333;
        width: px2rem(295);
      }
      .author {
        font-size: px2rem(12);
        line-height: px2rem(18);
        color: #888;
        width: px2rem(300);

        &::before {
          content: "SQ";
          color: #e61a1a;
          border: 1px solid #ff3300;
          font-size: px2rem(8);
          vertical-align: top;

          margin-right: px2rem(5);
        }
      }
    }
    .play {
      // width: 11%;
      flex: 1;
      font-size: px2rem(16);

      text-align: center;

      .icon-play {
        border: 1px solid #ccc;
        border-radius: 50%;
        vertical-align: -90%;
        color: #888;
      }
    }
  }
}
</style>