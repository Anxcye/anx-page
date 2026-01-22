<script setup lang="ts">
import { ref } from 'vue'
import { withBase } from 'vitepress'

const isRedirecting = ref(false)

if (typeof window !== 'undefined') {
  const path = window.location.pathname
  const base = '/docs/'
  
  if (!path.startsWith(base + 'en/') && !path.startsWith(base + 'zh/')) {
      const userLang = navigator.language || (navigator as any).userLanguage
      const targetLang = userLang.startsWith('zh') ? 'zh' : 'en'
      const remainder = path.slice(base.length) 
      const newPath = `${base}${targetLang}/${remainder}`
      
      console.log(`[NotFound Redirect] Redirecting to: ${newPath}`)
      isRedirecting.value = true
      window.location.replace(newPath)
  }
}
</script>

<template>
  <div class="NotFound" v-if="!isRedirecting">
    <div class="container">
      <div class="code">404</div>
      <div class="title">PAGE NOT FOUND</div>
      <div class="divider"></div>
      <blockquote class="quote">
        But if you don't change your direction, and if you keep looking, you may end up where you are heading.
      </blockquote>
      <div class="action">
        <a class="link" :href="withBase('/')" aria-label="go to home">
          Take me home
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.NotFound {
  padding: 64px 24px 96px;
  text-align: center;
}

@media (min-width: 768px) {
  .NotFound {
    padding: 96px 32px 168px;
  }
}

.code {
  line-height: 64px;
  font-size: 64px;
  font-weight: 600;
}

.title {
  padding-top: 12px;
  letter-spacing: 2px;
  line-height: 20px;
  font-size: 20px;
  font-weight: 700;
}

.divider {
  margin: 24px auto 18px;
  width: 64px;
  height: 1px;
  background-color: var(--vp-c-divider);
}

.quote {
  margin: 0 auto;
  max-width: 256px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.action {
  padding-top: 20px;
}

.link {
  display: inline-block;
  border: 1px solid var(--vp-c-brand);
  border-radius: 16px;
  padding: 3px 16px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand);
  transition: border-color 0.25s, color 0.25s;
}

.link:hover {
  border-color: var(--vp-c-brand-dark);
  color: var(--vp-c-brand-dark);
}
</style>
