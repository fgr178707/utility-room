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
* [YandexBrowser](https://chrome.google.com/webstore/detail/cfhdojbkjhnklbpkdaibdccddilifddb)







### 规则在线订阅
* anti-AD  | [规则地址](https://raw.githubusercontent.com/privacy-protection-tools/anti-AD/master/anti-ad-adguard.txt) | [仓库地址](https://github.com/privacy-protection-tools/anti-AD)
* halflife-list | [规则地址PC](https://cdn.jsdelivr.net/gh/sbwml/halflife-list@master/ad-pc.txt) | [规则地址移动端](https://cdn.jsdelivr.net/gh/sbwml/halflife-list@master/ad.txt) |[仓库地址](https://github.com/sbwml/halflife-list)
*  AWAvenue-Ads-Rule | [规则地址](https://raw.githubusercontent.com/TG-Twilight/AWAvenue-Ads-Rule/main/AWAvenue-Ads-Rule.txt) |[仓库地址](https://github.com/TG-Twilight/AWAvenue-Ads-Rule)

<br>

### twitch规则
* 设置方法
    1. 自定义静态规则->粘贴到下面输入栏->应用更改
    ```
    twitch.tv##+js(twitch-videoad)
    ```
    2. 设置->勾选 我是高级用户 ->点击旁边的齿轮
    ```
    userResourcesLocation unset
    替换
    userResourcesLocation https://github.com/xi-gua-cell/twitch/raw/refs/heads/main/1.js
    ```



<br>
<details>
<summary><code><strong>YouTube规则 点击展开</strong></code></summary>

### 静态规则
***优先选择动态规则***
* 设置方法
    1. 自定义静态规则->粘贴到下面输入栏->应用更改
#### 自己反正是一股脑全塞进到了静态里面 

```
youtube.com##+js(set, yt.config_.openPopupConfig.supportedPopups.adBlockMessageViewModel, false)
youtube.com##+js(set, Object.prototype.adBlocksFound, 0)
youtube.com##+js(set, ytplayer.config.args.raw_player_response.adPlacements, [])
youtube.com##+js(set, Object.prototype.hasAllowedInstreamAd, true)
gameapps.hk##.pc-header-video > a[class^="top-ad-"] + .youtube-container
gameapps.hk#$?#.pc-header-video > a[class^="top-ad-"] + .youtube-container { remove: true; }
m.youtube.com##.video-ads.ytp-ad-module
www.youtube.com##.ytlr-watch-default__ad-badge-for-tvae
www.youtube.com##ytlr-ad-skip-or-preview
www.youtube.com##ytlr-banner-cta-renderer
youtube.com##.video-ads .ytp-ad-player-overlay, .video-ads .ytp-ad-player-overlay-layout
youtube.com##AD-SLOT-RENDERER
youtube.com##div #main-container.style-scope.ytd-promoted-video-renderer
youtube.com##div #player-ads.style-scope.ytd-watch-flexy
youtube.com##div #root.style-scope.ytd-display-ad-renderer.yt-simple-endpoint
youtube.com##div #sparkles-container.style-scope.ytd-promoted-sparkles-web-renderer
youtube.com##ytd-engagement-panel-section-list-renderer[target-id^="engagement-panel-ads"]
||metrics.cbc.youtube.mercedes-benz.com^
||smetrics.cbc.youtube.mercedes-benz.com^
||ads.youtube.com^
||fcmatch.youtube.com^
||youtubecenter.net^
$removeparam=feature,domain=youtube.com|youtu.be
$removeparam=gclid,domain=youtube.com|youtu.be
$removeparam=kw,domain=youtube.com|youtu.be
$removeparam=si,domain=youtube.com|youtu.be
ome.com|github.io|google.com|googleapis.com|googletagmanager.com|gstatic.com|jquery.com|jsdelivr.net|jwpcdn.com|jwplatform.com|polyfill.io|recaptcha.net|shrink.pe|twitter.com|ulogin.ru|unpkg.com|userapi.com|vidazoo.com|vk.com|yastatic.net|ytimg.com|zencdn.net|youtube.com|cackle.me|googleoptimize.com|vuukle.com|chatango.com|twimg.com|google-analytics.com|hcaptcha.com|raincaptcha.com|media-imdb.com|blogger.com|hwcdn.net|instagram.com|wp.com|fastcomments.com|plyr.io|cloudflare.net|rabbitstream.net|x.com,_____,domain=mxdm.xyz
e.org|techbargains.com|tempe12.com|theblaze.com|thegrindstone.com|thevine.com.au|theweek.com|threatfire.com|timberland.com|tomshardware.com|tube8.com|tvunetworks.com|tweetgrid.com|umbro.com|videochart.net|weeworld.com|wonka.com|xda-developers.com|yellow.co.nz|youtube.com|zoo.org.au
@@||pagead2.googlesyndication.com/pagead/js/r*/r*/show_ads_impl.js$script,domain=youtubeproxy.info
@@||pagead2.googlesyndication.com/pagead/show_ads.js$script,domain=youtubeproxy.info
@@||s.youtube.com/api/stats/playback?
@@||youtube.com/signin?$removeparam
email.lc.youtubepathtoamillion.com$image
email.youtubestorm.com$image
email.youtubeviews.co.uk$image
||fcmatch.youtube.com/pixel
||lenovo.com/_ui/desktop/common/js/common/youtubeVideoAnalytic.js
||youtube-nocookie.com/api/stats/atr?
||youtube-nocookie.com/api/stats/delayplay?
||youtube-nocookie.com/api/stats/qoe?
||youtube-nocookie.com/gen_204?
||youtube-nocookie.com/ptracking?
||youtube-nocookie.com/robots.txt?
||youtube-nocookie.com/youtubei/v1/log_event?
||youtube.com/api/stats/ads?
||youtube.com/api/stats/atr?
||youtube.com/api/stats/delayplay?
||youtube.com/api/stats/qoe?
||youtube.com/csi_204?
||youtube.com/embed/wqLWTeNBEEQ?
||youtube.com/gen_204
||youtube.com/get_video?
||youtube.com/iframe_api$domain=nownews.com
||youtube.com/pcs/activeview?
||youtube.com/pcs/activeview?xai=
||youtube.com/player_204?
||youtube.com/ptracking?
||youtube.com/set_awesome?
||youtube.com/youtubei/v1/log_event?
||youtube.googleapis.com/youtubei/v1/log_event?
||youtubee.top^
||youtubekids.com/api/stats/ads?
||youtubekids.com/api/stats/qoe?
||youtubekids.com/ptracking?
||youtubekids.com/youtubei/v1/log_event?
Youtube
youtube.com###contents>ytd-search-pyv-renderer
youtube.com###video-masthead
youtube.com###masthead-ad
m.youtube.com###koya_child_6
!m.youtube.com##._menb>._mab:nth-child(1)
||youtube.com/*=adunit&
||youtube.com/*&yt_ad
||youtube.com/get_midroll_info?
_reklama_$domain=~youtube.com
ads.google.com,youtube.com#@#.video-ads
||youtube.local^
||youtube.com/embed/C-iDzdvIg1Y$domain=biznews.com
||googlesyndication.com^$domain=blogto.com|youtube.com
||youtube.com/pagead/
t|upbam.org|upload-4ever.com|upload.do|uproxy.to|upstream.to|uqload.co|uqload.io|userscloud.com|v-o-e-unblock.com|vidbam.org|vido.lol|vidshar.org|vidsrc.me|vidsrc.stream|vipleague.im|vipleague.st|voe-unblock.net|voe.sx|vudeo.io|vudeo.net|vumoo.to|yesmovies.mn|youtube4kdownloader.com
/^https?:\/\/[0-9a-z]{8,}\.xyz\/.*/$third-party,xmlhttprequest,domain=1link.club|2embed.to|apiyoutube.cc|bestmp3converter.com|clicknupload.red|clicknupload.to|daddyhd.com|dood.wf|lulustream.com|mp4upload.com|poscitech.com|sportcast.life|streamhub.to|streamvid.net|tokybook.com|tvshows88.live|uqload.io
@@||youtube.com/get_video_info?$xmlhttprequest,domain=music.youtube.com|tv.youtube.com
||m.youtube.com/get_midroll_$domain=youtube.com
||www.youtube.com/get_midroll_$domain=youtube.com
||youtube.com/get_video_info?*adunit$~third-party
.co|upstream.to|upvid.biz|uqload.com|userload.co|vanfem.com|vgfplay.com|vidcloud9.com|vidlox.me|viewsb.com|vivo.sx|voe-unblock.com|voe-unblock.net|voe.sx|voeunblock1.com|voeunblock2.com|voiranime.com|watchsb.com|welovemanga.one|wiztube.xyz|wootly.ch|y2mate.is|youtubedownloader.sh|ytmp3.cc|ytmp3.sh
pleague.pm|viprow.nu|vipstand.pm|voe-un-block.com|voe-unblock.com|voe.sx|voeun-block.net|voeunbl0ck.com|voeunblck.com|voeunblk.com|voeunblock3.com|vumooo.vip|watchserieshd.tv|watchseriesstream.com|xmovies8.fun|xn--tream2watch-i9d.com|yesmovies.mn|youflix.site|youtube4kdownloader.com|ytanime.tv|yts-subs.com
returnyoutubedislike.com###top-donors
ssyoutube.com##.b-widget-left
saltwire.com##.youtube_article_ad
nsfwyoutube.com##img[src*="data"]
youtube.com###player-ads
youtube.com###shorts-inner-container > .ytd-shorts:has(> .ytd-reel-video-renderer > ytd-ad-slot-renderer)
youtube.com##.YtdShortsSuggestedActionStaticHostContainer
youtube.com##.ytd-merch-shelf-renderer
www.youtube.com##.ytp-featured-product
youtube.com##.ytp-suggested-action > button.ytp-suggested-action-badge
m.youtube.com##lazy-list > ad-slot-renderer
youtube.com##ytd-ad-slot-renderer
youtube.com##ytd-rich-item-renderer:has(> #content > ytd-ad-slot-renderer)
youtube.com##ytd-search-pyv-renderer
m.youtube.com##ytm-companion-slot[data-content-type] > ytm-companion-ad-renderer
m.youtube.com##ytm-rich-item-renderer > ad-slot-renderer
youtubelike.com###header-top
youtubelike.com##.bottom-thumbs
youtubelike.com##.bottom-top
xxxonxxx.com,youtubelike.com##.gallery-thumbs
@@||music.youtube.com^$generichide
@@||tv.youtube.com^$generichide
@@||www.youtube.com^$generichide
/youtubeVideoAnalytic.js
```
</details>