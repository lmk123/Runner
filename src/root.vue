<template>
  <f7-modal v-ref:modal></f7-modal>
  <f7-views>
    <f7-view>
      <f7-pages>
        <router-view></router-view>
      </f7-pages>
    </f7-view>
  </f7-views>
</template>

<script type="text/babel">
  import store from './vuex/store';

  export default {
    store,
    replace: false
  };
</script>

<style>
  @import url("../node_modules/framework7/dist/css/framework7.ios.css");
</style>
