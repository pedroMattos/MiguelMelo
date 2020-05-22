<template>
  <section id="sec-project">
    <span id="close" @click.prevent="closePage"></span>
    <h1 v-if="projectData[0].name">{{ projectData[0].name }}</h1>
    <h2 v-if="projectData[0].type">Um projeto de {{ projectData[0].type }}</h2>
    <div v-for="(image, key) in projectData[0].images"
    :key="key"
    class="images">
      <!-- <p>{{ image.title }}</p> -->
      <img :src="image" :alt="projectData[0].name">
    </div>
  </section>
</template>

<script>
export default {
  name: 'full-view',
  data() {
    return {
      slug: this.$route.params.nome,
      projectData: [
        {
          name: null,
          type: null,
          images: null,
        }
      ],
    };
  },
  mounted() {
    // document.title = this.projectData[0].name + ' | Miguel Melo Design';
    this.getDataProject();
    const show = document.getElementById('show');
    show.click();
  },
  methods: {
    closePage() {
      this.$router.push({ name: 'Home' });
    },
    getDataProject() {
      const ctx = this;
      const projRef = this.$firebase.firestore().collection('jobs').where('Slug', '==', this.slug);
      projRef.get().then((docs) => {
        docs.forEach(doc => {
          ctx.$set(ctx.projectData[0], 'name', doc.data().Nome);
          ctx.$set(ctx.projectData[0], 'type', doc.data().Tipo);
          ctx.$set(ctx.projectData[0], 'images', doc.data().Imagens);
          // const data = {
          //   name: doc.data().Nome,
          //   type: doc.data().Tipo,
          //   images: doc.data().Imagens,
          // };
          // ctx.projectData.push(data);

        });
        const hide = document.getElementById('hide');
        hide.click();
      });
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
    // @include breakpoint(smartphones) {
    //   padding-left: 8px;
    // }
    span {
      position: absolute;
      right: 50px;
      top: -5px;
      font-size: 50px;
      transition-duration: .5s;
      font-weight: 700;
      transform: scale(1);
      cursor: pointer;
      @include breakpoint(smartphones) {
        right: 20px;
        top: -33px;
        font-size: 40px;
      }
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
