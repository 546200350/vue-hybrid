<template>
  <div class="MePage">测试页面1<van-button type="primary">按钮</van-button></div>
</template>

<script>
import Vue from 'vue';
import { Button, Cell } from 'vant';
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
  created(){
    this.$http.get('/nav/sortnav',{a:1,b:2}).then((res)=>{});
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../../assets/common.less";
</style>
