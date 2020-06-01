<template>
  <section class="container" id="main-sobre">
    <div class="row">
      <div id="img-miguel" class="col-sm-12 col-md-6">
        <p class="centered"><img id="img" src="../assets/images/miguel-img.png" alt="Miguel Designer"></p>
        <img id="logo-invert" src="../assets/images/logo-invertida.png" alt="Logo invertida">
        <h1>Miguel Melo</h1>
      </div>
      <div id="text-about" class="col-sm-12 col-md-6">
        <p>
          Sou Designer Gráfico formado pela Universidade Cruzeiro do Sul – UCS. 
          20 anos, natural de Feira de Santana/BA, tenho experiência em design digital, 
          social media e motion. Bastante criativo, apaixonado pela profissão, 
          estou sempre em busca de conhecimento no mercado, a fim de acompanhar
          as tendência dos mesmo.
        </p>
        <ul class="no-spaces">
          <li>
            <h2>Graphic Designer</h2>
          </li>
          <li>
            <h2>Motion Designer</h2>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import setActive from '../components/mixins/ActiveNavItem';

export default {
  name: 'about-page',
  mixins: [setActive],
  data() {
    return {
      nomeRota: null,
    };
  },
  // mounted() {
  //   const show = document.getElementById('show');
  //   show.click();
  // },
};
</script>

<style lang="scss">
@import '../assets/scss/variables.scss';
@import '../assets/scss/breakpoint.scss';

  #main-sobre {
    position: relative;
    #text-about {
      @include breakpoint(minDesktop) {
        padding-top: 150px;
      }
      @include breakpoint(smartphones) {
        padding-top: 0;
      }
    }
    h1 {
      @include breakpoint(minDesktop) {
        transform: rotate(270deg) scale(1);
        letter-spacing: 5px;
        cursor: default;
        // width: fit-content;
        text-align: center;
        position: absolute;
        right: -25px;
        transition-duration: .5s;
        bottom: 100px;
      }
      @include breakpoint(smartphones) {
        position: unset;
        text-align: left;
        transform: rotate(0) scale(1);
        right: unset;
        transition-duration: .5s;
        bottom: unset;
        &:hover {
          transform: scale(1.1) rotate(0);
          transition-duration: .5s;
        }
      }
      &:hover {
        transform: scale(1.1) rotate(270deg);
        transition-duration: .5s;
      }
    }
    ul {
      list-style: none;
      @include breakpoint(minDesktop) {
        
        display: inline-flex;
      }
      @include breakpoint(smartphones) {
        display: block;
        li {
          margin-right: 0;
          margin-top: 50px;
        }
      }
      li {
        margin-right: 40px;
        h2 {
          font-size: 18px;
          cursor: default;
          position: relative;
          margin-right: 50px;
          letter-spacing: 3px;
          @include breakpoint(smartphones) {
            margin-right: 0;
          }
          &::after {
            position: absolute;
            content: '';
            bottom: -2px;
            height: 1px;
            width: 90px !important;
            left: 0;
            background-color: $grey-text;
            transition-duration: .5s;
          }
          &:hover {
            &::after {
              content: '';
              width: 180px !important;
              transition-duration: .5s;
              @include breakpoint(smartphones) {
                width: unset;
              }
            }
          }
        }
      }
    }
    #img-miguel {
      width: 100%;
      position: relative;
      #logo-invert {
        position: absolute;
        width: 340px;
        height: 340px;
        top: 30px;
        /* right: 100px; */
        left: 60px;
        @include breakpoint(smartphones) {
          width: 185px;
          height: 185px;
          top: unset;
          bottom: -20px;
          /* right: 100px; */
          left: 5px;
        }
      }
      #img {
        width: 340px;
        height: 340px;
        object-fit: cover;
        filter: grayscale(1);
        @include breakpoint(smartphones) {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
