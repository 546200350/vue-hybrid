<template>
  <div class="timmer" v-if="theme"><span>{{hh||num2}}</span>:<span>{{mm||num2}}</span>:<span>{{ss||num2}}</span></div>
  <div class="timmer" v-else>剩余<span>{{dd||num2}}</span>天<span>{{hh||num2}}</span>时<span>{{mm||num2}}</span>分<span>{{ss||num2}}</span>秒</div>
</template>

<script>
  export default {
    props: ["end","theme"],
    data: function () {
      return {
        dd: "00",
        hh: "00",
        mm: "00",
        ss: "00",
        num2: "00",
      }
    },
    mounted: function () {
      if (!this.end) {
        this.end = "2018/05/22 09:18:30";
      }
      setInterval(() => {
        const time = this.GetRTime(this.end);
        this.dd = time[0];
        this.hh = time[1];
        this.mm = time[2];
        this.ss = time[3];
        // console.log(this.dd, this.hh, this.mm, this.ss);
      }, 1000);
    },
    methods: {
      GetRTime: function (str) {
        const EndTime = new Date(str);
        const NowTime = new Date();
        const t = Math.max(0, EndTime.getTime() - NowTime.getTime());
        let d = Math.floor(t / 1000 / 60 / 60 / 24);
        let h = Math.floor(t / 1000 / 60 / 60 % 24);
        let m = Math.floor(t / 1000 / 60 % 60);
        let s = Math.floor(t / 1000 % 60);
        if (d < 10) {
          d = "0" + d;
        }
        if (h < 10) {
          h = "0" + h;
        }
        if (m < 10) {
          m = "0" + m;
        }
        if (s < 10) {
          s = "0" + s;
        }
        return [d, h, m, s];
      }
    }
  }
</script>
<style lang="less">
  @import "../assets/common";
  .timmer{
    font-size: 12px;
    & span{
      background-color: black;
      color: white;
      margin: 0 3px;
      border-radius: 2px;
      padding: 0.01rem 0.08rem;
    }
    & span:last-child{
      background-color: @mainColor;
    }
  }
</style>
