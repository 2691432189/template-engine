export function lookUp(obj, expression) {
  // 获取对应对象或数组的值
  if (expression.indexOf('.') != -1 && expression != '.') {
    const segments = expression.split('.')
    segments.forEach((key) => {
      if (!obj) return
      obj = obj[key]
    })
  } else {
    obj = obj[expression]
  }
  return obj
}
