<template>
  <nav id="desktops">
    <p class="centered">
      <ul id="menu-itens">
        <router-link :to="{ name: 'Home' }">
          <li><img src="../../assets/logo.png" alt="Logo"></li>
        </router-link>
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
    </p>
  </nav>
</template>

<script>
export default {
  name: 'nav-bar',
};
</script>

<style lang="scss">
@import '../../assets/scss/variables.scss';
@import '../../assets/scss/breakpoint.scss';
  nav#desktops {
    position: relative;
    padding: 30px 100px 50px;
    img {
      width: 50px;
      transition-duration: .5s;
      height: 50px;
      &:hover {
        transform: scale(1.1);
        transition-duration: .5s;
      }
    }
    #menu-itens {
      list-style: none;
      display: inline-flex;
      color: $grey-text;
      a {
        color: $grey-text;
        transition-duration: .5s;
        text-decoration: none;
        &:hover {
          color: white;
          transition-duration: .5s;
        }
        li {
          margin: 0 100px;
          &.list-item {
            position: relative;
            padding: 20px 0;
            &::after {
              transition-duration: .5s;
              position: absolute;
              content: '';
              bottom: 10px;
              height: 1px;
              width: 0px;
              left: 0;
              background-color: $grey-text;
            }
          }
        }
      }
    }
  }
</style>
