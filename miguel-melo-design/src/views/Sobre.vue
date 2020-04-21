<template>
  <h1>Pagina sobre</h1>
</template>

<script>
import setActive from '../components/mixins/ActiveNavItem';

export default {
  name: 'about-page',
  mixins: [setActive],
  data() {
    return {
      nomeRota: null,
    };
  },
};
</script>
