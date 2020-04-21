<template>
  <section>
    <h1>Contato</h1>
  </section>
</template>

<script>
import setActive from '../components/mixins/ActiveNavItem';

export default {
  name: 'contact-page',
  mixins: [setActive],
  data() {
    return {
      nomeRota: null,
    };
  },
};
</script>
