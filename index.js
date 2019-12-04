module.exports = function (data, map) {
  let allStr = require('./lib/fontLibrary') // 简繁体库
  let fontLibraryArr = allStr.trim().replace(/\r/g, '').split('\n') // 简繁体数组
  let singleFontLibraryArr = [] // 单文字
  let moreFontLibraryArr = [] // 词组
  fontLibraryArr.map((item, i) => {
    if (item.length <= 3) {
      singleFontLibraryArr.push(item)
    } else {
      moreFontLibraryArr.push(item)
    }
  })
  // 词组简转繁
  moreFontLibraryArr.map(item => {
    let left = item.split('=')[0]
    let right = item.split('=')[1]
    let reg = new RegExp(left, 'g')
    data = data.replace(reg, right)
  })
  // 单文字简转繁
  singleFontLibraryArr.map(item => {
    let left = item.split('=')[0]
    let right = item.split('=')[1]
    let reg = new RegExp(left, 'g')
    data = data.replace(reg, right)
  })
  data = String(data)
  // 输出
  return data
}
