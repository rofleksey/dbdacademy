<template>
  <div id="app">
    <!-- DBD Styled Background Elements -->
    <div class="parallax-bg">
      <div class="bg-element element-1"></div>
      <div class="bg-element element-2"></div>
      <div class="bg-element element-3"></div>
      <div class="bg-element element-4"></div>
      <div class="bg-element element-5"></div>
      <div class="bg-element element-6"></div>
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
  filter: blur(60px);
  opacity: 0.15;
  mix-blend-mode: multiply;
}

.element-1 {
  top: 10%;
  left: 10%;
  width: 300px;
  height: 150px;
  background: #8b0000;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  transform: rotate(45deg);
  animation: blood-drip 25s ease-in-out infinite;
}

.element-2 {
  top: 60%;
  right: 10%;
  width: 250px;
  height: 120px;
  background: #b22222;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  transform: rotate(-30deg);
  animation: blood-drip 20s ease-in-out infinite reverse;
}

.element-3 {
  bottom: 20%;
  left: 20%;
  width: 180px;
  height: 90px;
  background: #660000;
  border-radius: 40% 60% 60% 40% / 70% 30% 70% 30%;
  transform: rotate(15deg);
  animation: blood-drip 30s ease-in-out infinite;
}

.element-4 {
  top: 30%;
  right: 30%;
  width: 120px;
  height: 60px;
  background: #8b0000;
  border-radius: 50% 50% 50% 50% / 60% 40% 60% 40%;
  transform: rotate(-60deg);
  animation: blood-drip 22s ease-in-out infinite reverse;
}

.element-5 {
  top: 15%;
  left: 70%;
  width: 200px;
  height: 100px;
  background: #a52a2a;
  border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%;
  transform: rotate(75deg);
  animation: blood-drip 28s ease-in-out infinite;
}

.element-6 {
  bottom: 40%;
  right: 60%;
  width: 150px;
  height: 75px;
  background: #8b0000;
  border-radius: 30% 70% 70% 30% / 40% 40% 60% 60%;
  transform: rotate(-15deg);
  animation: blood-drip 24s ease-in-out infinite reverse;
}

.bg-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image:
      linear-gradient(rgba(139, 0, 0, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(139, 0, 0, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  mask-image: radial-gradient(circle at center, black 30%, transparent 70%);
}

@keyframes blood-drip {
  0%, 100% {
    transform: translateY(0) rotate(var(--rotation, 0deg));
  }
  50% {
    transform: translateY(-20px) rotate(calc(var(--rotation, 0deg) + 5deg));
  }
}

.element-1 { --rotation: 45deg; }
.element-2 { --rotation: -30deg; }
.element-3 { --rotation: 15deg; }
.element-4 { --rotation: -60deg; }
.element-5 { --rotation: 75deg; }
.element-6 { --rotation: -15deg; }
</style>