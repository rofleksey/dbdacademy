<template>
  <div id="app">
    <!-- Parallax Background Elements -->
    <div class="parallax-bg">
      <div class="bg-element element-1"></div>
      <div class="bg-element element-2"></div>
      <div class="bg-element element-3"></div>
      <div class="bg-element element-4"></div>
      <div class="bg-grid"></div>
    </div>

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
import HeroSection from './components/HeroSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import CurriculumSection from './components/CurriculumSection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import CtaSection from './components/CtaSection.vue'
import Footer from './components/Footer.vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

onMounted(() => {
  // Initialize parallax effects
  gsap.utils.toArray<HTMLElement>('.bg-element').forEach((element, i) => {
    gsap.to(element, {
      y: () => (i + 1) * 20,
      scrollTrigger: {
        trigger: 'main',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      }
    })
  })

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

.parallax-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
}

.bg-element {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.3;
}

.element-1 {
  top: 10%;
  left: 10%;
  width: 400px;
  height: 400px;
  background: var(--primary);
  animation: float 20s ease-in-out infinite;
}

.element-2 {
  top: 60%;
  right: 10%;
  width: 300px;
  height: 300px;
  background: var(--accent);
  animation: float 15s ease-in-out infinite reverse;
}

.element-3 {
  bottom: 20%;
  left: 20%;
  width: 200px;
  height: 200px;
  background: #9d00ff;
  animation: float 25s ease-in-out infinite;
}

.element-4 {
  top: 30%;
  right: 30%;
  width: 150px;
  height: 150px;
  background: var(--primary);
  animation: float 18s ease-in-out infinite reverse;
}

.bg-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image:
      linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  mask-image: radial-gradient(circle at center, black 30%, transparent 70%);
}
</style>