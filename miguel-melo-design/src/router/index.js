import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/Sobre.vue';
import Contact from '../views/Contato.vue';
import indexProject from '../views/Projetos.vue';
import fullView from '../views/ProjetoView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        name: 'Home',
        component: indexProject,
      },
      {
        path: ':nome',
        name: 'ProjetoFullView',
        component: fullView,
      },
    ],
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: About,
  },
  {
    path: '/contato',
    name: 'Contato',
    component: Contact,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
