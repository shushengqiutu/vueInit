<template>
  <div class="search">
    <sub-search></sub-search>
    <h3 class="hotSearch"> 热门搜索</h3>
    <div class="textList">
      <span v-for="i in 6" :key="i"> 孤单心事</span>
    </div>
  </div>
</template>
   <script>

import subSearch from "../../../components/search/sub_search.vue";
 

export default {
  components: {
    subSearch
  },
  mounted(){
    const newPathName=this.$route.name
   
   
  },
  methods:{
  
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
