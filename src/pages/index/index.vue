<template>
  <div class="index">
    <portrait></portrait>
    <div class="index-card">
      首页
    </div>
  </div>
</template>

<script>
  import portrait from 'ass/portrait'
  export default {
    name: '',
    data () {
      return {}
    },
    created: function () {

    },
    components: {
      portrait
    }
  }
</script>

<style lang="less" scoped>
  @import '../../less/value.less';
  .index{
    padding:25px 15px;
    background-color: @back-color;
    .card-container{
      margin-top: 20px;
      background-color: #fff;
      .card-content{
        padding: 20px;
      }
      .card-footer{
        margin-top: 15px;
        font-size: 12px;
        color:@tip-color;
        justify-content: flex-start;
        p{
           margin: 0 5px;
        }
      }
    }
  }
</style>
