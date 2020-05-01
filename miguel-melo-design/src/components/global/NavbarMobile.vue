<template>
  <nav>
      <ul class="no-spaces" id="menu-itens-mobile">
        <li id="menu-controller">
          <div class="lines-menu"></div>
        </li>
        <li id="menu-controller-close">Close</li>
        <br>
        <router-link :to="{ name: 'Home' }">
          <li class="centered"><img src="../../assets/logo.png" alt="Logo"></li>
        </router-link>
      </ul>
      <div class="menu-section">
        <ul id="menu-collapsed">
          <router-link :to="{ name: 'Home' }">
            <li class="list-item">Home</li>
          </router-link>
          <router-link :to="{ name: 'Sobre' }">
            <li class="list-item">Sobre</li>
          </router-link>
          <router-link :to="{ name: 'Contato' }">
            <li class="list-item">Contato</li>
          </router-link>
        </ul>
      </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar-mobile',
  mounted() {
    this.openMenu();
  },
  methods: {
    openMenu() {
      const controller = document.getElementById('menu-controller');
      // const close = document.getElementById('menu-controller-close');
      const menu = document.getElementById('menu-collapsed');
      const ctx = this;
      controller.addEventListener('click', () => {
        if(!(menu.classList.contains('menu-non-collapsed'))) {
          // close.setAttribute('style', 'display:block')
          // controller.setAttribute('style', 'display:none');
          controller.children[0].classList.add('close');
          menu.classList.add('menu-non-collapsed');
        } else {
            // close.removeAttribute('style');
          // controller.setAttribute('style', 'display:none');
          controller.children[0].classList.remove('close');
          menu.classList.remove('menu-non-collapsed');
        }
      });
      // close.addEventListener('click', () => {
      //   if(menu.classList.contains('menu-non-collapsed')) {
      //     close.removeAttribute('style');
      //     controller.removeAttribute('style');
      //     menu.classList.remove('menu-non-collapsed');
      //   }
      // });
    },
  },
};
</script>

<style lang="scss">
@import '../../assets/scss/variables.scss';
  .close {
    transform: rotate(45deg);
    right: 30px !important;
    top: 10px !important;
    transition-duration: .5s;
    &::after {
      opacity: 0 !important;
      transition-duration: .5s;
    }
    &::before {
      transform: rotate(-90deg);
      top: 0 !important;
      transition-duration: .5s;
    }
  }
  #menu-itens-mobile {
    position: relative;
    // padding: 20px !important;
    list-style: none;
    #menu-controller {
      position: relative;
      text-align: right;
      margin: 20px 0;
      display: block;
      height: 25px;
      .lines-menu {
        position: absolute;
        height: 1px;
        width: 30px;
        background-color: $grey-text;
        right: 25px;
        top: 00px;
        transition-duration: .5s;
        &::after {
          content: '';
          position: absolute;
          height: 1px;
          width: 30px;
          background-color: $grey-text;
          right: 0;
          top: 10px;
          opacity: 1;
          transition-duration: .5s;
        }
        &::before {
          content: '';
          position: absolute;
          height: 1px;
          width: 30px;
          background-color: $grey-text;
          right: 0;
          top: 20px;
          transition-duration: .5s;
        }
      }
    }
    #menu-controller-close {
      text-align: right;
      margin: 20px 0;
      display: none;
    }
  }
  #menu-collapsed {
    position: absolute;
    overflow: hidden;
    height: 0;
    left: 0;
    right: 0;
    z-index: 3;
    transition-duration: .5s;
    background-color: $black-body;
    // width: 100vw;
    padding-left: 0 !important;
    text-align: center;
    margin: 0;
    a li {
      color: $grey-text;
      margin: 50px 0;
      font-size: 25px;
      // span {
      //   &::after {
      //     content: '';
      //     animation: mymove 5s infinite;
      //   }
      // }
    }
    a {
      text-decoration: none;
    }
  }
  .menu-non-collapsed {
    height: 100vh !important;
    transition-duration: .5s;
  }
  .menu-section {
    position: relative;
  }
  // @keyframes mymove {
  //   0%   {content: 'Testando';}
  //   10%  {content: 'Testand';}
  //   20%  {content: 'Testan';}
  //   30% {content: 'Testa';}
  //   40% {content: 'Test';}
  //   50% {content: 'Tes';}
  //   60% {content: 'Te';}
  //   70% {content: 'T';}
  //   80% {content: 'O';}
  //   90% {content: 'Oi';}
  //   100% {content: 'Oi!';}
  // }
</style>
