const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    //.map((el) => el.split(' '));

const N = input[0];
const data = input.slice(1).map(v => v.split(' ').map(Number));

const bitMasking = (data) => {
  let result = Infinity; // 최소 차이

  // 1부터 2^N - 1까지의 모든 경우의 수 체크
  for (let mask = 1; mask < (1 << data.length); mask++) {
      let god = 1; // 신맛 (곱셈이라 1)
      let sseun = 0; // 쓴맛

      // 각 재료에 대해 반복
      for (let i = 0; i < data.length; i++) {
          // 비트마스킹을 이용해 현재 재료가 선택되었는지 확인
          if (mask & (1 << i)) {
              god *= data[i][0]; // 신맛은 곱
              sseun += data[i][1]; // 쓴맛은 합
          }
      }
      const difference = Math.abs(god - sseun); // 신맛과 쓴맛의 절대값
      
      result = Math.min(result, difference); // 값 갱신
  }

  return result; // 최소 차이 반환
}

console.log(bitMasking(data))