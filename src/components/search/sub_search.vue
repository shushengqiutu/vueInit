<template>
  <div class="sub_search">
    <i class="el-icon-search"></i>
    <input
      class="search"
      type="text"
      :placeholder="!target?tip:''"
      v-model="target"
    
    >
    <span class="toLink"> </span>
  </div>
</template>
   <script>
import { mapMutations, mapState, mapActions } from "vuex";
import axios from "axios"
export default {
  data() {
    return {
      tip: "搜索歌手.歌曲.专辑",
      target: "",
      flag: false
    };
  },
  beforeMount() {
   
  },
 

  watch: {
    target(news) {
      
    
      if(news){
        const keywords=news
        const type="mobile"
        this.get_suggest({ keywords, type })
        this.get_hot_search()
        this.set_targets(news);
      }else{
          
           this.retarget('')
      }
    },
  
  },
  methods: {
    ...mapMutations(["set_targets"]),
    ...mapActions(['get_hot_search','get_suggest']),
    retarget(){
        this.set_targets();
    }
   
    
  },
  beforeDestroy(){
   this.retarget('')
  }
 
};
</script>
   
<style lang="scss" scoped>
.sub_search {
  padding: px2rem(10);
  display: flex;
  transform-origin: top left;
  border: 0 solid rgba(0, 0, 0, 0.1);
  border-bottom-width: 1px;
  .el-icon-search {
    flex: 1;
    height: px2rem(30);
    width: px2rem(30);
    border-radius: px2rem(30) 0 0 px2rem(30);
    line-height: px2rem(30);
    text-align: center;
    font-size: px2rem(16);
    background: #ebecec;
  }
  .search {
    flex: 8;
    height: px2rem(30);
    font-size: px2rem(16);
    background: #ebecec;
    outline: none;
  }
  .toLink {
    flex: 1;
    height: px2rem(30);
    width: px2rem(30);
    border-radius: 0 px2rem(30) px2rem(30) 0;
    background: #ebecec;
  }
}
</style>