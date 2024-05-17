const input = require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString()
    .trim()
    .split('\n')
    .map((el) => el.split(' ').map(Number));

let N, lastNode, visitedCnt = 0;
let tree = [];
let visited = [];
let similarInOrderStatus = [];
let inOrderStatus = [];

N = input[0][0];

for (let i = 0; i <= N; i++) {
    tree[i] = { left: -1, right: -1 };
}

// 트리 생성
for (let i = 1; i <= N; i++) {
    const [num, left, right] = input[i];
    tree[num] = { left: left, right: right };
}

// 중위 순회 경로 저장
inOrder(1);
lastNode = inOrderStatus[inOrderStatus.length - 1]; // 중위 순회의 마지막 노드

// 유사 중위 순회 경로 저장
visited = new Array(N + 1).fill(false);
visited[0] = true;

similarInOrder(1);

function inOrder(cur) {
    if (cur === -1) return;

    const curNode = tree[cur];
    if (curNode.left !== -1) {
        inOrder(curNode.left);
    }
    inOrderStatus.push(cur);
    if (curNode.right !== -1) {
        inOrder(curNode.right);
    }
}

function similarInOrder(cur) {
    similarInOrderStatus.push(cur);

    if (!visited[cur]) {
        visited[cur] = true;
        visitedCnt++;
    }

    const curNode = tree[cur];
    if (curNode.left !== -1) {
        similarInOrder(curNode.left);
        similarInOrderStatus.push(cur);
    }

    if (curNode.right !== -1) {
        similarInOrder(curNode.right);
        similarInOrderStatus.push(cur);
    }

    if (visitedCnt === N && cur === lastNode) {
        console.log(similarInOrderStatus.length - 1);
    }
}
