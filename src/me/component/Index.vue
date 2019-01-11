<template>
  <div class="MePage">
    <div class="header" :style="{backgroundImage:'url('+require('../../../static/mebg.png')+')'}">
      <div class="head tc">
        我的
        <van-icon name="shezhi" class="setting fr"/>
      </div>
      <div class="headcell">
        <img class="headpic" :src="user.pic" alt="">{{user.nickName}}
        <van-icon name="arrow" class="fr arrow"/>
        <div class="fr hym">
          <van-icon name="huiyuanma"/>
          <div>会员码</div>
        </div>
      </div>
    </div>
    <div class="waitPayCont">
      <div class="mainColor">等待付款</div>
      <div><span class="mainColor">9分钟</span>后订单关闭</div>
      <div class="waitPayImg">
        <img src="http://www.jyg.cn/uploadfile/product/10924/1497436802.jpg_220X220.jpg" alt="">
        <img src="http://www.jyg.cn/uploadfile/product/10924/1497436802.jpg_220X220.jpg" alt="">
      </div>
    </div>
    <div class="bgline"></div>
    <div class="pageContent">
      <van-cell title="我的订单" is-link value="查看全部订单"/>
      <van-row class="tc orderCont ">
        <van-col span="6">
          <van-icon name="daifukuan" class="orderIcon"/>
          <div class="orderlable">待付款</div>
        </van-col>
        <van-col span="6">
          <van-icon name="daifahuo" class="orderIcon"/>
          <div class="orderlable">待发货</div>
        </van-col>
        <van-col span="6">
          <van-icon name="daishouhuo" class="orderIcon"/>
          <div class="orderlable">待发货</div>
        </van-col>
        <van-col span="6">
          <van-icon name="tuikuan" class="orderIcon"/>
          <div class="orderlable">退款</div>
        </van-col>
      </van-row>
      <div class="bgline"></div>
      <van-row class="cellContent">
        <van-cell title="优惠卡" icon="youhuiquan" is-link>
          <van-icon name="youhuiquan" slot="icon"/>
          {{user.coupon}}张新到
        </van-cell>
        <van-cell title="购物卡" is-link>
          <van-icon name="gouwuqia" slot="icon"/>
          <template v-if="user.msg_of_card">
            {{user.msg_of_card}}<img class="hongbao" src="../../assets/images/hongbao.svg" alt="">
          </template>
        </van-cell>
        <van-cell title="账户余额" is-link>
          <van-icon name="zhanghuyue" slot="icon"/>
          查看
        </van-cell>
        <div class="bgline"></div>
        <van-cell title="收货地址" is-link>
          <van-icon name="dizhi1" slot="icon"/>
        </van-cell>
        <van-cell title="分享应用" is-link>
          <van-icon name="fenxiangyingyong" slot="icon"/>
        </van-cell>
        <van-cell title="帮助中心" is-link>
          <van-icon name="bangzhuzhongxin" slot="icon"/>
        </van-cell>
        <van-cell title="意见反馈" is-link @click="goFeedBack()">
          <van-icon name="yijianfankui" slot="icon"/>
        </van-cell>
      </van-row>
      <div class="bgline"></div>
    </div>
  </div>
</template>

<script>
  import {
    NavBar, BadgeGroup, Badge, Icon, Cell,
    Row,
    Col
  } from 'vant';

  export default {
    components: {
      [Badge.name]: Badge,
      [BadgeGroup.name]: BadgeGroup,
      [Icon.name]: Icon,
      [Row.name]: Row,
      [Col.name]: Col,
      [Cell.name]: Cell
    },
    name: 'Me',
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
      }
    },
    methods: {
      goFeedBack() {
        this.$openWin('feedback.html','./feedback.html');
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import '../../assets/common.less';

  .header {
    height: 150px;
    color: white;
    background-size: cover;
    padding: 0 15px;
  }

  .waitPayCont {
    position: relative;
    background-color: white;
    box-shadow: 0rem 0.133rem 0.533rem 0rem rgba(194, 17, 14, 0.1);
    padding: 15px;
    box-sizing: border-box;
    margin: 0 5%;
    height: 2.04rem;
    margin-top: -0.7rem;
    margin-bottom: 5px;
    border-radius: 5px;
    line-height: 22px;
    color: #999999;
    * {
      font-size: 0.32rem !important;
    }
  }

  .waitPayImg {
    position: absolute;
    right: 5px;
    top: 0;
    padding: 10px 0;
    max-width: 200px;
    overflow: auto;
    white-space: nowrap;
    img {
      border-radius: 50%;
      width: 50px;
      height: 50px;
      margin-right: 10px;
    }
  }

  .head {
    height: 44px;
    line-height: 44px;
    font-size: 17px;
    .setting {
      line-height: 44px;
      font-size: 17px;
    }
  }

  .headpic {
    width: 62px;
    height: 62px;
    vertical-align: top;
    margin-right: 10px;
  }

  .headcell {
    line-height: 62px;
    height: 34px;
    font-size: 18px;
    .hym {
      display: inline-block;
      line-height: 20px;
      text-align: center;
      div {
        font-size: 12px !important;
      }
      height: 62px;
      margin-top: 10px;
      margin-right: 10px;
    }
    .arrow {
      margin-top: 20px;
    }
  }

  .pageContent {
  }

  .orderCont {
    padding: 10px 0;
  }

  .orderlable {
    font-size: 0.32rem !important;
    color: #666666;
  }

  .orderIcon {
    font-size: 24px !important;
    color: @mainColor;
  }

  .cellContent {
    .van-icon {
      font-size: 18px;
      margin-right: 10px;
      color: #666666;
    }
  }

  .hongbao {
    vertical-align: middle;
    height: 26px;
    margin-top: -3px;
    display: inline-block;
  }
</style>
