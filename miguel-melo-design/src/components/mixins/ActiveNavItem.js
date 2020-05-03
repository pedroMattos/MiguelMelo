export default {
  mounted() {
    const ctx = this;
    this.$nextTick().then(() => {
      this.nomeRota = this.$route.name;
      function setActiveItem() {
        const listItem = document.getElementsByClassName('list-item');
        const routeN = ctx.nomeRota;
        for (let i = 0; i < listItem.length; i++) {
          const name = listItem[i].textContent;
          if (listItem[i].textContent == routeN) {
            listItem[i].classList.add('menu-item-active');
          } else if (routeN == 'ProjetoFullView') {
            listItem[0].classList.add('menu-item-active');
          } else {
            if (listItem[i].classList.contains('menu-item-active')) {
              listItem[i].classList.remove('menu-item-active');
            }
          }
        }
      }
      setActiveItem();
    })
  },
};
