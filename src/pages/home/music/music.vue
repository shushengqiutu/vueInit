<template>
      <div class="music"> 
           <Title :song="song"></Title>
           <pic-song :picsongs="pic_songs" :a="1"></pic-song>
           <Title :song="musicNew"></Title>
           <music-list></music-list>
         
           <my-foot></my-foot>
         
             
      </div>
</template>
   <script>
   import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
   import Title from "../../../components/title/title.vue"
   import myFoot from "../../../components/foot/footer.vue"
   import musicList from "../../../components/music_list/music_list.vue"
   import picSong from "./picSong/picSong.vue"
   export default {
        data(){
           return{
                 song:"推荐歌曲",
                 musicNew:"最新音乐",
                 pic_songs:[]
                 
           }
        },
        beocreated(){
           
          
        },
        mounted(){
       
        },
        computed:{
         
        
        },
        methods:{
            ...mapGetters(["f_recommended_songs"])
        },
       components:{
             Title,picSong, musicList,myFoot
       }
   }
   </script>
   
<style lang="scss" scoped>
 .music{
             margin-top: px2rem(104)
         }
</style>
