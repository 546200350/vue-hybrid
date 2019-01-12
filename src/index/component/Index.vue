<template>
  <div class="MePage">
    <div>
      <van-button class="btn" type="primary">按钮</van-button>
      <van-button class="btn" type="primary">按钮</van-button>
      <van-button class="btn" type="primary">按钮</van-button>
      <van-button class="btn" type="primary">按钮</van-button>
    </div>测试页面1
  </div>
</template>

<script>
import Vue from "vue";
import { Button, Cell } from "vant";
Vue.use(Button);
export default {
  components: {},
  name: "Me",
  data() {
    return {
      activeKey: 0,
      user: {
        nickName: "登录/注册",
        pic: "../../../static/defaulthead.png",
        coupon: 3,
        balance: 0,
        msg_of_card: "充100送501"
      }
    };
  },
  created() {
    // api.ajax(
    //   {
    //     url: "http://39.98.50.55:8080/login",
    //     method: "post",
    //     data: {
    //       values: {
    //         name: "haha"
    //       },
    //       files: {
    //         file: "fs://a.gif"
    //       }
    //     }
    //   },
    //   function(ret, err) {
    //     if (ret) {
    //       alert(JSON.stringify(ret));
    //     } else {
    //       alert(JSON.stringify(err));
    //     }
    //   }
    // );
    this.$http
      .post("login", { account: "zhaodong", password: "123456" })
      .then(res => {});
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../../assets/common.less";
.MePage {
  background-color: blue;
  width: 375px;
  .btn {
    height: 56px;
    float: left;
    &:first-child {
      width: 134px;
      margin-right: 30px;
      margin-left: 13px;
      color: red;
    }
    &:nth-child(2) {
      width: 154px;
      color: yellow;
      margin-left: 30px;
      margin-right: 13px;
    }
  }
}
</style>
