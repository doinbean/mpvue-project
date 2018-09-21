<template>
  <div class="user container">
    <div class="user-container">
      <img :src="userInfo.avatarUrl" class="head-portrait">
      <div class="user-text">
        <p>{{userInfo.nickName}}</p>
        <p class="user-id">ID:12345</p>
      </div>
    </div>
    <div class="zan-panel user-tip">
      <div class="zan-cell zan-cell--access">
        <div class="zan-cell__bd">xxxxxxx</div>
        <div class="right-arrow"></div>
      </div>
    </div>
    <div class="zan-panel">
      <div style="position: static" class="zan-cell user-order zan-cell--access">
        <div class="zan-cell__bd">我的订单</div>
        <a href="/pages/order/order">
          <div class="zan-cell__ft">查看所有订单</div>
        </a>
      </div>
    </div>
    <div class="zan-panel">
      <div class="zan-cell zan-cell--access">
        <div class="zan-cell__bd">
          <div class="zan-icon zan-icon-location"></div><span class="ml-5">收货地址</span>
        </div>
        <div class="zan-cell__ft"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        userInfo: {}
      }
    },
    methods:{
      getUserInfo: function () {
        let userInfo = wx.getStorageSync('userInfo')
        this.userInfo = userInfo
      }
    },
    created () {
      this.getUserInfo()
    }
  }
</script>

<style lang="less" scoped>
  @import '../../less/value.less';
  .user{
    padding-top: 10px;
    background-color:@back-color;
  .user-container{
    background-color: #fff;
    padding:20px;
  .head-portrait{
    width:50px;
    height:50px;
    vertical-align: top;
    display:inline-block;
    border-radius: 50px;
  }
  .user-text{
    display: inline-block;
    margin-left: 10px;
  }
  .user-id{
    margin-top: 5px;
    font-size: 14px;
    color:@tip-color;
  }
  }
  .user-tip{
    margin-top: 0;
    color:#fff;
    background: -webkit-linear-gradient(@sub-green, @primary-green);
    background: linear-gradient(@sub-green, @primary-green);
  .right-arrow {
    display :inline-block;
    position: relative;
    width: 18px;
    height: 18px;
  }

  .right-arrow::after {
    display: inline-block;
    content: " ";
    height: 9px;
    width: 9px;
    border-width: 1px 1px 0 0;
    border-color: #fff;
    border-style: solid;
    transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
    position: absolute;
    top: 50%;
    right: 3px;
    margin-top: -6px;
  }
  }
  .user-order{
    color:@sub-text;
  }
  .user-option{
    border-top:1px solid @border-color;
    padding:20px 0;
  p{
    font-size:14px;
    margin-top:5px;
  }
  }
  }
</style>

