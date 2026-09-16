module.exports = {
  content: [
    './*.html',
    './js/*.js',
    './icons.css',
  ],
  css: ['./styles.css'],
  output: './',
  safelist: {
    standard: [
      // Clases toggled por JavaScript
      'active',
      'visible',
      'open',
      'show',
      'hidden',
      // Navegación móvil
      'nav-list',
      'nav-overlay',
      // Botones flotantes
      'scroll-top-btn',
      'whatsapp-btn',
      // Cookie banner
      'cookie-banner',
      'cookie-accepted',
    ],
    greedy: [
      /^fa-/,
      /^fas/,
      /^fab/,
    ]
  }
}
