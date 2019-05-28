<template >
  <div
    class="my_audio"
    ref="myAudio">
    <div class="ta_c" @click="control">
      <img class="Rotation img" src="./1.jpg" :class="{'pause':!flag}"/>
       <i  v-show="!flag" class="el-icon-caret-right btn_play">  </i>
       <audio ref="music"  :src="song[0].url" loop  ></audio>
       
    </div> 
    <div class="lyric"> 
      <h3> {{info.split("-")[0]}} -<span class="al"> {{info.split("-")[1]}} </span> </h3>
    </div>

  </div>
</template>

<script>
export default {

  data(){
      return{
        flag:false
      }
  },
  mounted() {
    this.setHight();
    console.log(this.lyric.split(' '))
  
  },

  props: {
    song: {},
    lyric:{
      type:String
    },
    info:{
      type:String
    }
   
  },
  methods: {
    setHight() {
      const h = document.documentElement.clientHeight;
      this.$refs.myAudio.style.height = h + "px";
    },
    control(){
       this.flag=!this.flag
       if(this.flag){
         this.$refs.music.play()
       }else{
         this.$refs.music.pause();
       }
    }
    
  }
};
</script>


 <style lang="scss" scoped>
.my_audio {
 

  position: relative;
  background:linear-gradient(to bottom right, #444C47, #65665E);
 
}
.ta_c {
    text-align: center;
    height: 60%;
    background: pink;
    position: relative;
    padding-top: px2rem(50);
    .btn_play{
      
       position: absolute;
       width:px2rem(50);
       height: px2rem(50);
       left: 50%;
       top: 50%;
       margin-left:px2rem(-25);
       margin-top: px2rem(-60);
       color: #fff;
       font-size: px2rem(50);
       background: #8B8B7E;
       border-radius: 50%;
       border: 1px solid #fff;
    }
    
  }

  @-webkit-keyframes rotation {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }

  .Rotation {
    -webkit-transform: rotate(360deg);
    animation: rotation 6s linear infinite;
   
   
 
  
  }

  .img {
    border-radius: 50%;
    width: px2rem(180);
    height: px2rem(180);
    background-color: #181818;
    display:block;
    
    padding: px2rem(40);
    border: px2rem(10) solid #3F4945;
    margin: 0 auto;
  }
  .play {
    animation: mymove 5s infinite ease;
  }
  .restart {
    animation: mymove1 5s infinite ease;
  }
  .pause {
    animation-play-state: paused;
  }
  .lyric{
     background: #ff4400;
     position:absolute;
     top:55%;
     width: 100%;
     font-size: px2rem(18);
     text-align: center;
     height: 35%;
     color: #fff;
     .al{
       font-size: px2rem(14);
       color: #ccc;
     }

  }
</style>
 