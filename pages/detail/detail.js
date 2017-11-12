'use strict';

import util from '../../utils/index.js';
import config from '../../utils/config.js';

// WxParse HtmlFormater 用来解析content文本为小程序视图


// 把html转为标准安全的格式

let app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /*
    * 函数 `onLoad` 会在页面初始化时候加载运行，其内部的 `option` 是路由跳转过来后的参数对象。
    * 我们从 `option` 中解析出文章参数 `contendId`，然后通过调用 `util` 中封装好的 `request` 函数来获取 `mock` 数据。 
    */

    let id = option.contentId || 0;
    this.init(id);
  },

  init (contentId) {
    if (contentId) {
      this.requestDetail(contentId)
        .then(data => {
          util.log(data);
        })
    }
  },

  requestDetail (contentId) {
    return util.request({
      url: 'detail',
      mock: true,
      data: {
        source: 1
      }
    })
    .then(res => {
      util.log(res);
    })
  }
})