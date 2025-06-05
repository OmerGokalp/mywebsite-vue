<template>
  <div class="w-screen h-screen flex items-center justify-center">
    <div class="grid grid-cols-4 gap-4">
      <button
        v-for="button in socialButtons"
        :key="button.id"
        :id="button.id"
        :class="button.classes"
      >
        <i :class="button.icon"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'

const socialButtons = [
  {
    id: 'facebook',
    label: 'Facebook',
    icon: 'fab fa-facebook-f',
    classes: 'bg-white border-2 border-blue-600 w-12 h-12 text-2xl rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transform hover:-translate-y-3 duration-500'
  },
  {
    id: 'instagram',
    label: 'Instagram',
    icon: 'fab fa-instagram',
    classes: 'bg-white border-2 border-pink-500 w-12 h-12 text-2xl rounded-full text-pink-600 hover:text-white hover:bg-gradient-to-b hover:from-indigo-600 hover:via-pink-600 hover:to-yellow-500 transform hover:-translate-y-3 duration-500'
  },
  {
    id: 'whatsapp',
    label: 'Whatsapp',
    icon: 'fab fa-whatsapp',
    classes: 'bg-white border-2 border-green-600 w-12 h-12 text-2xl rounded-full text-green-500 hover:bg-green-600 hover:text-white transform hover:-translate-y-3 duration-500'
  },
  {
    id: 'twitter',
    label: 'Twitter',
    icon: 'fab fa-twitter',
    classes: 'bg-white border-2 border-blue-400 w-12 h-12 text-2xl rounded-full text-blue-400 hover:bg-blue-400 hover:text-white transform hover:-translate-y-3 duration-500'
  },
  {
    id: 'youtube',
    label: 'Youtube',
    icon: 'fab fa-youtube',
    classes: 'bg-white border-2 border-red-500 w-12 h-12 text-2xl rounded-full text-red-500 hover:bg-red-500 hover:text-white transform hover:-translate-y-3 duration-500'
  },
  {
    id: 'snapchat',
    label: 'Snapchat',
    icon: 'fab fa-snapchat-ghost',
    classes: 'bg-white border-2 border-yellow-300 w-12 h-12 text-2xl rounded-full text-yellow-300 hover:bg-yellow-300 hover:text-white transform hover:-translate-y-3 duration-500'
  },
  {
    id: 'linkedin',
    label: 'Linkedin',
    icon: 'fab fa-linkedin-in',
    classes: 'bg-white border-2 border-blue-500 w-12 h-12 text-2xl rounded-full text-blue-500 hover:bg-blue-500 hover:text-white transform hover:-translate-y-3 duration-500'
  },
  {
    id: 'tiktok',
    label: 'Tiktok',
    icon: 'fab fa-tiktok',
    classes: 'bg-white border-2 border-black w-12 h-12 text-2xl rounded-full text-black hover:bg-black hover:text-white transform hover:-translate-y-3 duration-500'
  },
  {
    id: 'telegram',
    label: 'Telegram',
    icon: 'fab fa-telegram-plane',
    classes: 'bg-white border-2 border-blue-400 w-12 h-12 text-2xl rounded-full text-blue-400 hover:bg-blue-400 hover:text-white transform hover:-translate-y-3 duration-500'
  },
  {
    id: 'pinterest',
    label: 'Pinterest',
    icon: 'fab fa-pinterest-p',
    classes: 'bg-white border-2 border-red-500 w-12 h-12 text-2xl rounded-full text-red-500 hover:bg-red-500 hover:text-white transform hover:-translate-y-3 duration-500'
  },
  {
    id: 'spotify',
    label: 'Spotify',
    icon: 'fab fa-spotify',
    classes: 'bg-white border-2 border-green-500 w-12 h-12 text-2xl rounded-full text-green-500 hover:bg-green-500 hover:text-white transform hover:-translate-y-3 duration-500'
  },
  {
    id: 'discord',
    label: 'Discord',
    icon: 'fab fa-discord',
    classes: 'bg-white border-2 border-indigo-500 w-12 h-12 text-2xl rounded-full text-indigo-500 hover:bg-indigo-500 hover:text-white transform hover:-translate-y-3 duration-500'
  },
  {
    id: 'reddit',
    label: 'Reddit',
    icon: 'fab fa-reddit-alien',
    classes: 'bg-white border-2 border-yellow-600 w-12 h-12 text-2xl rounded-full text-yellow-600 hover:bg-yellow-600 hover:text-white transform hover:-translate-y-3 duration-500'
  },
  {
    id: 'googleplus',
    label: 'Google +',
    icon: 'fab fa-google-plus-g',
    classes: 'bg-white border-2 border-red-500 w-12 h-12 text-2xl rounded-full text-red-500 hover:bg-red-500 hover:text-white transform hover:-translate-y-3 duration-500'
  },
  {
    id: 'skype',
    label: 'Skype',
    icon: 'fab fa-skype',
    classes: 'bg-white border-2 border-blue-400 w-12 h-12 text-2xl rounded-full text-blue-400 hover:bg-blue-400 hover:text-white transform hover:-translate-y-3 duration-500'
  },
  {
    id: 'line',
    label: 'Line',
    icon: 'fab fa-line',
    classes: 'bg-white border-2 border-green-400 w-12 h-12 text-2xl rounded-full text-green-400 hover:bg-green-400 hover:text-white transform hover:-translate-y-3 duration-500'
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
