---
title: '[Vue-Press] ~ 05 修正navbar選項無法顯示與首頁顯示兩種語言問題'
date: 2022-07-03
categories: 
 - Vue-Press部落格
cover: /vue-press/vue-press.jpeg
---

#### <i class="iconfont reco-other" style="color: rgb(66, 152, 245);"></i> [Github 源代碼](https://github.com/I-am-nothing/I-am-nothing.github.io)

&emsp; <Fa-CaretSquareLeft color="rgb(66, 152, 245)"/> [04 爆改程式碼注意事項](/zh-TW/blogs/vue-puess/04-exploding-modify-codes.html)<br/>

## 時間軸、標籤、類別無法顯示

### 概述

這三個遠項是在 /dev/.vuepress/config.js 裡的 bolgConfig 裡設定的

但加入了多國語言後這三個選項就不會檢視了

放在主題設置裡也無效

### 解決辦法

在 /dev/.vuepress/theme/index.js 裡 <Fa-ArrowDown/>

``` js {27-47}
module.exports = (options, ctx) => ({
  plugins: [
    ['@vuepress/plugin-blog', {
      permalink: '/:regular',
      frontmatters: [
        {
          id: 'tags',
          keys: ['tags'],
          path: '/tag/',
          layout: 'Tags',
          scopeLayout: 'Tag'
        },
        {
          id: 'categories',
          keys: ['categories'],
          path: '/categories/',
          layout: 'Categories',
          scopeLayout: 'Category'
        },
        {
          id: 'timeline',
          keys: ['timeline'],
          path: '/timeline/',
          layout: 'TimeLines',
          scopeLayout: 'TimeLine'
        },
        {
          id: 'tags',
          keys: ['tags'],
          path: '/zh-TW/tag/',
          layout: 'Tags',
          scopeLayout: 'Tag'
        },
        {
          id: 'categories',
          keys: ['categories'],
          path: '/zh-TW/categories/',
          layout: 'Categories',
          scopeLayout: 'Category'
        },
        {
          id: 'timeline',
          keys: ['timeline'],
          path: '/zh-TW/timeline/',
          layout: 'TimeLines',
          scopeLayout: 'TimeLine'
        }
      ]
    }],
  ]
})
```

在 6 到 26 行是原本就有的設定屬性

因此我們在底下加上自己語言的網址路徑

向我的是繁體中文

在 27 到 42 行的路徑就是 zh-TW 開頭

::: danger

雖然我們可以在 /dev/node_modules/vuepress-theme-reco/index.js 直接爆改程式碼

但只要需要安裝其他插件進行 "yarn add module" 時

凡事有經過修改的文檔都會被 ***重置***

詳情請至「 [04 爆改程式碼注意事項](/zh-TW/blogs/vue-puess/04-exploding-modify-codes.html) 」
:::

## 首頁會顯示兩種語言

### 概述

### 解決辦法
