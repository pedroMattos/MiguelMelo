<template>
  <div class="card-img">
    <div class="overlay-content">
      <p class="title centered">Pardini</p>
      <p class="centered">Social Media</p>
    </div>
    <img src="../../assets/images/campanha2.jpg" alt="Campanhas">
  </div>
</template>

<script>
export default {
  name: 'img-gallery',
};
</script>

<style lang="scss">
@import '../../assets/scss/variables.scss';

  .card-img {
    overflow: hidden;
    position: relative;
    height: 180px;
    &:hover {
      .overlay-content {
        opacity: 1;
        transition-duration: .5s;
      }
      img {
        transform: scale(1.1);
        transition-duration: .5s;
      }
    }
    .overlay-content {
      position: absolute;
      z-index: 1;
      padding: 67px 78px;
      opacity: 0;
      transition-duration: .5s;
      background-color: $black-body-alpha;
      p {
        font-size: 12px;
        margin: 0;
        &.title {
        font-size: 18px;
        font-weight: 700;
      }
      }
    }
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transform: scale(1);
      transition-duration: .5s;
    }
  }
</style>
