<template>
  <div id="app">

    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "App",
  created() {
     this.get_recommended_songs();
  },
  mounted() {
   
  
  },
  methods: {
    ...mapActions(["get_recommended_songs", "get_add_msg"])
  }
};
</script>

<style>
@import "./assets/lib/resetCss/reset.css";
</style>
