<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="logo">
            <img src="/images/logo.png" alt="Anx Reader" />
            <span>Anx Reader</span>
          </div>
          <p class="description">{{ t('footer.description') }}</p>
        </div>
        
        <div class="footer-links">
          <a href="https://github.com/anxcye/anx-reader" target="_blank" rel="noopener noreferrer">
            {{ t('footer.links.github') }}
          </a>
          <router-link to="/privacy">{{ t('footer.links.privacy') }}</router-link>
          <router-link to="/terms">{{ t('footer.links.terms') }}</router-link>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; 2024 Anx Reader. Made with ❤️ by anxcye</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--surface-color);
  border-top: 1px solid var(--border-color);
  padding: 60px 0 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: 40px;
}

.footer-brand .logo {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.footer-brand .logo img {
  width: 40px;
  height: 40px;
  border-radius: 8px;
}

.footer-brand .logo span {
  font-size: 24px;
  font-weight: 700;
  color: var(--text-primary);
}

.description {
  color: var(--text-secondary);
  max-width: 400px;
  line-height: 1.6;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-self: end;
}

.footer-links a {
  color: var(--text-secondary);
  text-decoration: none;
  transition: var(--transition);
}

.footer-links a:hover {
  color: var(--primary-color);
}

.footer-bottom {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid var(--border-color);
  color: var(--text-secondary);
  font-size: 14px;
}

@media (max-width: 768px) {
  .footer {
    padding: 40px 0 20px;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
  
  .footer-links {
    justify-self: center;
  }
}
</style>