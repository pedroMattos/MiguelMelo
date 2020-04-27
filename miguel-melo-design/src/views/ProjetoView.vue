<template>
  <section id="sec-project">
    <span id="close" @click.prevent="closePage"></span>
    <h1>{{ projectData[0].name }}</h1>
    <h2>Um projeto de {{ projectData[0].type }}</h2>
    <div v-for="image in projectData[0].images"
    :key="image.title"
    class="images">
      <p>{{ image.title }}</p>
      <img src="../assets/images/campanha2.jpg" :alt="image.alt">
    </div>
  </section>
</template>

<script>
export default {
  name: 'full-view',
  data() {
    return {
      projectData: [
        {
          slug: 'pardini', name: 'Pardini', type: 'Social Media',
          images: [
            {
              title: 'Some title',
              link: './assets/images/campanha2.jpg',
              alt: 'Imagem Projeto',
            },
            {
              title: 'New image',
              link: './assets/images/campanha2.jpg',
              alt: 'Imagem Projeto',
            },
          ],
        },
      ],
    };
  },
  mounted() {
    document.title = this.projectData[0].name + ' | Miguel Melo Design';
  },
  methods: {
    closePage() {
      this.$router.push({ name: 'Home' });
    },
  },
};
</script>

<style lang="scss">
@import '../assets/scss/variables.scss';
@import '../assets/scss/breakpoint.scss';
  #sec-project {
    position: relative;
    text-align: center;
    @include breakpoint(smartphones) {
      padding-left: 8px;
    }
    span {
      position: absolute;
      right: 50px;
      top: -5px;
      font-size: 50px;
      transition-duration: .5s;
      font-weight: 700;
      transform: scale(1);
      cursor: pointer;
      &:hover {
        transform: scale(1.1);
        &::after {
          color: white;
          transition-duration: .5s;
        }
      }
      &::after {
        content: 'x';
        transition-duration: .5s;
      }
    }
    h1 {
      font-size: 50px;
      margin-bottom: 0;
      text-transform: uppercase;
    }
    h2 {
      font-weight: 200;
    }
    .images {
      img {
        width: 100vw;
        height: auto;
      }
      p {
        text-align: left;
        padding-left: 50px;
      }
    }
  }
</style>
