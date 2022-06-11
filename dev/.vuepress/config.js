module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'I-am-nothing',
      description: 'I believe I can touch the sky ~~~'
    },
    '/zh-TW/': {
      lang: 'zh-TW',
      title: 'I-am-nothing',
      description: 'I believe I can touch the sky ~~~'
    }
  },
  base: '/',
  head: [[
      'link', {
        rel: 'icon',
        href: '/hero.jpeg'
      }
    ], [
      'meta', {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no'
      }
    ]
  ],
  theme: 'reco',
  mode: 'dark',
  themeConfig: {
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit this page on GitHub', 
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        // algolia docsearch options for current locale
        algolia: {},
        nav: [{
            text: 'Home',
            link: '/',
            icon: 'reco-home'
          }, {
            text: 'TimeLine',
            link: '/timeline/',
            icon: 'reco-date'
          }, {
            text: 'Docs',
            icon: 'reco-message',
            items: [{
              text: "Nothing's resume",
              link: '/docs/theme-reco/'
            }]
          }, {
            text: 'Contact',
            icon: 'reco-message',
            items: [{
                text: 'GitHub',
                link: 'https://github.com/I-am-nothing',
                icon: 'reco-github'
              }, {
                text: 'Linkdin',
                link: 'https://www.linkedin.com/in/nothing-chang-374147227/',
                icon: 'reco-linkedin'
              }, {
                text: 'Email',
                link: 'mailto:jdps99119@gmail.com',
                icon: 'reco-mail'
              }
            ]
          }
        ],
        sidebar: {
          '/docs/theme-reco/': [
            '',
            'theme',
            'plugin',
            'api'
          ]
        },
      },
      '/zh-TW/': {
        selectText: '語言',
        label: '中文-繁體',
        editLinkText: '在Github編輯此頁', 
        serviceWorker: {
          updatePopup: {
            message: "有新內容",
            buttonText: "更新"
          }
        },
        algolia: {},
        nav: [{
            text: '首頁',
            link: '/',
            icon: 'reco-home'
          }, {
            text: '時間軸',
            link: '/timeline/',
            icon: 'reco-date'
          }, {
            text: '文件',
            icon: 'reco-message',
            items: [{
              text: "Nothing's 履歷",
              link: '/docs/theme-reco/'
            }]
          }, {
            text: '聯絡方式',
            icon: 'reco-message',
            items: [{
                text: 'GitHub',
                link: 'https://github.com/I-am-nothing',
                icon: 'reco-github'
              }, {
                text: 'Linkdin',
                link: 'https://www.linkedin.com/in/nothing-chang-374147227/',
                icon: 'reco-linkedin'
              }, {
                text: '電子郵件',
                link: 'mailto:jdps99119@gmail.com',
                icon: 'reco-mail'
              }
            ]
          }
        ],
        sidebar: {
          '/docs/theme-reco/': [
            '',
            'theme',
            'plugin',
            'api'
          ]
        },
      },
    },
    type: 'blog',
    blogConfig: {
      locales: {
        '/': {
          'category': {
            location: 2,
            text: 'Category'
          },
          'tag': {
            location: 3,
            text: "Tag"
          }
        }
      }
    },
    friendLink: [{
        title: 'URLoser404',
        desc: "URLoser404's personal website",
        email: 'b0925138932@gmail.com',
        link: 'https://urloser404.github.io/'
      }, {
        title: 'Docat0209',
        desc: "Docat0219's personal website",
        email: 'shane930209@gmail.com/',
        link: 'https://docat0209.github.io/'
      }
    ],
    logo: '/hero.jpeg',
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: '03/04 2022',
    author: 'I-am-nothing',
    authorAvatar: '/hero2.jpeg',
    record: null,
    startYear: '2022'
  },
  "markdown": {
    "lineNumbers": true
  }
}