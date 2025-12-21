<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">{{ t('hero.title') }}</h1>
          <p class="hero-subtitle">{{ t('hero.subtitle') }}</p>
          <p class="hero-description">{{ t('hero.description') }}</p>
          
          
          <div class="platform-badges">
            
            <router-link to="/download" class="platform-badge">
              <img src="/images/os-logo/android-logo.svg" alt="Android" />
              <span>Android</span>
            </router-link>

            <router-link to="/download" class="platform-badge">
              <img src="/images/os-logo/hmos-logo.svg" alt="HarmonyOS" />
              <span>HarmonyOS</span>
            </router-link>

            <router-link to="/download" class="platform-badge">
              <img src="/images/os-logo/apple-logo.svg" alt="iOS" />
              <span>iOS</span>
            </router-link>
            
            <router-link to="/download" class="platform-badge">
              <img src="/images/os-logo/windows-logo.svg" alt="Windows" />
              <span>Windows</span>
            </router-link>
            
            <router-link to="/download" class="platform-badge">
              <img src="/images/os-logo/apple-logo.svg" alt="macOS" />
              <span>macOS</span>
            </router-link>
          </div>
          
          <!-- <div class="app-store-badge">
            <a href="https://apps.apple.com/app/anx-reader/id6743196413" target="_blank">
              <img src="/images/app-store-badge.svg" alt="Download on the App Store" />
            </a>
          </div> -->
          <div class="hero-actions">
            <router-link to="/download" class="btn btn-primary">
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
        
        <div class="hero-image">
          <img src="/images/app-preview.png" alt="Anx Reader Preview" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background: linear-gradient(135deg, var(--background-color), var(--surface-color));
  padding: 120px 0 80px;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.hero-title {
  font-size: 64px;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 20px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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
  background: var(--surface-color);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  transition: var(--transition);
  min-width: 80px;
  text-decoration: none;
}

.platform-badge:hover {
  background: var(--surface-hover);
  border-color: var(--primary-color);
  transform: translateY(-2px);
}

.platform-badge img {
  height: 24px;
  width: 24px;
  object-fit: contain;
  transition: var(--transition);
}

.platform-badge:hover img {
  transform: scale(1.1);
}

.platform-badge span {
  font-size: 12px;
  font-weight: 500;
  color: var(--text-secondary);
  transition: var(--transition);
}

.platform-badge:hover span {
  color: var(--text-primary);
}

.app-store-badge img {
  height: 60px;
  transition: var(--transition);
}

.app-store-badge a:hover img {
  transform: scale(1.05);
}

.hero-image {
  position: relative;
}

.hero-image img {
  width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: var(--transition);
}

.hero-image:hover img {
  transform: translateY(-10px);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
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
}

@media (max-width: 768px) {
  .hero {
    padding: 100px 0 60px;
  }
  
  .hero-title {
    font-size: 36px;
  }
  
  .hero-subtitle {
    font-size: 20px;
  }
  
  .hero-description {
    font-size: 16px;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .app-store-badge img {
    height: 50px;
  }
  
  .platform-badges {
    justify-content: center;
    gap: 16px;
  }
  
  .platform-badge {
    padding: 12px 8px;
    min-width: 70px;
  }
  
  .platform-badge svg {
    width: 20px;
    height: 20px;
  }
  
  .platform-badge span {
    font-size: 11px;
  }
}
</style>