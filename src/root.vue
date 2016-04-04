<template>
  <router-view></router-view>
</template>

<script type="text/babel">
  import store from './vuex';
  export default {
    store ,
    replace : false
  };
</script>
