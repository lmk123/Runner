<template>
  <div>请先选择适合你的训练:</div>
  <ul>
    <li v-for="train in $parent.trains" @click="choose(train)">
      <s-train :train="train"></s-train>
    </li>
  </ul>
</template>

<script type="text/babel">
  export default {
    methods: {
      choose( train ) {
        this.$parent.train = train;
        this.$route.router.go( '/running/start' );
      }
    }
  };
</script>
