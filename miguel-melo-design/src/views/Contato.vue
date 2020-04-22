<template>
  <section id="contact">
    <img id="bg-contact" src="../assets/images/bg-contact.jpg" alt="Bg">
    <div id="form-field" class="container">
      <h1>Let's Create</h1>
      <p class="centered"><contact-form></contact-form></p>
    </div>
  </section>
</template>

<script>
import setActive from '../components/mixins/ActiveNavItem';
import labelMove from '../components/mixins/LabelForm';
import contactFrom from '../components/ContactForm.vue';

export default {
  name: 'contact-page',
  mixins: [setActive, labelMove],
  components: {
    'contact-form': contactFrom,
  },
  data() {
    return {
      nomeRota: null,
    };
  },
};
</script>

<style lang="scss">
  #bg-contact {
    position: absolute;
    height: 100vh;
    width: 100vw;
    object-fit: cover;
    top: 0;
    z-index: -1;
    opacity: .2;
  }
  #form-field {
    margin-top: 150px;
  }
</style>
