<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const features = [
  {
    key: 'bookshelf',
    image: '/bookshelf-showcase.png'
  },
  {
    key: 'personalize',
    image: '/personalize-showcase.png'
  },
  {
    key: 'analytics',
    image: '/analytics-showcase.png'
  },
  {
    key: 'notes',
    image: '/notes-showcase.png'
  },
  {
    key: 'aiChat',
    image: '/ai-chat.png'
  },
  {
    key: 'contextMenu',
    image: '/context-menu.png'
  },
  {
    key: 'customization',
    image: '/customization.png'
  },
  {
    key: 'sync',
    image: '/sync.png'
  }
]
</script>

<template>
  <section class="features section">
    <div class="container">
      <h2 class="section-title">{{ t('features.title') }}</h2>
      
      <div class="features-grid">
        <div 
          v-for="(feature, index) in features" 
          :key="feature.key"
          class="feature-card"
          :class="{ 'reverse': index % 2 === 1 }"
        >
          <div class="feature-image">
            <img :src="`/images${feature.image}`" :alt="t(`features.${feature.key}.title`)" />
          </div>
          
          <div class="feature-content">
            <h3 class="feature-title">{{ t(`features.${feature.key}.title`) }}</h3>
            <p class="feature-description">{{ t(`features.${feature.key}.description`) }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features {
  background-color: var(--background-color);
}

.features-grid {
  display: flex;
  flex-direction: column;
  gap: 120px;
}

.feature-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.feature-card.reverse {
  direction: rtl;
}

.feature-card.reverse > * {
  direction: ltr;
}

.feature-image {
  position: relative;
}

.feature-image img {
  width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: var(--shadow);
  transition: var(--transition);
}

.feature-card:hover .feature-image img {
  transform: scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.feature-content {
  padding: 0 20px;
}

.feature-title {
  font-size: 36px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 20px;
  line-height: 1.2;
}

.feature-description {
  font-size: 18px;
  color: var(--text-secondary);
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .features-grid {
    gap: 80px;
  }
  
  .feature-card {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
  
  .feature-card.reverse {
    direction: ltr;
  }
  
  .feature-title {
    font-size: 28px;
  }
  
  .feature-description {
    font-size: 16px;
  }
}

@media (max-width: 768px) {
  .features-grid {
    gap: 60px;
  }
  
  .feature-card {
    gap: 30px;
  }
  
  .feature-title {
    font-size: 24px;
  }
  
  .feature-description {
    font-size: 14px;
  }
  
  .feature-content {
    padding: 0;
  }
}
</style>