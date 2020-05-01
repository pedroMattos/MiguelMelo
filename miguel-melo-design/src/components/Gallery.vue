<template>
  <section :class="screenW == 'smartphone' ? 'conatiner' : ''" id="gallery">
    <div class="row">
      <div v-for="item in projectData" :key="item.name" class="col-md-2 col-sm-12 no-spaces">
        <router-link :to="{ name: 'ProjetoFullView', params: { nome: item.slug } }">
          <card/>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import card from './page-components/ImageGallery.vue';

export default {
  name: 'gallery-home', 
  components: {
    card,
  },
  data() {
    return {
      screenW: null,
      projectData: [
        {
          slug: 'pardini', name: 'Pardini 1', type: 'Social Media',
          images: [
            {
              link: '../../assets/images/campanha2.jpg',
              alt: 'Imagem Projeto',
            },
          ],
        },
        {
          slug: 'perini', name: 'Pardini 2', type: 'Social Media',
          images: [
            {
              link: '../../assets/images/campanha2.jpg',
              alt: 'Imagem Projeto',
            },
          ],
        },
      ],
    };
  },
  mounted() {
    this.getScreen();
  },
  methods: {
    getScreen() {
      const theScreen = screen.width;
      if(theScreen < 990) {
        this.screenW = 'smartphone';
      } else {
        this.screenW = 'desktop';
      }
    },
  },
};
</script>
