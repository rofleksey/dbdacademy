<template>
  <div class="legal-page">
    <div class="container">
      <div class="legal-header">
        <h1>Terms of Service</h1>
        <p class="last-updated">Last Updated: {{ new Date().toLocaleDateString() }}</p>
      </div>

      <div class="legal-content">
        <div class="disclaimer-card">
          <i class="fas fa-exclamation-triangle"></i>
          <h2>IMPORTANT DISCLAIMER</h2>
          <p>
            <strong>This entire website is a parody/joke project and does not represent a real service.</strong>
            DBD Academy is not a real coaching service and does not accept payments or provide actual training.
            This is a fan-made project for entertainment purposes only.
          </p>
        </div>

        <div class="section">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing this website, you acknowledge that this is a fictional parody project.
            No real services are being offered, and no financial transactions will be processed.
          </p>
        </div>

        <div class="section">
          <h2>2. Parody Nature</h2>
          <p>
            DBD Academy is a fan-made parody project created for entertainment purposes.
            It is not affiliated with, endorsed by, or connected to Behaviour Interactive Inc.,
            Maznevich, or any real Dead by Daylight coaching services.
          </p>
        </div>

        <div class="section">
          <h2>3. No Real Services</h2>
          <p>
            We repeat: This is NOT a real coaching service. The "Enroll Now" button, pricing information,
            and all mentions of training programs are purely fictional elements of this parody website.
          </p>
        </div>

        <div class="section">
          <h2>4. Intellectual Property</h2>
          <p>
            Dead by Daylight is a registered trademark of Behaviour Interactive Inc.
            This fan project is created under fair use for parody and entertainment purposes.
          </p>
        </div>

        <div class="section">
          <h2>5. Limitation of Liability</h2>
          <p>
            Since this is a parody website offering no real services, there is no liability for
            any perceived "services" not rendered. You cannot actually enroll, pay, or receive coaching.
          </p>
        </div>

        <div class="section">
          <h2>6. Contact (For Real Inquiries)</h2>
          <p>
            If you have actual questions about this parody project, you can reach out via GitHub.
            For real Dead by Daylight coaching, please seek legitimate services elsewhere.
          </p>
        </div>

        <router-link to="/" class="back-home">
          <i class="fas fa-arrow-left"></i>
          Back to Home
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  gsap.from('.legal-header', {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: 'power3.out'
  })

  gsap.from('.section', {
    opacity: 0,
    y: 20,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.legal-content',
      start: 'top 70%',
      toggleActions: 'play none none reverse'
    }
  })
})
</script>

<style scoped>
.legal-page {
  min-height: 100vh;
  padding: 120px 0 60px;
  background: var(--bg-primary);
  position: relative;
}

.legal-header {
  text-align: center;
  margin-bottom: 3rem;
}

.legal-header h1 {
  font-family: var(--font-heading);
  font-size: 3.5rem;
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
}

.last-updated {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.legal-content {
  max-width: 800px;
  margin: 0 auto;
}

.disclaimer-card {
  background: rgba(255, 193, 7, 0.1);
  border: 2px solid #ffc107;
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 3rem;
  text-align: center;
}

.disclaimer-card i {
  font-size: 3rem;
  color: #ffc107;
  margin-bottom: 1rem;
}

.disclaimer-card h2 {
  color: #ffc107;
  margin-bottom: 1rem;
  font-family: var(--font-heading);
}

.section {
  margin-bottom: 2.5rem;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid var(--border-color);
}

.section:last-of-type {
  border-bottom: none;
}

.section h2 {
  font-family: var(--font-heading);
  color: var(--primary);
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.section p {
  color: var(--text-secondary);
  line-height: 1.7;
}

.back-home {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: var(--gradient-1);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-family: var(--font-heading);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-top: 2rem;
  transition: transform 0.3s ease;
}

.back-home:hover {
  transform: translateX(-5px);
}

@media (max-width: 768px) {
  .legal-header h1 {
    font-size: 2.5rem;
  }

  .disclaimer-card {
    padding: 1.5rem;
  }
}
</style>