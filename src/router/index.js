import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Navbar from '../views/Navbar.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/navbar',
      name: 'Navbar',
      component: Navbar,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactView,
    },
  ],
});

export default router