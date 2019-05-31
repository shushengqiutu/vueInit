<template>
  <div id="app">

    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  created() {
     this.get_recommended_songs();
     this.get_new_songs();
  },
  mounted() {
   
  
  },
  methods: {
    ...mapActions(["get_recommended_songs", "get_new_songs",])
  }
};
</script>

<style>

@import "./assets/lib/resetCss/reset.css";
</style>
