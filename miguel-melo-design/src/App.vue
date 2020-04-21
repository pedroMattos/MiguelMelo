<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view/>
    <div class="row">
      <div class="col-sm-12">
        <p id="name" class="centered small-text">Miguel Melo Designer</p>
      </div>
    </div>
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
  #name {
    margin-top: 20px;
  }
</style>
