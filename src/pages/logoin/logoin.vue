<template >
  <div
    class="logoin"
    ref="myLogo"
  >
    <h2> 登录</h2>
    <div class="logo">

      <img
        src="./timg.jpg"
        alt=""
      >
    </div>
    <div class="write">
      <p> <input
          type="text"
          class="phone"
          placeholder="请输入手机号"
        > </p>
      <p> <input
          type="password"
          class="password"
          placeholder="请输入密码"
        ></p>
      <p> <button class="btn"> 登录</button> </p>
    </div>
    <p class="register"> 没有账号去<span  @click="jump">注册</span></p>

  </div>
</template>
       
<script>
export default {
  mounted() {
    this.setHight();
  },
  methods: {
    setHight() {
      const h = document.documentElement.clientHeight;
      this.$refs.myLogo.style.height = h + "px";
    },
    jump(){
        this.$router.push({name:"reg"})
    }
  }
};
</script>


 <style lang="scss" scoped>
.logoin {
  height: 100%;
  text-align: center;
  background-image: url("./logobg.jpg");
  background-size: 100%;

  h2 {
    padding-top: px2rem(60);
    font-size: px2rem(18);
  }
  .logo {
    padding: px2rem(80);
    text-align: center;
    img {
      width: px2rem(60);
      height: px2rem(60);
      border-radius: 50%;
      overflow: hidden;
    }
  }
  .write {
    p {
      height: px2rem(30);
      line-height: px2rem(30);
      margin-bottom: px2rem(30);

      .phone {
         width: px2rem(250);
        height: px2rem(30);
        border-bottom: 1px solid #333;
        outline: none;
        font-size: px2rem(16);
      }
      .password {
       width: px2rem(250);
        height: px2rem(30);
        border-bottom: 1px solid #333;
        outline: none;
        font-size: px2rem(16);
      }
      .btn {
        width: px2rem(250);
        outline: none;
        height: px2rem(30);
        border-radius: px2rem(25);
        font-size: px2rem(18);
        color: #fff;
        background: #f40;
        border: 1px soli #f50;
        line-height: px2rem(30);
      }
    }
  }
  .register {
    font-size: px2rem(18);
    span{
        color: #f40;
        cursor: pointer;
    }
  }
}
</style>