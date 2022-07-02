---
title: '[Vue-Press] ~ 03 新增多國語言'
date: 2022-07-02
categories: 
 - Vue-Press部落格
tags:
 - 多國語言
cover: /vue-press/vue-press.jpeg
publish: false
---

#### <i class="iconfont reco-other" style="color: rgb(66, 152, 245);"></i> [Github 源代碼](https://github.com/I-am-nothing/I-am-nothing.github.io)

&emsp; <Fa-CaretSquareLeft color="rgb(66, 152, 245)"/> [02 部署至 Github Page](/zh-TW/blogs/vue-puess/02-deploy-to-github)<br/>
&emsp; <Fa-CaretSquareRight color="rgb(66, 152, 245)"/> [04 爆改程式碼注意事項](/zh-TW/blogs/vue-puess/04-exploding-modify-codes)

## 為何要有多國語言

有其它語言不只能讓使用不同語言的人能閱讀

可以透過之後增加的留言功能一起交流文化以及技術

更可以讓自己練習其他語言的文章撰寫

有利無弊

## 如何新增

官網文檔在[「此」](https://vuepress-theme-reco.recoluan.com/views/1.x/local.html)

### 設定多國語言參數

我們需要在 "/dev/.vuepress/config.js" 裡加入 locales 參數 <Fa-ArrowDown/>

```js {4,9}
module.exports = {
    locales: {
        '/': { // 網頁路徑
            lang: 'en-US', // 支援語言
            title: 'I-am-nothing',
            description: "I believe I can't touch the sky ~~~",
        },
        '/zh-TW/': { // 網頁路徑
            lang: 'zh-TW',
            title: 'I-am-nothing',
            description: '我相信我碰不到天空～～～'
        }
    },
}
```

以下為支援語言的代碼 <Fa-ArrowDown/>

| 名稱 | 語言代碼 |
| ---- |:-------|
| 簡中 | zh-CN、zh-SG |
| 繁中 | zh-HK、zh-MO、zh-TW |
| 日文 | ja-JP |
| 韓文 | ko-KR |
| 英文 | en-US 及其他 |

如果你覺得主題內預設的文字不符合你的喜好，你可以這樣修改 <Fa-ArrowDown/>

```js {17-30,33-46}
module.exports = {
    locales: {
        '/': { // 網頁路徑
            lang: 'en-US', // 支援語言
            title: 'I-am-nothing',
            description: "I believe I can't touch the sky ~~~",
        },
        '/zh-TW/': { // 網頁路徑
            lang: 'zh-TW',
            title: 'I-am-nothing',
            description: '我相信我碰不到天空～～～'
        }
    },
    themeConfig: {
        locales: {
            '/': {
                recoLocales: {
                    homeBlog: {
                        article: 'Article',
                        tag: 'Tag',
                        category: 'Category',
                        friendLink: 'Friend Link'
                    },
                    pagation: {
                        prev: 'Prev',
                        next: 'Next',
                        go: 'Go',
                        jump: 'Jump To'
                    }
                }
            }
            '/zh-TW': {
                recoLocales: {
                    homeBlog: {
                        article: '美文', // 預設 文章
                        tag: '標示', // 預設 標籤
                        category: '分類', // 預設 類別
                        friendLink: '友鏈' // 預設 友情連結
                    },
                    pagation: {
                        prev: '上一頁',
                        next: '下一頁',
                        go: '前往',
                        jump: '跳轉至'
                    }
                }
            }
        }
    }
}
```

### 檔案架構

記得要做兩種語言的檔案，檔案放置如下 <Fa-ArrowDown/>

``` {17-27}
專案名稱
 ├── dev
 │    ├── .vuepress 
 │    │    ├── public (圖片放置位置)
 │    │    │    └── 圖片
 │    │    └── config.js (專案版型設定) 
 │    ├── blogs  (分類)
 │    │    ├── 分類名稱
 │    │    │    └── 文章
 │    │    └── 分類名稱
 │    │         └── 文章
 │    ├── docs (文檔)
 │    │    ├── 文檔名稱
 │    │    │    └── 文章
 │    │    └── 文檔名稱
 │    │         └── 文章
 │    ├── zh-TW
 │    │    ├── blogs  (分類)
 │    │    │    ├── 分類名稱
 │    │    │    │    └── 文章
 │    │    │    └── 分類名稱
 │    │    │         └── 文章
 │    │    └── docs (文檔)
 │    │         ├── 文檔名稱
 │    │         │    └── 文章
 │    │         └── 文檔名稱
 │    │              └── 文章
 │    ├── node_modules (編譯檔案、插件)
 │    │    └── 編譯檔案、插件
 │    ├── README.md  
 │    ├── package.json
 │    ├── yarn.lock (勿動)
 │    └── .gitignore
 └── docs
      └── 生成靜態網頁位置
```

放在外層的就是給預設目錄的文檔

像我預設是英文的，要使用中文要給中文一個資料夾

資料夾名字就是 語言的lang

### 設定多國語言網頁路徑

再來把原本在 themeConfig 需要多國語言的部分分開 <Fa-ArrowDown/>

```js {5-32,35-63,66-78}
module.exports = {
    themeConfig: {
        locales: {
            '/': {
                nav: [{
                    text: 'Home',
                    link: '/',
                    icon: 'reco-home'
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
                }],
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
                        }]
                    }]
                },
            },
            '/zh-TW/': {
                nav: [{
                    text: '首頁',
                    link: '/zh-TW/',
                    icon: 'reco-home'
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
                }],
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
                        }]
                    }]
                },
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
    },
}
```

66-78 行這裡由於不需用設置多國語言，所以放置在 lacales 外面

根據語言換上該語言的文字與該語言的網址

這樣基本上就設定完成了

如果你跟著做的話，肯定會發現一些問題

經過我研究過後，這是一個大問題啊

在後面文章中我會詳細的描述並解決這些問題

解決這些問題必須要爆改程式碼

因此下一章我會講爆改前的注意事項

下一章：[04 爆改程式碼注意事項](/zh-TW/blogs/vue-puess/04-exploding-modify-codes)

## 回顧

### 這一章我們完成了 <Fa-ArrowDown/>

* [設定多國語言](/zh-TW/blogs/vue-puess/03-multiple-language.html#設定多國語言參數)
* [了解多國語言的檔案架構](/zh-TW/blogs/vue-puess/03-multiple-language.html#檔案架構)
