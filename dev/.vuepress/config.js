module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'I-am-nothing',
      description: "I believe I can't touch the sky ~~~",
    },
    '/zh-TW/': {
      lang: 'zh-TW',
      title: 'I-am-nothing',
      description: '我相信我碰不到天空～～～'
    }
  },
  base: '/',
  dest: '../docs',
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
            }, {
              text: "History Of Love",
              link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'
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
          '/docs/': [{
            title: 'About Nothing',
            path: '/docs/about-nothing/',
            collapsable: false,
            children: [{
              title: 'Autobiography',
              path: 'about-nothing/autobiography'
            }, {
              title: 'Side Project',
              path: 'about-nothing/side-project'
            }, {
              title: 'Competition',
              path: 'about-nothing/competition'
            }, {
              title: 'Club Participation',
              path: 'about-nothing/club-participation'
            }, {
              title: 'Certification',
              path: 'about-nothing/certification'
            }, {
              title: 'Study',
              path: 'about-nothing/study'
            }]
          }]
        },
      },
      '/zh-TW/': {
        selectText: 'Language',
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
            link: '/zh-TW/',
            icon: 'reco-home'
          }, {
            text: '時間軸',
            link: '/zh-TW/timeline/',
            icon: 'reco-date'
          },{
            text: '標籤',
            link: '/zh-TW/tag/',
            icon: 'reco-tag'
          }, {
            text: '類別',
            icon: 'reco-category',
            items: [{
              text: '類別1',
              link: 'zh-TW//categories/category1/',
            }, {
              text: '類別2',
              link: 'zh-TW//categories/category2/',
            }
          ]
          }, {
            text: '文檔',
            icon: 'reco-message',
            items: [{
              text: "關於 Nothing",
              link: '/zh-TW/docs/about-nothing/'
            }, {
              text: "情史",
              link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'
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
          '/zh-TW/docs/': [{
            title: '關於 Nothing',
            path: '/zh-TW/docs/about-nothing/',
            collapsable: false,
            children: [{
              title: '自傳',
              path: 'about-nothing/autobiography'
            }, {
              title: '作品集',
              path: 'about-nothing/side-project'
            }, {
              title: '競賽',
              path: 'about-nothing/competition'
            }, {
              title: '社團',
              path: 'about-nothing/club-participation'
            }, {
              title: '證照',
              path: 'about-nothing/certification'
            }, {
              title: '研習',
              path: 'about-nothing/study'
            }]
          }]
        },
      },
    },
    type: 'blog',
    blogConfig: {
      'timeline': {
        location: 4,
        text: 'TimeLine'
      },
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
        logo: 'https://urloser404.github.io/hero.jpg',
        title: 'URLoser404',
        desc: "URLoser404's personal website",
        link: 'https://urloser404.github.io/'
      }, {
        logo: 'https://docat0209.github.io/page.png',
        title: 'Docat0209',
        desc: "Docat0219's personal website",
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
    subSidebar: 'auto',
    sidebarDepth: 1,
    displayAllHeaders: false,
  },
  markdown: {
    lineNumbers: true
  }
}