import DefaultTheme from 'vitepress/theme'
import NotFound from './NotFound.vue'
import { h } from 'vue'

import './style.css'

export default {
    extends: DefaultTheme,
    Layout() {
        return h(DefaultTheme.Layout, null, {
            'not-found': () => h(NotFound)
        })
    }
}
