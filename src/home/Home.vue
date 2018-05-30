<template>
  <div class="HomePage">
    <template v-for="item,index in goodsList">
      <GoodsCell :name="item.name" :price="item.price" :key="index" @click="jumpMe"/>
    </template>
  </div>
</template>

<script>
  import GoodsCell from "../components/Goods.vue";

  export default {
    name: 'Home',
    data() {
      return {
        msg: '商品名称',
        price: "商品价格",
        goodsList:[{
          name:"菠菜",
          price:100
        },{
          name:"菠菜",
          price:100
        },{
          name:"菠菜",
          price:100
        },{
          name:"菠菜",
          price:100
        },{
          name:"菠菜",
          price:100
        },{
          name:"菠菜",
          price:100
        }]
      }
    },
    created() {
    },
    methods:{
      jumpMe(){
        api.openWin({
          name: "me",
          url: "../me/me.html"
        });
      }
    },
    components: { GoodsCell }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
</style>
