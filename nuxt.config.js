export default {
  mode: 'spa',
  head: {
    title: 'Seb DM - Front-end developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'msapplication-config', content: '/favicon/browserconfig.xml' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
      { rel: 'maskicon', href: '/favicon/safari-pinned-tab.svg', color: '#5bbad5' },
      { rel: 'manifest', href: '/favicon/manifest.json' },
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },

      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Merriweather:300,700' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/0.5.0/modern-normalize.min.css' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/zoom-vanilla.js/dist/zoom.css' },
    ]
  },
  loading: { color: '#fff' },
  modules: [
    ['@nuxtjs/google-analytics']
  ],
  'google-analytics': {
    id: 'UA-37038680-3'
  }
}
