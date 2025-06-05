import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import CvView from '../views/CvView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactView,
    },
    {
      path: '/cv',
      name: 'Cv',
      component: CvView,
    },
  ],
});

export default router