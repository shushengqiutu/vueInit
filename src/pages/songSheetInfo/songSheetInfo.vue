<template >
      <div class="songSheetInfo"> 
          <Info  :info="song_list_info"></Info>
          <List :hot_songs="song_list_info.tracks"></List>
          
     </div>
</template>

<script>

import { mapState } from 'vuex';
import Info from "../../components/listInfo/listInfo.vue"
import List from "../../components/music_list/hot_list.vue"
export default {
    components:{
      Info,List
    },
    mounted(){
        const id=this.$route.query.songListId
    
       this.$store.dispatch("get_song_list_info",{id})
      
    },
    data(){
        return {
            id:this.$route.query.songListId
        }
    },
    computed:{
        ...mapState(["song_list_info"])
    }
}
</script>


 <style lang="scss" scoped>
 
 </style>
 