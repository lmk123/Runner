<template>
  恭喜你完成今天的训练!现在请热身 5~10 分钟,让体温慢慢降下来.
  todo 至少五分钟后才能点击按钮
  <button @click="finish">完成训练</button>
</template>

<script type="text/babel">
  import { setTrain } from '../vuex/actions';

  export default {
    vuex: {
      actions: { setTrain }
    },
    methods: {
      finish() {
        this.setTrain( {
          week: this.$parent.nextWeek,
          no: this.$parent.nextTrainNo,
          finished: true,
          date: Date.now()
        } );
        this.$route.router.go( '/' );
      }
    }
  };
</script>
