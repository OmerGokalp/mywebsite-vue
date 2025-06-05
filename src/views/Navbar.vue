<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>

<template>
  <nav class="bg-gradient-to-br from-indigo-100 via-white to-purple-100 shadow-sm sticky top-0 z-50 border-b">
    <div class="max-w-5xl mx-auto px-4">
      <!-- Navbar Container -->
      <div class="flex flex-col md:flex-row md:justify-center md:items-center h-auto md:h-16 space-y-2 md:space-y-0">
        
        <!-- Logo (ortalanmış) -->
        <router-link
          to="/"
          class="text-lg font-semibold text-gray-800 hover:text-blue-600 transition text-center md:mr-6"
        >
          Ömer Gökalp
        </router-link>

        <!-- Menü (desktop) -->
        <div class="flex justify-center space-x-6">
          <router-link to="/cv" class="text-gray-600 hover:text-blue-600 transition">Özgeçmiş</router-link>
          <router-link to="/contact" class="text-gray-600 hover:text-blue-600 transition">İletişim</router-link>
        </div>

        <!-- Hamburger (mobil) -->
        <div class="absolute top-4 right-4 md:hidden">
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
    <div v-if="menuOpen" class="md:hidden px-4 pb-4 space-y-2 text-center">
      <router-link to="/cv" class="block text-gray-600 hover:text-blue-600 transition">Özgeçmiş</router-link>
      <router-link to="/contact" class="block text-gray-600 hover:text-blue-600 transition">İletişim</router-link>
    </div>
  </nav>
</template>
