<template>
  <div class="MyorderPage">
    <van-nav-bar
      :fixed="true"
      left-arrow
      class="header"
      title="意见反馈"
    />
    <div class="pageContent">
      <section>
        <van-cell title="反馈操作" is-link value="功能操作" @click="showMask=true"/>
        <van-field type="textarea" placeholder="请输入意见反馈，我们将为您不断改进"/>
      </section>
      <section class="imgArea">
        <div>上传图片(最多5张)</div>
        <van-row gutter="20">
          <van-col span="8">
            <img src="http://www.jyg.cn/uploadfile/product/10924/1497436802.jpg_220X220.jpg" alt="">
          </van-col>
          <van-col span="8">
            <img src="http://www.jyg.cn/uploadfile/product/10924/1497436802.jpg_220X220.jpg" alt="">
          </van-col>
          <van-col span="8">
            <img src="http://www.jyg.cn/uploadfile/product/10924/1497436802.jpg_220X220.jpg" alt="">
          </van-col>
          <van-col span="8">
            <van-icon name="jia-shangchuantupian"/>
          </van-col>
        </van-row>
      </section>
      <section>
        <van-field label="联系方式" placeholder="QQ、邮箱或手机等联系方式" />
      </section>
    </div>
    <van-button type="primary" bottom-action class="addAddress">提交</van-button>
    <van-popup v-model="showMask" position="bottom" :overlay="true">
      <transition name="van-slide-bottom">
        <van-picker
          show-toolbar
          :columns="sort_list"
          value-key="name"
          class="pickerView"
          v-show="showMask"
          @cancel="showMask=false"
        />
      </transition>
    </van-popup>
  </div>
</template>

<script>
  import {
    Icon,
    NavBar,
    Cell,
    Button,
    Picker,
    Popup,
    Field,
    Row,
    Col
  } from 'vant';

  export default {
    components: {
      [NavBar.name]: NavBar,
      [Icon.name]: Icon,
      [Button.name]: Button,
      [Cell.name]: Cell,
      [Picker.name]: Picker,
      [Popup.name]: Popup,
      [Field.name]: Field,
      [Row.name]: Row,
      [Col.name]: Col
    },
    name: 'FeedBack',
    data() {
      return {
        showMask: false,
        "sort_list": [{"name": "五谷杂粮", "id": 100, "num": 5}, {"name": "食用油", "id": 101, "num": 8}, {
          "name": "调味料",
          "id": 102,
          "num": 5
        }, {"name": "调味汁", "id": 103, "num": 5}, {"name": "调味酱", "id": 104, "num": 0}, {
          "name": "方便速食",
          "id": 105,
          "num": 0
        }, {"name": "罐头酱菜", "id": 106, "num": 0}, {"name": "南北干货", "id": 107, "num": 0}, {
          "name": "其它1",
          "id": 108,
          "num": 0
        }, {"name": "其它2", "id": 109, "num": 0}, {"name": "其它3", "id": 110, "num": 0}, {
          "name": "其它4",
          "id": 111,
          "num": 0
        }, {"name": "其它5", "id": 112, "num": 0}]
      }
    },
    created() {
    },
    methods: {
      onClick(key) {
        this.activeKey = key;
      },
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import '../../assets/common.less';

  .pageContent {
    padding: 50px 0;
  }
  section{
    margin-bottom: 15px;
    background-color: white;
  }
  .imgArea{
    padding: 10px;
    color: #666666;
    .van-row{
      margin-top: 10px;
    }
    .van-col{
      text-align: center;
    }
    img{
      width: 100px;
      height: 100px;
      border: 1px solid #e6e6e6;
      margin-bottom: 10px;
    }
    .van-icon{
      width: 100px;
      height: 100px;
      border: 1px solid #e6e6e6;
      line-height: 90px;
      font-size: 30px;
      margin-bottom: 10px;
    }
  }

</style>
<style>
  body {
    background-color: #F3F3F3;
  }

  .van-icon.van-icon-arrow.van-nav-bar__arrow.van-icon-arrow:before {
    color: #333333 !important;
  }

</style>
