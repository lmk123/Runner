<script type="text/babel">
  import { running } from '../vuex/getters';
  export default {
    vuex: {
      getters: {
        running
      }
    },
    route: {
      activate( { redirect } ) {
        const { running } = this;
        if ( running.train ) {
          redirect( '/running/start' );
        } else {
          redirect( '/running/choose' );
        }
      }
    }
  };
</script>
