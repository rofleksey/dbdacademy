<template>
  <div class="rickroll-page">
    <div class="container">
      <div class="rickroll-content">
        <div class="countdown" v-if="!redirected">
          <h2>Processing Refund Request...</h2>
          <div class="countdown-number">{{ countdown }}</div>
          <p>Redirecting to refund portal...</p>
        </div>

        <div class="rickroll-message" v-else>
          <h1><i class="fas fa-music"></i> NEVER GONNA GIVE YOU UP</h1>
          <div class="video-wrapper">
            <div class="video-placeholder">
              <i class="fas fa-play-circle"></i>
              <p>Rick Astley - Never Gonna Give You Up (Official Music Video)</p>
            </div>
          </div>
          <p class="subtitle">You just got rickrolled! 🎵</p>
          <p class="explanation">
            Since this is a parody website with no real payments, there are no real refunds!
            This was just a fun Easter egg. Hope you enjoyed the joke!
          </p>
          <router-link to="/" class="back-home">
            <i class="fas fa-arrow-left"></i>
            Back to the (fake) Academy
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const countdown = ref(3)
const redirected = ref(false)

onMounted(() => {
  // Countdown animation
  gsap.from('.countdown-number', {
    scale: 0,
    rotation: 360,
    duration: 0.5,
    ease: 'back.out(1.7)'
  })

  // Countdown timer
  const timer = setInterval(() => {
    if (countdown.value > 1) {
      countdown.value--
      gsap.from('.countdown-number', {
        scale: 0.5,
        duration: 0.3,
        ease: 'power2.out'
      })
    } else {
      clearInterval(timer)
      redirected.value = true

      // Play rickroll audio (optional)
      const audio = new Audio('https://www.myinstants.com/media/sounds/rick-roll.mp3')
      audio.volume = 0.5
      audio.play().catch(() => {
        // Audio autoplay blocked, that's okay
      })

      // Animate the rickroll message
      gsap.from('.rickroll-message', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
      })
    }
  }, 1000)
})
</script>

<style scoped>
.rickroll-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  position: relative;
  overflow: hidden;
}

.rickroll-page::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
      radial-gradient(circle at 20% 80%, rgba(255, 0, 0, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(0, 255, 255, 0.1) 0%, transparent 50%);
  animation: backgroundShift 10s ease-in-out infinite alternate;
}

@keyframes backgroundShift {
  0% { transform: scale(1); }
  100% { transform: scale(1.1); }
}

.rickroll-content {
  text-align: center;
  max-width: 800px;
  position: relative;
  z-index: 1;
}

.countdown {
  padding: 3rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.countdown h2 {
  font-family: var(--font-heading);
  color: var(--primary);
  margin-bottom: 2rem;
  font-size: 2rem;
}

.countdown-number {
  font-family: var(--font-heading);
  font-size: 8rem;
  font-weight: 900;
  background: linear-gradient(45deg, #ff0000, #00ffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 2rem 0;
  text-shadow: 0 0 30px rgba(255, 0, 0, 0.3);
}

.countdown p {
  color: var(--text-secondary);
  font-size: 1.2rem;
}

.rickroll-message {
  padding: 3rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.rickroll-message h1 {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  background: linear-gradient(45deg, #ff0000, #ff8800, #ffff00, #00ff00, #00ffff, #0000ff, #8800ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 2rem;
  animation: rainbowText 3s ease-in-out infinite;
}

@keyframes rainbowText {
  0%, 100% { filter: hue-rotate(0deg); }
  50% { filter: hue-rotate(360deg); }
}

.video-wrapper {
  margin: 2rem 0;
  aspect-ratio: 16/9;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.video-placeholder {
  text-align: center;
}

.video-placeholder i {
  font-size: 4rem;
  color: #ff0000;
  margin-bottom: 1rem;
  animation: pulse 2s ease-in-out infinite;
}

.video-placeholder p {
  color: var(--text-secondary);
  font-size: 1.1rem;
}

.subtitle {
  font-size: 1.5rem;
  color: #ff0000;
  margin: 1.5rem 0;
  font-weight: 700;
}

.explanation {
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 600px;
  margin: 2rem auto;
}

.back-home {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: linear-gradient(45deg, #ff0000, #00ffff);
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
  transform: translateY(-5px);
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

@media (max-width: 768px) {
  .countdown-number {
    font-size: 5rem;
  }

  .rickroll-message h1 {
    font-size: 1.8rem;
  }

  .rickroll-content {
    padding: 1rem;
  }
}
</style>