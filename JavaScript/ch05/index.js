// let myVoca = {
//     function: '함수',
//  variable: '변수',
//  constant: '상수',
//  local: '지역의',
//  global: '전반적인'
 
// };

// console.log(myVoca);
// console.log(myVoca.local);
// console.log(myVoca.constant);
// console.log(myVoca.function);

// 시원이는 지난번에 외웠던 영어단어 5가지 중에서 function, constant, local은 이제 확실하게 다 외웠습니다.

// 오늘 외울 단어는

// [extend] = 확장하다
// [export] = 내보내다
// [import] = 불러오다
// [default value] = 기본값

// 총 4가지입니다.

// 지난번에 작성한 코드를 참고해서 vocab 변수를 수정하지 않은 채로,

// 이미 다 외워버린 단어 3개는 삭제하고
// 오늘 외울 단어는 추가해 주세요.
// 마지막 줄에서 default value의 뜻을 콘솔에 출력해 주세요.
// 코드를 잘 작성하셨다면 아래와 같은 출력 결과가 나타나야 합니다.

// { variable: '변수', global: '전반적인' }
// undefined
// {
//   variable: '변수',
//   global: '전반적인',
//   extend: '확장하다',
//   export: '내보내다',
//   import: '불러오다',
//   'default value': '기본값'
// }
// 내보내다
// 기본값

// let myVoca = {
// 	function: '함수',
// 	variable: '변수',
// 	constant: '상수',
// 	local: '지역의',
// 	global: '전반적인',
// };

// // 1. 이미 외운 단어 3개를 삭제해 주세요.
// delete myVoca.function;
// delete myVoca.constant;
// delete myVoca.local;


// console.log(myVoca);
// console.log(myVoca.constant);


// // 2. 오늘 외울 단어 4개를 추가해 주세요.
// myVoca.extend = '확장하다'
// myVoca.export = '내보내다'
// myVoca.import = '불러오다'
// myVoca['default value'] = '기본값';

// console.log(myVoca);
// console.log(myVoca.export);


// // 3. default value의 뜻을 출력해 주세요.
// console.log(myVoca['default value'])

// 지난번 과제에서 단어장 객체에 단어를 추가하고 삭제하는 연습을 해봤는데요.

// 이번에는 단어장 객체에 단어를 추가하고 삭제하고, 콘솔에 출력도 해주는 다양한 메소드를 만들어 사용해봅시다.

// 단어를 추가하는 addVoca메소드를 만들어 주세요. addVoca메소드는 영어단어와 뜻, 총 두 개의 문자열 값을 파라미터로 전달받아서 myVoca 객체에 새로운 프로퍼티를 추가하는 메소드 입니다.
// 단어를 삭제하는 deleteVoca메소드를 만들어 주세요.deleteVoca메소드는 영단어 문자열을 파라미터로 전달받아서 해당하는 단어를 삭제하는 메소드 입니다.
// 단어를 출력하는 printVoca메소드를 만들어 주세요. printVoca메소드는 영어단어 문자열을 파라미터로 전달받아서 특별한 포멧의 문자열을 콘솔에 출력하는 메소드 입니다. 특별한 포멧은 "[영어단어]"의 뜻은 "[뜻]"입니다.로 제작해 주세요.
// 코드를 잘 작성하셨다면,

// 다음과 같은 결과가 출력되어야 합니다.

// {
//     addVoca: [Function: addVoca],
//     deleteVoca: [Function: deleteVoca],
//     printVoca: [Function: printVoca],
//     parameter: '매개 변수',
//     element: '요소',
//     property: '속성'
//   }
//   {
//     addVoca: [Function: addVoca],
//     deleteVoca: [Function: deleteVoca],
//     printVoca: [Function: printVoca],
//     property: '속성'
//   }
//   "property"의 뜻은 "속성"입니다.

// let myVoca = {
//     addVoca: function (key, value) {
//       myVoca[key] = value;
//     },
//     deleteVoca: function (key) {
//       delete myVoca[key];
//     },
//     printVoca: function (key) {
//       console.log(`"${key}"의 뜻은 "${myVoca[key]}"입니다.`);
//     },
//   };
  
//   // addVoca메소드 테스트 코드
//   myVoca.addVoca('parameter', '매개 변수');
//   myVoca.addVoca('element', '요소');
//   myVoca.addVoca('property', '속성');
//   console.log(myVoca);
  
//   // deleteVoca메소드 테스트 코드
//   myVoca.deleteVoca('parameter');
//   myVoca.deleteVoca('element');
//   console.log(myVoca);
  
//   // printVoca메소드 테스트 코드
//   myVoca.printVoca('property');

// 혜순이와 민순이는 이번에 SQL 자격증 시험에 응시했는데요.

// 아래는 두 사람의 각 과목별 점수를 정리한 객체입니다.

// let hyesoonScore = {
//   '데이터 모델링의 이해': 10,
//   '데이터 모델과 성능': 8,
//   'SQL 기본': 22,
//   'SQL 활용': 18,
//   'SQL 최적화 기본 원리': 20,
// };

// let minsoonScore = {
//   '데이터 모델링의 이해': 14,
//   '데이터 모델과 성능': 8,
//   'SQL 기본': 12,
//   'SQL 활용': 4,
//   'SQL 최적화 기본 원리': 16,
// };
// 자격증 합격 기준은 총점이 60점 이상인데요.

// 파라미터로 객체를 전달받고, 각 과목들의 점수를 모두 합산해서 시험 결과를 알려주는 passChecker 함수를 완성해 주세요!
// 합격 기준을 충족할 경우 '축하합니다! 합격입니다!' 라는 문자열을, 충족하지 못할 경우 '아쉽지만 불합격 입니다..'라는 문자열을 출력해야 합니다.

// 코드를 잘 작성하셨다면, 다음과 같은 결과가 출력되어야 합니다.

// 축하합니다! 합격입니다!
// 아쉽지만 불합격입니다..

// let hyesoonScore = {
//     '데이터 모델링의 이해': 10,
//     '데이터 모델과 성능': 8,
//     'SQL 기본': 22,
//     'SQL 활용': 18,
//     'SQL 최적화 기본 원리': 20,
//   };
  
//   let minsoonScore = {
//     '데이터 모델링의 이해': 14,
//     '데이터 모델과 성능': 8,
//     'SQL 기본': 12,
//     'SQL 활용': 4,
//     'SQL 최적화 기본 원리': 16,
//   };
  
//   function passChecker(scoreObject) {
  
//     let totalScore = 0;
  
//     for (let subject in scoreObject) {
//       totalScore += scoreObject[subject];
//     }
  
//     if (totalScore >= 60) {
//       console.log('축하합니다! 합격입니다!');
//     } else {
//       console.log('아쉽지만 불합격입니다..');       
//     }
//   }
  
//   passChecker(hyesoonScore);
//   passChecker(minsoonScore);


//   회사에서 가장 성실하기로 유명한 재상이는 지난달에 이어 이번 달에도 이달의 우수사원으로 뽑혀 감회가 새롭습니다.

// 문득, 그동안 고생한 지난날이 머릿속을 스쳐지나면서 자신이 입사한 지 얼마나 지났는지도 궁금해졌는데요. 
// 오늘은 날짜는 2112년 8월 24일이고, 재상이의 입사일은 2109년 7월 1일입니다. Date객체와 메소드를 활용해서 재상이가 입사한 지 며칠째인지를 계산해주는 workDayCalc 함수를 완성해 주세요.

// (만약 8월 24일에 입사했고, 오늘이 8월 24일이면 0일이 아니라, '입사한 지 1일째'입니다.)

// 코드를 잘 작성하셨다면 다음과 같은 결과가 출력되어야 합니다.

// 오늘은 입사한 지 1151일째 되는 날 입니다.

let today = new Date(2112, 8, 24);
let jaeSangStart = new Date(2109, 7, 1);

function workDayCalc(startDate) {
  
  sec = ((today.getTime() - startDate.getTime())/1000);
  minute = sec / 60;
  hour = minute / 60;
  day = (hour / 24) +1;
  console.log(`오늘은 입사한 지 ${day}일째 되는 날 입니다.`);
}

workDayCalc(jaeSangStart);