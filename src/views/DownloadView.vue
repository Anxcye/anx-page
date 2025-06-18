<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const platforms = [
  {
    name: 'Android',
    variants: [
      { name: 'Universal', endpoint: 'android-universal' },
      { name: 'ARM64', endpoint: 'android-arm64-v8a' },
      { name: 'ARMv7', endpoint: 'android-armeabi-v7a' },
      { name: 'x86_64', endpoint: 'android-x86_64' }
    ],
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.523 15.3414c-.5665 0-1.0253-.4588-1.0253-1.0253s.4588-1.0253 1.0253-1.0253 1.0253.4588 1.0253 1.0253-.4588 1.0253-1.0253 1.0253zm-11.046 0c-.5665 0-1.0253-.4588-1.0253-1.0253s.4588-1.0253 1.0253-1.0253 1.0253.4588 1.0253 1.0253-.4588 1.0253-1.0253 1.0253zm11.405-6.539l1.994-3.467c.1094-.1896.0447-.4313-.1449-.5407-.1896-.1094-.4313-.0447-.5407.1449l-2.0187 3.5062c-.8038-.3735-1.7107-.5841-2.6637-.5841s-1.8599.2106-2.6637.5841L9.6558 5.8756c-.1094-.1896-.3511-.2543-.5407-.1449-.1896.1094-.2543.3511-.1449.5407l1.994 3.467c-3.156 1.3137-5.36 4.5441-5.36 8.226h16.7078c0-3.6819-2.204-6.9123-5.36-8.226z"/></svg>`
  },
  {
    name: 'iOS',
    variants: [
      { name: 'Unsigned IPA', endpoint: 'ios-unsigned-ipa' },
      { name: 'Unsigned ZIP', endpoint: 'ios-unsigned-zip' }
    ],
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>`,
    hasAppStore: true
  },
  {
    name: 'macOS',
    variants: [
      { name: 'DMG', endpoint: 'macos-dmg' },
      { name: 'ZIP', endpoint: 'macos-zip' }
    ],
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>`,
    hasAppStore: true
  },
  {
    name: 'Windows',
    variants: [
      { name: 'EXE', endpoint: 'windows-exe' },
      { name: 'ZIP', endpoint: 'windows-zip' }
    ],
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 12V6.75l6-1.32v6.48L3 12m17-9v8.75l-10 .15V5.21L20 3M3 13l6 .09v6.81l-6-1.15V13m17 .25V22l-10-1.91V13.1l10 .15Z"/></svg>`
  }
]
</script>

<template>
  <div class="download-page">
    <div class="download-hero">
      <div class="container">
        <h1 class="download-title">{{ t('download.title') }}</h1>
        <p class="download-subtitle">{{ t('download.subtitle') }}</p>
        
        <div class="download-buttons-section">
          <a href="https://github.com/anxcye/anx-reader/releases/latest" target="_blank" class="download-badge-button">
            <img src="/images/github-badge.png" alt="Download from GitHub" />
          </a>
          <a href="https://apps.apple.com/app/anx-reader/id6743196413" target="_blank" class="download-badge-button">
            <img src="/images/app-store-badge.svg" alt="Download on the App Store" />
          </a>
        </div>
      </div>
    </div>

    <div class="download-content">
      <div class="container">
        <div class="direct-download-section">
          <h2>{{ t('download.direct.title') }}</h2>
        </div>

        <div class="platforms-grid">
          <div v-for="platform in platforms" :key="platform.name" class="platform-card">
            <div class="platform-header">
              <div class="platform-icon" v-html="platform.icon"></div>
              <h3>{{ platform.name }}</h3>
            </div>

            <!-- App Store button for iOS -->
            <div v-if="platform.hasAppStore" class="app-store-section">
              <a href="https://apps.apple.com/app/anx-reader/id6743196413" target="_blank" class="app-store-button">
                <img src="/images/app-store-badge.svg" alt="Download on the App Store" />
              </a>
            </div>
            
            <div class="platform-variants">
              <a 
                v-for="variant in platform.variants" 
                :key="variant.endpoint"
                :href="`https://api.anx.anxcye.com/api/latest/${variant.endpoint}`"
                download
                class="download-button"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                </svg>
                {{ variant.name }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.download-page {
  padding-top: 80px;
}

.download-hero {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  padding: 80px 0;
  text-align: center;
}

.download-title {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 20px;
}

.download-subtitle {
  font-size: 20px;
  opacity: 0.9;
  margin-bottom: 60px;
}

.download-buttons-section {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.download-badge-button img {
  height: 60px;
  transition: var(--transition);
}

.download-badge-button:hover img {
  transform: scale(1.05);
}

.download-content {
  padding: 80px 0;
}

.direct-download-section {
  text-align: center;
  margin-bottom: 60px;
}

.direct-download-section h2 {
  font-size: 36px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 20px;
}

.direct-description {
  font-size: 18px;
  color: var(--text-secondary);
  margin-bottom: 16px;
}

.platforms-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.platform-card {
  background-color: var(--surface-color);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 30px;
  transition: var(--transition);
}

.platform-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow);
}

.platform-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}

.platform-icon {
  width: 32px;
  height: 32px;
  color: var(--primary-color);
}

.platform-header h3 {
  font-size: 24px;
  font-weight: 600;
  color: var(--text-primary);
}

.platform-variants {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.download-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background-color: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  color: var(--text-primary);
  cursor: pointer;
  transition: var(--transition);
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
}

.download-button:hover {
  background-color: var(--primary-color);
  color: white;
  transform: translateX(5px);
}

.app-store-section {
  margin-top: 24px;
  text-align: center;
}

.divider {
  height: 1px;
  background-color: var(--border-color);
  margin-bottom: 20px;
}

.app-store-section h4 {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.app-store-description {
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 16px;
}

.app-store-button img {
  height: 40px;
  transition: var(--transition);
}

.app-store-button:hover img {
  transform: scale(1.05);
}

.direct-note {
  font-size: 14px;
  color: var(--text-secondary);
  background-color: var(--background-color);
  padding: 16px;
  border-radius: 12px;
  border-left: 4px solid var(--primary-color);
  margin-top: 20px;
}

@media (max-width: 768px) {
  .download-title {
    font-size: 36px;
  }
  
  .download-subtitle {
    font-size: 18px;
  }
  
  .download-buttons-section {
    flex-direction: column;
    align-items: center;
  }
  
  .platforms-grid {
    grid-template-columns: 1fr;
  }
  
  .direct-download-section h2 {
    font-size: 28px;
  }
}
</style>