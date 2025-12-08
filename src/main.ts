import nProgress from 'nprogress'
import { ViteSSG } from 'vite-ssg'
import { routes } from 'vue-router/auto-routes'
import App from './App.vue'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import './styles/main.css'
import './styles/markdown.css'
import './styles/prose.css'

export const createApp = ViteSSG(App, { routes }, ({ router }) => {
  if (!import.meta.env.SSR) {
    router.beforeEach(async () => {
      nProgress.start()
    })
    router.afterEach(async () => {
      nProgress.done()
    })
  }
})
