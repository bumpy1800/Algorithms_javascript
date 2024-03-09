function solution(name) {
  var answer = 0;
  // 뒤로 돌아가지 않고 조작했을 때의 최소 횟수는 [문자 length - 1]
  // 처음 알파벳부터 다음 알파벳으로 넘어가는 조작 횟수부터 시작하니 length - 1
  // 예를 들어 길이가 3인 문자면 1->2로 이동하는 할 때 +1, 2->3으로 이동할때 +1이기 떄문에 length - 1을 해줘야 함.
  let min = name.length - 1;

  for (let i = 0; i < name.length; i++) {
    let currentAlPhabet = name.charCodeAt(i);

    // 현재알파벳이 N(26개 알파벳에서 13번째 알파벳)보다 작으면(A~M) 뒤로 돌아갈때가 앞으로 가는것보다 빠름.
    // 이동하는 만큼의 조작 횟수를 answer에 저장. (여기서 마이너스를 해도 되고 나눈 후의 나머지로(%) 계산 해도 된다.)
    if (currentAlPhabet < 78) {
      answer += currentAlPhabet % 65;
    } else {
      // N보다 크거나 같으면(N~Z)
      // A부터 시작해서 조작해야하는데 뒤로 돌아가기 때문에 A를 제외하고 Z부터 세기 때문에 Z - 현재알파벳을 계산.
      answer += 91 - currentAlPhabet;
    }

    // i의 다음 인덱스가 A이면 하나의 혹은 연속된 A 다음에 오는 알파벳의 인덱스를 가리킨다.
    let nextIndex = i + 1;

    // 현재알파벳이 마지막 알파벳이 될 때까지 && 다음알파벳으로 A가 나올때까지 nextIndex += 1
    // nextIndex가 A가 아니면 넘어가고, nextIndex에 A가 나온다면 nextIndex += 1을 하여 A의 다음 인덱스도 A인지 확인한다.
    // -> 다음 문자열들에서 A를 찾는 작업
    while (nextIndex < name.length && name.charCodeAt(nextIndex) === 65) {
      nextIndex += 1;
    }

    // length - nextIndex는 뒤로 쭉 갔을 때의 길이(A를 통과해서 갔을 때).
    min = Math.min(
      min,
      i * 2 + name.length - nextIndex, // 먼저 오른쪽으로 가기
      // 이 경우는 A의 앞에 있는 알파벳들이 뒤에 있는 알파벳의 수보다 적을 경우 최소가 된다.
      // 앞에서 갔다가 뒤돌아오는 횟수 (A 뭉떵이를 기준으로 앞에 알파벳 < 뒤에 알파벳일 때 앞에서 A 직전까지 갔다가 다시 돌아오기 때문에 곱하기 2를 해준다.)
      // 예를 들어 CDAAJJJJ이면 JJJJ보다 CD가 짧기 때문에 D로 갔다가 다시 뒤돌아서 마지막인 J로 가야한다.
      // C에서 D까지 조작해서 +1, 다시 D에서 C로 되돌아갈 때 + 1, 따라서 i * 2를 해줘야 한다.
      // 여기서 [문자열의 길이]에서 [마지막에 위치한 A의 바로 뒤에 있는 문자의 인덱스]를 빼주면 A 뒤에 있는 알파벳들의 길이를 구할 수 있다. 예시에서는 JJJ이기 때문에 3.
      i + (name.length - nextIndex) * 2 // 처음부터 반대로 가기
      // 이 경우는 A의 앞에 있는 알파벳들보다 뒤에 있는 알파벳들의 수가 적을 경우 최소가된다.
      // 예를 들어, JJJJAACD 일 때, A의 앞에 문자열이 뒤보다 많기 때문에
      // 네번째 J까지 갔다가 다시 앞으로 돌아가는것(8회)보다 처음부터 CD를 돌고 다시 JJJJ로 돌아가는게 횟수가 적다(7회)
    );
  }
  answer += min;
  return answer;
}
