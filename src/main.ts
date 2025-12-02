import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './styles/globals.css'

// Import pages
import HomePage from './pages/Home.vue'
import TermsOfService from './pages/TermsOfService.vue'
import PrivacyPolicy from './pages/PrivacyPolicy.vue'
import RefundPolicy from './pages/RefundPolicy.vue'

// Import GSAP and Lenis for smooth scroll
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

// Create router
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/terms', component: TermsOfService },
        { path: '/privacy', component: PrivacyPolicy },
        { path: '/refund', component: RefundPolicy },
    ],
    scrollBehavior(_1, _2, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

// Initialize smooth scroll
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
})

// Animation frame
function raf(time: number) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

createApp(App)
  .use(router)
  .mount('#app')