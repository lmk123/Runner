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
  export default {
    route: {
      activate() {
        this.$parent.title = '跑前热身';
      }
    },
    methods: {
      run() {
        const { timer } = this.$refs;
        if ( timer.min < 5 ) {
          timer.pause();
          this.$root.$refs.modal
                  .confirm( '跑前热身至少持续 5 分钟,确认要去跑步吗?' )
                  .then( ( ok )=> ok ? this.$route.router.go( '/running/timer' ) : timer.continue() );
        } else {
          this.$route.router.go( '/running/timer' );
        }
      }
    }
  };
</script>
