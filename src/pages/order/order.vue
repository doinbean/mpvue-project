<template>
  <div class="order warp">
    <div>
      <ZanTab v-bind="tab" :componentId="'tab'" @change="handleZanTabChange"/>
    </div>
    <div class="order-container">
      <div class="zan-panel">
        <div class="zan-cell">
          <div class="zan-cell__bd order-time">2018-06-02 20:00:00 下单</div>
          <div class="zan-cell__ft">已经完成</div>
        </div>
      </div>
      <div class="order-card">
        <div class="card-img flex">
          <img src="" style="width: 40px;height: 40px">
          <p>汉口二厂汽水</p>
        </div>
      </div>
      <div class="card-count">
        <div class="zan-cell">
          <div class="zan-cell__bd count-left">1盒装 X 1</div>
          <div class="zan-cell__ft">$ 12.00</div>
        </div>
        <div class="zan-cell">
          <div class="zan-cell__bd">2盒装 X 1</div>
          <div class="zan-cell__ft">$ 1145.20</div>
        </div>
      </div>
      <div class="card-total clear">
        <div v-if="tab.selectedId==0" class="zan-cell">
          <div class="zan-cell__bd order-time">共2件商品</div>
          <div class="zan-cell__ft">总价：<span>$ 35.00</span></div>
        </div>
        <button v-if="tab.selectedId==1" class="fun-small-btn m-around-10">去支付</button>
      </div>

    </div>
  </div>
</template>

<script>
  import ZanTab from 'ass/zan/tab'
  export default {
    components: {
      ZanTab
    },
    data () {
      return {
        tab: {
          list: [{
            id: '0',
            title: '全部'
          }, {
            id: '1',
            title: '待付款'
          }, {
            id: '2',
            title: '待发货'
          }, {
            id: '3',
            title: '待收货'
          }],
          scroll: false,
          selectedId: '0'
        }
      }
    },
    methods: {
      ...ZanTab.methods,
      handleZanTabChange (e) {
        console.log(e)
        const {componentId, selectedId} = e
        this[componentId].selectedId = selectedId
        console.log(this.tab.selectedId)
      }
    }
  }
</script>
<style lang="less" scoped >
  @import '../../less/value.less';
  .order{
    padding: 10px 0 20px 0;
    .order-container{
      background:#fff;
      .order-time{
        color:@tip-color;
      }
      .order-card{
        padding: 10px;
        .card-img{
          background: @back-color;
          padding: 10px;
          justify-content:flex-start;
          p{
            font-size: 14px;
            color:@sub-text;
            padding-left: 10px;
          }
        }
      }
      .card-count{
        .count-left{
          color:@primary-text;
          font-size: 18px;
        }
      }
      .card-total{
        padding: 5px 0;
        border-top:1px solid @border-color;
        span{
          color:@primary-color;
          font-size: 18px;
        }
      }
    }
  }
</style>
