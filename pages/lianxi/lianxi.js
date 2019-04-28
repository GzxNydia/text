// pages/lianxi/lianxi.js
Page({
  data: {
    img: 'http://www.kj-hk.cn/web_upfile/watch_pic/121129043626_v49tjsbjdjw8.jpg',
    number: '12345678909',
    curIndex: 0,
  },
  onLoad: function (options) {

  },
  imgShow () {
    wx.previewImage({
      current: this.data.img,
      urls: [this.data.img] 
    })
  },
  bindTap(e) {
    const index = parseInt(e.currentTarget.dataset.index);
    this.setData({
      curIndex: index
    })
  },
  phoneCall(e){
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.phone,
      success () {},
      fail () {}
    })
  }
})