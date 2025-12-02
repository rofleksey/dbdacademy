<template>
  <section class="testimonials">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">SUCCESS STORIES</h2>
        <p class="section-subtitle">
          Join 666+ students who transformed their gameplay
        </p>
      </div>

      <div class="testimonials-grid">
        <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="testimonial-card"
            :style="{ '--avatar-color': testimonial.avatarColor }"
        >
          <div class="testimonial-header">
            <div class="avatar" :style="{ background: testimonial.avatarColor }">
              {{ testimonial.name.charAt(0) }}
            </div>
            <div class="student-info">
              <div class="student-name">{{ testimonial.name }}</div>
              <div class="student-role">{{ testimonial.role }}</div>
            </div>
          </div>

          <div class="testimonial-content">
            <p>"{{ testimonial.content }}"</p>
          </div>

          <div class="progress-stats">
            <div class="stat">
              <div class="stat-label">Before</div>
              <div class="stat-value">{{ testimonial.beforeRank }}</div>
            </div>
            <div class="stat-arrow">
              <i class="fas fa-arrow-right"></i>
            </div>
            <div class="stat">
              <div class="stat-label">After</div>
              <div class="stat-value highlight">{{ testimonial.afterRank }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Testimonial } from '../types'
import { gsap } from 'gsap'

const testimonials = ref<Testimonial[]>([
  {
    name: 'Alex "Torvo" Chen',
    role: 'Tournament Champion',
    content: 'Went from struggling in pubs to winning my first tournament within 3 months. Maznevich\'s mindset training was game-changing.',
    beforeRank: 'Silver IV',
    afterRank: 'Tournament Winner',
    avatarColor: '#00d4ff'
  },
  {
    name: 'Sarah "Nova" Williams',
    role: 'Content Creator',
    content: 'The VOD analysis sessions alone were worth the investment. My YouTube channel grew from 1k to 50k subs after implementing the strategies.',
    beforeRank: 'Gold II',
    afterRank: 'Top 500',
    avatarColor: '#ff00aa'
  },
  {
    name: 'Mark "Clutch" Rodriguez',
    role: 'Team Captain',
    content: 'My team went from local tournaments to competing internationally. The team coordination strategies are next level.',
    beforeRank: 'Platinum I',
    afterRank: 'Pro League',
    avatarColor: '#9d00ff'
  }
])

onMounted(() => {
  // Testimonials animation
  gsap.utils.toArray<HTMLElement>('.testimonial-card').forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 30,
      duration: 1,
      delay: index * 0.2,
      scale: 0.9
    })
  })
})
</script>

<style scoped>
.testimonials {
  padding: 120px 0;
  background: var(--bg-tertiary);
  position: relative;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.testimonial-card {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-5px);
  border-color: var(--primary);
}

.testimonial-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--gradient-1);
}

.testimonial-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  flex-shrink: 0;
}

.student-info {
  flex: 1;
}

.student-name {
  font-family: var(--font-heading);
  font-size: 1.2rem;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.student-role {
  font-size: 0.9rem;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.testimonial-content {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 2rem;
  font-style: italic;
  position: relative;
}

.testimonial-content::before {
  content: '"';
  font-size: 4rem;
  color: var(--primary);
  opacity: 0.3;
  position: absolute;
  top: -1.5rem;
  left: -0.5rem;
  font-family: serif;
}

.progress-stats {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 1rem;
}

.stat {
  text-align: center;
  flex: 1;
}

.stat-label {
  font-size: 0.8rem;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;
}

.stat-value {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-secondary);
}

.stat-value.highlight {
  color: var(--primary);
  text-shadow: 0 0 10px var(--primary-glow);
}

.stat-arrow {
  color: var(--primary);
  font-size: 1.2rem;
  padding: 0 1rem;
}

@media (max-width: 768px) {
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
}
</style>