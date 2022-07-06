---
title: '[Vue-Press] ~ 04 爆改程式碼注意事項'
date: 2022-07-03
categories: 
 - Vue-Press部落格
cover: /vue-press/vue-press.jpeg
---

#### <i class="iconfont reco-other" style="color: rgb(66, 152, 245);"></i> [Github 源代碼](https://github.com/I-am-nothing/I-am-nothing.github.io)

&emsp; <Fa-CaretSquareLeft color="rgb(66, 152, 245)"/> [03 新增多國語言](/zh-TW/blogs/vue-puess/03-multiple-language.html)<br/>
&emsp; <Fa-CaretSquareRight color="rgb(66, 152, 245)"/> [05 修正navbar顯示與連結失效問題](/zh-TW/blogs/vue-puess/05-fixing-navbar-and-invalid-link.html)

## Explosion!!!

![](/vue-press/04/01.gif)

## 注意

我們原本安裝的插件是放在 "/dev/node_modules" 裡

::: danger

雖然我們可以在這裡只接爆改程式碼

但只要需要安裝其他插件進行 "yarn add module" 時

凡事有經過修改的文檔都會被 ***重置***

:::

## 如何不被重置

很簡單，讓主題跟著專案走

將 /dev/node_modules/vuepress-theme-reco 這個資料夾放置到 <Fa-ArrowDown/>

``` {6}
專案名稱
 ├── dev
 │    ├── .vuepress 
 │    │    ├── public (圖片放置位置)
 │    │    │    └── 圖片
 │    │    ├── vuepress-theme-reco (這裡，最後把檔案名稱改成 "theme")
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

這樣就可以了，之後要改程式碼就在這個資料夾裡改喔

## 變更主題顏色

容許我順便講個變更主題色

我有將原本的主題色（綠色）改成藍色

修改的方式很簡單
 
創建一個 /dev/.vuepress/styles/palette.styl 檔案 <Fa-ArrowDown/>

``` {8}
專案名稱
 ├── dev
 │    ├── .vuepress 
 │    │    ├── public (圖片放置位置)
 │    │    │    └── 圖片
 │    │    ├── theme
 │    │    ├── styles
 │    │    │    └── palette.styl
 │    │    └── config.js (專案版型設定) 
```

檔案內容如下 <Fa-ArrowDown/>

```
// 預設值
$accentColor = #3eaf7c              // 主题顏色
$textColor = #2c3e50                // 文字顏色
$borderColor = #eaecef              // 邊框顏色
$codeBgColor = #282c34              // 程式碼區塊背景色
$backgroundColor = #ffffff          // 懸浮區塊背景色
```

好，下一章：[05 修正navbar顯示與連結失效問題](/zh-TW/blogs/vue-puess/05-fixing-navbar-and-invalid-link.html)

## 回顧

### 這一章我們完成了 <Fa-ArrowDown/>

* [讓主題跟著專案走](/zh-TW/blogs/vue-puess/04-exploding-modify-codes.html#如何不被重置)
* [變更主題顏色](/zh-TW/blogs/vue-puess/04-exploding-modify-codes.html#變更主題顏色)

