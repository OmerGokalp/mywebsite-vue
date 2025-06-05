<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router';
import { computed } from 'vue';
import Navbar from './views/Navbar.vue';
</script>

<template>
  <div>
      <Navbar/>
      <RouterView :key="$route.fullPath" />

  </div>  
</template>