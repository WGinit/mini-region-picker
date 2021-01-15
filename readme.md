# 地区选择组件
基于小程序picker组件的封装, 支持省，市，区，省市，省市区的单独选择
## 预览
![image](https://raw.githubusercontent.com/WGinit/Assets/master/project/images/mini-region-picker-1.png)
## Demo

小程序代码片段[https://developers.weixin.qq.com/s/2VF3plmR7OnJ](https://developers.weixin.qq.com/s/2VF3plmR7OnJ)

## 参数

| 参数名 | 类型 | 是否必传 | 默认值 | 说明 |
|-------| -----| --------| ------| ----- |
| url | String | 否 | http://lihua1108.com | 接口地址 |
| area | Array | 是 | [] | 筛选区域，省-province，市-city，区-country |
| customItem | String | 否 | '' | 每一列的顶部添加一个自定义的项 |
| rangeKey | String | 否 | name | 通过 range-key 来指定 Object 中 key 的值作为选择器显示内容 |
|mini-region-picker-class | String | 否 | '' | picker外部组件样式 |

## Event

| 事件 | 类型 | 返回参数 |
| -----| -----| -------|
| getSelectData| Function | 当前所选值|

## slot

```javascript

<mini-region-picker>
  ...
</mini-region-picker>

```
## 示例

> 选择一级-省
```javascript

// .js
data() {
  area: ['province']
}
// .wxml
<mini-region-picker area="{{area}}" bindgetSelectData="getProvinceValue">
    <view class="value">当前选择：{{province}}</view>
</mini-region-picker>
```
 同理，选择市，区，可设置area为['city'], ['country']

> 选择省市

设置area为['province', 'city'], 暂不支持选择市区
```javascript
<mini-region-picker area="{{area}}" bindgetSelectData="getProvinceCityValue">
    <view class="value">当前选择：{{province}}-{{city}}</view>
</mini-region-picker>
```
> 选择省市区

设置area为['province', 'city', 'country'], 区域数据来源于微信官方
```javascript
<mini-region-picker area="{{area}}" bindgetSelectData="getAreaValue">
    <view class="value">当前选择：{{province}}-{{city}}-{{country}}</view>
</mini-region-picker>
```

## 数据
+ [省份数据](http://lihua1108.com/data/area/provinces.json)
+ [市数据](http://lihua1108.com/data/area/cities.json)
+ [区数据](http://lihua1108.com/data/area/areas.json)
+ [街道数据](http://lihua1108.com/data/area/streets.json)
+ [省市CODE数据](http://lihua1108.com/data/area/pc-code.json)
+ [省市数据](http://lihua1108.com/data/area/pc.json)
+ [省市区CODE数据](http://lihua1108.com/data/area/pca-code.json)
+ [省市区数据](http://lihua1108.com/data/area/pca.json)
+ [省市区街道CODE数据](http://lihua1108.com/data/area/pcas-code.json)
+ [省市区街道数据](http://lihua1108.com/data/area/pcas.json)
