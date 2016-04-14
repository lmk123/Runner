<template>
  <f7-page>
    <f7-navbar type="fixed">
      <span slot="center">Runner</span>
    </f7-navbar>
    <f7-page-content>
      <f7-content-block>
        <p v-if="process.week">
          <span v-if="lastest">
            你已完成 13 周训练计划,干的漂亮!
          </span>
          <span v-else>你已完成第 {{process.week}} 周的第 {{process.no}} 次训练,赶紧开始下一次训练吧!</span>
        </p>
        <p v-else>
          你还没有开始训练,现在就开始吧!
        </p>
      </f7-content-block>
      <f7-content-block>
        <p>
          <a class="button" v-if="!lastest" v-touch:tap="start">开始训练</a>
        </p>
      </f7-content-block>
    </f7-page-content>
  </f7-page>
</template>

<script type="text/babel">
  import { process } from '../vuex/getters';
  import plan13 from '../others/plan';

  export default {
    vuex: {
      getters: {
        process
      }
    },
    computed: {
      lastest() {
        return plan13.plans.length === this.process.week && plan13.plans[ this.process.week - 1 ].length === this.process.no;
      }
    },
    methods: {
      async start() {
        const lastDate = this.process.date;
        if ( Date.now() - lastDate < 1000 * 60 * 60 * 24 ) {
          const ok = await this.$root.$refs.modal.confirm( '每次训练之间最好相隔 24 小时以保证身体得到了足够的休息.确认要开始训练吗?' );
          if ( !ok ) {
            return;
          }
        }
        this.$route.router.go( '/running' );
      }
    }
  };
</script>
