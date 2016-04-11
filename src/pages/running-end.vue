<template>
  <f7-content-block>
    现在请热身 5~10 分钟,让体温慢慢降下来.
  </f7-content-block>
  <f7-content-block title="热身计时" inner>
    <s-timer type="countup" auto v-ref:timer></s-timer>
  </f7-content-block>
  <f7-content-block>
    <input type="button" class="button" value="热身完成" @click="finish" />
  </f7-content-block>
</template>

<script type="text/babel">
  import { running } from '../vuex/getters';
  export default {
    vuex: {
      getters: { running }
    },
    route: {
      activate() {
        this.running.title = '跑后热身';
      }
    },
    methods: {
      go() {
        this.$store.dispatch( 'setProcess', {
          week: this.running.week,
          no: this.running.no,
          date: Date.now()
        } );
        this.$route.router.go( '/' );
      },

      finish() {
        const { timer } = this.$refs;
        if ( timer.min < 5 ) {
          timer.pause();
          this.$root.$refs.modal
                  .confirm( '跑后热身至少持续 5 分钟,确认要结束热身吗?' )
                  .then( ( ok )=> ok ? this.go() : timer.continue() );
        } else {
          this.go();
        }

      }
    }
  };
</script>
