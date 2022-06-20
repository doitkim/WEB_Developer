// CH01

// // 실습과제
// // 커피를 만들 때 들어가는 재료들의 칼로리는 다음과 같습니다.

// // 에스프레소 : 10 kCal
// // 우유 : 170 kCal
// // 초코시럽 : 50 kCal
// // 휘핑크림 : 60 kCal

// // 우리가 판매했던 메뉴들의 칼로리를 한번 계산해 보려고 하는데요, 각 재료의 이름을 변수 이름으로 사용하여, 메뉴들의 칼로리를 저장해 주세요.
// // 변수를 사용하는 테스트 코드는 이미 작성되어 있으니 별도로 편집하지 않으셔도 됩니다. 여러분은 변수를 선언하고 값을 입력해 주세요!

// // 변수를 제대로 작성했다면 콘솔에는 아래와 같이 출력되어야 합니다.

// let espresso = 10;
// let milk = 170;
// let chocolateSyrup = 50;
// let whippedCream = 60;

// // 메뉴별 칼로리 테스트
// console.log(espresso); // 에스프레소 칼로리
// console.log(espresso + milk); // 라떼 칼로리
// console.log(espresso + chocolateSyrup + milk); // 모카 칼로리
// console.log(espresso + chocolateSyrup + milk + whippedCream); // 모카(휘핑 추가) 칼로리

// 실습과제

// 올림픽 메달 수여식에서는 메달리스트들의 단상 위에 각 선수의 국기가 게양되고, 금메달리스트의 국가가 울려 퍼집니다.

// 올림픽 메달 수여식에서 울려 퍼지는 애국가는 왠지 모를 자랑스러움과 가슴 벅참이 있는데요. 이때 금메달리스트 스스로도 눈물을 보이는 경우를 흔치않게 볼 수 있습니다.

// 이런 자랑스러운 애국가를 출력하는 함수를 만들어 봅시다.

// 애국가 가사를 들여다보면 반복되는 후렴구가 있죠? 이 후렴구를 한 줄에 한 소절씩 출력하는 printChorus 함수를 만들어 주세요.

// 함수를 제대로 작성했다면 콘솔에는 아래와 같이 출력되어야 합니다.

// '무궁화 삼천리 화려 강산'
// '대한 사람 대한으로 길이 보전하세'

// function printChorus() {
//     console.log('무궁화 삼천리 화려 강산')
//     console.log('대한 사람 대한으로 길이 보전하세')
// }

// // 애국가 가사
// console.log('1절');
// console.log('동해 물과 백두산이 마르고 닳도록');
// console.log('하느님이 보우하사 우리나라 만세');
// printChorus();

// console.log('2절');
// console.log('남산 위에 저 소나무 철갑을 두른 듯');
// console.log('바람서리 불변함은 우리 기상일세');
// printChorus();

// console.log('3절');
// console.log('가을 하늘 공활한데 높고 구름 없이');
// console.log('밝은 달은 우리 가슴 일편단심일세');
// printChorus();

// console.log('4절');
// console.log('이 기상과 이 맘으로 충성을 다하여');
// console.log('괴로우나 즐거우나 나라 사랑하세');
// printChorus();

// 여기에 코드를 입력해 주세요.
// 체질량지수(BMI = body mass index)는 세계적으로 비만을 평가하는 공통 표준 지수로, 체질량지수를 계산하면 아래와 같은 기준으로 어느 정도 간단하게 비만을 진단할 수 있다고 합니다.

// 저체중 : 18.5 미만
// 정상체중 : 18.5 이상 23 미만
// 과체중 : 23이상 25미만
// 경도비만 : 25이상 30미만
// 중도비만 : 30이상 35미만
// 고도비만 : 35이상

// 체질량지수를 구하는 공식은 다음과 같습니다.

// 단위: 체중 = kg, 신장 = cm
// 체질량지수 = 체중 / (신장 * 신장 / 10000)
// 위 공식을 참고해서
// 이름(name)과 체중(weight), 그리고 신장(tall)을 파라미터로 입력받고
// 체질량지수를 계산해주는 bmiCalculator함수를 작성해 주세요.

// 함수를 잘 작성하셨다면 아래와 같이 출력되어야 합니다.

// function bmiCalculator(name, weight, tall) {
//     BMI = weight / (tall * tall / 10000);
//     console.log(BMI);
// }

// // 테스트
// bmiCalculator('홀쭉이', 43.52, 160);
// bmiCalculator('코린이', 61.25, 175);
// bmiCalculator('통통이', 77.76, 180);

// 사회초년생 동식이는 요즘 재테크 공부를 열심히 하고 있습니다.
// 차곡차곡 월급을 모아서 적당히 목돈을 만들었는데요. 목돈을 나눠서 조금씩 적금을 드는 것보다는 정기예금을 넣는 게 더 유리하다는 걸 배웠습니다.

// 마침 은행을 갔더니 이자율 4%에 세금까지 내지 않아도 되는 정기예금 상품을 추천받아서 그동안 조금씩 모은 돈을 1년 동안 넣어두기로 하고 왔는데요.

// 즐거운 마음으로 집에 돌아와서 1년 뒤에 얼마를 받을 수 있을지를 계산하는 코드를 작성해보려고 합니다.

// 검색해보니 이자 금액을 계산하기 위한 식은 아래와 같은데요.

// 맡긴 금액(원) * 맡기는 기간(년) * 이자율(%) / 100

// 맡긴 금액(amount)과 맡기는 기간(term), 이자율(rate)을 입력받으면 이자 금액을 계산해서 결괏값을 전달해 주는 interestCalculator 함수를 작성해 주세요.

// 함수를 잘 작성하셨다면 아래와 같이 출력되어야 합니다.

// 출력예시
// 맡긴 금액은 3650000원 입니다.
// 이자는 146000원 입니다.
// 최종 받을 금액은 3796000원 입니다.

// function interestCalculator (myMoney, saveTerm, interestRate) {
//     rate = myMoney * saveTerm * interestRate / 100;
//     return rate;
// }
  
//   // 조건 입력 테스트
//   let myMoney = 3650000; // 맡긴 금액 (원)
//   let saveTerm = 1; // 맡기는 기간 (년)
//   let interestRate = 4; // 이자율 (%)
  
//   // 수령액 계산 테스트
//   let myInterest = interestCalculator(myMoney, saveTerm, interestRate);
//   let totalMoney = myMoney + myInterest;
  
//   // 출력 테스트
//   console.log('맡긴 금액은 ' + myMoney + '원 입니다.');
//   console.log('이자는 ' + myInterest + '원 입니다.');
//   console.log('최종 받을 금액은 ' + totalMoney + '원 입니다.');

// 실습과제

// 진성이는 이번에 노트북을 새로 선물 받았습니다. 전원을 켜고 확인해보니 저장 가능한 데이터의 용량이 4TB였습니다.

// 우리가 흔히 사용하는 파일들의 용량 단위는 보통 GB 혹은 MB 단위인데요. 갑자기 2TB는 몇 GB, 몇 MB 인지 궁금해졌습니다.

// 인터넷에 검색해보니 데이터 용량 단위는
// 1MB = 1024KB
// 1GB = 1024MB
// 1TB = 1024GB 라고 합니다.

// 이 정보를 참고해서 TB 단위를 입력하면 GB 단위를 출력해주는 teraToGiga 함수와 TB 단위를 입력하면 MB 단위를 출력해주는 teraToMega 함수 두 가지 함수를 작성해 주세요.

// 각 함수는 숫자 값을 파라미터로 받고 첫 번째 줄에서는 입력받은 용량을, 두 번째 줄에서는 변환한 용량을 출력해야 합니다.

// 함수를 잘 작성하셨다면 아래와 같이 출력되어야 합니다.

// 출력 예시
// 2TB는
// 2048GB 입니다.
// 2TB는
// 2097152MB 입니다.

function teraToGiga (terabyte) {
    gigabyte = terabyte * 1024;
    console.log(`${gigabyte}GB 입니다.`)
}

function teraToMega (terabyte) {
    megabyte = terabyte * 1024 *1024;
    console.log(`${megabyte}MB 입니다.`)
}
// TB -> GB 테스트
teraToGiga(2);
// TB -> MB 테스트
teraToMega(2);