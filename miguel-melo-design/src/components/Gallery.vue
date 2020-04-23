<template>
  <section class="row" id="gallery">
    <div v-for="item in projectData" :key="item.name" class="col-md-2 col-sm-12 no-spaces">
      <router-link :to="{ name: 'ProjetoFullView', params: { nome: item.slug } }">
        <card/>
      </router-link>
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
};
</script>
