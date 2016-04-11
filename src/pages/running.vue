<template>
  <f7-page>
    <f7-navbar type="fixed">
      <a class="link" slot="left" @click.prevent="back">
        <i class="icon icon-back"></i>
        <span>返回</span>
      </a>
      <span slot="center" v-text="running.title"></span>
    </f7-navbar>
    <f7-page-content>
      <f7-content-block inner>
        <p>
          你正在进行第 {{running.week}} 周的第 {{running.no}} 次训练.
        </p>
        <p v-if="running.train">
          训练内容:
          <s-train :train="running.train"></s-train>
        </p>
      </f7-content-block>
      <router-view></router-view>
    </f7-page-content>
  </f7-page>
</template>

<script type="text/babel">
  import plan13 from '../others/plan';
  import { process, running } from '../vuex/getters';
  export default {
    vuex: {
      getters: {
        process,
        running
      }
    },
    route: {
      activate() {
        const { process } = this;
        let nextWeek = process.week, nextTrainNo = process.no + 1;

        if ( 1 === nextTrainNo ) {
          nextWeek += 1;
        } else if ( 4 === nextTrainNo ) {
          nextTrainNo = 1;
          nextWeek += 1;
        }

        const trains = plan13.plans[ nextWeek - 1 ][ nextTrainNo - 1 ];

        const data = {
          week: nextWeek,
          no: nextTrainNo,
          title: ''
        };

        if ( trains.length === 1 ) {
          data.train = trains[ 0 ];
        } else {
          data.trains = trains;
          data.train = null;
        }
        this.$store.dispatch( 'setRunning', data );
      }
    },
    methods: {
      back() {
        history.back();
      }
    }
  };
</script>
