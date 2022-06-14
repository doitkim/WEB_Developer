// console.log(`한국 영화 역사상 아카데미상을 받은 것은 '기생충'이 처음이다.`)
// console.log(`아리스토텔레스는 "인간은 사회적 동물이다."라고 말했다.`)

// console.log(`영화 '배테랑'에서 "어이가 없네~"라는 대사가 유명했다.`)


// 실습과제

// 재원이는 카페 매니저입니다. 며칠 뒤면 아르바이트 근무자들 급여 정산을 해야 하는데요. 
// 근무자 별로 근무 시간을 계산해서 총 급여를 계산하는 calcWage 함수를 만들어보려고 합니다.

// 파라미터로 근무자 이름(name), 근무 시간(time), 그리고 시급(wage)을 전달받고 총 급여를 계산하기 위해 total 변수에 시간과 시급을 곱한 값을 담는 것까진 작성했는데,
//  마지막으로 콘솔에 출력하는 부분이 남았습니다.

// 지난 시간에 배운 템플릿 문자열 개념을 이용해서 아래의 문장이 출력되게 작성해주세요.

// 출력예시
// 김윤식님의 근무 시간은 총 208시간이며, 최종 급여는 2358720원 입니다.
// 성규재님의 근무 시간은 총 175시간이며, 최종 급여는 2128000원 입니다.
// 손태웅님의 근무 시간은 총 161시간이며, 최종 급여는 2104270원 입니다.
// 허우선님의 근무 시간은 총 222시간이며, 최종 급여는 2437560원 입니다.
// 주어진 변수와 문자열 포맷팅을 반드시 이용하셔야 합니다.

// <주의> 자동 채점 과제이기 때문에, 문제의 조건에 정확히 따라주시기 바랍니다. 줄 바꿈과 마침표, 띄어쓰기까지도 주의해 주세요!

// function calcWage(name, time, wage) {
//     let total = time * wage;
  
//     console.log(`${name}님의 근무 시간은 총 ${time}시간이며, 최종 급여는 ${total}원 입니다.`); // 코드를 채워 넣으세요.
//   }
  
//   calcWage('김윤식', 208, 11340);
//   calcWage('성규재', 175, 12160);
//   calcWage('손태웅', 161, 13070);
//   calcWage('허우선', 222, 10980);

// 실습과제

// 숫자형을 담고 있는 변수들(material1, material3, material5)과 문자열을 담고 있는 변수들(material2, material4)이 있습니다.

// 변수들끼리 연산을 하여 result1에는 문자열 '34'를, result2에는 숫자형 34를 만들어 넣어주세요!

// 단, 절대 숫자값을 사용하지 마세요. result1과, result2는 반드시 material1~5 변수들의 연산식만 할당해야 합니다.

// 실행결과는 다음과 같아야 합니다.

// 출력예시
// 34
// string
// 34
// number

// 숫자형과 문자열 재료
let material1 = 3;
let material2 = '3';
let material3 = 10;
let material4 = '4';
let material5 = 4;

// 연산 결과
let result1;
let result2;

// 연산을 통해 result1에 문자열 '34'를, result2에 숫자형 34를 만들어 넣어주세요.
// 코드를 작성해주세요.
result1 = String(material1) + String(material5);
result2 = Number(material2+material4);

// 테스트 코드
console.log(result1);
console.log(typeof result1);
console.log(result2);
console.log(typeof result2);

