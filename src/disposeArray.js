import { toKensCombineData } from './toKensCombineData'
import { lookUp } from './lookUp'
export function disposeArray(toKen, data) {
  let domSteing = ''
  // 获取#所对应的数组
  let val = lookUp(data, toKen[1])
  // 遍历数组，生成每一项
  val.forEach((key) => {
    domSteing += toKensCombineData(toKen[2], {
      // 这里因为数组里不一定是对象，还有可能是纯数据
      '.': key,
      ...key,
    })
  })
  return domSteing
}
