<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

interface DownloadItem {
  label: string
  url: string
  primary?: boolean
  external?: boolean
  tag?: 'free' | 'paid'
}

interface Platform {
  name: string
  icon: string
  items: DownloadItem[]
}

const platforms = computed<Platform[]>(() => [
  {
    name: 'Android',
    icon: '/images/os-logo/android-logo.svg',
    items: [
      { 
        label: t('download.actions.android.universal'), 
        url: 'https://api.anx.anxcye.com/api/latest/android-universal',
        primary: true 
      },
      { 
        label: t('download.actions.android.arm64'), 
        url: 'https://api.anx.anxcye.com/api/latest/android-arm64-v8a' 
      },
      { 
        label: t('download.actions.android.armv7'), 
        url: 'https://api.anx.anxcye.com/api/latest/android-armeabi-v7a' 
      },
      { 
        label: t('download.actions.android.x86'), 
        url: 'https://api.anx.anxcye.com/api/latest/android-x86_64' 
      }
    ]
  },
  {
    name: 'HarmonyOS',
    icon: '/images/os-logo/hmos-logo.svg',
    items: [
      {
        label: t('download.actions.harmonyos.appGallery'),
        url: 'https://appgallery.huawei.com/app/detail?id=com.anxcye.anxreader',
        primary: true,
        external: true
      }
    ]
  },
  {
    name: 'iOS',
    icon: '/images/os-logo/apple-logo.svg',
    items: [
      {
        label: t('download.actions.ios.appStore'),
        url: 'https://apps.apple.com/app/anx-reader/id6743196413',
        primary: true,
        external: true,
        tag: 'paid'
      },
      {
        label: t('download.actions.ios.unsigned_ipa'),
        url: 'https://api.anx.anxcye.com/api/latest/ios-unsigned-ipa'
      },
      {
        label: t('download.actions.ios.unsigned_zip'),
        url: 'https://api.anx.anxcye.com/api/latest/ios-unsigned-zip'
      }
    ]
  },
  {
    name: 'macOS',
    icon: '/images/os-logo/apple-logo.svg',
    items: [
      {
        label: t('download.actions.macos.appStore'),
        url: 'https://apps.apple.com/app/anx-reader/id6743196413',
        primary: true,
        external: true,
        tag: 'paid'
      },
      {
        label: t('download.actions.macos.dmg'),
        url: 'https://api.anx.anxcye.com/api/latest/macos-dmg'
      },
      {
        label: t('download.actions.macos.zip'),
        url: 'https://api.anx.anxcye.com/api/latest/macos-zip'
      }
    ]
  },
  {
    name: 'Windows',
    icon: '/images/os-logo/windows-logo.svg',
    items: [
      {
        label: t('download.actions.windows.exe'),
        url: 'https://api.anx.anxcye.com/api/latest/windows-exe',
        primary: true
      },
      {
        label: t('download.actions.windows.zip'),
        url: 'https://api.anx.anxcye.com/api/latest/windows-zip'
      }
    ]
  }
])
</script>

<template>
  <div class="download-page">
    <div class="download-hero">
      <div class="container">
        <h1 class="download-title">{{ t('download.title') }}</h1>
        <p class="download-subtitle">{{ t('download.subtitle') }}</p>
        
        <div class="pricing-info-card">
          <div class="info-icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
          </div>
          <p class="info-text">
            <i18n-t keypath="download.notice" tag="span">
              <template #icon>
                <span class="inline-badge-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </span>
              </template>
            </i18n-t>
          </p>
        </div>
      </div>
    </div>

    <div class="download-content">
      <div class="container">
        <div class="platforms-grid">
          <div v-for="platform in platforms" :key="platform.name" class="platform-card">
            <div class="platform-header">
              <div class="platform-icon">
                <img :src="platform.icon" :alt="platform.name" />
              </div>
              <h3>{{ platform.name }}</h3>
            </div>

            <div class="platform-items">
              <a 
                v-for="item in platform.items" 
                :key="item.url"
                :href="item.url"
                :target="item.external ? '_blank' : undefined"
                :download="!item.external"
                class="download-item-button"
                :class="{ 'is-primary': item.primary }"
              >
                <div class="button-content">
                  <span class="button-label">{{ item.label }}</span>
                  <div v-if="item.tag" class="badge-row">
                     <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <span>{{ t(`download.tags.${item.tag}`) }}</span>
                  </div>
                </div>
                
                <svg v-if="item.external" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="action-icon">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="action-icon">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                </svg>
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
  background: linear-gradient(135deg, var(--background-color), var(--surface-color));
  color: var(--text-primary);
  padding: 80px 0 40px;
  text-align: center;
  border-bottom: 1px solid var(--border-color);
}

.download-title {
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 16px;
  color: var(--primary-color);
}

.download-subtitle {
  font-size: 20px;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 0;
}

.pricing-info-card {
  display: inline-flex;
  align-items: flex-start;
  gap: 12px;
  margin-top: 32px;
  padding: 16px 20px;
  background-color: var(--surface-color);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  max-width: 600px;
  text-align: left;
  line-height: 1.5;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.info-icon-wrapper {
  color: var(--primary-color);
  display: flex;
  margin-top: 2px;
}

.info-text {
  font-size: 14px;
  color: var(--text-secondary);
  font-weight: 500;
  margin: 0;
}

.download-content {
  padding: 60px 0;
}

.platforms-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
}

.platform-card {
  background-color: var(--surface-color);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 24px;
  transition: var(--transition);
  display: flex;
  flex-direction: column;
}

.platform-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow);
  border-color: var(--primary-color);
}

.platform-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border-color);
}

.platform-icon {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.platform-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.platform-header h3 {
  font-size: 20px;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

.platform-items {
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
}

.download-item-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background-color: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  color: var(--text-primary);
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  font-size: 14px;
}

.download-item-button:hover {
  background-color: var(--surface-hover);
  border-color: var(--primary-color);
  color: var(--primary-color);
  transform: translateX(2px);
}

.download-item-button.is-primary {
  background-color: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
  font-weight: 500;
}

.download-item-button.is-primary:hover {
  opacity: 0.9;
  transform: translateX(2px);
  box-shadow: 0 4px 12px rgba(var(--primary-color-rgb), 0.2);
}

.button-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: left;
}

.button-label {
  font-weight: 500;
  line-height: 1.2;
}

.badge-row {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  font-weight: 600;
  color: var(--primary-color);
}

/* Ensure high contrast in primary button */
.download-item-button.is-primary .badge-row {
    color: rgba(255, 255, 255, 0.9);
}

.inline-badge-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: -2px;
  color: var(--primary-color);
  margin: 0 2px;
}

.action-icon {
  opacity: 0.7;
  transition: opacity 0.2s;
  flex-shrink: 0;
  margin-left: 12px;
}

.download-item-button:hover .action-icon {
  opacity: 1;
}

@media (max-width: 768px) {
  .download-title {
    font-size: 32px;
  }
  
  .platforms-grid {
    grid-template-columns: 1fr;
  }
}
</style>