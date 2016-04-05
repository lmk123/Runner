<template>
  <div class="page">
    <div class="navbar">
      <div class="navbar-inner">
        <div class="center">Runner</div>
      </div>
    </div>
    <div class="page-content">
      <div class="content-block">
        <!--<div class="content-block-inner">-->
        <p v-if="week">
          <span v-if="lastest">
            你已完成 13 周训练计划,干的漂亮!
          </span>
          <span v-else>你已完成第 {{week}} 周的第 {{no}} 次训练,赶紧开始下一次训练吧!</span>
        </p>
        <p v-else>
          你还没有开始训练,现在就开始吧!
        </p>
        <!--</div>-->
      </div>
      <div class="content-block">
        <a class="button" v-if="!lastest" v-link="'/running'">开始训练</a>
        <button class="button" v-if="week" @click="restart">重新开始</button>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import { week, no } from '../vuex/getters';
  import { restart } from '../vuex/actions';
  import plan13 from '../others/plan';

  export default {
    vuex: {
      getters: {
        week,
        no
      },
      actions: {
        restart
      }
    },
    computed: {
      lastest() {
        return plan13.plans.length === this.week && plan13.plans[ this.week - 1 ].length === this.no;
      }
    }
  };
</script>
