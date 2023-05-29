function solution(left, right) {
  let yaksoo = 0;
  let result = 0;

  let arr = Array(right - left + 1)
    .fill(left)
    .map((v, i) => v + i);
  // [13, 14, 15, 16, 17]

  // 숫자들의 약수의 갯수를 구한다.
  for (let i = 0; i < arr.length; i++) {
    yaksoo = 0;
    for (let j = 1; j <= arr[i]; j++) {
      if (arr[i] % j === 0) {
        yaksoo++;
      }
    }
    if (yaksoo % 2 === 0) {
      result += arr[i];
    } else {
      result -= arr[i];
    }
  }
  // 숫자들을 돌아가면서 약수의 갯수를 더한다.
  return result;
}

let input = [
  [13, 17], // 43
  [24, 27], // 52
];

for (let i = 0; i < input.length; i++) {
  console.log(solution(input[i][0], input[i][1]));
}
