function solution(board, moves) {
  // moves를 돌면서 board의 배열들 중에 board[i + 1]가 >0인지 확인한다. (인형이 있는지 확인한다.)
  // 있으면 그 요소를 stack에 넣고, 그 배열에서도 뺀다.
  // 없으면 넘어간다.
  let answer = 0;
  let stack = [];
  let i = 0;
  while (i < moves.length) {
    for (let j = 0; j < board.length; j++) {
      const doll = board[j][moves[i] - 1];

      if (doll > 0) {
        stack.push(doll);
        board[j].splice(moves[i] - 1, 1, 0);
        console.log('board', board);
        // console.log('stack', stack);
        console.log('moves', moves[i]);
        console.log('---------------');
        i++;
        // console.log('answer', answer);
        break;
      }
      if (doll === 0 && j === board.length - 1) {
        i++;
        continue;
      }
    }

    if (stack[stack.length - 1] === stack[stack.length - 2]) {
      // stack.splice(stack.length - 1, -2);
      stack.pop();
      stack.pop();
      answer += 2;
    }
  }
  return answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
// 4
