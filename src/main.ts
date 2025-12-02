import { createApp } from 'vue'
import App from './App.vue'
import './styles/globals.css'

// Import GSAP and Lenis for smooth scroll
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

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

createApp(App).mount('#app')