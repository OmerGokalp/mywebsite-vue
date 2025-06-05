<template>
  <div class="min-h-screen px-4 py-10 bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex items-center justify-center">
    <div class="max-w-4xl w-full bg-white dark:bg-gray-800 shadow-2xl rounded-2xl border border-gray-200 dark:border-gray-700 transition-all duration-300">
      
      <!-- Başlık -->
      <div class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-t-2xl">
        <h1 class="text-3xl font-bold">Ömer Gökalp</h1>
        <p class="text-sm opacity-90">Elektrik-Elektronik Mühendisi</p>
        <p class="text-sm opacity-90">omergklp382@gmail.com · github.com/OmerGokalp</p>
      </div>

      <!-- İçerik -->
      <div class="p-6 space-y-8 text-gray-800 dark:text-gray-200">
        
        <!-- Hakkımda -->
        <section>
          <h2 class="text-xl font-semibold mb-2 border-b pb-1 border-gray-300 dark:border-gray-600">Hakkımda</h2>
          <p>
            Frontend teknolojilerine ilgi duyan, sürekli öğrenmeye açık bir geliştiriciyim. HTML, CSS, JavaScript ve Vue.js üzerine yoğunlaşıyorum. Temiz kod, kullanıcı deneyimi ve responsive tasarıma önem veriyorum.
          </p>
        </section>

        <!-- Yetenekler -->
        <section>
          <h2 class="text-xl font-semibold mb-2 border-b pb-1 border-gray-300 dark:border-gray-600">Yetenekler</h2>
          <ul class="grid grid-cols-2 gap-2 list-disc list-inside">
            <li>HTML5 / CSS3</li>
            <li>JavaScript</li>
            <li>Vue 3 / Composition API</li>
            <li>Tailwind CSS</li>
            <li>Responsive Design</li>
            <li>Git & GitHub</li>
          </ul>
        </section>

        <!-- İş Deneyimi -->
        <section>
          <h2 class="text-xl font-semibold mb-2 border-b pb-1 border-gray-300 dark:border-gray-600">İş Deneyimi</h2>
          <div class="space-y-4">
            <div>
              <h3 class="font-semibold text-gray-900 dark:text-white">Türk Hava Kuvvetleri</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">Kasım 2024 - Günümüz</p>
              <p>Türk Hava Kuvvetleri saflarında yedek subay olarak Hava Astsubay MYO'da geleceğin astsubaylarının yetiştirilmesinde görev aldım.</p>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 dark:text-white">Vera Elektromekanik</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">Haziran 2023 - Eylül 2023</p>
              <p>İş geliştirme, planlama, satın alma süreçlerine dahil oldum.</p>
            </div>
          </div>
        </section>

        <!-- Eğitim -->
        <section>
          <h2 class="text-xl font-semibold mb-2 border-b pb-1 border-gray-300 dark:border-gray-600">Eğitim</h2>
          <div class="space-y-3">
            <div>
              <h3 class="font-semibold text-gray-900 dark:text-white">
                Ankara Yıldırım Beyazıt Üniversitesi - Elektrik-Elektronik Mühendisliği (Yüksek Lisans)
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">2021 - ----</p>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 dark:text-white">
                Karabük Üniversitesi - Elektrik-Elektronik Mühendisliği
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">2017 - 2021</p>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 dark:text-white">
                Life Science of Prague - Elektrik-Elektronik Mühendisliği
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">2017 - 2021</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
