if('serviceWorker' in navigator) navigator.serviceWorker.register('/genki/dev-sw.js?dev-sw', { scope: '/genki/', type: 'classic' })