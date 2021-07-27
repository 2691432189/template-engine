import Scanner from './Scanner'
import { nestTokens } from './nestTokens'
export function tempToTokens(tempalte) {
  let tokens = []
  let scanner = new Scanner(tempalte)
  // 循环将所有的常规字符全部找出来
  while (scanner.sub()) {
    // 获取常规字符串
    let convention = scanner.scanUtil('{{')
    if (convention) {
      tokens.push(['text', convention])
    }
    // 跳过'{{'
    scanner.scan('{{')
    // 获取非常规字符串( {{}}中的就是非常规字符串 )
    let unconventionality = scanner.scanUtil('}}')
    if (unconventionality) {
      // 判断非常规字符串类型
      if (unconventionality[0] == '#') {
        tokens.push(['#', unconventionality.slice(1)])
      } else if (unconventionality[0] == '/') {
        tokens.push(['/', unconventionality.slice(1)])
      } else {
        tokens.push(['name', unconventionality])
      }
    }
    // 跳过'}}'
    scanner.scan('}}')
  }
  return nestTokens(tokens)
}
