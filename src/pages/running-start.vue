<template>
  <f7-content-block>
    训练之前,请做 5~10 分钟的热身运动,之后点击下面的按钮开始跑步.
  </f7-content-block>

  <f7-content-block title="热身计时" inner>
    <s-timer type="countup" auto v-ref:timer></s-timer>
  </f7-content-block>

  <f7-content-block>
    <input type="button" class="button" value="开始跑步" v-touch:tap="run" />
  </f7-content-block>
</template>

<script type="text/babel">
  import { running } from '../vuex/getters';
  export default {
    vuex: {
      getters: {
        running
      }
    },
    route: {
      activate() {
        this.running.title = '跑前热身';
      }
    },
    methods: {
      async run() {
        const { timer } = this.$refs;
        if ( timer.min < 5 ) {
          timer.pause();
          const ok = this.$root.$refs.modal.confirm( '跑前热身至少持续 5 分钟,确认要去跑步吗?' );
          if ( !ok ) {
            timer.continue();
            return;
          }
        }
        this.$route.router.go( '/running/timer' );
      }
    }
  };
</script>
