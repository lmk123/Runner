<template>
  <div class="content-block">
    训练之前,请做 5~10 分钟的热身运动,之后点击下面的按钮开始跑步.
  </div>
  <div class="content-block-title">热身计时</div>
  <div class="content-block">
    <div class="content-block-inner">
      <s-timer type="countup" auto v-ref:timer></s-timer>
    </div>
  </div>
  <div class="content-block">
    <input type="button" class="button" value="开始跑步" @click="run" />
  </div>
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
          this.$root
                  .confirm( '跑前热身至少持续 5 分钟,确认要去跑步吗?' )
                  .then( ()=> {
                    this.$route.router.go( '/running/timer' );
                  }, timer.continue );
        } else {
          this.$route.router.go( '/running/timer' );
        }
      }
    }
  };
</script>
