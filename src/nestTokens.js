export function nestTokens(tokens) {
  // 处理完毕的tokens
  let nestedTokens = []
  /* sections用来存储所用的栈，每遇到#就会形成一个栈，那么我们就将当前栈存入([1,2],如果说2是1中的子栈，当2的数据
    处理完成后将2弹出(删除)，那么collector会重新指向1 )
  */
  let sections = []
  /*collector作为一个中间件使用，他永远都指向当前的栈(比如与遇到#，那么#与/之间就是一个栈，或者说nestedTokens就是一个栈)
    栈的层级关系：nestedTokens > sections[0] > sections[1]......越往下层级越小，最下面的层级就是当前栈
  */
  let collector = nestedTokens
  tokens.forEach((token) => {
    switch (token[0]) {
      case '#':
        // 遇到#，说明当前token它是一个栈，我们将他存入当前栈中(一定得知道当前栈是谁！)
        collector.push(token)
        // 并将当前token存入sections(例如遇到第一个#时，nestedTokens > sections[0])
        sections.push(token)
        /* ['#','arr',[]]这应该是当前栈的结构，他的子项都是存在[][2]中的
          ['#','arr']这是当前token的结构
          那么我们让token[2] = [] ,并让collector指向token[2]这个栈，那么token[2]或者说sections[sections.length - 1]就变成当前栈
        */
        collector = token[2] = []
        console.log(token[1] + '入栈')
        break
      case '/':
        // 遇到/就说明当前栈已经处理完毕，我们在sections删除当前栈
        sections.pop()
        // 并让collector指向sections的最后一层，这样就将当前栈变成了旧当前栈的父级(或者说collector的指向往上了一级)
        collector = sections.length > 0 ? sections[sections.length - 1][2] : nestedTokens
        console.log(token[1] + '出栈')
        break
      default:
        // 无论当前栈是谁，只需要往里面存就可以
        collector.push(token)
        break
    }
  })
  return nestedTokens
}
