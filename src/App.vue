<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router';
import { computed } from 'vue';
import HomeView from './views/HomeView.vue';
import Navbar from './views/Navbar.vue';
</script>

<template>
  <main>
      <Navbar/>
     <RouterView/>
  </main>
 
  
</template>