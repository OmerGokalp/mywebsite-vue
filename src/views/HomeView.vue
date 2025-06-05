
<script setup>
import pp from '../assets/pp.png';
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex items-center justify-center px-4 py-10">
    <div class="bg-blue-50/80 border border-blue-100 dark:border-gray-700 rounded-2xl shadow-xl max-w-3xl w-full p-8 text-center">
      <!-- Profil Fotoğrafı -->
      <div class="flex justify-center mb-6">
        <img
          :src="pp"
          alt="Profile"
          class="w-40 h-40 object-cover rounded-full border-4 border-white shadow-md"
        />
      </div>

      <!-- İsim -->
      <h1 class="text-3xl font-bold text-gray-800 dark:text-black mb-2">Ömer Gökalp</h1>

      <!-- Açıklama -->
      <p class="text-black dark:text-black text-lg leading-relaxed text-justify">
        Merhaba, ben Ömer Gökalp. 27 yaşındayım. Front-End alanında kendimi geliştirmeye çalışıyor, HTML, CSS ve JavaScript üzerine yoğunlaşıyorum. Bu kişisel web sitesinde hem öğrendiklerimi uyguluyor hem de projelerimi ve ilgi alanlarımı paylaşıyorum. Aktif olarak Goodreads ve Twitter üzerinden okuduklarımı ve Letterboxd üzerinden de izlediğim filmleri paylaşıyorum. Ayrıca ilginç bulduğum hikayeleri ve mitolojik karakterleri araştırarak anlattığım bir YouTube kanalım var, göz atmayı unutmayın!
      </p>
    </div>
  </div>
</template>


