<template >
  <div
    class="reg"
    ref="myReg"
  >
    <h2>注册</h2>
    <img
      src="./timg.jpg"
      alt=""
    >
    <p class="phonebox"> <input
        class="phone"
        type="text"
        v-model="phone"
        placeholder="手机号"
        autofocus="autofocus"
      >
      <i
        class="el-icon-close  icon"
        :class="{'ccc':phone}"
        @click="phone=''"
      > </i>
      <button
        class="vd"
        @click="sendVd"
        :disabled='!flag'
        :class="flag?'d':'f'"
      >{{tip}}{{n}} </button>

    </p>
    <p> <input
        type="text"
        placeholder="验证码"
      ></p>
    <p> <input
        type="password"
        placeholder="密码"
      ></p>
    <p> <input
        type="text"
        placeholder="昵称"
      ></p>
    <p> <button
        class="btn"
        @click="reg"
      > 注册</button></p>
    <p> 已有账号，去<span @click="jump">登录</span></p>

  </div>
</template>

<script>
import { Toast } from "mint-ui";
import { check_phone } from "../../myValidator/index.js";
export default {
  data() {
    return {
      tip: "验证码",
      n: "",
      phone: "",
      time: null,
      flag: false
    };
  },
  mounted() {
    this.setHight();
  },
  watch: {
    phone(news) {
      if (check_phone(news)) {
        this.flag = true;
      } else {
        this.flag = false;
      }
    }
  },

  methods: {
    reg() {
      console.log(1);
      Toast({
        message: "您数入的验证码有误",
        className:"err1",
        duration: 1000
      });
    },
    setHight() {
      const h = document.documentElement.clientHeight;
      this.$refs.myReg.style.height = h + "px";
    },
    jump() {
      this.$router.push({ name: "logoin" });
    },
    sendVd() {
      if (check_phone(this.phone)) {
        clearInterval(this.time);
        this.n = 5;
        this.tip = `已发送`;
        this.flag = false;
        this.time = setInterval(() => {
          this.n = this.n - 1;
          if (this.n === -1) {
            clearInterval(this.time);
            this.flag = true;
            this.tip = `验证码`;
            this.n = "";
          }
        }, 1000);
      }
    }
  }
};
</script>
   <style lang="scss">
    .err1 .mint-toast-text{
     color: #f50;
     font-size: px2rem(18);
 } 
   </style>

 <style lang="scss" scoped>
 
.reg {
  background-image: url("../logoin/logobg.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  font-size: px2rem(18);
  text-align: center;

  h2 {
    padding-top: px2rem(60);
    font-size: px2rem(18);
  }
  img {
    margin: px2rem(60) 0;
    width: px2rem(60);
    height: px2rem(60);
    border-radius: 50%;
    overflow: hidden;
  }
  .phonebox {
    display: flex;
    .phone {
      width: px2rem(160);
    }

    .vd {
      font-size: px2rem(16);
      background: #ccc;
      width: px2rem(90);
      line-height: px2rem(30);
      text-align: center;
      padding: 0;
      outline: none;
      border: 0;
      color: #fff;
    }
    .d {
      background: #f40;
    }
    .f {
      background: #cccccc;
    }
  }
  p {
    width: px2rem(260);
    margin: px2rem(20) auto;
    .icon {
      color: #ffffff;
      line-height: px2rem(30);
      font-size: px2rem(12);
      background: #fff;
      padding-right: px2rem(5);
    }
    .ccc {
      color: #ccc;
    }

    .btn {
      width: px2rem(260);
      outline: none;
      height: px2rem(30);
      border-radius: px2rem(25);
      font-size: px2rem(18);
      color: #fff;
      background: #f40;
      border: 1px soli #f50;
      line-height: px2rem(30);
    }

    input {
      font-size: px2rem(18);
      width: px2rem(250);
      height: px2rem(30);
      outline: none;
      padding-left: px2rem(10);
    }
    span {
      color: #f40;
      cursor: pointer;
    }
  }
}
</style>