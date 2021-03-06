module.exports = {
  plugins: [
    [
      'vuepress-plugin-go-top'
    ],
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          return new Date(timestamp).toLocaleDateString();
        }
      }
    ],
    [
      'sitemap',
      {
        hostname: 'https://i-am-nothing.github.io/'
      }
    ],
    [
      'vuepress-plugin-helper-live2d', {
        log: false,
        live2d: {
          enable: true,
          model: 'tororo',
          display: {
            position: 'left',
            width: 135,
            height: 300, 
            hOffset: 65,
            vOffset: 0,
          },
          mobile: {
            show: false // 是否在移动设备上显示(default: false)
          },
          react: {
            opacity: 0.9 // 模型透明度(default: 0.8)
          }
        }
      }
    ]
  ],
  linkFix: {
    '/zh-TW/categories/Diary/': '/zh-TW/categories/日記/',
    '/zh-TW/categories/Vue-Press Blog/': '/zh-TW/categories/Vue-Press部落格/',
    '/zh-TW/categories/About-Nothing/': '/zh-TW/categories/關於 Nothing/',
    '/zh-TW/categories/Taiwan-Transportation Tracking App/': '/zh-TW/categories/台灣大眾運輸追蹤APP/',
    '/categories/日記/': '/categories/Diary/',
    '/categories/Vue-Press部落格/': '/categories/Vue-Press Blog/',
    '/categories/關於 Nothing/': '/categories/About-Nothing/',
    '/categories/台灣大眾運輸追蹤APP/': '/categories/Taiwan-Transportation Tracking App/',
    '/zh-TW/tag/Summary/': '/zh-TW/tag/概述/',
    '/tag/概述/': '/tag/Summary/',
    '/categories/實用的“庫”/': '/categories/Useful Repositories/',
    '/zh-TW/categories/Useful Repositories/': '/zh-TW/categories/實用的“庫”/',
  }, 
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
  thirdPartyComponents: {
    fontAwesomeIcons:{  // Regular font awesome icon keys here
        brands:['github']               // Solid font awesome icon keys here
    }
  },
  base: '/',
  dest: '../docs',
  head: [[
      'script',
      {
          async: true,
          src: 'https://www.googletagmanager.com/gtag/js?id=G-170VJJB3ZL',
      },
    ], [
      'script',
      {},
      [
          "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-170VJJB3ZL');",
      ],
    ],[
      'link', {
        rel: 'icon',
        href: '/hero.png'
      }
    ], [
      'meta', {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no'
      }
    ]
  ],
  mode: 'auto',
  themeConfig: {
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit this page on GitHub', 
        lastUpdated: 'Last Updated Time',
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
              text: 'Vue-Press Blog',
              link: '/categories/Vue-Press%20Blog/',
            }, {
              text: 'Taiwan-Transportation Tracking App',
              link: '/categories/Taiwan-Transportation%20Tracking%20App/',
            }, {
              text: 'Diary',
              link: '/categories/Diary/',
            }, {
              text: 'Useful Repositories',
              link: '/categories/Useful%20Repositories/',
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
          }
        ],
        sidebar: {
          '/docs/': [{
            title: 'About Nothing',
            collapsable: true,
            children: [{
              title: 'Nothing',
              path: 'about-nothing/'
            }, {
              title: 'Work Experience',
              path: 'about-nothing/work'
            }, {
              title: 'Side Project',
              path: 'about-nothing/side-project'
            }, {
              title: 'Autobiography',
              path: 'about-nothing/autobiography'
            }, {
              title: 'Competition',
              path: 'about-nothing/competition'
            }, {
              title: 'Club Participation',
              path: 'about-nothing/club'
            }, {
              title: 'Certification',
              path: 'about-nothing/certification'
            }, {
              title: 'WorkShop Experience',
              path: 'about-nothing/workshop'
            }, {
              title: 'Special Experience',
              path: 'about-nothing/special'
            }]
          }]
        },
        valineConfig: {
          appId: 'uzXtuH1J23gkPQzsXmFVoJHL-MdYXbMMI',// your appId
          appKey: '00CVVx4GG0I5sDvs7UvarjE3', // your appKey
          serverURLs: 'https://uzxtuh1j.api.lncldglobal.com',
          placeholder: "It's time to show the real technology",
          avatar: 'wavatar',
          recordIP: true,
          lang: 'en'
        },
        friendLink: [{
          logo: 'https://urloser404.github.io/hero.jpg',
          title: 'URLoser404',
          desc: "A junior in in Taichung Municipal Taichung Industrial High School, URLoser404 XD",
          link: 'https://urloser404.github.io/'
        }, {
          logo: 'https://mr6915tri8513.github.io/home_page/avatar.png',
          title: 'Mr6915tri8513',
          desc: "A classmate in Taichung Municipal Taichung Industrial High School. We're friends, right",
          link: 'https://mr6915tri8513.github.io/'
        }, {
          logo: 'https://docat0209.github.io/page.png',
          title: 'Docat0209',
          desc: "Competitor who fought with me",
          link: 'https://docat0209.github.io/'
        }, {
          logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbmKE_FCpSYHZJz0k_k1FwFI-GHXWaJTXymQ&usqp=CAU',
          title: 'Rick Astley',
          desc: "You know the rules and so do I ~~~",
          link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        }],
      },
      '/zh-TW/': {
        selectText: 'Languages',
        label: '中文-繁體',
        editLinkText: '在 Github 上編輯此頁', 
        lastUpdated: '最後更新時間 ',
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
              text: 'Vue-Press部落格',
              link: '/zh-TW/categories/Vue-Press%E9%83%A8%E8%90%BD%E6%A0%BC/',
            }, {
              text: '台灣大眾運輸追蹤APP',
              link: '/zh-TW/categories/台灣大眾運輸追蹤APP/',
            }, {
              text: '日記',
              link: '/zh-TW/categories/日記/',
            }, {
              text: '實用的“庫”',
              link: '/zh-TW/categories/實用的“庫”/',
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
          }
        ],
        sidebar: {
          '/zh-TW/docs/': [{
            title: '關於 Nothing',
            path: '/zh-TW/docs/about-nothing/',
            collapsable: true,
            children: [{
              title: 'Nothing',
              path: 'about-nothing/'
            }, {
              title: '工作經驗',
              path: 'about-nothing/work'
            }, {
              title: '作品集',
              path: 'about-nothing/side-project'
            }, {
              title: '自傳',
              path: 'about-nothing/autobiography'
            }, {
              title: '競賽經歷',
              path: 'about-nothing/competition'
            }, {
              title: '社團參與',
              path: 'about-nothing/club'
            }, {
              title: '檢定證照',
              path: 'about-nothing/certification'
            }, {
              title: '研習經驗',
              path: 'about-nothing/workshop'
            }, {
              title: '特殊經歷',
              path: 'about-nothing/special'
            }]
          }]
        },
        valineConfig: {
          appId: 'uzXtuH1J23gkPQzsXmFVoJHL-MdYXbMMI',// your appId
          appKey: '00CVVx4GG0I5sDvs7UvarjE3', // your appKey
          serverURLs: 'https://uzxtuh1j.api.lncldglobal.com',
          placeholder: "是時候展示真正的技術了",
          avatar: 'wavatar',
          recordIP: true,
          lang: 'zh-TW'
        },
        friendLink: [{
          logo: 'https://urloser404.github.io/hero.jpg',
          title: 'URLoser404',
          desc: "是在臺中高工時的學弟啦 妄想成為電神的肥宅",
          link: 'https://urloser404.github.io/'
        }, {
          logo: 'https://mr6915tri8513.github.io/home_page/avatar.png',
          title: 'Mr6915tri8513',
          desc: "是在臺中高工時的同學啦，應該算是朋友吧",
          link: 'https://mr6915tri8513.github.io/'
        }, {
          logo: 'https://docat0209.github.io/page.png',
          title: 'Docat0209',
          desc: "跟我一同奮戰過的選手",
          link: 'https://docat0209.github.io/'
        }, {
          logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbmKE_FCpSYHZJz0k_k1FwFI-GHXWaJTXymQ&usqp=CAU',
          title: 'Rick Astley',
          desc: "你知道規則的，我當然也知道～",
          link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        }],
      },
    },
    type: 'blog',
    blogConfig:{
      socialLinks: [{
        link: 'https://github.com/I-am-nothing',
        icon: 'reco-github'
      }, {
        link: 'https://www.linkedin.com/in/nothing-chang-374147227/',
        icon: 'reco-linkedin'
      }, {
        link: 'mailto:nothingchang1118@gmail.com',
        icon: 'reco-mail'
      }],
    },
    logo: '/hero.png',
    search: true,
    searchMaxSuggestions: 10,
    author: 'I-am-nothing',
    authorAvatar: '/hero2.png',
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