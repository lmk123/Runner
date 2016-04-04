<template>
  你将进行第 {{currentWork.week}} 周的第{{currentWork.no + 1}}次训练.<br>
  训练之前,请做 5~10 分钟的热身运动,之后点击下面的按钮开始跑步.<br>
  <a v-link="'/running/timer'">Start</a>
</template>

<script type="text/babel">
  import { currentWork } from '../vuex/getters';

  export default {
    vuex: {
      getters: {
        currentWork
      }
    }
  };
</script>
