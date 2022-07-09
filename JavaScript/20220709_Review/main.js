// 체질량지수(BMI = body mass index)는 세계적으로 비만을 평가하는 공통 표준 지수로, 체질량지수를 계산하면 아래와 같은 기준으로 어느 정도 간단하게 비만을 진단할 수 있다고 합니다.

// 저체중 : 18.5 미만
// 정상체중 : 18.5 이상 23 미만
// 과체중 : 23이상 25미만
// 경도비만 : 25이상 30미만
// 중도비만 : 30이상 35미만
// 고도비만 : 35이상

// 단위: 체중 = kg, 신장 = cm
// 체질량지수 = 체중 / (신장 * 신장 / 10000)

// 홀쭉이님의 체질량지수는 17입니다.
// 코린이님의 체질량지수는 20입니다.
// 통통이님의 체질량지수는 24입니다.

// function bmiCalculator (name, weight, tall) {
//     BMI = weight / (tall * tall /10000);
//     console.log(`${name}님의 체질량지수는 ${BMI}입니다.`);
// }

// bmiCalculator('홀쭉이',43.52,160);
// bmiCalculator('코린이', 61.25, 175);
// bmiCalculator('통통이', 77.76, 180);

// let amount = 0;
// let term = 0;
// let rate = 0;
// let total = 0;

// function interestCalculator(amount, term, rate) {
//     interest = amount * term * rate / 100;
//     total = amount + interest;
//     console.log(`맡긴 금액은 ${amount}원 입니다.`);
//     console.log(`이자는 ${interest}원 입니다.`);
//     console.log(`최종 받을 금액은 ${total}원 입니다.`);
// }

// interestCalculator(3650000, 1, 4);

function calcWage (name, time, wage) {
    total = time * wage;
    console.log(`${name}님의 근무 시간은 총 ${time}시간이며, 최종 급여는 ${total}원 입니다.`);
}

calcWage('김윤식', 208, 11340);
calcWage('성규재', 175, 12160);
calcWage('손태웅', 161, 13070);
calcWage('허우선', 222, 10980);