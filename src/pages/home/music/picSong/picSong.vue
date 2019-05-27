<template>
  <ul class="picSong">

    <li
      class="sub_song"
      @click="jumpInfo(item.id)"
      v-for="(item,index) in picSongs"
      :key="index"
    >
      <img
        :src="item.picUrl"
        alt=""
      >
      <span> <i class="el-icon-service"> </i>{{item.playCount}}</span>
      <p class="sub-text"> {{item.name}}  </p>
    </li>

  </ul>
</template>
   <script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
   data(){
       return {
         
       }
   },
  computed: {
     
     picSongs(){
       return this.f_recommended_songs()
      
        
     }
  },
  methods:{
   ...mapGetters(["f_recommended_songs"]),
   jumpInfo(id){
         this.$router.push({
                name:"songSheetInfo",
                query:{
                    songListId:id
                }
            })
   }
   

  }
};
</script>
   
<style lang="scss" scoped>
.picSong {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .sub_song {
    width: 33%;
    float: left;
    position: relative;
    left: 0;
    top: 0;
    margin-bottom: px2rem(20);
    img {
      display: block;
      width: 100%;
    }
    span {
      position: absolute;
      right: px2rem(8);
      top: px2rem(6);
      color: #fff;
      font-size: px2rem(12);
      z-index: 3;
      text-shadow: 1px 0 0 rgba(0, 0, 0, 0.15);
    }

    .sub-text {
      font-size: px2rem(13);
      color: #333;
      -webkit-line-clamp: 2;
      overflow: hidden;
      padding: 6px 2px 0 6px;
      line-height: 1.2;
      &:after {
        content: "";
        width: 100%;
        height: px2rem(40);
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.2), transparent);
        z-index: 2;
      }
    }
  }
}
</style>
