<template>
  <div id="app">
    <nav-bar v-if="screenW == 'desktop'"></nav-bar>
    <nav-mobile v-if="screenW == 'smartphone'"></nav-mobile>
    <router-view class="m-t"/>
    <div class="container">
          <div class="row">
      <div class="col-sm-12">
        <p id="name" class="centered small-text">Miguel Melo Designer</p>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import navbar from './components/global/Navbar.vue';
import navbarMobile from './components/global/NavbarMobile.vue';

export default {
  name: 'app',
  components: {
    'nav-bar': navbar,
    'nav-mobile': navbarMobile,
  },
  data() {
    return {
      screenW: null,
    };
  },
  watch: {
    $route(to, from) {
      const controller = document.getElementById('menu-controller');
      // const close = document.getElementById('menu-controller-close');
      const menu = document.getElementById('menu-collapsed');
      const ctx = this;
      if(menu.classList.contains('menu-non-collapsed')) {
        menu.classList.remove('menu-non-collapsed');
        controller.children[0].classList.remove('close');
      }
      // const menu = document.getElementById('menu-collapsed');
      // const open = document.getElementById('menu-controller');
      // const close = document.getElementById('menu-controller-close');
      // if(menu.classList.contains('menu-non-collapsed')) {
      //   close.removeAttribute('style');
      //   open.removeAttribute('style');
      //   menu.classList.remove('menu-non-collapsed');
      // }
    }
  },
  beforeMount() {
    this.getScreen();
  },
  methods: {
    getScreen() {
      const theScreen = screen.width;
      if(theScreen < 990) {
        this.screenW = 'smartphone';
      } else {
        this.screenW = 'desktop';
      }
    },
  },
};
</script>

<style lang="scss">
@import './assets/scss/variables.scss';
@import './assets/scss/breakpoint.scss';
  #name {
    margin-top: 20px;
  }
</style>
