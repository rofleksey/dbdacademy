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
            <p>{{ testimonial.content }}</p>
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
    avatarColor: '#00d4ff'
  },
  {
    name: 'Sarah "Nova" Williams',
    role: 'Content Creator',
    content: 'The VOD analysis sessions alone were worth the investment. My YouTube channel grew from 1k to 50k subs after implementing the strategies.',
    avatarColor: '#ff00aa'
  },
  {
    name: 'Mark "Clutch" Rodriguez',
    role: 'Team Captain',
    content: 'My team went from local tournaments to competing internationally. The team coordination strategies are next level.',
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
  font-style: italic;
  position: relative;
  padding-left: 1.5rem;
}

@media (max-width: 768px) {
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
}
</style>