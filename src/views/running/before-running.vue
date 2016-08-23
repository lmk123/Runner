<template>
  <div class="content-block">
    <p>训练之前请做 5~10 分钟的热身运动, 之后点击下面的按钮开始跑步。</p>
  </div>
  <div class="content-block-title">跑前热身计时</div>
  <div class="content-block">
    <div class="content-block-inner">
      <timer v-ref:timer :minutes.sync="m" :seconds.sync="s"></timer>
    </div>
  </div>
  <div class="content-block">
    <a class="button" :style="{ opacity: done ? 1 : 0.6 }" @click.prevent="run">开始跑步</a>
  </div>
</template>

<script>
  import { isDev } from '../../vuex/getters'
  export default {
    vuex: {
      getters: { isDev }
    },
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
        if (this.isDev && !this.done) window.alert('开发模式下可跳过跑前热身。')
        if (this.isDev || this.done) {
          this.$router.replace({ name: 'run' })
          return
        }
        this.$refs.timer.pause()
        window.alert('热身运动至少要持续 5 分钟。')
        this.$refs.timer.continue()
      }
    },
    ready () {
      this.$refs.timer.continue()
    }
  }
</script>
