// pages/news/news.js
Page({
  data: {
    Imgs: ["http://www.kj-hk.cn/web_upfile/watch_pic/121129043626_v49tjsbjdjw8.jpg", "http://www.kj-hk.cn/web_upfile/watch_pic/121129043147_84csogug7gdg.jpg", "http://www.kj-hk.cn/web_upfile/watch_pic/121129043946_dgbi812bwgz0.jpg", "http://www.kj-hk.cn/web_upfile/watch_pic/121129043248_o777odu7h97g.jpg"],
    autoplay: true,
    interval: 5000,
    duration: 1000,
    circular: true,
    newList: [
      {
        id: 1,
        time: '3',
        time2: '2019年/3',
        title: '本公司产品荣获一等奖',
        content: '热烈庆祝本公司产品荣获一等奖，新华社2019'
      },
      {
        id: 2,
        time: '3',
        time2: '2019年/3',
        title: '移动隔断应该如何进行保养与使用？',
        content: ' 移动隔断是一种根据需要随时把大空间分割成小空间或把小空间连成大空间、具有一般墙体功能的活动墙，独立空间区域，能起一厅多能，一房多用的作用。活动的运用在现代酒店造型装修中具有至关重要的作用。研究并掌握有关隔断饰面和整体造型的装修技巧，是酒店整体建筑装修中不可缺少的一部分。移动隔断的造型装修除了表现在酒店主观可视化形态的效果外'
      },
      {
        id: 3,
        time: '3',
        time2: '2019年/3',
        title: '玻璃隔断应该如何进行安装？',
        content: ' 玻璃隔断的使用非常广泛，但是对于普通用户并不懂得玻璃隔断的专业安装方法，也不知道玻璃隔断安装后该如何检测玻璃隔断的质量及其施工是否到位，所以很多并不专业的装修公司就利用客户对于隔断装修的盲点，简单的拼凑，随意施工，糊弄客户，其实玻璃隔断的设计，制作，和安装需要专业的故事来完成，成都隔断行业专家为大家归纳整理了几条玻璃隔断安装及检验方法，'
      },
      {
        id: 4,
        time: '3',
        time2: '2019年/3',
        title: '科嘉中国网站改版成功，欢迎访问！', 
        content: '　科嘉中国网站改版成功，欢迎访问！'
      }
    ],
  },
  goDetail2(e) {
    wx.navigateTo({
      url: '../newsDetail/newsDetail?id=' + e.currentTarget.dataset.id,
    })
  }
})