<template>
  <div class="content-block-title">选择适合你的训练</div>
  <div class="list-block media-list">
    <ul>
      <li v-for="train in $parent.trains">
        <a class="item-link item-content" v-touch:tap="choose(train)">
          <div class="item-inner">
            <div class="item-title-row">
              <div class="item-title" v-text="train.name"></div>
            </div>
            <div class="item-subtitle">
              <s-train :train="train"></s-train>
            </div>
          </div>
        </a>
      </li>
    </ul>
    <div class="list-block-label">此训练包含多个选项,请根据自身状况选择适合自己的选项.</div>
  </div>
</template>

<script type="text/babel">
  export default {
    route: {
      activate() {
        this.$parent.title = '选择训练项目';
      }
    },
    methods: {
      choose( train ) {
        this.$parent.train = train;
        this.$route.router.go( '/running/start' );
      }
    }
  };
</script>
