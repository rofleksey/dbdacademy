<template>
  <div class="legal-page">
    <div class="container">
      <div class="legal-header">
        <h1>Privacy Policy</h1>
        <p class="last-updated">Last Updated: {{ new Date().toLocaleDateString() }}</p>
      </div>

      <div class="legal-content">
        <div class="disclaimer-card">
          <i class="fas fa-user-shield"></i>
          <h2>NO DATA COLLECTION</h2>
          <p>
            <strong>This is a parody website with no backend functionality.</strong>
            We do not collect, store, or process any personal data because this isn't a real service.
            The enrollment form is for demonstration purposes only.
          </p>
        </div>

        <div class="section">
          <h2>1. Information We Don't Collect</h2>
          <p>
            Since DBD Academy is a fictional parody project, we don't collect:
          </p>
          <ul>
            <li>Personal information (names, emails, addresses)</li>
            <li>Payment information (no real payments are processed)</li>
            <li>Usage data (no analytics tracking)</li>
            <li>Cookies (except essential browser cookies)</li>
          </ul>
        </div>

        <div class="section">
          <h2>2. Third-Party Services</h2>
          <p>
            This website uses:
          </p>
          <ul>
            <li>Font Awesome (for icons) - their privacy policy applies</li>
            <li>Google Fonts - their privacy policy applies</li>
            <li>Cloudflare CDN - for library delivery</li>
          </ul>
          <p>
            These services may collect usage data according to their own policies.
          </p>
        </div>

        <div class="section">
          <h2>3. Enrollment Form Disclaimer</h2>
          <p>
            The enrollment form on this website is for demonstration purposes only.
            Any data entered into the form is processed client-side and not transmitted to any server.
            The form submission shows a success message but does not actually submit your data anywhere.
          </p>
        </div>

        <div class="section">
          <h2>4. Browser Storage</h2>
          <p>
            This website may use browser localStorage for:
          </p>
          <ul>
            <li>Animation preferences (if implemented)</li>
            <li>Scroll position (for UX)</li>
            <li>No personal data is stored locally</li>
          </ul>
        </div>

        <div class="section">
          <h2>5. Parody Protection</h2>
          <p>
            As a parody project, this website is protected under fair use.
            We don't misrepresent ourselves as a real service, and this privacy policy
            exists to clarify our fictional nature, not to outline real data practices.
          </p>
        </div>

        <div class="section">
          <h2>6. Contact & Questions</h2>
          <p>
            Since we don't collect data, there's nothing to inquire about regarding your data.
            For questions about this parody project itself, you can contact us at:
            <a href="mailto:academy@maznevich.pro">academy@maznevich.pro</a>
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
  background: rgba(0, 212, 255, 0.1);
  border: 2px solid var(--primary);
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 3rem;
  text-align: center;
}

.disclaimer-card i {
  font-size: 3rem;
  color: var(--primary);
  margin-bottom: 1rem;
}

.disclaimer-card h2 {
  color: var(--primary);
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
  margin-bottom: 1rem;
}

.section p:last-child {
  margin-bottom: 0;
}

.section ul {
  margin: 1rem 0 1rem 2rem;
  color: var(--text-secondary);
}

.section li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
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