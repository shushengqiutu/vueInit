<template>
  <div class="music_list">

    <div
      class="sub_list"
      v-for="(item,index) in newSongs"
      :key="index"
    >
      <div class="song">
        <h3 class=" songName f-thide"> {{item.song.name}}</h3>
        <p class="author f-thide">{{item.song.artists[0].name}} - {{item.song.album.name}}</p>
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
    newSongs: {
      type: Array
    }
   
  },
  mounted() {
    
  }
};
</script>
   
<style lang="scss" scoped>
.music_list {
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
      flex: 2;
      text-align: center;
      line-height: px2rem(45);
    }
    .song {
      padding-left: 2%;
      // width: 87%;
      flex: 14;

      .songName {
        font-size: px2rem(17);
        line-height: px2rem(27);
        color: #333;
        width: px2rem(320);
      }
      .author {
        font-size: px2rem(12);
        line-height: px2rem(18);
        color: #888;
        width: px2rem(320);

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
      flex: 2;
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