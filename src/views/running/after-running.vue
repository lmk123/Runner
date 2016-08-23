<template>
  <div class="content-block-title">跑后热身</div>
  <div class="content-block">
    <div class="content-block-inner">
      <timer v-ref:timer :minutes.sync="m" :seconds.sync="s"></timer>
    </div>
    <p>
      热身运动至少要进行 5 分钟。
    </p>
  </div>
  <div class="content-block">
    <a class="button" :style="{ opacity: done ? 1 : 0.6 }" @click.prevent="run">完成训练</a>
  </div>
</template>

<script>
  import { nextTrain, isDev } from '../../vuex/getters'
  import { finishTrain } from '../../vuex/actions'
  export default {
    vuex: {
      getters: { nextTrain },
      actions: { finishTrain }
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
        if (this.isDev && !this.done) window.alert('开发模式下可跳过跑后热身。')
        if (this.isDev || this.done) {
          this.finishTrain()
          this.$router.replace({ name: 'done' })
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
