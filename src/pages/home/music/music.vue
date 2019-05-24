<template>
      <div class="music"> 
           <Title :song="song"></Title>
           <pic-song></pic-song>
           <Title :song="musicNew"></Title>
           <music-list></music-list>
           <music-list></music-list>
           <music-list></music-list>
         

      </div>
</template>
   <script>
   import Title from "../../../components/title/title.vue"
   import musicList from "../../../components/music_list/music_list.vue"
   

   import picSong from "./picSong/picSong.vue"
   export default {
        data(){
           return{
                 song:"推荐歌曲",
                 musicNew:"最新音乐"
           }
        },

       components:{
             Title,picSong, musicList 
       }
   }
   </script>
   
<style lang="scss" scoped>
 .music{
             margin-top: px2rem(104)
         }
</style>
