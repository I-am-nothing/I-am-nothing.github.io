module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'I-am-nothing',
      description: 'I believe I can touch the sky ~~~',
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
          },{
            text: 'Tags',
            link: '/tag/',
            icon: 'reco-tag'
          }, {
            text: 'Categories',
            icon: 'reco-category',
            items: [{
              text: 'category1',
              link: '/categories/category1/',
            }, {
              text: 'category2',
              link: '/categories/category2/',
            }
          ]
          }, {
            text: 'Docs',
            icon: 'reco-message',
            items: [{
              text: "About Nothing",
              link: '/docs/about-nothing/'
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
                link: 'mailto:nothingchang1118@gmail.com',
                icon: 'reco-mail'
              }
            ]
          }
        ],
        sidebar: {
          '/docs/about-nothing/': [
            '', {
              title: 'Autobiography',
              path: 'autobiography'
            }, {
              title: 'Side Project',
              path: 'side-project'
            }, {
              title: 'Competition',
              path: 'competition'
            }, {
              title: 'Club Participation',
              path: 'club-participation'
            }, {
              title: 'Certification',
              path: 'certification'
            }, {
              title: 'Study',
              path: 'study'
            }
          ]
        },
      },
      '/zh-TW/': {
        selectText: '語言',
        label: '中文-繁體',
        editLinkText: '在 Github 上編輯此頁', 
        serviceWorker: {
          updatePopup: {
            message: "發現新內容",
            buttonText: "刷新"
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
          },{
            text: '標籤',
            link: '/tag/',
            icon: 'reco-tag'
          }, {
            text: '類別',
            icon: 'reco-category',
            items: [{
              text: '類別1',
              link: '/categories/category1/',
            }, {
              text: '類別2',
              link: '/categories/category2/',
            }
          ]
          }, {
            text: '文檔',
            icon: 'reco-message',
            items: [{
              text: "關於 Nothing",
              link: '/zh-TW/docs/about-nothing/'
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
                link: 'mailto:nothingchang1118@gmail.com',
                icon: 'reco-mail'
              }
            ]
          }
        ],
        sidebar: {
          '/zh-TW/docs/about-nothing/': [
            {
              title: '關於 Nothing',
              path: '/zh-TW/docs/about-nothing/'
            }, {
              title: '自傳',
              path: 'autobiography'
            }, {
              title: '作品集',
              path: 'side-project'
            }, {
              title: '競賽',
              path: 'competition'
            }, {
              title: '社團',
              path: 'club-participation'
            }, {
              title: '證照',
              path: 'certification'
            }, {
              title: '研習',
              path: 'study'
            }
          ]
        },
      },
    },
    type: 'blog',
    blogConfig: {
      'category': {
        location: 2,
        text: 'Category'
      },
      'tag': {
        location: 3,
        text: "Tag"
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
    startYear: '2022',
    noFoundPageByTencent: false,
  },
  markdown: {
    lineNumbers: true
  }
}