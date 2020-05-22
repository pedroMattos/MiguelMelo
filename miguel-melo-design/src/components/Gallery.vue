<template>
  <section :class="screenW == 'smartphone' ? 'conatiner' : ''" id="gallery">
    <div class="row">
      <div v-for="item in projectData" :key="item.name" class="col-md-2 col-sm-12 no-spaces">
        <router-link :to="{ name: 'ProjetoFullView', params: { nome: item.slug } }">
          <card :name="item.name"
          :type="item.type"
          :img="item.images[0]"
          />
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
      projectData: [],
    };
  },
  mounted() {
    const show = document.getElementById('show');
    show.click();
    this.getScreen();
    this.getData();
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
    getData() {
      const ref = this.$firebase.firestore().collection('jobs');
      const ctx = this;
      ref.get().then((docs) => {
        docs.forEach((doc) => {
          const dataProject = {
            name: doc.data().Nome,
            slug: doc.data().Slug,
            type: doc.data().Tipo,
            images: doc.data().Imagens,
            alt: doc.data().Nome,
          };
          ctx.projectData.push(dataProject);
        });
        const hide = document.getElementById('hide');
        hide.click();
      });
    },
  },
};
</script>
