<template>
  <s-train :train="$parent.train"></s-train>
  <br>
  当前进度:第 {{currentRepeat}} 次,{{$parent.train.steps[currentStep].name}} {{$parent.train.steps[currentStep].time}} 分钟,还剩
  <s-timer v-ref:timer></s-timer>
  <br>
  <button v-show="paused" @click="continue">继续</button>
  <button v-else @click="pause">暂停</button>
  <button @click="stop">停止训练</button>
  <a v-link="'/running/end'">若完成</a>
</template>

<script type="text/babel">
  export default {
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
        if ( confirm( '确定要中止这次训练吗?' ) ) {
          this.$route.router.go( '/' );
        } else {
          this.$refs.timer.continue();
        }
      }
    },
    ready() {
      const { train } = this.$parent;
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
