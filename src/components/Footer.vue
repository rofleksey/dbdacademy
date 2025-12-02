<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="logo">DBD ACADEMY</div>
          <p class="tagline">Elite Dead by Daylight Training</p>
          <p class="copyright">
            © 2025 DBD Academy. All rights reserved.<br>
            Founded by Maznevich. Not affiliated with Behaviour Interactive.
          </p>
        </div>

        <div class="footer-links">
          <div class="link-group">
            <h4>Connect</h4>
            <a href="https://maznevich.pro" target="_blank" rel="noopener noreferrer">Main Website</a>
            <a href="https://twitch.tv/maznevich" target="_blank" rel="noopener noreferrer">Twitch</a>
            <a href="https://youtube.com/@maznevich" target="_blank" rel="noopener noreferrer">YouTube</a>
            <a href="https://steamcommunity.com/id/Maznevich" target="_blank" rel="noopener noreferrer">Steam</a>
          </div>

          <div class="link-group">
            <h4>Legal</h4>
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Refund Policy</a>
            <a href="mailto:academy@maznevich.pro">Contact</a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="academy-badge">
          <i class="fas fa-graduation-cap"></i>
          <span>ELITE TRAINING SINCE 2021</span>
        </div>
        <div class="social-links">
          <a href="https://twitch.tv/maznevich" target="_blank" rel="noopener noreferrer" title="Twitch">
            <i class="fab fa-twitch"></i>
          </a>
          <a href="https://youtube.com/@maznevich" target="_blank" rel="noopener noreferrer" title="YouTube">
            <i class="fab fa-youtube"></i>
          </a>
          <a href="https://steamcommunity.com/id/Maznevich" target="_blank" rel="noopener noreferrer" title="Steam">
            <i class="fab fa-steam"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Footer component logic
</script>

<style scoped>
.footer {
  background: var(--bg-tertiary);
  padding: 4rem 0 2rem;
  border-top: 1px solid var(--border-color);
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 3rem;
}

.footer-brand {
  max-width: 300px;
}

.logo {
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 900;
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
}

.tagline {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.copyright {
  color: var(--text-tertiary);
  font-size: 0.9rem;
  line-height: 1.6;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.link-group h4 {
  font-family: var(--font-heading);
  font-size: 1.1rem;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.link-group a {
  display: block;
  color: var(--text-secondary);
  text-decoration: none;
  margin-bottom: 0.75rem;
  transition: color 0.3s ease;
}

.link-group a:hover {
  color: var(--primary);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
}

.academy-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.academy-badge i {
  color: var(--primary);
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  width: 40px;
  height: 40px;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-links a:hover {
  color: var(--primary);
  border-color: var(--primary);
  transform: translateY(-3px);
}

@media (max-width: 992px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .footer-links {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .footer-links {
    grid-template-columns: 1fr;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
}
</style>