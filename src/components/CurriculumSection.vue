<template>
  <section class="curriculum">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">CURRICULUM</h2>
        <p class="section-subtitle">
          12-week transformation program designed by champions
        </p>
      </div>

      <div class="timeline">
        <div
            v-for="(item, index) in curriculum"
            :key="index"
            class="timeline-item"
            :class="{ 'left': index % 2 === 0, 'right': index % 2 !== 0 }"
        >
          <div class="timeline-content">
            <div class="timeline-header">
              <div class="week-badge">Week {{ item.weeks }}</div>
              <h3 class="timeline-title">{{ item.title }}</h3>
            </div>
            <p class="timeline-description">{{ item.description }}</p>
            <div class="topics">
              <span
                  v-for="(topic, topicIndex) in item.topics"
                  :key="topicIndex"
                  class="topic-tag"
              >
                {{ topic }}
              </span>
            </div>
          </div>
          <div class="timeline-node">
            <div class="node-dot"></div>
            <div class="node-line"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { CurriculumItem } from '../types'
import { gsap } from 'gsap'

const curriculum = ref<CurriculumItem[]>([
  {
    title: 'Fundamentals Mastery',
    description: 'Master the core mechanics that separate good players from great ones.',
    weeks: 1,
    topics: ['Movement Optimization', 'Tile Reading', 'Resource Management', 'Basic Mindgames']
  },
  {
    title: 'Advanced Killer Tech',
    description: 'Learn champion-level killer strategies and mind games.',
    weeks: 4,
    topics: ['3-Gen Strategies', 'Pressure Application', 'Hook Trading', 'Map Control']
  },
  {
    title: 'Survivor Elite Play',
    description: 'Tournament-level survivor gameplay and team coordination.',
    weeks: 8,
    topics: ['Loop Extensions', 'Safe Unhooks', 'Gen Efficiency', 'Comms Strategy']
  },
  {
    title: 'Meta Analysis',
    description: 'Understand and exploit the current tournament meta.',
    weeks: 10,
    topics: ['Perk Optimization', 'Addon Combos', 'Map Strategies', 'Counter Play']
  },
  {
    title: 'Tournament Preparation',
    description: 'Prepare for competitive play and handle tournament pressure.',
    weeks: 12,
    topics: ['Scrim Practice', 'VOD Reviews', 'Mental Training', 'Live Coaching']
  }
])

onMounted(() => {
  // Timeline animation
  gsap.utils.toArray<HTMLElement>('.timeline-item').forEach((item, index) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      x: index % 2 === 0 ? -50 : 50,
      duration: 1,
      delay: index * 0.2
    })
  })
})
</script>

<style scoped>
.curriculum {
  padding: 120px 0;
  background: var(--bg-secondary);
  position: relative;
  overflow: hidden;
}

.timeline {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--gradient-1);
  transform: translateX(-50%);
}

.timeline-item {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
  position: relative;
}

.timeline-item.left {
  flex-direction: row;
}

.timeline-item.right {
  flex-direction: row-reverse;
}

.timeline-content {
  width: 45%;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 15px;
  padding: 2rem;
  position: relative;
}

.timeline-item.left .timeline-content {
  margin-right: auto;
}

.timeline-item.right .timeline-content {
  margin-left: auto;
}

.timeline-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.week-badge {
  background: var(--gradient-1);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-family: var(--font-heading);
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  flex-shrink: 0;
}

.timeline-title {
  font-family: var(--font-heading);
  font-size: 1.3rem;
  color: var(--text-primary);
}

.timeline-description {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.7;
}

.topics {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.topic-tag {
  background: rgba(0, 212, 255, 0.1);
  color: var(--primary);
  padding: 0.5rem 1rem;
  border-radius: 15px;
  font-size: 0.85rem;
  border: 1px solid rgba(0, 212, 255, 0.2);
}

.timeline-node {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40px;
  z-index: 1;
}

.node-dot {
  width: 20px;
  height: 20px;
  background: var(--gradient-1);
  border-radius: 50%;
  border: 3px solid var(--bg-secondary);
  box-shadow: 0 0 20px var(--primary-glow);
}

.node-line {
  width: 2px;
  height: calc(100% + 4rem);
  background: var(--gradient-1);
  margin-top: 10px;
  opacity: 0.3;
}

@media (max-width: 768px) {
  .timeline::before {
    left: 30px;
  }

  .timeline-item {
    flex-direction: row !important;
    justify-content: flex-start;
  }

  .timeline-content {
    width: calc(100% - 60px);
    margin-left: 60px !important;
    margin-right: 0 !important;
  }

  .timeline-node {
    left: 30px;
  }
}
</style>