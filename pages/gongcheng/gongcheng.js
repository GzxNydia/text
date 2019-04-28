// pages/gongcheng/gongcheng.js
Page({
  data: {
    Imgs: ["http://www.kj-hk.cn/web_upfile/watch_pic/121129043626_v49tjsbjdjw8.jpg", "http://www.kj-hk.cn/web_upfile/watch_pic/121129043147_84csogug7gdg.jpg", "http://www.kj-hk.cn/web_upfile/watch_pic/121129043946_dgbi812bwgz0.jpg", "http://www.kj-hk.cn/web_upfile/watch_pic/121129043248_o777odu7h97g.jpg"],
    autoplay: true,
    interval: 5000,
    duration: 1000,
    circular: true,
    messageList: [
      {
        id: 1,
        name: '案例1',
        imgUrl: 'http://www.kj-hk.cn/web_upfile/watch_pic/121202025011_apeo51z06wef.jpg'
      },
      {
        id: 2,
        name: '案例2',
        imgUrl: 'http://www.kj-hk.cn/web_upfile/watch_pic/121202025743_553aemc1bggp.jpg'
      },
      {
        id: 3,
        name: '案例3',
        imgUrl: 'http://www.kj-hk.cn/web_upfile/watch_pic/121202030020_2653rkx3rsge.jpg'
      },
      {
        id: 4,
        name: '案例4',
        imgUrl: 'http://www.kj-hk.cn/web_upfile/watch_pic/121202030245_su2p9r556p9r.jpg'
      },
      {
        id: 5,
        name: '案例5',
        imgUrl: 'http://www.kj-hk.cn/web_upfile/watch_pic/121202030450_odwcp5n7nxgr.jpg'
      },
      {
        id: 6,
        name: '案例6',
        imgUrl: 'http://www.kj-hk.cn/web_upfile/watch_pic/121202030450_odwcp5n7nxgr.jpg'
      }
    ]
  },
  goDetail(e) {
    wx.navigateTo({
      url: '../gcDetail/gcDetail?id=' + e.currentTarget.dataset.id,
    })
  },
})