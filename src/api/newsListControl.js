import Mock from 'mockjs'
class NewsListControl {
  constructor() {}
  async getList(ctx) {
    const { pageNo } = ctx.query
    let data = Mock.mock({
      // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
      [`result|${pageNo}`]: [
        {
          // 模拟 ID，自增方式追加
          'id|+1001': 1001,
          // 模拟标题，中文字符串长度为 20 位到 30 位
          title: '@ctitle(15,25)',
          // 模拟图片索引，自然数从 0 到 15
          // image: '@natural(0,15)',
          image: Mock.Random.image('200x200', '#50B347', '#FFF', 'Mock.js'),
          // 模拟访问人数，自然数从 0 到 99999
          reads: '@natural(0,99999)',
          // 模拟新闻来源，中文字符串长度为 3 到 10 位
          from: '@ctitle(3,7)',
          // 模拟发布时间，时间格式
          date: "@date('yyyy-MM-dd')"
        }
      ]
    })
    ctx.body = {
      code: 0,
      data: data,
      msg: '请求成功!'
    }
  }
}

module.exports = new NewsListControl(10)
