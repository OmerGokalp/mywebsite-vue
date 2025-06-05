<!-- Düzenlenmiş Navbar.vue -->
<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>

<template>
  <nav class="bg-white shadow-sm sticky top-0 z-50 border-b">
    <div class="max-w-5xl mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <router-link to="/" class="text-lg font-semibold text-gray-800 hover:text-blue-600 transition">Ömer Gökalp</router-link>

        <!-- Menü (desktop) -->
        <div class="hidden md:flex space-x-6">
          <router-link to="/cv" class="text-gray-600 hover:text-blue-600 transition">Özgeçmiş</router-link>
          <router-link to="/contact" class="text-gray-600 hover:text-blue-600 transition">İletişim</router-link>
        </div>

        <!-- Hamburger (mobil) -->
        <div class="md:hidden">
          <button @click="toggleMenu" class="text-gray-600 focus:outline-none">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                :d="menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Menü (mobil açık hali) -->
    <div v-if="menuOpen" class="md:hidden px-4 pb-4 space-y-2">
      <router-link to="/cv" class="block text-gray-600 hover:text-blue-600 transition">Özgeçmiş</router-link>
      <router-link to="/contact" class="block text-gray-600 hover:text-blue-600 transition">İletişim</router-link>
    </div>
  </nav>
</template>

<!-- Diğer sayfaların sade ve şık hale getirilmiş sürümleri sırayla eklenecek: HomeView.vue, CvView.vue, Contact.vue -->

