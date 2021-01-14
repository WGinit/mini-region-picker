// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    firstProvince: ['province'],
    firstCity: ['city'],
    firstCountry: ['country'],
    firstAreaValue: {
      province: '',
      city: '',
      country: ''
    },
    secondArea: ['province', 'city'],
    secondAreaValue: '',
    thirdArea: ['province', 'city', 'area'],
    thirdAreaValue: ''
  },

  onLoad() {

  },

  getFirstAreaValue(e) {
    const { provinceCode, cityCode, name } = e.detail
    if (!name) return
    let _key = !provinceCode ? 'province' : ( cityCode ? 'country' : 'city')
    this.setData({
      [`firstAreaValue.${_key}`]: name
    })
  },
  getSecondAreaValue(e) {
    const { area } = e.detail
    let _text = `${area[0]}-${area[1]}`
    this.setData({
      secondAreaValue: _text
    })
  },

  getThirdAreaValue(e) {
    const { value } = e.detail
    let _text = `${value[0] || ''}-${value[1] || ''}-${value[2] || ''}`
    this.setData({
      thirdAreaValue: _text
    })
  }
})
