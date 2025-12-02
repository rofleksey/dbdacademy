<template>
  <section class="features">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">WHY DBD ACADEMY</h2>
        <p class="section-subtitle">
          Elite training methodology developed by the undisputed champion
        </p>
      </div>

      <div class="features-grid">
        <div
            v-for="(feature, index) in features"
            :key="index"
            class="feature-card"
            :style="{ '--feature-color': feature.color }"
        >
          <div class="feature-icon-wrapper">
            <i :class="feature.icon"></i>
          </div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
          <div class="feature-glow"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Feature } from '../types'
import { gsap } from 'gsap'

const features = ref<Feature[]>([
  {
    icon: 'fas fa-user-ninja',
    title: 'Personalized Training',
    description: 'One-on-one coaching sessions tailored to your specific weaknesses and goals. No generic advice.',
    color: '#00d4ff'
  },
  {
    icon: 'fas fa-brain',
    title: 'Advanced Mindset',
    description: 'Learn the champion mindset. Decision making, pressure handling, and mental fortitude training.',
    color: '#ff00aa'
  },
  {
    icon: 'fas fa-chess-board',
    title: 'Strategy Optimization',
    description: 'Advanced game theory, build optimization, and meta analysis from tournament perspective.',
    color: '#9d00ff'
  },
  {
    icon: 'fas fa-video',
    title: 'VOD Analysis',
    description: 'Frame-by-frame analysis of your gameplay with direct feedback from Maznevich.',
    color: '#00ffaa'
  },
  {
    icon: 'fas fa-trophy',
    title: 'Tournament Prep',
    description: 'Specialized training for tournament environments including scrims and pressure simulation.',
    color: '#ffaa00'
  },
  {
    icon: 'fas fa-users',
    title: 'Elite Community',
    description: 'Join our private community of champions. Network with top players and tournament winners.',
    color: '#aa00ff'
  }
])

onMounted(() => {
  // Feature cards animation
  gsap.utils.toArray<HTMLElement>('.feature-card').forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 50,
      duration: 1,
      delay: index * 0.1
    })
  })
})
</script>

<style scoped>
.features {
  padding: 120px 0;
  position: relative;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
  border-color: var(--primary);
}

.feature-card:hover .feature-glow {
  opacity: 0.3;
}

.feature-icon-wrapper {
  width: 70px;
  height: 70px;
  background: rgba(var(--feature-color-rgb), 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  color: var(--feature-color);
}

.feature-title {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.feature-description {
  color: var(--text-secondary);
  line-height: 1.7;
}

.feature-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, var(--feature-color) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

/* Dynamic color injection */
.feature-card {
  --feature-color-rgb: 0, 212, 255;
}

.feature-card:nth-child(1) { --feature-color-rgb: 0, 212, 255; }
.feature-card:nth-child(2) { --feature-color-rgb: 255, 0, 170; }
.feature-card:nth-child(3) { --feature-color-rgb: 157, 0, 255; }
.feature-card:nth-child(4) { --feature-color-rgb: 0, 255, 170; }
.feature-card:nth-child(5) { --feature-color-rgb: 255, 170, 0; }
.feature-card:nth-child(6) { --feature-color-rgb: 170, 0, 255; }

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }

  .feature-card {
    padding: 2rem;
  }
}
</style>