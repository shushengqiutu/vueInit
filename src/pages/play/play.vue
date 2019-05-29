<template >
  <div class="play">
    
        <my-audio  :info="info"></my-audio>
        
     
      </div>
</template>

<script>
import {mapActions,mapState} from "vuex"
import myAudio from './audio/audio.vue'
export default {
  components:{
      myAudio
  },
  beforeMount() {
      const id=this.$route.query.id
      const info=this.$route.query.info
      this.get_song_url({id:id})
      this.get_lyric({id:id})

  },
 
  computed: {
     
       info(){
           return this.$route.query.info
       }
   
  },
  methods: {
        ...mapActions(['get_song_url',"get_lyric"])
  }
};
</script>


 <style lang="scss" scoped>
   
</style>
 