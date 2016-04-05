<template>
  <div class="content-block">
    现在请热身 5~10 分钟,让体温慢慢降下来.
  </div>
  <div class="content-block-title">热身计时</div>
  <div class="content-block">
    <div class="content-block-inner">
      <s-timer type="countup" auto v-ref:timer></s-timer>
    </div>
  </div>
  <div class="content-block">
    <input type="button" class="button" value="热身完成" @click="finish" />
  </div>
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
          finished: true,
          date: Date.now()
        } );
        this.$route.router.go( '/' );
      },

      finish() {
        const { timer } = this.$refs;
        if ( timer.min < 5 ) {
          timer.pause();
          this.$root
                  .confirm( '跑后热身至少持续 5 分钟,确认要去跑步吗?' )
                  .then( this.go, timer.continue );
        } else {
          this.go();
        }

      }
    }
  };
</script>
