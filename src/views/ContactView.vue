<template>
  <div class="bg-gradient-to-br from-indigo-100 via-white to-purple-100 fixed inset-0 flex items-center justify-center overflow-hidden">    
    <div class="flex flex-col items-center space-y-6">
      <!-- Açıklama Metni -->
      <p class="text-gray-700 text-lg font-medium text-center">
        Benimle aşağıdaki sosyal medya kanallarıyla iletişime geçebilirsiniz.
      </p>

      <!-- Sosyal Medya Butonları -->
      <div class="grid grid-cols-4 gap-4">
        <a
          v-for="button in socialButtons"
          :key="button.id"
          :id="button.id"
          :href="button.href"
          target="_blank"
          rel="noopener noreferrer"
          :class="button.classes"
        >
          <!-- Font Awesome ikonları -->
          <i v-if="button.iconType === 'fa'" :class="button.icon"></i>

          <!-- Simple Icons ikonları (SVG) -->
          <svg
            v-else-if="button.iconType === 'svg'"
            :viewBox="button.icon.viewBox"
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
          >
            <path :d="button.icon.path" :fill="button.svgColor" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'

// Simple Icons importları
import { siLetterboxd } from 'simple-icons/icons'
import { siGoodreads } from 'simple-icons/icons'
import { siGmail } from 'simple-icons/icons'


// Simple Icons ikonlarını Vue'da kullanılabilir hale getiren yardımcı fonksiyon
const iconToSvgObject = (iconData) => ({
  path: iconData.path,
  viewBox: '0 0 24 24'
})

const sharedClasses = 'flex items-center justify-center w-12 h-12 text-2xl rounded-full transform hover:-translate-y-3 duration-500'

const socialButtons = [
  {
    id: 'linkedin',
    label: 'Linkedin',
    iconType: 'fa',
    icon: 'fab fa-linkedin-in',
    classes: `${sharedClasses} bg-white border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white`,
    href: 'https://www.linkedin.com/in/omer-gokalp/'
  },
  {
    id: 'gmail',
    label: 'Gmail',
    iconType: 'svg',
    icon: iconToSvgObject(siGmail),
    svgColor: '#D14836',
    classes: `${sharedClasses} bg-white border-2 border-red-600 hover:bg-red-600 hover:text-white`,
    href: 'mailto:omergklp382@gmail.com'
  },  
  {
    id: 'github',
    label: 'Github',
    iconType: 'fa',
    icon: 'fab fa-github',
    classes: `${sharedClasses} bg-white border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white`,
    href: 'https://github.com/OmerGokalp'
  }, 
  {
    id: 'instagram',
    label: 'Instagram',
    iconType: 'fa',
    icon: 'fab fa-instagram',
    classes: `${sharedClasses} bg-white border-2 border-pink-500 text-pink-600 hover:text-white hover:bg-gradient-to-b hover:from-indigo-600 hover:via-pink-600 hover:to-yellow-500`,
    href: 'https://www.instagram.com/omergklp/'
  },
  {
    id: 'twitter',
    label: 'Twitter',
    iconType: 'fa',
    icon: 'fab fa-twitter',
    classes: `${sharedClasses} bg-white border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white`,
    href: 'https://twitter.com/omergklp'
  },
  {
    id: 'youtube',
    label: 'Youtube',
    iconType: 'fa',
    icon: 'fab fa-youtube',
    classes: `${sharedClasses} bg-white border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white`,
    href: 'http://www.youtube.com/@omergklp'
  },   
  {
    id: 'letterboxd',
    label: 'Letterboxd',
    iconType: 'svg',
    icon: iconToSvgObject(siLetterboxd),
    svgColor: '#181818',
    classes: `${sharedClasses} bg-white border-2 border-black hover:bg-black hover:text-white`,
    href: 'https://letterboxd.com/omergklp/'
  },
  {
    id: 'goodreads',
    label: 'Goodreads',
    iconType: 'svg',
    icon: iconToSvgObject(siGoodreads),
    svgColor: '#382110',
    classes: `${sharedClasses} bg-white border-2 border-green-600 hover:bg-green-600 hover:text-white`,
    href: 'https://www.goodreads.com/omergklp'
  }
]

onMounted(() => {
  socialButtons.forEach((btn) => {
    tippy(`#${btn.id}`, {
      content: btn.label,
      animation: 'fade',
      delay: [200, 200],
    })
  })
})
</script>

<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
</style>
