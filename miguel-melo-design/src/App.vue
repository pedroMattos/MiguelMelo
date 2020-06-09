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
          <p id="social-p" class="centered">
            <ul id="social">
              <li><a
              rel="no-referrer"
              target="_blank"
              href="https://www.behance.net/miguel_melo">
                <img src="@/assets/images/behance.png" alt="Behance Profile"></a></li>
              <li><a
              rel="no-referrer"
              target="_blank"
              href="https://www.instagram.com/migueldesignbr/">
                <img src="@/assets/images/instagram.png" alt="Instagram Profile"></a></li>
              <li><a
              rel="no-referrer"
              target="_blank"
              href="https://twitter.com/migueldmelo">
                <img src="@/assets/images/twitter.png" alt="Twitter Profile"></a></li>
            </ul>
          </p>
          <p id="name" class="centered">Miguel Melo Designer</p>
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
    @include breakpoint(minDesnktops) {
      margin: 0px;
    }
    @include breakpoint(fullHdDesktops) {
      font-size: 20px;
    }
  }
</style>
