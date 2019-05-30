<template>
  <div class="search">
    <sub-search></sub-search>

    <h3 class="hotSearch" v-show="msg" :class="{blue:flag}"> {{msg}}</h3>
    <div
      class="textList"
      v-if="!flag"
    >
      <span
        v-for="(item,index) in hot_search"
        :key="index"
      > {{item.first}}</span>
    </div>
    <ul
      v-else
      class="suggest"
    >
      <li class="sgList" v-for="(item,index) in suggest " :key="index"> <i class="el-icon-search"> </i> {{item.keyword}}</li>
    </ul>

  </div>

</template>
   <script>
import subSearch from "../../../components/search/sub_search.vue";
import { mapState } from "vuex";

export default {
  data() {
    return {
      flag: false,
      msg:"热门搜索",
      blue:"blue"
    };
  },
  components: {
    subSearch
  },
  mounted() {
     this.$store.dispatch("get_hot_search");
  },
  computed: {
    ...mapState(["hot_search", "targets","suggest"])
  },
  watch: {
    targets(tg,oldTg) {
     
       this.flag = true;
        if(tg){
         this.msg=`搜索 "${tg}"`
        }else{
          this.flag = false;
          this.msg=tg
        }
    }
  }
}
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
      border: 1px solid #d3d4da;
      color: #333;
      margin: px2rem(4);
      display: inline-block;
    }
  }

  .suggest {
    height: 300px;
   
    .sgList{
    font-size: px2rem(15);
    line-height: px2rem(50);
    height: px2rem(50);
    transform-origin: top left;
    border: 0 solid rgba(0, 0, 0, 0.1);
    border-bottom-width: 1px;
    }
  }

}
.blue{
   color:  #507daf;
   transform-origin: top left;
    border: 0 solid rgba(0, 0, 0, 0.1);
    height: px2rem(28);
    border-bottom-width: 1px; 
    padding: 0;
  
}
</style>
