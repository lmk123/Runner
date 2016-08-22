<template>
  <div class="views">
    <div class="view">
      <div class="pages">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import store from '../vuex/store'

  export default {
    store
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "../../node_modules/framework7/dist/css/framework7.ios.css";
</style>
