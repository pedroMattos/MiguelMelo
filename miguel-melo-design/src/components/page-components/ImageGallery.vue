<template>
  <div class="card-img">
    <div class="overlay-content">
      <p class="title centered">{{ nameI }}</p>
      <p class="centered">{{ typeI }}</p>
    </div>
    <img :src="imgI" alt="Campanhas">
  </div>
</template>

<script>
export default {
  name: 'img-gallery',
  props: ['name', 'type', 'img'],
  data() {
    return {
      nameI: this.name,
      typeI: this.type,
      imgI: this.img,
    };
  },
};
</script>

<style lang="scss">
@import '../../assets/scss/variables.scss';
@import '../../assets/scss/breakpoint.scss';

  .card-img {
    overflow: hidden;
    position: relative;
    height: 225px;
    @include breakpoint(minDesktops) {
      height: 179px;
    }
    @include breakpoint(fullHdDesktops) {
      height: 300px;
    }
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
      opacity: 0;
      top: 0;
      bottom: 0;
      right: 0;
      padding: 50px;
      left: 0;
      transition-duration: .5s;
      background-color: $black-body-alpha;
      @include breakpoint(fullHdDesktops) {
        padding: 80px;
      }
      @include breakpoint(smartphones) {
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        padding: 50px;
      }
        p {
          font-size: 14px;
          font-weight: 600;
          margin: 0;
          color: $grey-text;
          &.title {
          font-size: 22px;
          font-weight: 700;
          @include breakpoint(fullHdDesktops) {
            font-size: 40px;
          }
        }
        @include breakpoint(fullHdDesktops) {
          font-size: 26px;
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
