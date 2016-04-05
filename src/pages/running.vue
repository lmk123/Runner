<template>
  你正在进行第 {{nextWeek}} 周的第{{nextTrainNo}}次训练.<br>
  <router-view></router-view>
</template>

<script type="text/babel">
  import { week, no } from '../vuex/getters';
  import plan13 from '../others/plan';
  export default {
    vuex: {
      getters: {
        week,
        no
      }
    },
    data() {
      let nextWeek = this.week, nextTrainNo = this.no + 1;

      if ( 1 === nextTrainNo ) {
        nextWeek += 1;
      }

      const trains = plan13.plans[ nextWeek - 1 ][ nextTrainNo - 1 ];

      const data = {
        nextWeek,
        nextTrainNo
      };

      if ( trains.length === 1 ) {
        data.train = trains[ 0 ];
        data._jumpTo = '/running/start';
      } else {
        data.trains = trains;
        data.train = null;
        data._jumpTo = '/running/choose';
      }

      return data;
    },
    ready() {
      this.$route.router.replace( this.$data._jumpTo );
    }
  };
</script>
