module.exports = {
  "title": "I-am-nothing",
  "description": "I believe I can fly ~ I believe I can touch the sky ~~~",
  "base": "/",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/hero.png"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Docs",
        "icon": "reco-message",
        "items": [
          {
            "text": "Nothing's resume",
            "link": "/docs/theme-reco/"
          }
        ]
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/I-am-nothing",
            "icon": "reco-github"
          },
          {
            "text": "Linkdin",
            "link": "https://www.linkedin.com/in/nothing-chang-374147227/",
            "icon": "reco-linkedin"
          },
          {
            "text": "Email",
            "link": "mailto:dps99119@gmail.com",
            "icon": "reco-mail"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "URLoser404",
        "desc": "URLoser404's personal website",
        "email": "b0925138932@gmail.com",
        "link": "https://urloser404.github.io/"
      },
      {
        "title": "Docat0209",
        "desc": "Docat0219's personal website",
        "email": "shane930209@gmail.com/",
        "link": "https://docat0209.github.io/"
      }
    ],
    "logo": "/hero.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "03/04 2022",
    "author": "I-am-nothing",
    "authorAvatar": "/hero2.png",
    "record": null,
    "startYear": "2022"
  },
  "markdown": {
    "lineNumbers": true
  }
}