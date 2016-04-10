<template>
  <f7-content-block title="当前进度" inner>
    第 {{currentRepeat}} 次,{{$parent.train.steps[currentStep].name}} {{$parent.train.steps[currentStep].time}} 分钟,还剩
    <s-timer v-ref:timer></s-timer>
  </f7-content-block>

  <f7-content-block>
    <p v-show="paused">
      <input type="button" class="button" value="继续" v-touch:tap="continue" />
    </p>
    <p v-else>
      <input type="button" class="button" value="暂停" v-touch:tap="pause" />
    </p>
    <p>
      <input type="button" class="button" value="停止训练" v-touch:tap="stop" />
    </p>
    <p>
      <a class="button" v-link="'/running/end'">跳过</a>
    </p>
  </f7-content-block>
</template>

<script type="text/babel">
  export default {
    route: {
      activate() {
        this.$parent.title = '跑步吧!';
      }
    },
    data() {
      return {
        paused: false,
        currentRepeat: 1,
        currentStep: 0
      };
    },
    methods: {
      pause() {
        this.paused = true;
        this.$refs.timer.pause();
      },
      continue() {
        this.paused = false;
        this.$refs.timer.continue();
      },
      stop() {
        this.$refs.timer.pause();
        this.$root.$refs.modal
                .confirm( '确定要中止这次训练吗?' )
                .then( ( ok )=> ok ? this.$route.router.go( '/' ) : this.$refs.timer.continue() );
      }
    },
    ready() {
      const { train } = this.$parent;
      console.log(this.$parent);
      if ( !train ) { return; }
      const { steps } = train;
      const stepLength = steps.length;
      const { timer } = this.$refs;

      timer.start( steps[ this.currentStep ].time );
      timer.$on( 'end', ()=> {
        this.currentStep += 1;
        if ( this.currentStep === stepLength ) {
          this.currentRepeat += 1;
          this.currentStep = 0;
        }
        if ( this.currentRepeat > train.repeat ) {
          this.$route.router.go( '/running/end' );
        } else {
          timer.start( steps[ this.currentStep ].time );
        }
      } );
    }
  };
</script>
