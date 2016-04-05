<template>
  <div class="page">
    <div class="navbar">
      <div class="navbar-inner">
        <div class="left">
          <a class="link" @click.prevent="back">
            <i class="icon icon-back"></i>
            <span>返回</span>
          </a>
        </div>
        <div class="center" v-text="title"></div>
      </div>
    </div>
    <div class="page-content">
      <div class="content-block">
        <div class="content-block-inner">
          你正在进行第 {{nextWeek}} 周的第 {{nextTrainNo}} 次训练.
          <s-train :train="train" v-if="train"></s-train>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/babel">
  import { week, no } from '../vuex/getters';
  import plan13 from '../others/plan';
  export default {
    vuex: {
      getters: {
        week,
        no
      }
    },
    data() {
      let nextWeek = this.week, nextTrainNo = this.no + 1;

      if ( 1 === nextTrainNo ) {
        nextWeek += 1;
      }

      const trains = plan13.plans[ nextWeek - 1 ][ nextTrainNo - 1 ];

      const data = {
        nextWeek,
        nextTrainNo,
        title: ''
      };

      if ( trains.length === 1 ) {
        data.train = trains[ 0 ];
        data._jumpTo = '/running/start';
      } else {
        data.trains = trains;
        data.train = null;
        data._jumpTo = '/running/choose';
      }

      return data;
    },
    methods: {
      back() {
        history.back();
      }
    },
    ready() {
      this.$route.router.replace( this.$data._jumpTo );
    }
  };
</script>
