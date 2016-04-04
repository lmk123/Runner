<template>
  <p v-if="week">
    你已完成第 {{week}} 周的第 {{no}} 次训练!赶紧开始下一次训练吧!
  </p>
  <p v-else>
    你还没有开始训练,现在就开始吧!
  </p>
  <a v-link="'/running'">开始训练</a>
</template>

<script type="text/babel">
  import { week, no } from '../vuex/getters';
  export default {
    vuex: {
      getters: {
        week,
        no
      }
    }
  };
</script>
