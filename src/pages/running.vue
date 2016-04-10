<template>
  <f7-page>
    <f7-navbar type="fixed">
      <a class="link" slot="left" v-touch:tap.prevent="back">
        <i class="icon icon-back"></i>
        <span>返回</span>
      </a>
      <span slot="center" v-text="title"></span>
    </f7-navbar>
    <f7-page-content>
      <f7-content-block inner>
        <p>
          你正在进行第 {{nextWeek}} 周的第 {{nextTrainNo}} 次训练.
        </p>
        <p v-if="train">
          训练内容:
          <s-train :train="train" v-if="train"></s-train>
        </p>
      </f7-content-block>
      <router-view></router-view>
    </f7-page-content>
  </f7-page>
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
      } else if ( 4 === nextTrainNo ) {
        nextTrainNo = 1;
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
      console.log( data );

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
