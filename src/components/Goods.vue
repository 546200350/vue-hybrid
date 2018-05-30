<template>
  <div class="GoodsPage" @click="jumpMe">
    <img class="goodsPic" :src="require('../assets/logo.png')"/>
    <div class="name">{{name}}1</div>
    <div class="price">￥{{price}}</div>
  </div>
</template>

<script>
export default {
  name: 'GoodsCell',
  props:["name","price"],
  data () {
    return {}
  },
  created(){},
  methods:{
    jumpMe(){
      this.$emit("click");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.GoodsPage{
  background-color: #EFEFF4;
  margin:10px;
  padding:10px;
  padding-left: 80px;
  position: relative;
  min-height:50px;
  .goodsPic{
    width:50px;
    position: absolute;
    left:10px;
  }
  .name{
    font-size: 16px;
    color: #000;
  }
  .price{
    font-size: 13px;
    color: #999;
  }
}
</style>
