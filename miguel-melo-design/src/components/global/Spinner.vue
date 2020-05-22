<template>
  <div class="spinner" v-if="visibility"></div>
</template>

<script>
export default {
  name: 'loader-spinner',
  data() {
    return {
      visibility: true,
    };
  },
  created() {
    this.$root.$on('Spinner::show', () => {
      this.visibility = true;
    })
    this.$root.$on('Spinner::hide', () => {
      this.visibility = false;
    })
  },
}
</script>
