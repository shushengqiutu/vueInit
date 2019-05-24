<template>
  <div class="music_list">

    <div class="sub_list">
      <div class="song">
        <h3 class=" songName f-thide"> 残酷月光</h3>
        <p class="author f-thide"> 作者</p>
      </div>
      <div class="play">
        play
      </div>
    </div>
  </div>
</template>
   <script>
export default {};
</script>
   
<style lang="scss" scoped>
.music_list {
     height: px2rem(54);
     padding: px2rem(2) 0;
     transform-origin: top left;
     border: 0 solid rgba(0,0,0,.1);
     border-bottom-width: 1px;
    .sub_list{
        display: flex;
       .song{
           width: 80%;
           .songName{
             font-size: px2rem(17);
             line-height:px2rem(25);
             color: #333;
           }
           .author{
             font-size: px2rem(12);
             line-height:px2rem(18);
             color: #888;
           }
       }
       .play{
          width: 20%;
       }
    }
}
</style>