export default class Scanner {
  constructor(temp) {
    this.temp = temp
    this.pos = 0
    this.tail = temp
  }
  // 跳过非常规字符('<div>{{index}}</div>'，我们并不需要{{和}}，所以直接跳过)
  scan(condition) {
    /* 当终止条件在当前字符串的尾巴中位置为0时，证明当前字符串开头是非常规字符
   那么我们只要跳过非常规字符即可*/
    if (this.tail.indexOf(condition) == 0) {
      // 将当前指针的位置加上非常规字符的长度即可跳过非常规字符
      this.pos += condition.length
    }
  }
  // 获取常规字符('<div>{{index}}</div>'，<div>是常规字符，{{和}}是非常规字符)
  scanUtil(condition) {
    // 记录常规字符开始的指针
    let startPos = this.pos
    /*循环查找，从常规字符一直找到非常规字符之前('<div>{{index}}</div>'，找到{{或}}之前，也就是<div>)
    当指针的位置小于当前字符串的长度就说明字符串有剩余
    当终止条件在当前字符串的尾巴中位置为0时，就代表当此循环已经找到了本次的所有常规字符
    */
    while (this.sub() && this.tail.indexOf(condition) != 0) {
      // 每次循环，指针都应该下移
      this.pos++
      // 指针下移后，尾巴也应该重新计算
      this.tail = this.temp.substring(this.pos)
    }
    // 返回字符串(startPos与this.pos之间就是本次的常规字符串)
    return this.temp.substring(startPos, this.pos)
  }
  sub() {
    return this.pos < this.temp.length
  }
}
