---
title: '[Vue-Press] ~ 01 快速建置'
date: 2022-06-26
categories: 
 - Vue-Press部落格
cover: /vue-press/vue-press.jpeg
---

## 主題

在看到學弟使用以及網路上有許多透過 [vuepress-theme-reco](https://vuepress-theme-reco.recoluan.com/)架設或改造的作品

因此我也使用 [此](https://vuepress-theme-reco.recoluan.com/)主題來架設

## 快速建置

首先需要有 [yarn](https://yarnpkg.com/) 或是 npm [npm](https://www.npmjs.com/) 套件管理器

個人偏好以及官網上建議使用 yarn

因此以下皆使用 yarn 來安裝與執行套件

### 安裝 yarn

* Windows <Fa-ArrowRight/> [Download Installer](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)

* Mac <Fa-ArrowDown/>

```sh
brew install yarn
```

### 導入主題

由於之後要把這個部署到 Github Page 上，所以建議把專案結構做成 <Fa-ArrowDown/>

```
├── dev
│   └── 攥寫部落格的位置
└── docs
    └── 生成靜態網頁位置
```

接著開啟 Command 或 Terminal 將路徑指到 dev 下 <Fa-ArrowDown/>

```sh
yarn init 

yarn global add @vuepress-reco/theme-cli@1.0.7

theme-cli init

yarn add vuepress
```

yarn init 時只需要一直按 Enter 就好，或是根據它所要求的打上去

在 theme-cli init 時，要輸入一些參數

::: tip
建新資料夾： 不用(n)

專案標題： 自己決定

專案描述： 自己決定

專案作者： 你的匿名
:::
::: warning
選擇版本： 選blog
:::

由於之前有測試過2代的版本，那時還不是很穩定，因此建議選擇blog(1代)這個版本

最後 <Fa-ArrowDown/>

```sh
yarn dev
```
大功告成，到這裡可以先跟著[官網文檔](https://vuepress-theme-reco.recoluan.com/views/1.x/)來摸索喔，把圖片、連結...先改成自己想要的

下一章： [新增多國語言](/)

## 回顧

### 這一章我們完成了 <Fa-ArrowDown/>

* [快速建置 vuepress-theme-reco 主題的 vuepress 專案](/zh-TW/blogs/vue-puess/01-quick-build.html#快速建置)



