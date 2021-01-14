

const service = {}
const host = `http://lihua1108.com`

const request = (url = '', data, method = 'GET') => {
  return new Promise((resolve, reject) => {
    const param = {
      url: url,
      method,
      data,
      success (res) {
        resolve(res.data)
      },
      fail(err) {
        reject(err)
      }
    }
    wx.request(param)
  })
}

// 获取一级区域
service.getFirstLavel = (area, url = '') => {
  const api = {
    province: '/data/area/provinces.json',
    city: '/data/area/cities.json',
    country: '/data/area/areas.json'
  }

  const _url = url || (host + api[area])
  return request(_url)
}

// 获取二级区域数据
service.getSecondLavel = (url) => {
  const _url = url || (host + '/data/area/pc.json')
  return request(_url)
}

module.exports = service
