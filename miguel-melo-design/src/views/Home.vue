<template>
  <div id="home">
    <router-view></router-view>
  </div>
</template>

<script>
import setActive from '../components/mixins/ActiveNavItem';

export default {
  name: 'Home',
  mixins: [setActive],
  data() {
    return {
      nomeRota: null,
    };
  },
};
</script>
