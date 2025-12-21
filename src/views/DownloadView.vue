<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

interface DownloadItem {
  label: string
  url: string
  primary?: boolean
  external?: boolean
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
        external: true
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
        external: true
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
                <span class="button-label">{{ item.label }}</span>
                <svg v-if="item.external" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
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
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.download-subtitle {
  font-size: 20px;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 0;
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

.button-label {
  flex: 1;
  text-align: left;
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