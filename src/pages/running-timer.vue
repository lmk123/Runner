<template>
  第 {{$parent.nextWeek}} 周第 {{$parent.nextTrainNo}} 次训练:
  <s-train :train="$parent.train"></s-train>
  <br>
  当前进度:第 {{currentRepeat}} 次,{{$parent.train.steps[currentStep].name}} {{$parent.train.steps[currentStep].time}} 分钟,还剩
  <s-timer v-ref:timer></s-timer>
  <br>
  <button>暂停</button>
  <button>停止训练</button>
  <a v-link="'/running/end'">若完成</a>
</template>

<script type="text/babel">
  export default {
    data() {
      return {
        currentRepeat: 1,
        currentStep: 0
      };
    },
    ready() {
      const { timer } = this.$refs;

      timer.start( 2 );
    }
  };
</script>
