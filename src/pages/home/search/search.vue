<template>
  <div class="search">
    <sub-search></sub-search>
    <h3 class="hotSearch"> 热门搜索 {{targets}}</h3>
    <div class="textList">
      <span v-for="(item,index) in hot_search" :key="index"> {{item.first}}</span>
    </div>
  </div>
</template>
   <script>

import subSearch from "../../../components/search/sub_search.vue";
import { mapState } from "vuex";

export default {
  data(){
     return {
       tag:this.targets
     }
  },
  components: {
    subSearch
  },
  mounted(){
    this.$store.dispatch("get_hot_search")
 
   
  },
  computed:{
     ...mapState(["hot_search","targets"])
  },
  watch: {
      targets(tg){
          console.log(tg,5555)
      }
  }
};
</script>
   
<style lang="scss" scoped>
.search {
  margin-top: px2rem(104);
  .hotSearch {
    font-size: px2rem(14);
    line-height: 1.4;
    text-indent: px2rem(10);
    padding: px2rem(10) 0;
  }
  .textList {
    padding: px2rem(10);
  
    span {
      font-size: px2rem(16);
      line-height: px2rem(25);
      min-width: px2rem(40);
      text-align: center;
      padding: px2rem(5) px2rem(15);
      border-radius: px2rem(25);
      border: 1px solid  #d3d4da;
      color: #333;
      margin:px2rem(4) ;
      display: inline-block;
     
    }
    
  }
}
</style>
