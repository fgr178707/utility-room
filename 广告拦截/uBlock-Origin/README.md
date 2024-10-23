### uBlock Origin 规则广告拦截

#### uBlock Origin下载地址
* [官网](https://ublockorigin.com/)
* [Microsoft Edge](https://microsoftedge.microsoft.com/addons/detail/ublock-origin/odfafepnkmbhccpbejgmiehpchacaeak)
* [google Chrome](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm)
* [Firefox](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/)
* [Opera](https://addons.opera.com/en/extensions/details/ublock/)
* [手动安装](https://github.com/gorhill/uBlock/releases)

#### AdGuard下载地址
* [官网](https://adguard.com/zh_cn/welcome.html)
* [Microsoft Edge](https://microsoftedge.microsoft.com/addons/detail/adguard-广告拦截器/pdffkfellgipmhklpdmokmckkkfcopbh)
* [Windows版的应用程序](https://download.adguard.com//d/24276/adguardInstaller.exe?source=page_zh_cn_welcome&exid=2cq2qk1kcitcww88s8coo4cko)
* [Mac版的应用程序](https://download.adguard.com//d/24276/AdGuardInstaller.dmg?source=page_zh_cn_welcome&exid=2cq2qk1kcitcww88s8coo4cko)
* [iOS版的应用程序](https://apps.apple.com/us/app/adguard-adblock-privacy/id1047223162)
* 安卓版的应用程序
  * [AppGallery](https://appgallery.huawei.com/#/app/C100864361) | [Mi Store](https://global.app.mi.com/details?id=com.adguard.android) | [Samsung Galaxy Store](https://galaxystore.samsung.com/detail/com.adguard.android)

#### Adblock Plus下载地址
* [官网](https://adblockplus.org/zh_CN/)
* [Microsoft Edge](https://microsoftedge.microsoft.com/addons/detail/adblock-plus-免费的广告拦截器/gmgoamodcdcjnbaobigkjelfplakmdhh)
* [google Chrome](https://chrome.google.com/webstore/detail/cfhdojbkjhnklbpkdaibdccddilifddb)
* [Firefox](https://eyeo.to/adblockplus/firefox_install/)
* [Safari](https://eyeo.to/adblockplus/macos_safari_install/)
* [Opera](https://eyeo.to/adblockplus/opera_install/)
*[YandexBrowser](https://chrome.google.com/webstore/detail/cfhdojbkjhnklbpkdaibdccddilifddb)







### 规则在线订阅
* anti-AD  | [规则地址](https://raw.githubusercontent.com/privacy-protection-tools/anti-AD/master/anti-ad-adguard.txt) | [仓库地址](https://github.com/privacy-protection-tools/anti-AD)
* halflife-list | [规则地址PC](https://cdn.jsdelivr.net/gh/sbwml/halflife-list@master/ad-pc.txt) | [规则地址移动端](https://cdn.jsdelivr.net/gh/sbwml/halflife-list@master/ad.txt) |[仓库地址](https://github.com/sbwml/halflife-list)
*  AWAvenue-Ads-Rule | [规则地址](https://raw.githubusercontent.com/TG-Twilight/AWAvenue-Ads-Rule/main/AWAvenue-Ads-Rule.txt) |[仓库地址](https://github.com/TG-Twilight/AWAvenue-Ads-Rule)

### 动态规则
* 设置方法
    1. uBlock Origin->设置->勾选我是高级用户
    2. 设置->自定义动态规则->临时规则->保存->提交


```
no-csp-reports: * true
no-large-media: behind-the-scene false
behind-the-scene * * noop
behind-the-scene * 1p-script noop
behind-the-scene * 3p noop
behind-the-scene * 3p-frame noop
behind-the-scene * 3p-script noop
behind-the-scene * image noop
behind-the-scene * inline-script noop
www.youtube.com * 3p block
www.youtube.com * 3p-frame block
www.youtube.com * 3p-script block
www.youtube.com fonts.googleapis.com * noop
www.youtube.com fonts.gstatic.com * noop
www.youtube.com googlevideo.com * noop
www.youtube.com i.ytimg.com * noop
www.youtube.com photos-ugc.l.googleusercontent.com * noop
www.youtube.com www.gstatic.com * noop
www.youtube.com youtube-ui.l.google.com * noop
www.youtube.com yt3.ggpht.com * noop
www.youtube.com yt3.googleusercontent.com * noop
```



### 静态规则
***优先选择动态规则***
* 设置方法
    1. 自定义静态规则->粘贴到下面输入栏->应用更改


```
! 2024-07-23 https://www.youtube.com
youtube.com##+js(set, yt.config_.openPopupConfig.supportedPopups.adBlockMessageViewModel, false)
youtube.com##+js(set, Object.prototype.adBlocksFound, 0)
youtube.com##+js(set, ytplayer.config.args.raw_player_response.adPlacements, [])
youtube.com##+js(set, Object.prototype.hasAllowedInstreamAd, true)
```

#### 配置文件
```JSON
{
  "timeStamp": 1723285646567,
  "version": "1.59.0",
  "userSettings": {
    "advancedUserEnabled": true,
    "externalLists": "https://cdn.jsdelivr.net/gh/sbwml/halflife-list@master/ad-pc.txt\nhttps://raw.githubusercontent.com/privacy-protection-tools/anti-AD/master/anti-ad-adguard.txt",
    "importedLists": [
      "https://cdn.jsdelivr.net/gh/sbwml/halflife-list@master/ad-pc.txt",
      "https://raw.githubusercontent.com/privacy-protection-tools/anti-AD/master/anti-ad-adguard.txt"
    ],
    "popupPanelSections": 31
  },
  "selectedFilterLists": [
    "user-filters",
    "ublock-filters",
    "ublock-badware",
    "ublock-privacy",
    "ublock-quick-fixes",
    "ublock-unbreak",
    "easylist",
    "easyprivacy",
    "urlhaus-1",
    "plowe-0",
    "CHN-0",
    "https://cdn.jsdelivr.net/gh/sbwml/halflife-list@master/ad-pc.txt",
    "https://raw.githubusercontent.com/privacy-protection-tools/anti-AD/master/anti-ad-adguard.txt"
  ],
  "hiddenSettings": {},
  "whitelist": [
    "chrome-extension-scheme",
    "moz-extension-scheme"
  ],
  "dynamicFilteringString": "behind-the-scene * * noop\nbehind-the-scene * inline-script noop\nbehind-the-scene * 1p-script noop\nbehind-the-scene * 3p-script noop\nbehind-the-scene * 3p-frame noop\nbehind-the-scene * image noop\nbehind-the-scene * 3p noop",
  "urlFilteringString": "",
  "hostnameSwitchesString": "no-large-media: behind-the-scene false",
  "userFilters": "! 2024-01-29 https://www.bilibili.com\nwww.bilibili.com##.adblock-tips\n\n! 2024-01-31 https://www.123pan.com\nwww.123pan.com##.mfy-main-layout__head\nwww.123pan.com##.banner_all_wrap\n\n! 2024-02-09 https://www.1688.com\nwww.1688.com##.active.loginInfo-section-bottom\n\n! 2024-02-11 https://docs.qq.com\ndocs.qq.com##.big-banner.desktop-banner-pc\n\n! 2024-02-16 https://www.jd.com\nwww.jd.com##.activity-top\n\n! 2024-03-10 https://tempmail.io\n||illicium.co/Content/html5/bf5dbd33-a2e4-4192-978c-b68d7abda1a3/INDX200_300.html$subdocument\ntempmail.io##.message__wrap--top.message__wrap\ntempmail.io##.container.message__controls-container > .illiciumItem\n\n! 2024-03-17 https://manhuapica.com\nmanhuapica.com##.is-initialized.is-overflow.is-active.splide--draggable.splide--ltr.splide--loop.mb-0.my-view-box.splide\n\n! 2024-03-25 https://gitee.com\n||foruda.gitee.com/images/1709709126448612018/14c37bed_8189591.png$image\ngitee.com##.people-image\n\n! 2024-03-26 https://pan.quark.cn\npan.quark.cn##.share-right-side-content.next-box\n\n\n! 2024-06-23 https://zh.xhamster3.com\nzh.xhamster3.com##.a78881f3._0026d60c._94fd87af.d4b031ca.a2e0865f\n\n! 2024-07-13 https://www.ghxi.com\nwww.ghxi.com##div:nth-of-type(7)\nwww.ghxi.com##div:nth-of-type(6)\n\n! 2024-07-23 https://www.youtube.com\n!youtube.com##+js(set, yt.config_.openPopupConfig.supportedPopups.adBlockMessageViewModel, false)\n!youtube.com##+js(set, Object.prototype.adBlocksFound, 0)\n!youtube.com##+js(set, ytplayer.config.args.raw_player_response.adPlacements, [])\n!youtube.com##+js(set, Object.prototype.hasAllowedInstreamAd, true)\n\n\n! 2024-07-20 https://115.com\n115.com##.btn-golden.btn-small.button\n115.com###js-ch-member-info > span\n\n! 2024-08-06 https://littleskin.cn\n||littleskin.cn/plugins/skinlib-ad/assets/img/*_detail.webp$image\nlittleskin.cn##.carousel-inner\n\n! 2024年8月10日 https://www.planetminecraft.com\nwww.planetminecraft.com##li.r-card.resource:nth-of-type(3)\nwww.planetminecraft.com##li.r-card.resource:nth-of-type(18)\nwww.planetminecraft.com##li.r-card.resource:nth-of-type(15)\nwww.planetminecraft.com##li.fill.r-card.resource:nth-of-type(6)\nwww.planetminecraft.com##.noBG.fill.r-card.resource\nwww.planetminecraft.com##li.page_card.r-card.resource:nth-of-type(27)\nwww.planetminecraft.com##li.page_card.r-card.resource:nth-of-type(33)\nwww.planetminecraft.com##.pad.r-card.resource"
}
```


