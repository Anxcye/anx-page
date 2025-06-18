<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { availableLocales } from '../i18n'

defineProps<{
  isDark: boolean
}>()

defineEmits<{
  toggleTheme: []
}>()

const { locale, t } = useI18n()
const isMenuOpen = ref(false)
const isLangMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const toggleLangMenu = () => {
  isLangMenuOpen.value = !isLangMenuOpen.value
}

const setLocale = (code: string) => {
  locale.value = code
  localStorage.setItem('locale', code)
  isLangMenuOpen.value = false
}
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <RouterLink to="/" class="logo">
          <img src="/images/logo.png" alt="Anx Reader" />
          <span>Anx Reader</span>
        </RouterLink>

        <nav class="nav" :class="{ 'nav-open': isMenuOpen }">
          <RouterLink to="/" class="nav-link" @click="isMenuOpen = false">
            {{ t('nav.home') }}
          </RouterLink>
          <RouterLink to="/download" class="nav-link" @click="isMenuOpen = false">
            {{ t('nav.download') }}
          </RouterLink>
        </nav>

        <div class="header-actions">
          <div class="lang-selector" :class="{ 'active': isLangMenuOpen }">
            <button @click="toggleLangMenu" class="lang-button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/>
              </svg>
              {{ availableLocales.find(l => l.code === locale)?.name }}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="chevron">
                <path d="M7 10l5 5 5-5z"/>
              </svg>
            </button>
            <div class="lang-menu" v-show="isLangMenuOpen">
              <button 
                v-for="lang in availableLocales" 
                :key="lang.code"
                @click="setLocale(lang.code)"
                class="lang-option"
                :class="{ 'active': locale === lang.code }"
              >
                {{ lang.name }}
              </button>
            </div>
          </div>

          <button @click="$emit('toggleTheme')" class="theme-toggle">
            <svg v-if="!isDark" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.25l2.25 2.25-2.25 2.25L9.75 4.5 12 2.25zm0 4.5c3.15 0 5.7 2.55 5.7 5.7s-2.55 5.7-5.7 5.7-5.7-2.55-5.7-5.7 2.55-5.7 5.7-5.7zM21 11.25h-3v1.5h3v-1.5zm-15 0H3v1.5h3v-1.5zm13.5 7.5l-1.5-1.5-1.5 1.5 1.5 1.5 1.5-1.5zm-12 0L6 17.25 4.5 18.75 6 20.25 7.5 18.75zm12-12L19.5 5.25 18 3.75 16.5 5.25 18 6.75zm-12 0L7.5 5.25 6 3.75 4.5 5.25 6 6.75zM12 21.75l-2.25-2.25L12 17.25l2.25 2.25L12 21.75z"/>
            </svg>
            <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-5.52-4.48-10-10-10z"/>
            </svg>
          </button>

          <a href="https://github.com/anxcye/anx-reader" target="_blank" class="github-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>

          <button @click="toggleMenu" class="menu-toggle">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-color);
  z-index: 1000;
  transition: var(--transition);
}

:root.dark .header {
  background-color: rgba(0, 0, 0, 0.8);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: var(--text-primary);
  font-size: 20px;
  font-weight: 700;
}

.logo img {
  width: 32px;
  height: 32px;
  border-radius: 8px;
}

.nav {
  display: flex;
  gap: 32px;
}

.nav-link {
  text-decoration: none;
  color: var(--text-secondary);
  font-weight: 500;
  transition: var(--transition);
  position: relative;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--primary-color);
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: var(--primary-color);
  border-radius: 1px;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.lang-selector {
  position: relative;
}

.lang-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: none;
  background: none;
  color: var(--text-secondary);
  cursor: pointer;
  border-radius: 8px;
  transition: var(--transition);
}

.lang-button:hover {
  background-color: var(--surface-color);
}

.chevron {
  transition: var(--transition);
}

.lang-selector.active .chevron {
  transform: rotate(180deg);
}

.lang-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  min-width: 150px;
  z-index: 1001;
}

.lang-option {
  display: block;
  width: 100%;
  padding: 12px 16px;
  border: none;
  background: none;
  color: var(--text-primary);
  text-align: left;
  cursor: pointer;
  transition: var(--transition);
}

.lang-option:hover {
  background-color: var(--surface-color);
}

.lang-option.active {
  color: var(--primary-color);
  font-weight: 600;
}

.theme-toggle,
.github-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  background: none;
  color: var(--text-secondary);
  cursor: pointer;
  border-radius: 8px;
  transition: var(--transition);
  text-decoration: none;
}

.theme-toggle:hover,
.github-link:hover {
  background-color: var(--surface-color);
  color: var(--text-primary);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  padding: 8px;
  border: none;
  background: none;
  cursor: pointer;
}

.menu-toggle span {
  width: 20px;
  height: 2px;
  background-color: var(--text-primary);
  transition: var(--transition);
}

@media (max-width: 768px) {
  .nav {
    position: fixed;
    top: 100%;
    left: 0;
    right: 0;
    background-color: var(--background-color);
    border-top: 1px solid var(--border-color);
    flex-direction: column;
    padding: 20px;
    gap: 20px;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
  }

  .nav-open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-link.router-link-active::after {
    display: none;
  }

  .menu-toggle {
    display: flex;
  }

  .header-actions {
    gap: 8px;
  }

  .lang-button {
    padding: 8px;
  }
}
</style>