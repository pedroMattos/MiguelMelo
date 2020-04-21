<template>
  <div id="home">
    <gallery/>
  </div>
</template>

<script>
import setActive from '../components/mixins/ActiveNavItem';
import gallery from '../components/Gallery.vue';

export default {
  name: 'Home',
  mixins: [setActive],
  components: {
    gallery,
  },
  data() {
    return {
      nomeRota: null,
    };
  },
};
</script>
