import { lookUp } from './lookUp'
import { disposeArray } from './disposeArray'
export function toKensCombineData(toKens, data) {
  let domSteing = ''
  toKens.forEach((toKen) => {
    if (toKen[0] == '#') {
      // 判断当前toKen[0]是不是#，是就说明当前项需要循环处理
      domSteing += disposeArray(toKen, data)
    } else if (toKen[0] == 'name') {
      // 判断当前toKen[0]是不是name，是就将对应的值获取回来
      domSteing += lookUp(data, toKen[1])
    } else {
      // 如果不是#或者name，他就是纯文本不需要额外处理
      domSteing += toKen[1]
    }
  })
  return domSteing
}
