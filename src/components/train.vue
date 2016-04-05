<template>
  <span v-for="step in train.steps">
  {{step.name}} {{step.time}} 分钟,
</span>共做 {{train.repeat}} 次
</template>

<script type="text/babel">
  export default {
    props: {
      train: {
        type: Object,
        required: true
      }
    }
  };
</script>
