// 코드잇 마을에서는 대중교통을 이용할 때, 교통카드를 단말기에 태그하면 "삑!"하고 소리가 납니다.
// 그런데 항상 "삑!"소리만 나는 게 아니라 상황에 따라서 청소년의 경우에는 "삑삑!", 승차권이 제대로 찍히지 않을 땐 "삑삑삑!", 그리고 환승을 할 때는 "환승입니다." 라는 소리도 나는데요.

// 각 상황의 소리를 담은 변수 adultTag, teenagerTag, errorTag, transferTag 를 만들고,  이 변수들을 파라미터(tagCase)로 전달하면 각 상황에 맞게 태그 소리를 콘솔에 출력하는 tagNotification함수를 만들어 보세요.

// 코드가 잘 작성되었다면 실행 시 다음과 같이 출력되어야 합니다.

// 삑!
// 삑삑!
// 환승입니다.
// 삑삑삑!
// 삑!

// // 아래에 adultTag, teenagerTag, errorTag, transferTag라는 변수들을 작성해 주세요.
// adultTag = '삑!';
// teenagerTag ='삑삑!';
// transferTag = '환승입니다.';
// errorTag = '삑삑삑!';

// // 아래에 tagCase파라미터를 가지는 tagNotification 함수를 작성해 주세요.

// function tagNotification(tagCase) {
//     console.log(tagCase);
// }

// // 테스트 코드
// tagNotification(adultTag);
// tagNotification(teenagerTag);
// tagNotification(transferTag);
// tagNotification(errorTag);
// tagNotification(adultTag);


// 규재는 오랜만에 동생 규원이와 놀이공원을 방문했습니다.
// 이것저것 놀이공원의 기구들을 즐기다가 가장 기대했던 롤러코스터에 탑승하려고 하는데, 입구에서 키 제한 검사를 하고 있었습니다.
// 또래 친구들 보다 키가 작은 규원이는 행여나 놀이기구를 못 탈까봐 차례를 기다리는 대기 줄에서 긴장의 끈을 놓지 못하고 있습니다.

// 이 롤러코스터는 140cm 이상만 탑승할 수 있다고 하는데요. 놀이기구를 타고 싶은 마음은 간절하지만 안전상의 문제로 위험한 상황이 발생할 수 있으니, 
// 만약 기준을 통과하지 못한다면 아쉽지만 다음을 기약하는 것이 좋겠죠?

// 그럼, if문을 활용해서 키 140cm를 기준으로 탑승 가능 유무를 알려주는 checkHeight 함수를 작성해 주세요.

// 코드를 잘 작성하셨다면 아래와 같은 결과가 출력되어야 합니다.

// 탑승이 가능합니다.
// 탑승이 불가능합니다.
// 탑승이 가능합니다.

// // 파라미터 height을 활용하는 checkHeight 함수를 완성하세요.
// function checkHeight(height) {
//     if (height >= 140) {
//         console.log('탐승이 가능합니다.');
//     }
//     else {
//         console.log('탑승이 불가능합니다.');
//     }
// }

// // 테스트 코드
// checkHeight(140);
// checkHeight(135);
// checkHeight(170);

// 학생들에게 최종 성적을 알려 주는 '학점 계산기'를 만들려고 합니다.

// 이 수업에는 50점 만점의 중간고사와 50점 만점의 기말고사가 있는데요. 두 시험의 점수를 합해서 최종 성적을 내는 방식입니다. 규칙은 다음과 같습니다.

// A: 90점 이상
// B: 80점 이상 90점 미만
// C: 70점 이상 80점 미만
// D: 60점 이상 70점 미만
// F: 60점 미만
// printGrade 함수는 파라미터로 중간고사 점수 midtermScore와 기말고사 점수 finalScore를 받고, 최종 성적을 출력합니다.

// D
// A
// F
// C

// function printGrade(midtermScore, finalScore){
// 	let totalScore = midtermScore + finalScore;

//     if (totalScore >=90) {
//         console.log('A');
//     }
//     else if (totalScore >= 80) {
//         console.log('B');
//     }
//     else if (totalScore >= 70) {
//         console.log('C');
//     }
//     else if (totalScore >= 60) {
//         console.log('D');
//     }
//     else if (totalScore < 60) {
//         console.log('F');
//     }
// }

// // 테스트 코드
// printGrade(25, 35);
// printGrade(50, 45);
// printGrade(29, 24);
// printGrade(37, 42);

// 한국에서는:

// 나이가 같은 경우: '친구'

// 자신보다 나이가 어릴 경우:
// 2 - 1. 상대방 성별이 남성인 경우: '남동생', 
// 2 - 2. 상대방 성별이 여성인 경우: '여동생'

// 자신보다 나이가 많을 경우:
// 3 - 1. 상대방 성별이 남성인 경우: '형',
// 3 - 2. 상대방 성별이 여성인 경우: '누나'

// 라고 말하는 게 너무 어렵다고 합니다.
// 이런 Peter를 위해서 미리 자신의 나이와 성별을 입력해두고, 상대방의 나이와 성별을 전달하면 호칭을 판별해주는 whatShouldICallYou함수를 만들어줍시다.

// 코드를 잘 작성했다면, 다음과 같은 결과가 출력되어야 합니다.

// 여동생
// 남동생
// 친구
// 형
// 누나

// // 나의 나이와, 나의 성별을 저장하는 변수
// let myAge = 26;
// let myGender = 'male';

// // 호칭을 담은 변수
// let callOlderBrother = '형';
// let callOlderSister = '누나';
// let callFriend = '친구';
// let callYoungerSister = '여동생';
// let callYoungerBrother = '남동생';

// // 상대방의 나이와 성별에 따른 호칭을 리턴하는 함수 whatShouldICall를 완성하세요.
// function whatShouldICallYou(yourAge, yourGender) {
//   if (myAge > yourAge) {
//     if (myGender == yourGender) {
//         // console.log(callYoungerBrother);
//         return callYoungerBrother;
//     }
//     else {
//         // console.log(callYoungerSister);
//         return callYoungerSister;
//     }
//   }
//   else if (myAge < yourAge) {
//     if (myGender == yourGender) {
//         // console.log(callOlderBrother);
//         return callOlderBrother;
//     }
//     else {
//         // console.log(callOlderSister);
//         return callOlderSister;
//     }
//   }
//   else {
//     // console.log(callFriend);
//     return callFriend;
//   }
// }

// // 테스트 코드
// let result1 = whatShouldICallYou(25, 'female');
// let result2 = whatShouldICallYou(20, 'male');
// let result3 = whatShouldICallYou(26, 'female');
// let result4 = whatShouldICallYou(30, 'male');
// let result5 = whatShouldICallYou(31, 'female');

// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);
// console.log(result5);

// 윤식이는 공연 티켓 판매 프로그램을 개발하고 있습니다.
// 다른 부분은 어느 정도 정리가 되었는데, 좌석 등급에 따라서 가격을 알려주는 부분을 해결하지 못했는데요. 힘들어하는 윤식이를 위해 switch문을 활용해서 각 등급이 선택되었을 때 등급에 따라 가격을 표시해주는 checkPrice 함수를 완성해 주세요.

// 코드가 잘 작성되었다면 다음과 같이 출력되어야 합니다.

// R석은 13만원 입니다.
// VIP석은 15만원 입니다.
// S석은 10만원 입니다.
// A석은 8만원 입니다.
// VIP, R, S, A 중에서 하나를 선택해 주세요.

// // 각 등급별 가격
// let VIPPrice = 15;
// let RPrice = 13;
// let SPrice = 10;
// let APrice = 8;

// // 각 등급에 맞는 가격을 출력하는 함수 checkPrice를 완성하세요.
// function checkPrice(grade) {
// 	switch(grade) {
//         case 'R' : 
//             console.log(`R석은 ${RPrice}만원 입니다.`);
//             break;

//         case 'VIP' : 
//             console.log(`VIP석은 ${VIPPrice}만원 입니다.`);
//             break;

//         case 'S' : 
//             console.log(`S석은 ${SPrice}만원 입니다.`);
//             break;

//         case 'A' : 
//             console.log(`A석은 ${APrice}만원 입니다.`);
//             break;

//         default : 
//             console.log('VIP, R, S, A 중에서 하나를 선택해 주세요.')
//             break;
//     }
// }

// // 테스트 코드
// checkPrice('R');
// checkPrice('VIP');
// checkPrice('S');
// checkPrice('A');
// checkPrice('B');

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// let asterisk = '';

// function printTriangle(height) {
// 	for (let i=1; i<=height; i++) {

// 	  asterisk += '*';
// 	  console.log(asterisk);
// 	}
// 	asterisk = '';
// }

// // 테스트 코드
// console.log('높이: 1');
// printTriangle(1);

// console.log('높이: 3');
// printTriangle(3);

// console.log('높이: 5');
// printTriangle(5);

// let i = 1;

// while (i < 100) {
//     if (i % 2 != 0){
//         console.log(i);
//     }
//     i++;
// }

// 정수 N의 약수는 N을 나누었을 때 나누어떨어지는 수입니다. 만약 정수 i가 정수 N의 약수라면, N을 i로 나누었을 때 나머지가 0이 나와야 하는 거죠.

// while문을 활용해서 정수 180의 약수를 모두 출력하고, 총 몇 개의 약수가 있는지 출력하는 프로그램을 작성해 보세요. 
// 코드를 잘 작성했다면 결과는 콘솔에 아래와 같이 출력되어야 합니다.

// 1
// 2
// 3
// 4
// 5
// 6
// 9
// 10
// 12
// 15
// 18
// 20
// 30
// 36
// 45
// 60
// 90
// 180
// 180의 약수는 총 18개입니다.

// const N = 180;
// let i = 1;
// let count = 0;
// while (i <= N) {
//   if (N % i == 0){
//     console.log(i);
//     count++;
//     i++;
//   }
//   else {
//     i++;
//   }
// }
// console.log(`${N}의 약수는 총 ${count}개입니다.`)

// 반복문을 사용해서 구구단 프로그램을 만들어 봅시다.

// for문과 while문 중 어떤 반복문을 사용해도 상관없습니다.

// 실행하면 아래와 같은 결과물이 출력되어야 합니다.

// 1 * 1 = 1
// 1 * 2 = 2
// 1 * 3 = 3
// .
// .
// .
// 9 * 7 = 63
// 9 * 8 = 72
// 9 * 9 = 81
// <주의> 자동 채점 과제이기 때문에, 문제의 조건에 정확히 따라주시기 바랍니다. 줄 바꿈과 마침표, 띄어쓰기까지도 주의해 주세요!

// 참고로 이 문제는 '중첩 반복문'이라는 개념을 사용해야 하는데요. 
// 중첩 반복문은 반복문의 동작 부분 안에 또 다른 반복문을 넣는 것을 이야기합니다. 따로 설명해 드리지 않은 개념이지만, 조금 고민하다 보면 여러분이 직접 알아낼 수도 있습니다. 도저히 생각이 안 난다면 힌트를 참고해 주세요!

// for (i=1; i<10; i++) {
//     for (j=1; j<10; j++) {
//       console.log(`${i} * ${j} = ${i*j}`)
//     }
//   }

//   피보나치 수열(Fibonacci Sequence)이라고 들어 보셨나요?

// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...

// 우선 피보나치 수열의 1번 항과 2번 항은 각각 1입니다. 3번 항부터는 바로 앞 두 항의 합으로 계산됩니다. 예를 들어서 3번 항은 1번 항(1)과 2번 항(1)을 더한 2이며, 4번 항은 2번 항(1)과 3번 항(2)을 더한 3입니다.

// 반복문을 활용해서 피보나치 수열의 첫 50개 항을 차례대로 출력하는 프로그램을 작성해 보세요.

// for문과 while문 중 어떤 반복문을 사용해도 상관없습니다.

// 코드를 잘 작성하셨다면 다음과 같이 출력되어야 합니다.


let current = 1;
let previous = 0;

for (let i = 1; i <= 50; i++) {
  console.log(current);
  let temp = previous;  // previous를 임시 보관소 temp에 저장
  previous = current;
  current = current + temp;  // temp에는 기존 previous 값이 저장돼 있음
}