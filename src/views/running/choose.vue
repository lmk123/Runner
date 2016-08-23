<template>
  <div class="content-block-title">选择适合你的训练</div>
  <div class="list-block media-list">
    <ul>
      <li class="item-link item-content"
          v-for="train in nextTrain.trains"
          @click="choose($index)">
        <div class="item-inner">
          <div class="item-title-row">
            <div class="item-title">{{ train.name || '常规计划' }}</div>
            <!-- TODO 这里可以写上计划的总时间 -->
            <!--<div class="item-after">$15</div>-->
          </div>
          <div class="item-subtitle">{{ getDes(train) }}</div>
        </div>
      </li>
    </ul>
    <div class="list-block-label">此训练包含多个选项, 请根据自身状况选择适合自己的选项。</div>
  </div>
</template>

<script>
  import { nextTrain } from '../../vuex/getters'
  import { startTrain } from '../../vuex/actions'
  import getDes from '../../utils/getDescription'
  export default {
    vuex: {
      getters: { nextTrain },
      actions: { startTrain }
    },
    route: {
      activate () {
        if (this.nextTrain.trains.length === 1) {
          this.choose(0)
        }
      }
    },
    methods: {
      choose (index) {
        this.startTrain(index)
        this.$router.replace({ name: 'before' })
      },
      getDes
    }
  }
</script>
