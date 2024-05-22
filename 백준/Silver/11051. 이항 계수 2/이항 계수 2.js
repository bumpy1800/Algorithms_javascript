const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map((el) => el.split(' ').map(Number));

const [N, K] = input[0];
const MOD = 10007;

let dp = Array.from({ length: N + 1 }, () => Array(K + 1).fill(0));

// 초기 조건 설정
for (let i = 0; i <= N; i++) {
    dp[i][0] = 1;  // nC0 = 1
    if (i <= K) {
        dp[i][i] = 1;  // nCn = 1
    }
}

// DP 테이블 채우기
for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= Math.min(i, K); j++) {
        dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j]) % MOD;
    }
}

console.log(dp[N][K]);