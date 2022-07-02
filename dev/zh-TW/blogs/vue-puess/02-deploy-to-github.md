---
title: '[Vue-Press] ~ 02 部署至 Github Page'
date: 2022-07-01
categories: 
 - Vue-Press部落格
tags:
 - Github
cover: /vue-press/vue-press.jpeg
---

#### <i class="iconfont reco-other" style="color: rgb(66, 152, 245);"></i> [Github 源代碼](https://github.com/I-am-nothing/I-am-nothing.github.io)

&emsp; <Fa-CaretSquareLeft color="rgb(66, 152, 245)"/> [01 快速建置](/zh-TW/blogs/vue-puess/01-quick-build)<br/>
&emsp; <Fa-CaretSquareRight color="rgb(66, 152, 245)"/> [03 新增多國語言](/zh-TW/blogs/vue-puess/03-multiple-language)

## Github 

想必大家都知道這個東西吧 ww

這是個能放程式碼、部署靜態網頁的好地方

那廢話不多說，我們直接開始

## 在 Github 建立一個 Repository

在這裡提供兩種方法

### [Github Desktop](https://desktop.github.com/)

如果是新手的話推薦使用 Github Desktop，圖化的介面可以讓你一目了然，部署你的檔案

安裝好 Github Desktop 且登陸後按下左上角，新建一個專案 <Fa-ArrowDown/>

![](/vue-press/02/01.png)

名稱和描述依照你的想法填寫

記得路徑就是你的專案路徑

設定完後按下新建就可以了

### [Git](https://git-scm.com/downloads)

安裝 Git 且在 Github 網站新建專案後複製網址 <Fa-ArrowDown/>

![](/vue-press/02/03.png)

再來就直接打指令

```sh
git init
git config --global user.name "username"
git config --global user.email "email"
git clone "你的網址"
```


## 更改建置專案路徑

原本的放置靜態網頁預設路徑會在 "/dev/.vuepress/dist" 裡（自動生成）

由於我們有做一個資料夾給編譯好的靜態網頁

因此我們需要在 "/dev/.vuepress/config.js" 裡加入 dest 參數

```js {2}
module.exports = {
    dest: '../docs',
}
```

完成儲存完後後直接 <Fa-ArrowDown/>

```sh
yarn build
```

靜態網頁就生成好了

## 上傳程式碼

### Github Desktop

直接在左下角輸入概述然後 Commit 即可

### Git

```sh
git add .
git commit -m "上傳描述"
git push origin master
```


## 部署 Github Page

到 Github 登陸後打開你的專案，點選設定 <Fa-ArrowRight/> 頁面 <Fa-ArrowDown/>

![](/vue-press/02/02.png)

第三步將目錄換成 "/docs" (原本是 /root) 等待大約1分鐘就完成了

下一章： [03 新增多國語言](/zh-TW/blogs/vue-puess/03-multiple-language)

## 回顧

### 這一章我們完成了 <Fa-ArrowDown/>

* [使用 Github 或 Git](/zh-TW/blogs/vue-puess/02-deploy-to-github.html#在-github-建立一個-repository)
* [部署 Github Page](/zh-TW/blogs/vue-puess/02-deploy-to-github.html#部署-github-page)





