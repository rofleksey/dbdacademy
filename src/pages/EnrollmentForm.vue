<template>
  <div class="enrollment-page">
    <!-- Animated Background -->
    <div class="parallax-bg">
      <div class="bg-element element-1"></div>
      <div class="bg-element element-2"></div>
      <div class="bg-element element-3"></div>
      <div class="bg-grid"></div>
    </div>

    <div class="container">
      <div class="enrollment-header">
        <router-link to="/" class="back-button">
          <i class="fas fa-arrow-left"></i>
          Back
        </router-link>
        <h1>Enrollment to <span class="academy-text">DBD Academy</span></h1>
        <p class="subtitle">Hello, future student! Fill out this form so we can match you with the right training
          program and mentor. All responses are confidential.</p>
      </div>

      <form class="enrollment-form" @submit.prevent="submitForm">
        <!-- Email Section -->
        <div class="form-section">
          <div class="section-header">
            <h3>Email</h3>
            <span class="required">*</span>
          </div>
          <p class="section-description">
            We'll use this email to send you important updates about your enrollment.
          </p>
          <div class="input-group">
            <input
                type="email"
                v-model="formData.email"
                placeholder="your.email@example.com"
                required
                class="form-input"
            />
            <div class="input-border"></div>
          </div>
        </div>

        <!-- Game Nickname -->
        <div class="form-section">
          <div class="section-header">
            <h3>Your game nickname (in Steam, PS, Xbox, etc.):</h3>
            <span class="required">*</span>
          </div>
          <div class="input-group">
            <input
                type="text"
                v-model="formData.nickname"
                placeholder="e.g., Maznevich_Pro"
                required
                class="form-input"
            />
            <div class="input-border"></div>
          </div>
        </div>

        <!-- Discord Tag -->
        <div class="form-section">
          <div class="section-header">
            <h3>Your Discord Tag</h3>
          </div>
          <p class="section-description">
            We'll contact you on Discord to coordinate training sessions.
          </p>
          <div class="input-group">
            <input
                type="text"
                v-model="formData.discord"
                placeholder="e.g., Maznevich#1234"
                class="form-input"
            />
            <div class="input-border"></div>
          </div>
        </div>

        <!-- Skill Level -->
        <div class="form-section">
          <div class="section-header">
            <h3>How would you rate your current skill level?</h3>
          </div>
          <div class="radio-group">
            <label
                v-for="(option, index) in skillLevels"
                :key="index"
                class="radio-option"
                :class="{ selected: formData.skillLevel === option.value }"
            >
              <input
                  type="radio"
                  v-model="formData.skillLevel"
                  :value="option.value"
                  class="radio-input"
              />
              <div class="radio-custom"></div>
              <span class="radio-label">{{ option.label }}</span>
            </label>
          </div>
        </div>

        <!-- Focus Role -->
        <div class="form-section">
          <div class="section-header">
            <h3>Which role do you want to focus on in training?</h3>
          </div>
          <div class="radio-group">
            <label
                v-for="(option, index) in focusRoles"
                :key="index"
                class="radio-option"
                :class="{ selected: formData.focusRole === option.value }"
            >
              <input
                  type="radio"
                  v-model="formData.focusRole"
                  :value="option.value"
                  class="radio-input"
              />
              <div class="radio-custom"></div>
              <span class="radio-label">{{ option.label }}</span>
            </label>
          </div>
        </div>

        <!-- Training Goals -->
        <div class="form-section">
          <div class="section-header">
            <h3>What are your main training goals?</h3>
          </div>
          <div class="checkbox-group">
            <label
                v-for="(goal, index) in trainingGoals"
                :key="index"
                class="checkbox-option"
                :class="{ checked: formData.goals.includes(goal.value) }"
            >
              <input
                  type="checkbox"
                  v-model="formData.goals"
                  :value="goal.value"
                  class="checkbox-input"
              />
              <div class="checkbox-custom">
                <i class="fas fa-check"></i>
              </div>
              <span class="checkbox-label">{{ goal.label }}</span>
            </label>
          </div>
        </div>

        <!-- Preferred Time -->
        <div class="form-section">
          <div class="section-header">
            <h3>When is it convenient for you to play/train? (Moscow Time)</h3>
          </div>
          <div class="checkbox-group">
            <label
                v-for="(time, index) in preferredTimes"
                :key="index"
                class="checkbox-option"
                :class="{ checked: formData.preferredTimes.includes(time.value) }"
            >
              <input
                  type="checkbox"
                  v-model="formData.preferredTimes"
                  :value="time.value"
                  class="checkbox-input"
              />
              <div class="checkbox-custom">
                <i class="fas fa-check"></i>
              </div>
              <span class="checkbox-label">{{ time.label }}</span>
            </label>
          </div>
        </div>

        <!-- Learning Format -->
        <div class="form-section">
          <div class="section-header">
            <h3>Which learning format suits you best?</h3>
          </div>
          <div class="radio-group">
            <label
                v-for="(format, index) in learningFormats"
                :key="index"
                class="radio-option"
                :class="{ selected: formData.learningFormat === format.value }"
            >
              <input
                  type="radio"
                  v-model="formData.learningFormat"
                  :value="format.value"
                  class="radio-input"
              />
              <div class="radio-custom"></div>
              <span class="radio-label">{{ format.label }}</span>
            </label>
          </div>
        </div>

        <!-- Discovery Source -->
        <div class="form-section">
          <div class="section-header">
            <h3>How did you hear about the academy?</h3>
          </div>
          <div class="radio-group">
            <label
                v-for="(source, index) in discoverySources"
                :key="index"
                class="radio-option"
                :class="{ selected: formData.discoverySource === source.value }"
            >
              <input
                  type="radio"
                  v-model="formData.discoverySource"
                  :value="source.value"
                  class="radio-input"
              />
              <div class="radio-custom"></div>
              <span class="radio-label">{{ source.label }}</span>
            </label>
          </div>
        </div>

        <!-- Additional Comments -->
        <div class="form-section">
          <div class="section-header">
            <h3>Anything else you want to add? Special requests or questions?</h3>
          </div>
          <div class="input-group">
            <textarea
                v-model="formData.comments"
                placeholder="Share your thoughts, expectations, or any questions you have..."
                class="form-textarea"
                rows="4"
            ></textarea>
            <div class="input-border"></div>
          </div>
        </div>

        <!-- Terms of Service Consent -->
        <div class="form-section consent-section">
          <div class="section-header">
            <h3>I have read and agree to the
              <router-link to="/terms" target="_blank" class="terms-link">
                Terms of Service
              </router-link>
            </h3>
            <span class="required">*</span>
          </div>
          <div class="radio-group consent-options">
            <label
                class="radio-option"
                :class="{ selected: formData.termsAgreed === 'yes' }"
            >
              <input
                  type="radio"
                  v-model="formData.termsAgreed"
                  value="yes"
                  required
                  class="radio-input"
              />
              <div class="radio-custom"></div>
              <span class="radio-label">Yes</span>
            </label>
          </div>
        </div>

        <!-- Form Actions -->
        <div class="form-actions">
          <button type="submit" class="submit-button" :disabled="isSubmitting">
            <span v-if="!isSubmitting">Submit Application</span>
            <span v-else class="submitting">
              <i class="fas fa-spinner fa-spin"></i>
              Processing...
            </span>
            <div class="button-glow"></div>
          </button>
          <button type="button" class="clear-button" @click="clearForm" :disabled="isSubmitting">
            Clear Form
          </button>
        </div>

        <div class="form-footer">
          <p><i class="fas fa-shield-alt"></i> All data is encrypted and securely stored</p>
          <p><i class="fas fa-clock"></i> You'll hear back from us within 48 hours</p>
        </div>
      </form>

      <!-- Success Modal -->
      <div v-if="showSuccess" class="success-modal" @click="closeSuccess">
        <div class="modal-content" @click.stop>
          <div class="modal-icon">
            <i class="fas fa-check-circle"></i>
          </div>
          <h2>Application Submitted!</h2>
          <p>Thank you for your interest in DBD Academy. We'll review your application and contact you on Discord within
            48 hours.</p>
          <p class="application-id">Application ID: <span>{{ applicationId }}</span></p>
          <div class="modal-actions">
            <router-link to="/" class="modal-button">
              Return to Home
            </router-link>
            <button class="modal-button secondary" @click="submitAnother">
              Submit Another
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, reactive, onMounted} from 'vue'
import {gsap} from 'gsap'
import {useRouter} from 'vue-router'

const router = useRouter()
const isSubmitting = ref(false)
const showSuccess = ref(false)
const applicationId = ref('')

// Form data
const formData = reactive({
  email: '',
  nickname: '',
  discord: '',
  skillLevel: '',
  focusRole: '',
  goals: [] as string[],
  preferredTimes: [] as string[],
  learningFormat: '',
  discoverySource: '',
  comments: '',
  termsAgreed: ''
})

// Form options
const skillLevels = [
  {value: 'beginner', label: 'Complete beginner (less than 100 hours)'},
  {value: 'intermediate', label: 'Know basics but want consistency (100-300 hours)'},
  {value: 'advanced', label: 'Experienced, want high rank / fix mistakes (300+ hours)'},
  {value: 'veteran', label: 'Veteran (1000+ hours), seeking fine-tuning and advanced tactics'}
]

const focusRoles = [
  {value: 'survivor', label: 'Survivor gameplay'},
  {value: 'killer', label: 'Killer gameplay'},
  {value: 'both', label: 'Want to improve both roles'}
]

const trainingGoals = [
  {value: 'basics', label: 'Understanding basic mechanics and perks'},
  {value: 'looping', label: 'Learning effective looping'},
  {value: 'mindgames', label: 'Improving mental game'},
  {value: 'mmr', label: 'Getting out of low/mid MMR'},
  {value: 'killer', label: 'Learning to play specific complex killer'},
  {value: 'team', label: 'Finding teammates to play with'},
  {value: 'feedback', label: 'Just curious what an experienced player would say'}
]

const preferredTimes = [
  {value: 'morning', label: 'Morning (9:00 - 12:00 MSK)'},
  {value: 'day', label: 'Day (12:00 - 18:00 MSK)'},
  {value: 'evening', label: 'Evening (18:00 - 23:00 MSK)'},
  {value: 'night', label: 'Night (23:00 - 03:00 MSK)'}
]

const learningFormats = [
  {value: 'vods', label: 'Individual VOD reviews (watch your match + give feedback)'},
  {value: 'coaching', label: 'Co-games with mentor'},
  {value: 'lectures', label: 'Group lectures/streams on theory'},
  {value: 'guides', label: 'Text guides and Q&A in Discord is enough'}
]

const discoverySources = [
  {value: 'youtube', label: 'YouTube'},
  {value: 'twitch', label: 'Twitch'},
  {value: 'tiktok', label: 'TikTok / Reels'},
  {value: 'friends', label: 'From friends'},
  {value: 'other', label: 'Other'}
]

const submitForm = async () => {
  if (!formData.termsAgreed) {
    alert('Please agree to the Terms of Service to continue')
    return
  }

  isSubmitting.value = true

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))

  // Generate application ID
  applicationId.value = 'DBD-' + Date.now().toString().slice(-8)
  showSuccess.value = true

  // Log form data (in real app, this would be sent to backend)
  console.log('Form submitted:', formData)
  isSubmitting.value = false
}

const clearForm = () => {
  if (confirm('Are you sure you want to clear all form data?')) {
    Object.assign(formData, {
      email: '',
      nickname: '',
      discord: '',
      skillLevel: '',
      focusRole: '',
      goals: [],
      preferredTimes: [],
      learningFormat: '',
      discoverySource: '',
      otherSource: '',
      comments: '',
      termsAgreed: ''
    })
  }
}

const closeSuccess = () => {
  showSuccess.value = false
  router.push('/')
}

const submitAnother = () => {
  showSuccess.value = false
  clearForm()
  // Scroll to top
  window.scrollTo({top: 0, behavior: 'smooth'})
}

onMounted(() => {
  // Form animations
  gsap.from('.enrollment-header', {
    opacity: 0,
    y: -30,
    duration: 1,
    ease: 'power3.out'
  })

  gsap.from('.form-section', {
    opacity: 0,
    y: 20,
    duration: 0.8,
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.enrollment-form',
      start: 'top 70%',
      toggleActions: 'play none none reverse'
    }
  })

  // Parallax background
  gsap.utils.toArray<HTMLElement>('.bg-element').forEach((element, i) => {
    gsap.to(element, {
      y: () => (i + 1) * 20,
      scrollTrigger: {
        trigger: '.enrollment-form',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    })
  })
})
</script>

<style scoped>
.enrollment-page {
  min-height: 100vh;
  padding: 100px 0 60px;
  background: var(--bg-primary);
  position: relative;
  overflow-x: hidden;
}

.parallax-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}

.bg-element {
  position: absolute;
  filter: blur(60px);
  opacity: 0.1;
  mix-blend-mode: multiply;
}

.element-1 {
  top: 10%;
  left: 5%;
  width: 250px;
  height: 125px;
  background: var(--primary);
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  transform: rotate(45deg);
  animation: float 20s ease-in-out infinite;
}

.element-2 {
  top: 70%;
  right: 10%;
  width: 200px;
  height: 100px;
  background: var(--accent);
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  transform: rotate(-30deg);
  animation: float 25s ease-in-out infinite reverse;
}

.element-3 {
  bottom: 30%;
  left: 70%;
  width: 150px;
  height: 75px;
  background: var(--primary-dark);
  border-radius: 40% 60% 60% 40% / 70% 30% 70% 30%;
  transform: rotate(15deg);
  animation: float 30s ease-in-out infinite;
}

.bg-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
  linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  mask-image: radial-gradient(circle at center, black 40%, transparent 60%);
}

.container {
  position: relative;
  z-index: 1;
  max-width: 800px;
}

.enrollment-header {
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
}

.back-button {
  position: absolute;
  left: 0;
  top: 0;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.back-button:hover {
  color: var(--primary);
}

.enrollment-header h1 {
  font-family: var(--font-heading);
  font-size: 3rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.academy-text {
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
}

.enrollment-form {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 2.5rem;
  backdrop-filter: blur(10px);
}

.form-section {
  margin-bottom: 2.5rem;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid var(--border-color);
}

.form-section:last-of-type {
  border-bottom: none;
  margin-bottom: 1.5rem;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.section-header h3 {
  font-family: var(--font-heading);
  font-size: 1.2rem;
  color: var(--text-primary);
  margin: 0;
}

.required {
  color: #ff4444;
  font-weight: 700;
}

.section-description {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.input-group {
  position: relative;
  margin-top: 1rem;
}

.form-input,
.form-textarea {
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--text-primary);
  transition: all 0.3s ease;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--primary);
  background: rgba(0, 212, 255, 0.05);
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: var(--text-tertiary);
}

.input-border {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: var(--gradient-1);
  transition: width 0.3s ease;
}

.form-input:focus ~ .input-border,
.form-textarea:focus ~ .input-border {
  width: 100%;
}

.form-textarea {
  resize: vertical;
  min-height: 100px;
}

.radio-group,
.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1rem;
}

.radio-option,
.checkbox-option {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.radio-option:hover,
.checkbox-option:hover {
  border-color: var(--primary);
  background: rgba(0, 212, 255, 0.05);
}

.radio-option.selected,
.checkbox-option.checked {
  border-color: var(--primary);
  background: rgba(0, 212, 255, 0.1);
}

.radio-input,
.checkbox-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.radio-custom {
  width: 20px;
  height: 20px;
  border: 2px solid var(--border-color);
  border-radius: 50%;
  position: relative;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.radio-option:hover .radio-custom {
  border-color: var(--primary);
}

.radio-option.selected .radio-custom {
  border-color: var(--primary);
}

.radio-option.selected .radio-custom::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  background: var(--gradient-1);
  border-radius: 50%;
}

.checkbox-custom {
  width: 20px;
  height: 20px;
  border: 2px solid var(--border-color);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.checkbox-option:hover .checkbox-custom {
  border-color: var(--primary);
}

.checkbox-option.checked .checkbox-custom {
  background: var(--gradient-1);
  border-color: transparent;
}

.checkbox-option.checked .checkbox-custom i {
  color: white;
  font-size: 0.8rem;
  opacity: 1;
}

.checkbox-option:not(.checked) .checkbox-custom i {
  opacity: 0;
}

.radio-label,
.checkbox-label {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.5;
  flex: 1;
}

.radio-option.selected .radio-label,
.checkbox-option.checked .checkbox-label {
  color: var(--text-primary);
}

.other-input {
  margin-top: 1rem;
  margin-left: 2.5rem;
}

.consent-section {
  background: rgba(0, 212, 255, 0.05);
  border: 2px solid rgba(0, 212, 255, 0.2);
  border-radius: 15px;
  padding: 2rem;
  margin-top: 2rem;
}

.consent-options {
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.form-actions {
  display: flex;
  gap: 1rem;
  margin: 3rem 0 1.5rem;
}

.submit-button {
  flex: 1;
  position: relative;
  padding: 1.5rem 2rem;
  background: var(--gradient-1);
  border: none;
  border-radius: 15px;
  font-family: var(--font-heading);
  font-size: 1.1rem;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s ease;
  min-height: 56px;
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-3px);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
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
  z-index: -1;
}

.submitting {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.clear-button {
  padding: 1.5rem 2rem;
  background: transparent;
  border: 1px solid var(--border-color);
  border-radius: 15px;
  font-family: var(--font-heading);
  font-size: 1rem;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 56px;
}

.clear-button:hover:not(:disabled) {
  border-color: var(--text-secondary);
  color: var(--text-primary);
}

.clear-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.form-footer {
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-color);
}

.form-footer p {
  color: var(--text-tertiary);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.form-footer i {
  color: var(--primary);
}

.success-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.modal-content {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 3rem;
  max-width: 500px;
  width: 90%;
  text-align: center;
  animation: slideUp 0.4s ease;
  position: relative;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-icon {
  font-size: 4rem;
  color: #00ff88;
  margin-bottom: 1.5rem;
  animation: scaleIn 0.5s ease;
}

@keyframes scaleIn {
  0% {
    transform: scale(0);
  }
  70% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.modal-content h2 {
  font-family: var(--font-heading);
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.modal-content p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.application-id {
  font-family: var(--font-heading);
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.application-id span {
  color: var(--primary);
  font-weight: 700;
}

.modal-actions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.modal-button {
  flex: 1;
  padding: 1rem 2rem;
  background: var(--gradient-1);
  color: white;
  border: none;
  border-radius: 10px;
  font-family: var(--font-heading);
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.modal-button:hover {
  transform: translateY(-2px);
}

.modal-button.secondary {
  background: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
}

.modal-button.secondary:hover {
  border-color: var(--primary);
  color: var(--text-primary);
}

@media (max-width: 768px) {
  .enrollment-header h1 {
    font-size: 2rem;
  }

  .enrollment-form {
    padding: 1.5rem;
  }

  .form-section {
    padding-bottom: 2rem;
    margin-bottom: 2rem;
  }

  .section-header h3 {
    font-size: 1.1rem;
  }

  .form-actions {
    flex-direction: column;
  }

  .submit-button,
  .clear-button {
    width: 100%;
  }

  .consent-options {
    flex-direction: column;
    gap: 0.75rem;
  }

  .other-input {
    margin-left: 0;
  }

  .back-button {
    position: relative;
    margin-bottom: 1rem;
    display: inline-flex;
    justify-content: center;
    width: 100%;
  }

  .modal-actions {
    flex-direction: column;
  }
}
</style>