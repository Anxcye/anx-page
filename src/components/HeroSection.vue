<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

const { t } = useI18n()

const heroImage = ref<HTMLElement | null>(null)

// Parallax effect for hero image
const handleMouseMove = (e: MouseEvent) => {
  if (!heroImage.value) return
  
  const { clientX, clientY } = e
  const { innerWidth, innerHeight } = window
  
  const x = (clientX - innerWidth / 2) / 50
  const y = (clientY - innerHeight / 2) / 50
  
  heroImage.value.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg) translateY(-10px)`
}

const resetTilt = () => {
  if (!heroImage.value) return
  heroImage.value.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0)'
}
</script>

<template>
  <section class="hero" @mousemove="handleMouseMove" @mouseleave="resetTilt">
    <!-- Decorative background elements -->
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title animate-in delay-1">{{ t('hero.title') }}</h1>
          <p class="hero-subtitle animate-in delay-2">{{ t('hero.subtitle') }}</p>
          <p class="hero-description animate-in delay-3">{{ t('hero.description') }}</p>
          
          <div class="platform-badges animate-in delay-4">
            <router-link to="/download" class="platform-badge" title="Android">
              <img src="/images/os-logo/android-logo.svg" alt="Android" />
              <span>Android</span>
            </router-link>

            <router-link to="/download" class="platform-badge" title="HarmonyOS">
              <img src="/images/os-logo/hmos-logo.svg" alt="HarmonyOS" />
              <span>HarmonyOS</span>
            </router-link>

            <router-link to="/download" class="platform-badge" title="iOS">
              <img src="/images/os-logo/apple-logo.svg" alt="iOS" />
              <span>iOS</span>
            </router-link>
            
            <router-link to="/download" class="platform-badge" title="Windows">
              <img src="/images/os-logo/windows-logo.svg" alt="Windows" />
              <span>Windows</span>
            </router-link>
            
            <router-link to="/download" class="platform-badge" title="macOS">
              <img src="/images/os-logo/apple-logo.svg" alt="macOS" />
              <span>macOS</span>
            </router-link>
          </div>
          
          <div class="hero-actions animate-in delay-5">
            <router-link to="/download" class="btn btn-primary glow-effect">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
              </svg>
              {{ t('hero.download') }}
            </router-link>
            
            <a href="https://github.com/anxcye/anx-reader" target="_blank" class="btn btn-secondary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              {{ t('hero.github') }}
            </a>
          </div>
        </div>
        
        <div class="hero-image-container animate-in delay-3" ref="heroImage">
          <div class="hero-image-wrapper floating">
            <img src="/images/app-preview.png" alt="Anx Reader Preview" class="hero-image" />
            <div class="image-glow"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background: var(--background-color);
  padding: 120px 0 80px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

/* Background Blobs */
.blob {
  position: absolute;
  filter: blur(80px);
  z-index: 0;
  opacity: 0.4;
  animation: blob-bounce 10s infinite ease-in-out alternate;
}

.blob-1 {
  top: -10%;
  left: -10%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, var(--primary-color) 0%, transparent 70%);
}

.blob-2 {
  bottom: -10%;
  right: -10%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, var(--secondary-color) 0%, transparent 70%);
  animation-delay: -5s;
}

@keyframes blob-bounce {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(30px, 30px) scale(1.1); }
}

.container {
  position: relative;
  z-index: 1;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

/* Text Animations */
.animate-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

.delay-1 { animation-delay: 0.1s; }
.delay-2 { animation-delay: 0.2s; }
.delay-3 { animation-delay: 0.3s; }
.delay-4 { animation-delay: 0.4s; }
.delay-5 { animation-delay: 0.5s; }

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-title {
  font-size: 64px;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 20px;
  color: var(--primary-color);
}

.hero-subtitle {
  font-size: 32px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 20px;
}

.hero-description {
  font-size: 20px;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 500px;
}

.hero-actions {
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
}

/* Button Glow Effect */
.glow-effect {
  position: relative;
  overflow: hidden;
}

.glow-effect::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent);
  transform: rotate(45deg) translate(-100%, -100%);
  animation: glow-sweep 3s infinite;
}

@keyframes glow-sweep {
  0%, 100% { transform: rotate(45deg) translate(-100%, -100%); }
  50% { transform: rotate(45deg) translate(100%, 100%); }
}

.platform-badges {
  display: flex;
  gap: 24px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.platform-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px 12px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 80px;
  text-decoration: none;
  cursor: pointer;
}

.platform-badge:hover {
  background: var(--surface-hover);
  border-color: var(--primary-color);
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.platform-badge img {
  height: 28px;
  width: 28px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.platform-badge:hover img {
  transform: scale(1.1) rotate(5deg);
}

.platform-badge span {
  font-size: 12px;
  font-weight: 500;
  color: var(--text-secondary);
  transition: color 0.3s ease;
}

.platform-badge:hover span {
  color: var(--primary-color);
}

/* Image 3D Container */
.hero-image-container {
  position: relative;
  perspective: 1000px;
  transform-style: preserve-3d;
  transition: transform 0.1s ease-out; /* Smooth follow mouse */
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image-wrapper {
  position: relative;
  border-radius: 24px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
  transform-style: preserve-3d;
  background: rgba(255, 255, 255, 0.1);
}

.hero-image {
  width: 100%;
  height: auto;
  border-radius: 24px;
  display: block;
  transform: translateZ(20px);
}

/* Ambient Glow behind image */
.image-glow {
  position: absolute;
  top: 10%;
  left: 10%;
  right: 10%;
  bottom: 10%;
  background: var(--primary-color);
  filter: blur(60px);
  opacity: 0.4;
  z-index: -1;
  transform: translateZ(-20px);
}

/* Continuous Floating Animation */
.floating {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
}

/* Dark mode adjustments for glassmorphism */
:root.dark .platform-badge {
  background: rgba(30, 30, 30, 0.5);
}

@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 60px;
    text-align: center;
  }
  
  .hero-title {
    font-size: 48px;
  }
  
  .hero-subtitle {
    font-size: 24px;
  }
  
  .hero-description {
    font-size: 18px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .platform-badges, .hero-actions {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 100px 0 60px;
  }
  
  .hero-title {
    font-size: 36px;
  }
  
  .blob {
    opacity: 0.2; /* Reduce distraction on mobile */
  }
  
  .hero-image-container {
    perspective: none; /* Disable 3D tilt on mobile */
  }
}
</style>