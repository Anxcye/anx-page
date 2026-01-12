---
layout: false
---

<script setup>
import { onBeforeMount } from 'vue'

onBeforeMount(() => {
  if (typeof window !== 'undefined') {
    const userLang = navigator.language || navigator.userLanguage
    const target = userLang.startsWith('zh') ? '/docs/zh/' : '/docs/en/'
    window.location.replace(target)
  }
})
</script>

<style>
body { background: white; }
@media (prefers-color-scheme: dark) { body { background: #1a1a1a; } }
</style>
