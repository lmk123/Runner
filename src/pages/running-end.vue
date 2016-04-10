<template>
  <f7-content-block>
    现在请热身 5~10 分钟,让体温慢慢降下来.
  </f7-content-block>
  <f7-content-block title="热身计时" inner>
    <s-timer type="countup" auto v-ref:timer></s-timer>
  </f7-content-block>
  <f7-content-block>
    <input type="button" class="button" value="热身完成" v-touch:tap="finish" />
  </f7-content-block>
</template>

<script type="text/babel">
  import { setTrain } from '../vuex/actions';

  export default {
    vuex: {
      actions: { setTrain }
    },
    route: {
      activate() {
        this.$parent.title = '跑后热身';
      }
    },
    methods: {
      go() {
        this.setTrain( {
          week: this.$parent.nextWeek,
          no: this.$parent.nextTrainNo,
          date: Date.now()
        } );
        this.$route.router.go( '/' );
      },

      finish() {
        const { timer } = this.$refs;
        if ( timer.min < 5 ) {
          timer.pause();
          this.$root.$refs.modal
                  .confirm( '跑后热身至少持续 5 分钟,确认要去跑步吗?' )
                  .then( this.go, timer.continue );
        } else {
          this.go();
        }

      }
    }
  };
</script>
