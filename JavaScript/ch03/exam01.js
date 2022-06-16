// // 여기에 logParticipant 함수를 작성해 주세요.
// function logParticipant(name) {
//     console.log(name);
// }

// // 테스트 코드
// logParticipant('동수');
// logParticipant('윤하');
// logParticipant('재준');
// logParticipant('동훈');
// logParticipant('영희');
// logParticipant('신욱');

// 여기에 expressMultiplication 함수를 작성해 주세요.

// console.log('3 * 4 = ' + 3 * 4);
// console.log('3 * 2 = ' + 3 * 2);
// console.log('7 * 5 = ' + 7 * 5);
// console.log('8 * 9 = ' + 8 * 9);
// console.log('5 * 5 = ' + 5 * 5);
// console.log('9 * 9 = ' + 9 * 9);

// function expressMultiplication(num1, num2) {
//     sum = num1 * num2;
//     console.log(num1 +` * `+ num2 + ' = ' + sum);

// }
// // 테스트 코드
// expressMultiplication(3, 4);
// expressMultiplication(3, 2);
// expressMultiplication(7, 5);
// expressMultiplication(8, 9);
// expressMultiplication(5, 5);
// expressMultiplication(9, 9);

// 직사각형의 넓이를 계산해주는 calculateRectangleArea 함수를 만들어보세요. 
// calculateRectangleArea 함수는 파라미터로 width와 height를 받고, 직사각형의 넓이를 리턴해 줍니다.

// 과제를 해결한 뒤 실행결과는 아래와 같아야 합니다.

// Area1: 12, Area2: 40, Area3: 14

// 여기에 calculateRectangleArea 함수를 작성해 주세요.

// function calculateRectangleArea(num1, num2) {
//     return num1 * num2;
// }

// // 테스트 코드
// let area1 = calculateRectangleArea(3, 4); // 가로 3, 세로 4인 직사각형의 넓이 계산
// let area2 = calculateRectangleArea(5, 8); // 가로 5, 세로 8인 직사각형의 넓이 계산
// let area3 = calculateRectangleArea(7, 2); // 가로 7, 세로 2인 직사각형의 넓이 계산

// console.log(`Area1: ${area1}, Area2: ${area2}, Area3: ${area3}`);

// 여기에 orderSetMenu 함수를 작성해 주세요.

function orderSetMenu(sandwitch, drink='스프라이트') {
    console.log(`주문하신 ${sandwitch}, ${drink} 세트메뉴 나왔습니다!`)
}
// 테스트 코드
orderSetMenu('코드웨잇 클럽');
orderSetMenu('터키베이컨 아보카도', '코카콜라');
orderSetMenu('코드웨잇 멜트');
orderSetMenu('이탈리안 비엠티', '닥터페퍼');
orderSetMenu('에그마요', '환타 오렌지');