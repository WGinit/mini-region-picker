
const util = require('../../utils/util')

Component({

  properties: {
    url: {
      type: String,
      value: ''
    },
    area: {
      type: Array,
      value: []
    },
    customItem: {
      type: String,
      value: ''
    },
    rangeKey: {
      type: String,
      value: 'name'
    }
  },

  options: {
    multipleSlots: true
  },

  externalClasses: ["mini-region-picker-class"],

  data: {
    array: [],
    multiArray: [[], []],
    multiIndex: [],
    region: [],
    index: [],
    originData: {}
  },

  attached() {
    const { url, area } = this.data
    if (area.length === 1) { // 一级选择
      let _name = area[0]
      this.getFirstArea(_name, url)
    }

    if (area.length == 2) { // 二级选择，支持省市，市区
      if (area.includes('province') && area.includes('city')) { // 省市选择
        this.getSecondArea()
      } else {
        console.log(`赞不支持${area[0]} + ${area[1]}的选择`)
      }
    }
  },

  methods: {
    // 一级区域选择
    bindPickerChange(e) {
      const { value } = e.detail
      const { array } = this.data
      let data = array[value]
      this.triggerEvent('getSelectData', data)
    },

    // 获取一级区域数据
    async getFirstArea(area, url) {
      try {
        const ret = await util.getFirstLavel(area, url)
        this.setData({
          array: ret
        })
      } catch (error) {
        console.warn(`暂不支持${area}的选择`)
      }
    },

    // 获取二级区域数据
    async getSecondArea() {
      try {
        const { url } = this.data
        const ret = await util.getSecondLavel(url)
        if (ret) {
          let provinceList = [];
          this.data.originData = ret
          for (let i in ret) {
            provinceList.push(i);
          }
          let _data = [provinceList, ret["北京市"]];
          this.setData({
            multiArray: _data
          });
        }
      } catch (error) {
        console.warn(`仅支持的省市选择`)
      }
    },

    getProvinceCity() {
      util.getProvinceCity().then(res => {
        let provinceList = [];
        this.data.originData = res;
        if (res) {
          for (let i in res) {
            provinceList.push(i);
          }
          let _data = [provinceList, res["北京市"]];
          this.setData({
            multiArray: _data
          });
        }
      });
    },

    bindMultiPickerColumnChange(e) {
      const { column, value } = e.detail;
      if (column == 0) {
        let province = this.data.multiArray[0][value];
        let city = this.data.originData[province];
        this.setData({
          "multiArray[1]": city
        });
      }
    },

    bindMultiPickerChange(e) {
      const { value } = e.detail;
      const { multiArray } = this.data;
      let province = multiArray[0][value[0]];
      let city = multiArray[1][value[1]];
      let arr = [province, city]
      let obj = {
        value,
        area: arr
      }
      this.triggerEvent('getSelectData', obj)
    },

    // 三级省市区选择
    bindRegionChange(e) {
      const { detail } = e
      this.triggerEvent('getSelectData', detail)
    }
  }
})
