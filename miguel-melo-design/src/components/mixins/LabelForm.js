export default {
  mounted() {
    function labelMove() {
      const label = document.getElementsByClassName('label');
      const input = document.getElementsByClassName('input');
      for(let i = 0; i < label.length; i++) {
        label[i].addEventListener('click', (el) => {
          el.target.classList.add('clicked');
        })
        input[i].addEventListener('click', (el) => {
          label[i].classList.add('clicked');
        })
        input[i].addEventListener('blur', (el) => {
          if(el.target.value.length <= 0) {
            label[i].classList.remove('clicked');
          } else {
            label[i].classList.add('clicked');
          }
        })
      }
    }
    labelMove();
  },
};
