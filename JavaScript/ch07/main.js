
// 재테크를 시작하기로 마음먹은 규재는 오늘 은행에서 2년 만기 적금을 들었습니다.
// 이자율이 4.3%고 세금은 내지않는 혜택도 받았는데요. 큰 맘 먹고 시작한 재테크인 만큼 매월 80만원씩 저축하기로 했습니다.

// 그런데 막상 생각해보니 당분간 생활비가 빠듯할 것 같아서 60만원씩 저축할 껄 후회중인데요. 그래도 2년 뒤에 받게 될 금액으로 위안을 삼기 위해 적금 이자를 계산해주는 함수를 만들어보려고 합니다.

// 이자율(rate), 매월 납입 금액(payment), 납입 기간(term)을 파라미터로 전달하면, 만기 후 받게 될 이자를 출력해주는 interestCalculator 함수를 완성해 보세요.

// n = 납입 개월 수
// r = 이자율
// v = 월 납입금 
// 일 때,

// 이자 금액은 다음과 같은 식으로 계산할 수 있다고 합니다.

// interest = v * n * (n+1) / 2 * r / 12

// 코드를 잘 작성하셨다면, 다음과 같은 결과가 출력되어야 합니다.

// 860000
// 645000

// 여기에 코드를 작성해 주세요.

// function interestCalculator (r, v, n) {
//     interest = v * n * (n+1) / 2 * r / 12;
//     console.log(Math.round(interest));
// }

// // 이율이 4.3%일 때 매월 80만원씩 24개월 납입할 경우
// interestCalculator(0.043, 800000, 24);

// // 이율이 4.3%일 때 매월 60만원씩 24개월 납입할 경우
// interestCalculator(0.043, 600000, 24);

// 무한도전 열혈 시청자인 대준이는 2013년 무한도전 자유로 가요제 때 발표한 '그래, 우리 함께'라는 노래를 정말 좋아합니다. 대준이는 인터넷에서 가사를 검색해서 각 맴버별 파트를 그대로 복사해서 문자열로 lyrics라는 변수에 붙여넣었는데요.

// 방송 중에 울컥했던 정형돈씨의 장면이 가장 인상적이여서 형돈의 파트만 따로 떼어내 변수에 담아두고 싶어졌습니다.

// lyrics 문자열에 적절한 메소드를 활용해서 형돈의 부분만 떼어내고 hyungdon 변수에 재할당 해주세요.

// 코드를 잘 작성하셨다면, 다음과 같이 출력되어야 합니다.

// [형돈] 혼자 걷는 이 길이 막막하겠지만 느리게 걷는 거야 천천히 도착해도 돼

// let lyrics = "[재석]너에게 나 하고 싶었던 말 고마워 미안해 함께 있어서 할 수 있어서 웃을 수 있어[준하] 정말 고마웠어 내 손을 놓지 않아줘서 힘을 내볼게 함께 있다면 두렵지 않아[홍철] 내가 늘 웃으니까 내가 우습나 봐 하지만 웃을 거야 날 보고 웃는 너 좋아[명수] 자꾸만 도망치고 싶은데 저 화려한 큰 무대 위에 설 수 있을까? 자신 없어..[하하] 지금까지 걸어온 이 길을 의심하지는 마 잘못 든 길이 때론 지도를 만들었잖아[형돈] 혼자 걷는 이 길이 막막하겠지만 느리게 걷는 거야 천천히 도착해도 돼[길] 술 한 잔 하자는 친구의 말도 의미 없는 인사처럼 슬프게 들릴 때 날 찾아와";

// let hyungdon = null;

// // 코드를 작성해 주세요.
// // hyungdon = lyrics.lastIndexOf('[길]')
// hyungdon = lyrics.slice(236,279);
// // 테스트 코드
// console.log(hyungdon);


// 재훈이는 요즘 커피공부에 빠져있습니다.
// 에스프레소를 기본으로 하는 커피 메뉴의 레시피를 배웠는데요.

// 아메리카노는 에스프레소에 물을 더한 메뉴이고, 카페라떼는 에스프레소에 우유를 더한 메뉴라고 배웠습니다.

// 그래서 이 레시피를 배열로 한번 정리해 보려고 아래와 같이 코드를 작성했습니다.

// let espresso = ['espresso'];

// let americano = espresso;
// americano.push('water');

// let caffeLatte = espresso;
// caffeLatte.push('milk');

// // 테스트 코드
// console.log(espresso);
// console.log(americano);
// console.log(caffeLatte);
// 나름대로 효율적으로 코드를 작성했다고 생각했는데, 막상 코드를 실행해보니 이상한 결과가 나왔는데요.

// [ 'espresso', 'water', 'milk' ]
// [ 'espresso', 'water', 'milk' ]
// [ 'espresso', 'water', 'milk' ]
// 재훈이가 겪은 문제를 해결하면서, 카페 모카(mocha) 와 바닐라 라떼(vanillaLatte) 레시피도 만들어 주세요.
// 모카는 에스프레소에 우유와 초코 시럽을, 바닐라 라떼는 에스프레소에, 우유와 바닐라 시럽을 더한 메뉴입니다.

// 코드를 잘 작성하셨다면 다음과 같은 결과가 출력되어야 합니다.

// [ 'espresso' ]
// [ 'espresso', 'water' ]
// [ 'espresso', 'milk' ]
// [ 'espresso', 'milk', 'chocolateSyrup' ]
// [ 'espresso', 'milk', 'vanillaSyrup' ]

// // 아래 코드중 잘못된 부분을 수정해 주세요.
// let espresso = ['espresso'];

// let americano = espresso.slice();
// americano.push('water');

// let caffeLatte = espresso.slice();
// caffeLatte.push('milk');

// // 여기에 caffeMocha와 vanillaLatte 레시피를 만들어 주세요.
// let caffeMocha = caffeLatte.slice();
// caffeMocha.push('chocolateSyrup');

// let vanillaLatte = caffeLatte.slice();
// vanillaLatte.push('vanillaSyrup');

// // 테스트 코드
// console.log(espresso);
// console.log(americano);
// console.log(caffeLatte);
// console.log(caffeMocha);
// console.log(vanillaLatte);

function factorial(n) {
    let result = 1;
    let sum = 1;
    
    if (n > 0) {
      for (let i =1; i<=n; i++) {
      sum *= i
      }
      return sum;
    }
    return result;
  }
  
  // 테스트 코드
  console.log(factorial(12));
  console.log(factorial(6));
  console.log(factorial(3));
  console.log(factorial(0));