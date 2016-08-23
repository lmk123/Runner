<template>
  <div class="page navbar-fixed">
    <div class="navbar">
      <div class="navbar-inner">
        <div></div>
        <div class="center">训练中</div>
        <div></div>
      </div>
    </div>
    <div class="page-content">
      <div class="content-block">
        <div class="content-block-inner">
          <p>你当前正在进行第 {{ nextTrain.week + 1 }} 周的第 {{ nextTrain.day + 1 }} 次训练。</p>
          <p v-if="currentTrain">训练内容: {{ description }}</p>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import { nextTrain, currentTrain } from '../../vuex/getters'
  import getDes from '../../utils/getDescription'
  export default {
    vuex: {
      getters: { nextTrain, currentTrain }
    },
    computed: {
      description () {
        return getDes(this.currentTrain)
      }
    }
  }
</script>
