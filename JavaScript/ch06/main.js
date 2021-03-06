// let dataType = ['number', 'string', 'boolean', 'null', 'undefined', 'object'];

// // 여기, dataType 이라는 이름의 6개의 요소를 가진 배열이 있습니다.
// // 이 배열의 요소들을 모두 출력하는 프로그램을 작성해 보세요.
// // 반복문의 개념을 활용하시면 어렵지 않게 해결할 수 있습니다.

// // 코드를 잘 작성하셨다면, 다음과 같이 출력되어야 합니다.

// // number
// // string
// // boolean
// // null
// // undefined
// // object

// for (i in dataType) {
//     console.log(dataType[i]);
// }

// 여기 이번 주 온도를 섭씨로 기록한 배열이 있습니다.

// let celsiusTemps = [27, 25, 26, 22, 28, 27, 21];
// 그런데, 미국에서 오랫동안 살다 온 태오는 아직 섭씨온도가 익숙하지 않은데요. 불편한 태오를 위해 각각의 섭씨온도들을 화씨로 변환해 봅시다. 화씨로 변환하는 공식은 아래와과 같은데요.

// // F: 화씨(fahrenheit), C: 섭씨(celsius)
// F = ( C * 9 / 5 ) + 32;
// 반복문을 이용해서 celsius 배열의 각 요소들을 화씨로 변환한 값을 fahrenheit 배열에 추가해 주세요.

// 코드를 잘 작성하셨다면 다음과 같은 결과가 출력되어야 합니다.

// [
//   80.6,   77, 78.8,
//   71.6, 82.4, 80.6,
//   69.8
// ]

// let celsiusTemps = [27, 25, 26, 22, 28, 27, 21];
// let fahrenheitTemps = [];

// for (i in celsiusTemps) {
//     fahrenheitTemps[i] = (celsiusTemps[i] * 9 / 5) + 32;
// }


// // fahrenheitTemps 테스트
// console.log(fahrenheitTemps);

// splice 메소드를 활용하여 아래의 미션들을 수행하세요.

// fruits 배열에 '토마토'를 삭제하고 그 자리에 '사과', '청포도'를 추가해 주세요.
// fruits 배열의 첫 번째 요소를 삭제해 주세요.
// ages 배열에 마지막 요소를 삭제해 주세요.
// ages 배열의 2번, 3번 인덱스를 26, 28로 변경해 주세요.
// numbers 배열에 1, 2, 3, 5, 8, 9를 순서대로 추가해 주세요.
// 반복문을 활용해서 numbers 배열의 요소들 중 홀수를 모두 삭제해 주세요.
// 코드를 잘 작성하셨다면 다음과 같은 결과가 출력되어야 합니다.

// 청포도
// 사과
// 30
// 28
// undefined
// [ 2, 8 ]

// let fruits = ['레몬', '토마토', '딸기', '바나나'];
// let ages = [20, 24, 25, 29, 30, 33];
// let numbers = [];

// // fruits 배열에 '토마토'를 삭제하고 그 자리에 '사과', '청포도' 를 추가해 주세요.
// fruits.splice(1,1,'사과','청포도');


// // fruits 배열의 첫 번째 요소를 삭제해 주세요.
// fruits.splice(0,1);


// // ages 배열에 마지막 요소를 삭제해 주세요.
// ages.splice(5,1);


// // ages 배열의 2번, 3번 인덱스를 26, 28로 변경해 주세요.
// ages.splice(2,2,26,28);


// // numbers 배열에 1, 2, 3, 5, 8, 9를 순서대로 추가해 주세요.
// numbers.splice(0,1,1,2,3,5,8,9);


// // 반복문을 활용해서 numbers 배열의 요소들 중 홀수를 모두 삭제해 주세요.
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 !== 0) {
//     numbers.splice(i, 1);
//     i--;
//   }
// }


// // 테스트 코드
// console.log(fruits[1]);
// console.log(fruits[0]);
// console.log(ages[ages.length - 1]);
// console.log(ages[3]);
// console.log(numbers[3]);
// console.log(numbers);

// 태환이는 매년 학생회장 선거 때마다, 투표 집계 도우미 봉사를 하는데요. 작년까지는 표를 손수 세다가, 올해부터는 IT 시대에 더 적합한 솔루션을 개발하려고 합니다.

// 자바스크립트 배열 votes에는 학생회 투표 결과가 저장되어 있습니다. 배열 votes의 정보를 토대로, 객체 voteCounter에 후보별 득표수를 정리하는 것이 목표입니다.

// 예를 들어서  votes가 ['장태환', '신성순', '신성순', '장태환', '장태환']라고 가정하면, voteCounter는 {'장태환': 3, '신성순': 2}가 되어야 하는 거죠.

// 코드를 잘 작성했다면, 다음과 같은 결과가 출력되어야 합니다.

// { '이재식': 17, '이규하': 23 }

// // 투표 결과 리스트
// let votes = [
//     '이재식', '이재식', '이규하', '이규하', '이규하',
//     '이재식', '이재식', '이규하', '이규하', '이재식',
//     '이규하', '이규하', '이규하', '이규하', '이재식',
//     '이재식', '이규하', '이재식', '이재식', '이재식',
//     '이재식', '이재식', '이규하', '이규하', '이규하',
//     '이규하', '이규하', '이재식', '이규하', '이규하',
//     '이규하', '이규하', '이재식', '이규하', '이규하',
//     '이규하', '이재식', '이재식', '이재식', '이규하',
//   ];
  
//   // 후보별 득표수 객체
//   let voteCounter = {};
  
//   // votes 배열을 이용해서 voteCounter 객체를 정리하기
//   for (let name of votes) {
//     // 코드를 작성하세요.
//     if (name in voteCounter) {
//       voteCounter[name]+= 1;
//     } else {
//       voteCounter[name] = 1;
//     }
//   }
  
//   // 후보별 득표수 출력
//   console.log(voteCounter);

// 오늘은 풋살 동아리 경기가 있는 날입니다. 총인원 10명이서 5명씩 팀을 나누려고 하는데요.

// 실력이 비슷한 사람들끼리 가위바위보를 했고, 이긴사람이 0번 index, 진 사람이 1번 index 배열을 만들어 정리했습니다.

// 다음 groups 배열을 가지고, 이긴 사람끼리 그리고 진 사람끼리 팀을 나눠 teams 배열을 완성해 주세요.

// let groups = [
//   ['영준', '캡틴'], 
//   ['태순', '우재'],
//   ['재훈', '지웅'],
//   ['윤형', '동욱'],
//   ['규식', '소원'],
// ];

// let teams = [
//   [],
//   [],
// ];
// 코드를 잘 작성했다면 다음과 같은 결과가 출력되어야 합니다.

// [ '영준', '태순', '재훈', '윤형', '규식' ]
// [ '캡틴', '우재', '지웅', '동욱', '소원' ]

let groups = [
	['영준', '캡틴'], 
	['태순', '우재'],
	['재훈', '지웅'],
	['윤형', '동욱'],
	['규식', '소원'],
];

let teams = [
	[],
	[],
];

for (i in groups) {
  teams[0][i] = groups[i][0];
  teams[1][i] = groups[i][1];
}
// 테스트 코드
console.log(teams[0]);
console.log(teams[1]);