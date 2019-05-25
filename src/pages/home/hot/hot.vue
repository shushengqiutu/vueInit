<template>
  <div class="hot">
    <top-swipe> </top-swipe>
    <music-list> </music-list>
    <div class="moreList"> <span>查看完整歌单></span></div>

  </div>
</template>
   <script>
import topSwipe from "../../../components/top-swipe/top-swiper.vue";
import musicList from "../../../components/music_list/music_list.vue";
export default {
  components: {
    topSwipe,
    musicList
  }
};
</script>
   
<style lang="scss" scoped>
.hot {
  margin-top: px2rem(104) ;
  .moreList{
     text-align: center;
     span{
        line-height: px2rem(45);
        font-size: px2rem(14);
        color: #999999;
     }
   
  }
}
</style>

