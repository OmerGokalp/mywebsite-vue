<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>

<template>
  <nav class="bg-white shadow-md sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-center items-center h-16 space-x-8">
        <!-- Logo -->
        <a href="/" class="text-xl font-bold text-blue-600">ÖMER GÖKALP</a>

        <!-- Menü (desktop) -->
        <div class="hidden md:flex items-center space-x-6">
          <!-- <a href="#home" class="text-gray-700 hover:text-blue-600">Anasayfa</a> -->
          <a href="#projects" class="text-gray-700 hover:text-blue-600">Projeler</a>
          <a href="#contact" class="text-gray-700 hover:text-blue-600">İletişim</a>
        </div>

        <!-- Hamburger (mobil) -->
        <div class="md:hidden ml-auto">
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
    <div v-if="menuOpen" class="md:hidden px-4 pb-4 flex flex-col items-center space-y-2">
      <a href="#home" class="text-gray-700 hover:text-blue-600">Anasayfa</a>
      <a href="#projects" class="text-gray-700 hover:text-blue-600">Projeler</a>
      <a href="#contact" class="text-gray-700 hover:text-blue-600">İletişim</a>
    </div>
  </nav>
</template>
