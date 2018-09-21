<template>
  <div class="portrait">
    <img :src="userInfo.avatarUrl" class="head-portrait">
    <div class="portrait-tip">Picker</div>
    <div class="text-tip">
      商品商品商品商品
      <div class="arrow-tip"></div>
    </div>
  </div>
</template>

<script>
export default {
//  props: ['text']
  data () {
    return {
      userInfo: {}
    }
  },
  created () {
    let userInfo = wx.getStorageSync('userInfo')
    this.userInfo = userInfo
  }
}
</script>

<style lang="less" scoped>
  @import '../less/value.less';
  .portrait{
    position:relative;
    .head-portrait{
      width:50px;
      height:50px;
      vertical-align: top;
      display:inline-block;
      border-radius: 50px;
      border:1px solid @primary-orange;
    }
    .portrait-tip{
      position: absolute;
      top:-23%;
      left:7%;
      border-radius: 8px;
      padding: 2px 4px;
      font-size: 12px;
      color:#fff;
      background: -webkit-linear-gradient(@sub-orange, @primary-orange);
      background: linear-gradient(@sub-orange, @primary-orange);
    }
  }
  .text-tip{
    display: inline-block;
    padding:12px 10px;
    margin-left: 6%;
    border-radius: 5px;
    color:#fff;
    position: relative;
    background: -webkit-linear-gradient(@sub-green, @primary-green);
    background: linear-gradient(@sub-green, @primary-green);
    /*不能实现渐变色，跟矩形框颜色不符*/
    .arrow-tip{
      width : 0px ;
      height : 0px ;
      border-width : 10px ;
      border-style : solid ;
      border-color : transparent  @primary-green  transparent   transparent ;
      position : absolute ;
      top : 25% ;
      left : -20px ;
    }
  }
</style>
