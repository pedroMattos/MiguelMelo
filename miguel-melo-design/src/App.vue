<template>
  <div id="app">
    <nav-bar v-if="screenW == 'desktop'"></nav-bar>
    <nav-mobile v-if="screenW == 'smartphone'"></nav-mobile>
    <base-spinner></base-spinner>
    <button style="display:none" id="show" @click="spinnerShow">Spinner</button>
    <button style="display:none" id="hide" @click="spinnerHide">Spinner</button>
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
import spinner from './components/global/Spinner.vue';

export default {
  name: 'app',
  components: {
    'nav-bar': navbar,
    'nav-mobile': navbarMobile,
    'base-spinner': spinner,
  },
  data() {
    return {
      screenW: null,
    };
  },
  watch: {
    $route(to, from) {
      if(this.screenW == 'smartphone') {
        const controller = document.getElementById('menu-controller');
        // const close = document.getElementById('menu-controller-close');
        const menu = document.getElementById('menu-collapsed');
        const ctx = this;
        if(menu.classList.contains('menu-non-collapsed')) {
          menu.classList.remove('menu-non-collapsed');
          controller.children[0].classList.remove('close');
        }
      }
    }
  },
  beforeMount() {
    this.getScreen();
  },
  mounted() {
    const show = document.getElementById('show');
    show.click();
  },
  methods: {
    getScreen() {
        const theScreen = screen.width;
        if(theScreen < 990) {
          this.screenW = 'smartphone';
        } else {
          this.screenW = 'desktop';
        }
      onresize = () => {
        this.getScreen();
      }
    },
    spinnerShow() {
      this.$root.$emit('Spinner::show');
    },
    spinnerHide() {
      this.$root.$emit('Spinner::hide');
    },
  },
};
</script>

<style lang="scss">
@import './assets/scss/variables.scss';
@import './assets/scss/breakpoint.scss';
  #name {
    margin-top: 20px;
    font-weight: 600;
  }
</style>
