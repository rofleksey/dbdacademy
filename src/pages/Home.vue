<template>
  <div id="app">
    <!-- Main Content -->
    <main>
      <HeroSection />
      <FeaturesSection />
      <CurriculumSection />
      <TestimonialsSection />
      <CtaSection />
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import HeroSection from '../components/HeroSection.vue'
import FeaturesSection from '../components/FeaturesSection.vue'
import CurriculumSection from '../components/CurriculumSection.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'
import CtaSection from '../components/CtaSection.vue'
import Footer from '../components/Footer.vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

onMounted(() => {
  // Initialize scroll animations
  ScrollTrigger.create({
    trigger: 'main',
    start: 'top 80%',
    onEnter: () => {
      document.body.classList.add('scrolled')
    },
    onLeaveBack: () => {
      document.body.classList.remove('scrolled')
    }
  })
})
</script>

<style scoped>
#app {
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
}
</style>