<template>
  <div class="content-block-title">跑前热身</div>
  <div class="content-block">
    <div class="content-block-inner">
      <timer v-ref:timer :minutes.sync="m" :seconds.sync="s"></timer>
    </div>
    <p>
      热身运动至少要进行 5 分钟。
    </p>
  </div>
  <div class="content-block">
    <a class="button" :style="{ opacity: done ? 1 : 0.6 }" @click.prevent="run">开始跑步</a>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        m: 0,
        s: 0
      }
    },
    computed: {
      done () {
        return this.m >= 5
      }
    },
    methods: {
      run () {
        if (this.done) {
          this.$router.replace({ name: 'run' })
          return
        }
        this.$refs.timer.pause()
        window.alert('热身运动至少要持续 5 分钟。')
        if (process.env.NODE_ENV === 'development') {
          window.alert('开发模式下直接跳过')
          this.$router.replace({ name: 'run' })
        } else {
          this.$refs.timer.continue()
        }
      }
    },
    ready () {
      this.$refs.timer.continue()
    }
  }
</script>
