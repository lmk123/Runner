<template>
  <f7-page>
    <f7-navbar type="fixed">
      <span slot="center">Runner</span>
    </f7-navbar>
    <f7-page-content>
      <f7-content-block>
        <p v-if="week">
          <span v-if="lastest">
            你已完成 13 周训练计划,干的漂亮!
          </span>
          <span v-else>你已完成第 {{week}} 周的第 {{no}} 次训练,赶紧开始下一次训练吧!</span>
        </p>
        <p v-else>
          你还没有开始训练,现在就开始吧!
        </p>
      </f7-content-block>
      <f7-content-block>
        <p>
          <a class="button" v-if="!lastest" v-link="'/running'">开始训练</a>
        </p>
        <input type="button" class="button" value="重新开始" v-if="week" v-touch:tap="confirmRestart" />
      </f7-content-block>
    </f7-page-content>
  </f7-page>
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
    methods: {
      confirmRestart() {
        this.$root.$refs.modal
                .confirm( '你的训练进度将会被清除,此操作不可恢复.', '确定要重新开始吗?' )
                .then( this.restart, ()=> {} );
      }
    },
    computed: {
      lastest() {
        return plan13.plans.length === this.week && plan13.plans[ this.week - 1 ].length === this.no;
      }
    }
  };
</script>
