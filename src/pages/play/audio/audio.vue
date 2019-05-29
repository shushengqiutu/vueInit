<template >
  <div
    class="my_audio"
    ref="myAudio"
  >

    <div
      class="ta_c"
      @click="control"
    >
      <img
        class="Rotation img"
        src="./1.jpg"
        :class="{'pause':!flag}"
      />
      <i
        v-show="!flag"
        class="el-icon-caret-right btn_play"
      > </i>
      <audio
        ref="music"
        :src="song_url[0].url"
        loop
      ></audio>

    </div>
    <div class="lyric">

      <h3> {{info.split("-")[0]}} <span class="al"> {{info.split("-")[1]}} </span> </h3>
      <div class="l_c">
         <div class=" text_lc" :style="{marginTop:n}">
        <p
          v-for="(item,index) in newLc"
          :key=index
          :id="item[0]<currentTimes&&currentTimes<(newLc[index+1]?newLc[index+1][0]:durationTimes)?'red':null "
          :class="item[0]<currentTimes&&currentTimes<(newLc[index+1]?newLc[index+1][0]:durationTimes)?re(index):null "
        >   {{item[1]}}  </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import {mapState} from "vuex"
export default {
  data() {
    return {
      flag: false,
      currentTimes: "",
      durationTimes: "",
      n:64,
      x:[],
     
    };
  },
  mounted() {
    this.setHight();
    this._addEventListenner();
  },
  watch:{

  },
  
  props:['info'],
  computed:{
    ...mapState(["song_url","lyric"]),
    newLc() {
       return this.f_lyric(this.lyric.lyric);
    }
  },
  
  methods: {
  
   re(index) {
       
     if(parseInt(this.currentTimes)===parseInt(this.duration)){
          this.n=64
      }
       
      if(this.x.indexOf(index)==-1){
            this.x.push(index)
              console.log(index)
              this.n=parseInt(this.n)-64+"px" 
      }

      
    },
    setHight() {
      const h = document.documentElement.clientHeight;
      this.$refs.myAudio.style.height = h + "px";
    },
    control() {
      this.flag = !this.flag;
      if (this.flag) {
        this.$refs.music.play();
      } else {
        this.$refs.music.pause();
      }
    },
    //歌词数据处理
    f_lyric(str) {
      let arry = str.split("\n"); //["[00:00.000]隔壁老樊","[] wwwwww"]
      return arry.map((item, index) => {
        let sub_arry = item.slice(1).split("]");
        let numArry = sub_arry[0].split(":");
     
        let c = parseInt(numArry[0]) * 60 + Math.floor(numArry[1]*100)/100;
        
        sub_arry[0] = c;
        return (item = sub_arry);
      });
    },
    //歌词实时[播放时间
    _addEventListenner() {
      this.$refs.music.addEventListener("timeupdate", this._currentTime);
      this.$refs.music.addEventListener("canplay", this._durationTime);
    },
    _romoveEventListenner() {
      this.$refs.music.removeEventListener("timeupdate", this._currentTime);
      this.$refs.music.removeEventListener("canplay", this._durationTime);
    },
    _currentTime() {
      this.currentTimes = this.$refs.music.currentTime;
    },
    _durationTime() {
      this.durationTimes = this.$refs.music.duration;
    }
    // 歌词盒子移动
  },
  beforeDestroy(){
    this._romoveEventListenner()
  }
  

};
</script>


 <style lang="scss" scoped>
.my_audio {
  position: relative;
  background: linear-gradient(to bottom right, #444c47, #65665e);
}
.ta_c {
  text-align: center;
  height: 60%;
  overflow: hidden;

  position: relative;
  padding-top: px2rem(50);
  .btn_play {
    position: absolute;
    width: px2rem(50);
    height: px2rem(50);
    left: 50%;
    top: 50%;
    margin-left: px2rem(-25);
    margin-top: px2rem(-60);
    color: #fff;
    font-size: px2rem(50);
    background: #8b8b7e;
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
  display: block;

  padding: px2rem(40);
  border: px2rem(10) solid #3f4945;
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
.lyric {
  position: absolute;
  top: 55%;
  width: 100%;
  font-size: px2rem(18);
  text-align: center;
  height: 36%;
  color: #fff;
  overflow: hidden;
  h3 {
      height: px2rem(30);
      font-size: px2rem(20);
    .al {
      font-size: px2rem(16);
      color: #ccc;
    }
  }

  .l_c {
    margin-top: px2rem(68);
    overflow: hidden;
    height: px2rem(96);
    

    p {
      
      font-size: px2rem(18);
      line-height: 1.8;
      position: relative;
      height: px2rem(32);
      
    }
  }
}
.text_lc{
  
}
#red {
  color: red;
  
}
</style>
 