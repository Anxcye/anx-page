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
    icon: '/images/os-logo/android-logo.svg'
  },
  {
    name: 'HarmonyOS',
    variants: [],
    icon: '/images/os-logo/hmos-logo.svg',
    hasAppGallery: true
  },
  {
    name: 'iOS',
    variants: [
      { name: 'Unsigned IPA', endpoint: 'ios-unsigned-ipa' },
      { name: 'Unsigned ZIP', endpoint: 'ios-unsigned-zip' }
    ],
    icon: '/images/os-logo/apple-logo.svg',
    hasAppStore: true
  },
  {
    name: 'macOS',
    variants: [
      { name: 'DMG', endpoint: 'macos-dmg' },
      { name: 'ZIP', endpoint: 'macos-zip' }
    ],
    icon: '/images/os-logo/apple-logo.svg',
    hasAppStore: true
  },
  {
    name: 'Windows',
    variants: [
      { name: 'EXE', endpoint: 'windows-exe' },
      { name: 'ZIP', endpoint: 'windows-zip' }
    ],
    icon: '/images/os-logo/windows-logo.svg'
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
          <a href="https://appgallery.huawei.com/app/detail?id=com.anxcye.anxreader" target="_blank" class="download-badge-button">
            <img src="/images/os-logo/app-gallery-badge.svg" alt="Download from AppGallery" />
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
              <div class="platform-icon">
                <img :src="platform.icon" :alt="platform.name" />
              </div>
              <h3>{{ platform.name }}</h3>
            </div>

            <div v-if="platform.hasAppGallery" class="app-gallery-section">
              <a href="https://appgallery.huawei.com/app/detail?id=com.anxcye.anxreader" target="_blank" class="app-store-button">
                <img src="/images/os-logo/app-gallery-badge.svg" alt="Download from AppGallery" />
              </a>
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