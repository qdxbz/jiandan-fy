//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    this.globalData.curLang = wx.getStorageSync('curLang') || this.globalData.langList[0]
  },
  globalData: {
    curLang: {},
    langList: [
      {
        'chs': '英文',
        "lang": 'en',
        "index": 0
      },
      {
        'chs': '中文',
        'lang': 'zh',
        "index": 1
      },
      {
        'chs': '日语',
        'lang': 'jp',
        "index": 2
      },
      {
        'chs': '韩语',
        'lang': 'kor',
        "index": 3
      },
      {
        'chs': '法语',
        'lang': 'fra',
        "index": 4
      },
      {
        'chs': '西班牙语',
        'lang': 'spa',
        "index": 5
      },
      {
        'chs': '阿拉伯语',
        'lang': 'ara',
        "index": 6
      },
      {
        'chs': '泰语',
        'lang': 'th',
        "index": 7
      },
      {
        'chs': '阿拉伯语',
        'lang': 'ara',
        "index": 8
      },
      {
        'chs': '俄语',
        'lang': 'ru',
        "index": 9
      },
      {
        'chs': '葡萄牙语',
        'lang': 'pt',
        "index": 10
      },
      {
        'chs': '德语',
        'lang': 'de',
        "index": 11
      },
      {
        'chs': '意大利语',
        'lang': 'it',
        "index": 12
      },
      {
        'chs': '希腊语',
        'lang': 'el',
        "index": 13
      },
      {
        'chs': '荷兰语',
        'lang': 'nl',
        "index": 14
      },
      {
        'chs': '波兰语',
        'lang': 'pl',
        "index": 15
      },
      {
        'chs': '保加利亚语',
        'lang': 'bul',
        "index": 16
      },
      {
        'chs': '爱沙尼亚语',
        'lang': 'est',
        "index": 17
      },
      {
        'chs': '丹麦语',
        'lang': 'dan',
        "index": 18
      },
      {
        'chs': '西班牙语',
        'lang': 'spa',
        "index": 19
      },
      {
        'chs': '芬兰语',
        'lang': 'fin',
        "index": 20
      },
      {
        'chs': '捷克语',
        'lang': 'cs',
        "index": 21
      },
      {
        'chs': '罗马尼亚语',
        'lang': 'rom',
        "index": 22
      },
      {
        'chs': '斯洛文尼亚语',
        'lang': 'slo',
        "index": 23
      },
      {
        'chs': '瑞典语',
        'lang': 'swe',
        "index": 24
      },
      {
        'chs': '匈牙利语',
        'lang': 'hu',
        "index": 25
      },
      {
        'chs': '越南语',
        'lang': 'vie',
        "index": 26
      }
    ]
  }
})