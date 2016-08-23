<template>
  <div class="page navbar-fixed">
    <div class="navbar">
      <div class="navbar-inner">
        <div></div>
        <div class="center">开始训练</div>
        <div></div>
      </div>
    </div>
    <div class="page-content">
      <div class="content-block-title">最近训练记录</div>
      <div class="content-block">
        <div class="content-block-inner">
          <p v-if="lastTrain">
            你已在 {{ dateString }} 完成了第 {{ lastTrain.week + 1 }} 周第 {{ lastTrain.day + 1 }} 次的训练。
          </p>
          <p v-else>
            暂无训练记录。
          </p>
        </div>
      </div>
      <div class="content-block">
        <p v-if="isDev && !can">
          开发模式下可以立刻开始下一次训练。
        </p>
        <p v-if="isDev || can">
          <a class="button" v-link="{ name: 'choose' }">开始训练</a>
        </p>
        <p v-if="!can">
          每次完成训练后至少需要相隔一天才能开始下一次训练。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import { lastTrain, isDev } from '../vuex/getters'

  export default {
    vuex: {
      getters: { lastTrain, isDev }
    },
    computed: {
      can () {
        const { lastTrain } = this
        if (!lastTrain) return true
        return Date.now() - lastTrain.end > 24 * 60 * 60 * 1000
      },

      dateString () {
        const { lastTrain } = this
        if (!lastTrain) return ''
        return new Date(lastTrain.end).toLocaleString()
      }
    }
  }
</script>
