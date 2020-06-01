<template>
  <section id="contact">
    <!-- <img id="bg-contact" src="../assets/images/bg-contact.jpg" alt="Bg"> -->
    <div id="bg-contact"></div>
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
    object-fit: cover;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: .2;
    background: url(../assets/images/bg-contact.jpg) no-repeat center;
    background-size: cover;
  }
  #form-field {
    margin-top: 150px;
  }
</style>
