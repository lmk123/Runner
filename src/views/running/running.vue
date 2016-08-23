<template>
  <div class="content-block-title">跑步计时</div>
  <div class="content-block">
    <div class="content-block-inner">
      <p>
        第 {{ repeat }} 组: <span v-if="step">{{ step.name }} {{ step.time }} 分钟, </span>剩余 <timer v-ref:timer :minutes.sync="m" :seconds.sync="s" backward @end="onEnd"></timer>
      </p>
    </div>
  </div>
  <div class="content-block">
    <p>
      <a class="button" @click.prevent="pause = !pause">
        <span v-show="pause">继续</span>
        <span v-show="!pause">暂停</span>
      </a>
    </p>
    <p>
      <a class="button" v-show="isDev" @click.prevent="done = true">跳过(仅限开发者模式)</a>
    </p>
  </div>
</template>

<script>
  import { currentTrain, isDev } from '../../vuex/getters'
  export default {
    vuex: {
      getters: { currentTrain, isDev }
    },
    route: {
      activate () {
        if (!this.currentTrain) {
          this.$router.replace('/')
        }
      }
    },
    data () {
      return {
        m: 0,
        s: 0,
        repeat: 1,
        stepIndex: -1,
        done: false,
        pause: false
      }
    },
    computed: {
      step () {
        const { currentTrain } = this
        if (currentTrain) {
          return currentTrain.steps[this.stepIndex]
        }
      }
    },
    methods: {
      onEnd () {
        const { currentTrain } = this
        if (!currentTrain) return
        const { steps } = currentTrain
        let stepIndex = this.stepIndex + 1
        if (stepIndex >= steps.length) {
          this.repeat += 1
          if (this.repeat >= currentTrain.repeat) {
            this.done = true
            return
          }
          stepIndex = 0
        }
        this.stepIndex = stepIndex
        this.m = this.step.time
        this.s = 0
        this.$nextTick(this.$refs.timer.continue)
      }
    },
    watch: {
      pause (pause) {
        if (pause) {
          this.$refs.timer.pause()
        } else {
          this.$refs.timer.continue()
        }
      },
      done (done) {
        if (done) {
          this.$router.replace({ name: 'after' })
        }
      }
    },
    ready () {
      this.onEnd()
    }
  }
</script>
