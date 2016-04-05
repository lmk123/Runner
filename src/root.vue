<template>
  <div class="modal-overlay" :class="{'modal-overlay-visible':modal.show}"></div>
  <div class="modal" style="margin-top: -62px" v-if="modal.show" transition="modal">
    <div class="modal-inner">
      <div class="modal-title" v-text="modal.title"></div>
      <div class="modal-text" v-text="modal.text"></div>
    </div>
    <div class="modal-buttons modal-buttons-2">
      <span class="modal-button" @click="$emit('confirm',false)">取消</span>
      <span class="modal-button modal-button-bold" @click="$emit('confirm',true)">确定</span>
    </div>
  </div>
  <div class="statusbar-overlay"></div>
  <div class="views">
    <div class="view view-main">
      <div class="pages navbar-through toolbar-through">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import store from './vuex';
  export default {
    store,
    replace: false,
    data() {
      return {
        modal: {
          show: false,
          type: 'confirm',
          title: 'Runner',
          text: ''
        }
      };
    },
    transitions: {
      modal: {
        css: false,
        beforeEnter: function ( el ) {
          el.style.display = 'block';
        },
        enter: function ( el, done ) {
          setTimeout( ()=> { el.classList.add( 'modal-in' ); }, 0 );
          setTimeout( done, 400 );
        },
        beforeLeave: function ( el ) {
          el.classList.remove( 'modal-in' );
        },
        leave: function ( el, done ) {
          el.classList.add( 'modal-out' );
          setTimeout( done, 400 );
        }
      }
    },
    methods: {

      /**
       * 弹出一个确认框
       * @param {String} text
       * @param {String} [title]
       * @returns {Promise}
       */
      confirm( text, title = 'Runner' ) {
        this.modal.text = text;
        this.modal.title = title;
        this.modal.show = true;
        return new Promise( ( resolve, reject )=> {
          this.$once( 'confirm', ( ok )=> {
            this.modal.show = false;
            if ( ok ) {
              resolve();
            } else {
              reject();
            }
          } );
        } );
      }
    }
  };
</script>

<style>
  @import url("../node_modules/framework7/dist/css/framework7.ios.css");
</style>
