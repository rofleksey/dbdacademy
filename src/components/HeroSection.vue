<template>
  <section class="hero">
    <div class="container">
      <!-- Animated Title -->
      <div class="hero-title-wrapper">
        <h1 class="hero-title">
          <span class="title-line">
            <span class="text-glow">DBD</span>
            <span class="text-outline">ACADEMY</span>
          </span>
          <span class="title-line subtitle">
            ELITE TRAINING PROGRAM
          </span>
        </h1>

        <!-- DBD Blood Particles -->
        <div class="blood-particles">
          <div v-for="i in 15" :key="i" class="blood-particle" :style="bloodParticleStyle()"></div>
        </div>
      </div>

      <!-- Hero Content -->
      <div class="hero-content">
        <p class="hero-description">
          Founded by <span class="highlight">Maznevich</span>, the undisputed Dead by Daylight champion.
          Transform from casual player to tournament champion through our elite training program.
        </p>

        <!-- Stats -->
        <div class="hero-stats">
          <div class="stat">
            <div class="stat-number">666+</div>
            <div class="stat-label">Students Trained Since 2016</div>
          </div>
        </div>

        <!-- CTA Button -->
        <button class="hero-cta" @click="scrollToEnroll">
          <span class="cta-text">ENROLL NOW</span>
          <span class="cta-icon">
            <i class="fas fa-arrow-right"></i>
          </span>
          <div class="cta-glow"></div>
        </button>
      </div>

      <!-- Scroll Indicator -->
      <div class="scroll-indicator" @click="scrollToFeatures">
        <div class="mouse">
          <div class="wheel"></div>
        </div>
        <span class="scroll-text">Scroll to explore</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'

const scrollToEnroll = () => {
  document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' })
}

const scrollToFeatures = () => {
  document.querySelector('.features')?.scrollIntoView({ behavior: 'smooth' })
}

const bloodParticleStyle = () => {
  const size = Math.random() * 6 + 3
  const x = Math.random() * 100
  const y = Math.random() * 100
  const delay = Math.random() * 2
  const duration = Math.random() * 3 + 2
  const bloodColors = ['#8b0000', '#b22222', '#660000', '#a52a2a']
  const bloodColor = bloodColors[Math.floor(Math.random() * bloodColors.length)]

  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${x}%`,
    top: `${y}%`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
    backgroundColor: bloodColor,
    borderRadius: size > 4 ? '50%' : `${Math.random() * 50 + 25}% ${Math.random() * 50 + 25}% ${Math.random() * 50 + 25}% ${Math.random() * 50 + 25}% / ${Math.random() * 50 + 25}% ${Math.random() * 50 + 25}% ${Math.random() * 50 + 25}% ${Math.random() * 50 + 25}%`
  }
}

onMounted(() => {
  // Hero title animation
  gsap.from('.hero-title', {
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: 'power3.out'
  })

  // Hero content animation
  gsap.from('.hero-content', {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.5,
    ease: 'power3.out'
  })

  // Blood particles animation
  gsap.to('.blood-particle', {
    y: -40,
    opacity: 0,
    duration: 4,
    repeat: -1,
    ease: 'power1.inOut',
    stagger: {
      amount: 3,
      from: 'random'
    }
  })
})
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 120px 0 60px;
  position: relative;
  overflow: hidden;
}

.hero-title-wrapper {
  position: relative;
  margin-bottom: 3rem;
}

.hero-title {
  font-family: var(--font-heading);
  text-transform: uppercase;
  text-align: center;
}

.title-line {
  display: block;
}

.hero-title .title-line:first-child {
  font-size: 6rem;
  font-weight: 900;
  line-height: 1;
  margin-bottom: 1rem;
}

.text-glow {
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px var(--primary-glow);
}

.text-outline {
  color: transparent;
  -webkit-text-stroke: 2px var(--primary);
  text-stroke: 2px var(--primary);
  margin-left: 1rem;
}

.subtitle {
  font-size: 1.5rem;
  color: var(--text-secondary);
  letter-spacing: 0.3em;
}

.blood-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  overflow: hidden;
}

.blood-particle {
  position: absolute;
  opacity: 0.4;
  filter: blur(1px);
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.hero-description {
  font-size: 1.3rem;
  color: var(--text-secondary);
  margin-bottom: 3rem;
  line-height: 1.8;
}

.highlight {
  color: var(--primary);
  font-weight: 600;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.stat {
  text-align: center;
}

.stat-number {
  font-family: var(--font-heading);
  font-size: 3rem;
  font-weight: 900;
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.hero-cta {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 3rem;
  background: var(--gradient-1);
  border: none;
  border-radius: 50px;
  font-family: var(--font-heading);
  font-size: 1.2rem;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s ease;
  margin-bottom: 4rem;
}

.hero-cta:hover {
  transform: translateY(-5px);
}

.hero-cta:hover .cta-icon {
  transform: translateX(10px);
}

.cta-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--gradient-1);
  filter: blur(20px);
  opacity: 0.5;
  z-index: -1;
}

.cta-icon {
  transition: transform 0.3s ease;
}

.scroll-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.scroll-indicator:hover {
  opacity: 1;
}

.mouse {
  width: 30px;
  height: 50px;
  border: 2px solid var(--primary);
  border-radius: 15px;
  position: relative;
}

.wheel {
  width: 4px;
  height: 10px;
  background: var(--primary);
  border-radius: 2px;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  animation: scroll 2s infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-50%) translateY(20px);
    opacity: 0;
  }
}

.scroll-text {
  font-size: 0.9rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* Tablet */
@media (max-width: 1024px) {
  .hero-title .title-line:first-child {
    font-size: 5rem;
  }

  .hero-description {
    font-size: 1.2rem;
  }

  .hero .container {
    padding: 0 !important;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .hero {
    padding: 100px 0 40px;
    min-height: 90vh;
  }

  .hero .container {
    padding: 0 !important;
  }

  .hero-title-wrapper {
    margin-bottom: 2.5rem;
  }

  .hero-title .title-line:first-child {
    font-size: 3.5rem;
    line-height: 1.1;
  }

  .text-outline {
    margin-left: 0.5rem;
    -webkit-text-stroke: 1.5px var(--primary);
    text-stroke: 1.5px var(--primary);
  }

  .subtitle {
    font-size: 0.9rem;
    letter-spacing: 0.2em;
    padding: 0 10px;
  }

  .hero-content {
    padding: 0 16px;
  }

  .hero-description {
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
    line-height: 1.6;
  }

  .hero-stats {
    gap: 2.5rem;
    margin-bottom: 2.5rem;
  }

  .stat {
    min-width: auto;
  }

  .stat-number {
    font-size: 2.5rem;
  }

  .stat-label {
    font-size: 0.85rem;
    letter-spacing: 0.08em;
  }

  .hero-cta {
    padding: 1.2rem 2.5rem;
    font-size: 1.1rem;
    min-width: 260px;
    margin-bottom: 3rem;
  }

  .mouse {
    width: 26px;
    height: 44px;
  }
}

/* Small Mobile */
@media (max-width: 480px) {
  .hero-title .title-line:first-child {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 0.8rem;
    letter-spacing: 0.15em;
  }

  .hero-description {
    font-size: 1rem;
  }

  .stat-number {
    font-size: 2.2rem;
  }

  .stat-label {
    font-size: 0.8rem;
  }

  .hero-cta {
    padding: 1.1rem 2rem;
    font-size: 1rem;
    min-width: 240px;
    gap: 0.8rem;
  }

  .blood-particles {
    display: none;
  }
}

/* Extra Small Mobile */
@media (max-width: 360px) {
  .hero-title .title-line:first-child {
    font-size: 2.4rem;
  }

  .subtitle {
    font-size: 0.75rem;
  }

  .hero-cta {
    min-width: 220px;
    padding: 1rem 1.8rem;
  }
}
</style>