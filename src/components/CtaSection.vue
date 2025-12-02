<template>
  <section class="cta" id="enroll">
    <div class="container">
      <div class="cta-content">
        <div class="cta-header">
          <h2 class="cta-title">READY TO BECOME<br>A CHAMPION?</h2>
          <p class="cta-subtitle">
            Limited spots available. Next cohort starts soon.
          </p>
        </div>

        <div class="pricing-card">
          <div class="pricing-header">
            <div class="pricing-badge">ELITE PROGRAM</div>
            <div class="pricing-price">
              <span class="amount">$999</span>
              <span class="period">/ 3 months</span>
            </div>
            <div class="pricing-savings">
              <i class="fas fa-bolt"></i>
              Save $300 compared to individual sessions
            </div>
          </div>

          <div class="pricing-features">
            <div class="feature">
              <i class="fas fa-check"></i>
              <span>12 weeks of personalized coaching</span>
            </div>
            <div class="feature">
              <i class="fas fa-check"></i>
              <span>Weekly 1-on-1 sessions with Maznevich</span>
            </div>
            <div class="feature">
              <i class="fas fa-check"></i>
              <span>Daily VOD reviews and feedback</span>
            </div>
            <div class="feature">
              <i class="fas fa-check"></i>
              <span>Access to private champion community</span>
            </div>
            <div class="feature">
              <i class="fas fa-check"></i>
              <span>Tournament preparation and strategy</span>
            </div>
            <div class="feature">
              <i class="fas fa-check"></i>
              <span>Lifetime access to course materials</span>
            </div>
          </div>

          <a
              href="https://forms.gle/your-registration-form-link"
              target="_blank"
              rel="noopener noreferrer"
              class="enroll-button"
          >
            <span class="button-text">ENROLL IN DBD ACADEMY</span>
            <span class="button-icon">
              <i class="fas fa-arrow-right"></i>
            </span>
            <div class="button-glow"></div>
          </a>

          <div class="guarantee">
            <i class="fas fa-shield-alt"></i>
            <span>30-day money-back guarantee if not satisfied</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  // CTA animation
  gsap.from('.cta-title', {
    scrollTrigger: {
      trigger: '.cta',
      start: 'top 70%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 30,
    duration: 1
  })

  gsap.from('.pricing-card', {
    scrollTrigger: {
      trigger: '.cta',
      start: 'top 70%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.3,
    scale: 0.95
  })
})
</script>

<style scoped>
.cta {
  padding: 120px 0;
  background: var(--bg-primary);
  position: relative;
  overflow: hidden;
}

.cta::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, rgba(0, 212, 255, 0.1) 0%, transparent 70%);
  z-index: 0;
}

.cta-content {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.cta-header {
  text-align: left;
}

.cta-title {
  font-family: var(--font-heading);
  font-size: 4rem;
  font-weight: 900;
  text-transform: uppercase;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.cta-subtitle {
  font-size: 1.3rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.pricing-card {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 25px;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.pricing-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--gradient-1);
}

.pricing-header {
  text-align: center;
  margin-bottom: 2rem;
}

.pricing-badge {
  display: inline-block;
  background: var(--gradient-1);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  font-family: var(--font-heading);
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1.5rem;
}

.pricing-price {
  margin-bottom: 1rem;
}

.amount {
  font-family: var(--font-heading);
  font-size: 4rem;
  font-weight: 900;
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
}

.period {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-left: 0.5rem;
}

.pricing-savings {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: var(--primary);
  font-weight: 600;
}

.pricing-features {
  margin-bottom: 2rem;
}

.feature {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  color: var(--text-secondary);
}

.feature i {
  color: var(--primary);
  flex-shrink: 0;
}

.enroll-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  padding: 1.5rem;
  background: var(--gradient-1);
  border: none;
  border-radius: 15px;
  font-family: var(--font-heading);
  font-size: 1.2rem;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
  margin-bottom: 1.5rem;
}

.enroll-button:hover {
  transform: translateY(-5px);
}

.enroll-button:hover .button-icon {
  transform: translateX(10px);
}

.button-text {
  position: relative;
  z-index: 1;
}

.button-icon {
  transition: transform 0.3s ease;
  position: relative;
  z-index: 1;
}

.button-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--gradient-1);
  filter: blur(20px);
  opacity: 0.5;
  z-index: 0;
}

.guarantee {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.guarantee i {
  color: var(--primary);
}

@media (max-width: 992px) {
  .cta-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .cta-header {
    text-align: center;
  }

  .cta-title {
    font-size: 3rem;
  }
}

@media (max-width: 576px) {
  .cta-title {
    font-size: 2.5rem;
  }

  .amount {
    font-size: 3rem;
  }

  .pricing-card {
    padding: 2rem;
  }
}
</style>