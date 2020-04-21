<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view/>
  </div>
</template>

<script>
import navbar from './components/global/Navbar.vue';

export default {
  name: 'app',
  components: {
    'nav-bar': navbar,
  },
};
</script>

<style lang="scss">

</style>
