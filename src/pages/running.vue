<template>
  <router-view></router-view>
</template>

<script type="text/babel">
  import { week, no } from '../vuex/getters';
  import plan13 from '../plans/13';
  export default {
    vuex: {
      getters: {
        week,
        no
      }
    },
    data() {
      let nextWeek = this.week, nextNo = this.no + 1;
      if ( nextNo === 4 ) {
        nextNo = 1;
        nextWeek += 1;
      }
      const plans = plan13.plans[ nextWeek ][ nextNo - 1 ];
      // todo 每天可能有多种训练方式
      return {
        nextWeek,
        nextNo,
        plan: plan13.plans[ nextWeek ]
      };
    }
  };
</script>
