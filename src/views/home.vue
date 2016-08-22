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
            你已在{{ lastTrain.end }}完成第{{ lastTrain.week + 1 }}周第{{ lastTrain.day + 1 }}次的训练。
          </p>
          <p v-else>
            暂无训练记录。
          </p>
        </div>
      </div>
      <div class="content-block">
        <a class="button" v-link="{ name: 'choose' }">开始训练</a>
      </div>
    </div>
  </div>
</template>

<script>
  import { lastTrain } from '../vuex/getters'

  export default {
    vuex: {
      getters: { lastTrain }
    }
  }
</script>
