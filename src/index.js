import { tempToTokens } from './tempToTokens'
import { toKensCombineData } from './toKensCombineData'
window.TEMPLATE = {
  rander(tempalte, data) {
    let tokens = tempToTokens(tempalte)
    return toKensCombineData(tokens, data)
  },
}
