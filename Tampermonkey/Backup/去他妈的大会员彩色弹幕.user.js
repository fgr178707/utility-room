// ==UserScript==
// @name         去他妈的大会员彩色弹幕
// @description  将大会员彩色弹幕改回默认颜色或彻底屏蔽
// @author       qianxu
// @version      3.0.3
// @match        https://www.bilibili.com/video/*
// @match        https://www.bilibili.com/list/*
// @match        https://www.bilibili.com/bangumi/play/*
// @icon         https://www.bilibili.com/favicon.ico
// @namespace    https://greasyfork.org/scripts/467808
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_registerMenuCommand
// @downloadURL https://update.greasyfork.org/scripts/467808/%E5%8E%BB%E4%BB%96%E5%A6%88%E7%9A%84%E5%A4%A7%E4%BC%9A%E5%91%98%E5%BD%A9%E8%89%B2%E5%BC%B9%E5%B9%95.user.js
// @updateURL https://update.greasyfork.org/scripts/467808/%E5%8E%BB%E4%BB%96%E5%A6%88%E7%9A%84%E5%A4%A7%E4%BC%9A%E5%91%98%E5%BD%A9%E8%89%B2%E5%BC%B9%E5%B9%95.meta.js
// ==/UserScript==

;(function () {
  'use strict'

  // 读取配置
  const blockVipDm = GM_getValue('blockVipDm') // 是否彻底屏蔽大会员彩色弹幕
  const playerProfile = localStorage.getItem('bpx_player_profile') // 播放器配置

  // 注册菜单
  GM_registerMenuCommand(`${blockVipDm ? '✔️' : '❌'} 彻底屏蔽大会员彩色弹幕`, () => {
    if (blockVipDm) {
      GM_deleteValue('blockVipDm')
    } else {
      GM_setValue('blockVipDm', true)
    }
    location.reload()
  })

  // 配置样式
  let strokeType = 0 // 描边类型，默认为重墨

  // 有播放器配置则则读取用户设置的描边类型
  if (playerProfile) {
    strokeType = JSON.parse(playerProfile).dmSetting.fontborder
  }

  let textShadow = '' // 文本阴影

  // 根据描边类型设置文本阴影
  switch (strokeType) {
    case 1: // 描边
      textShadow = '0 0 1px #000,0 0 1px #000,0 0 1px #000'
      break
    case 2: // 45° 投影
      textShadow = '1px 1px 2px #000,0 0 1px #000'
      break
    default: // 重墨
      textShadow = '1px 0 1px #000,0 1px 1px #000,0 -1px 1px #000,-1px 0 1px #000'
  }

  // 创建样式元素
  const styleElement = document.createElement('style')

  // 根据配置设置样式内容
  if (blockVipDm) {
    // 彻底屏蔽
    styleElement.innerHTML = '.bili-dm-vip,.bili-danmaku-x-dm-vip{display:none}'
  } else {
    // 改回默认颜色
    styleElement.innerHTML = `.bili-dm,.bili-danmaku-x-dm{--textShadow:${textShadow}}.bili-dm-vip,.bili-danmaku-x-dm-vip{background-image:none !important;text-shadow:inherit !important}`
  }

  // 将样式元素添加到页面中
  document.body.appendChild(styleElement)
})()
