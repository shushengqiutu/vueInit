<template>
  <div class="hot">
    <top-swipe> </top-swipe>
    <hot-list :hot_songs="f_hot_songs"> </hot-list>
    <div class="moreList"> <span>查看完整歌单></span></div>

  </div>
</template>
   <script>
import topSwipe from "../../../components/top-swipe/top-swiper.vue";
import hotList from "../../../components/music_list/hot_list.vue";
import {mapGetters} from "vuex"
export default {
 
  mounted(){
  this.$store.dispatch("get_hot_songs")
  
  },
  computed:{
  ...mapGetters(["f_hot_songs"])
  },
  components: {
    topSwipe,
    hotList
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

