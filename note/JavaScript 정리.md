주석 (코멘트) // , /* */

//console.log('Hello Codeit');

자료형 (정수, 실수, 문자열, 불린)

추상화
- 여러 가지 사물이나 개념에서 공통되는 특성이나 속성 따위를 추출하여 파악하는 작용
- 구체적인 정보는 숨기고 꼭 필요한 핵심만을 뽑아내는 것
- 복잡한 것들을 목적에 맞게 단순화 하는 것

변수

변수를 만들 때 이름을 아무렇게나 지으면 안 됩니다. 이름을 지을 때는 아래와 같이 몇 가지 룰을 따라주세요!

꼭 지켜야 하는 룰 (지키지 않으면 오류)
(1) JavaScript 식별자는 '문자(a-z, A-Z)', '밑줄(_)' 혹은 '달러 기호($)'로 시작해야 합니다. 두 번째 글자부터는 '숫자(0-9)'도 가능합니다.

(2) '대문자'와 '소문자'는 구별합니다. myname과 myName은 다른 이름입니다.

(3) '예약어(JavaScript가 찜해놓은 단어)'는 사용하면 안 됩니다. 예를 들어서 if, for, let 같은 것들이 있습니다. 강의를 듣다 보면 어떤 예약어가 있는지 차차 알게 되실 겁니다.

지키면 좋은 룰 (더 좋은 스타일을 위해)
위에 나와 있는 꼭 지켜야 하는 룰들만 지켜도 오류 없이 코드가 돌아갈 것입니다. 하지만 돌아가기만 한다고 다 좋은 코드는 아닙니다. 프로그래밍은 혼자 하는 게 아니기 때문이죠. 여러 사람과 협업할 때 여럿이 일관성 있는 코드를 쓰기 위해서는 어느 정도의 약속이 필요합니다.

나물좀줘! = 나 물 좀 줘? 나물 좀 줘?
사랑해보고싶어! = 사랑해 보고 싶어? 사랑 해보고 싶어?

똑같은 글이지만 띄어쓰기라는 약속을 지켜주면 우리가 전달하고자 하는 문장의 의미를 조금 더 명확하게 할 수 있겠죠? 우리가 코드를 작성할 때도 마찬가지입니다. 코드를 작성하는 일은 여러 사람들과의 협업이기도 하면서 스스로와의 소통이기도 합니다. 우리는 이런 소통을 원활히 하기 위해서 아래와 같은 약속들을 함께 지킵시다 :)

(1) 의미 없는 이름은 좋지 않습니다.

let a, b, c, d;
향후 복잡한 프로그램을 짜게 되면 변수와 함수를 여기저기서 적절히 활용해야 하는데, 이름이 a, b, c, d처럼 의미 없이 설정되어 있으면 어떤 값을 저장해뒀는지 찾기도 어렵고 활용하기도 어렵습니다. 또한 프로그램의 가독성이 떨어져서 나중에 스스로 프로그램을 살펴볼 때, 그리고 공동 작업을 할 때 매우 불편한 상황이 발생합니다. 그래서 프로그래밍 초반부터 적절한 이름을 짓는 습관을 들이는 것이 좋습니다!

(2) 너무 추상적인 이름은 좋지 않습니다.

let name; // 너무 추상적인 이름
상황에 따라 그냥 name이라는 변수명이 적합한 상황도 있을 수 있겠지만, 긴 프로그램을 쓰다 보면 다양한 '이름'들이 있기 때문에 name은 너무 추상적일 수 있습니다. 그럴 때는 조금 더 구체적인 이름으로 이해하기 쉽게 만들어주세요!

(3) 모든 변수 이름은 'camelCase'로 쓰는 것이 좋습니다.

변수명에는 띄어쓰기가 불가능하기 때문에, 띄어쓰기 역할을 대신 할 무언가가 필요합니다. 그중 하나가 'camelCase'라는 것인데요. 첫 번째 글자는 소문자로 하고, 띄어쓰기가 있는 각 단어의 첫 문자를 대문자로 표기하는 방식입니다.

let bad_variable_name; // 비추천 방식
let goodVariableName; // 추천 방식
중간중간의 대문자가 낙타(camel)의 혹처럼 생겨서 camelCase라고 부릅니다.

사실은 이 밖에도 더 좋은 코드 스타일을 위해 다양한 약속들을 만들어 볼 수 있는데요. 이런 약속들을 스타일 가이드혹은 코딩 컨벤션이라고 부릅니다. 
그런데 우리가 처음 프로그래밍을 막 배우기 시작했는데, 당장은 자바스크립트 문법들도 잘 모르고, 문법을 안다고 해도 어떤 스타일이 더 좋고 나쁜지 판단하기는 현실적으로 불가능하겠죠?
다행히 아래에 몇몇 유명한 그룹에서 JavaScript 코드를 쓸 때 추천하는 방식들을 정리해놓은 링크가 있습니다. 
들어가서 확인해보시면 좋은 예시와 나쁜 예시를 친절하게 비교도 해주는 데요.
위의 문서들에서도 공통적으로 변수 이름은 camelCase를 선호하는 것을 확인할 수 있습니다.
이처럼 다른 사람들이 미리 정해놓은 여러 스타일 가이드 중 하나를 선택해서 따른다거나 혹은 여러 스타일 가이드를 비교해보고 내가 필요한 주제에서 공통으로 선호되는 부분들을 추려내서 사용해도 이전보다는 훨씬 더 의미 있는 코드를 작성할 수가 있습니다.

https://github.com/ParkSB/javascript-style-guide
https://google.github.io/styleguide/jsguide.html
https://www.w3schools.com/js/js_conventions.asp
https://standardjs.com/rules-kokr.html
https://github.com/rwaldron/idiomatic.js/tree/master/translations/ko_KR

참고하기
코드 에디터는 코드를 쉽게 작성할 수 있게 자동화된 기능들이 있습니다. 그래서 만약 자동화된 기능이 우리가 지키려고 하는 스타일 가이드와 일치하지 않는다면 에디터에서 몇 가지 설정을 바꿔주어야 하는데요.
코드 에디터마다 다르겠지만 일반적으로 들여쓰기(indentation) 부분은 신경을 써야 하는 경우가 많습니다.

여러 자바스크립트 스타일 가이드를 살펴보면 대부분 공통적으로 들여쓰기를 space 2칸으로 사용하도록 권장하는 데요.
이 레슨에서는 vscode 에서 간단하게 indentation을 설정하는 방법을 알려드리겠습니다.

먼저 VSCode를 실행하고, 설정창(Settings)을 열어주세요.
단축키 Ctrl + , (맥에서는 Cmd + ,)입니다.

Step1: 상단의 검색창에서 editor tab이라고 검색한 다음.
Step2: Editor: Detect Indentation 은 체크 해제해 주세요.
Step3: Editor: Tab Size 는 2로 변경해 주세요.
Step4: 기본 값이라 변경할 필요는 없지만 Editor: Insert Spaces 부분이 체크 되어 있는지만 한 번 확인해주세요.

이렇게 되면 들여쓰기 관련된 설정은 모두 완료됬습니다! 간단하죠? :)
그런데 기존에 작성한 코드에는 바로 반영이 되지 않을 텐데요.

기존에 작성했던 파일로 돌아가서 단축키 Ctrl + a (맥에서는 Cmd + a)로 전체선택 해주시고
마우스 오른쪽 클릭으로 나타나는 메뉴에서 Fomat Document을 클릭해 주세요.
단축키는 Shift + Alt + F (맥에서는 Shift + Option + F)입니다.

이제 띄어쓰기 4칸이었던 들여쓰기가 2칸으로 잘 바뀌었나요?
이 설정값을 유지한다면 앞으로 기본 들여쓰기 간격은 띄어쓰기 2칸을 기본으로 사용하게 됩니다.

함수 선언

function 함수명() {
    명령문;
}

함수 호출
    함수명();

함수 Parameter(매개변수)

지난 시간에 불린형에 대해서 알아봤는데요. 이번 시간에는 지난 시간에 배운 것들을 활용해서 다양한 방식으로 불린형을 좀 더 연습해 봅시다.

// 불린 (Boolean)
console.log(2 < 1 && 'Codeit' !== 'Codeit');

2 < 1는 false고, 'Codeit' !== 'Codeit'도 false이기 때문에 이 코드는 false && false가 되어서 실행했을 때 false가 출력됩니다. 
그런데 사실, AND연산을 할 때 왼쪽이 false일 경우 오른쪽은 볼 필요도 없이 결과가 false입니다. AND연산은 양쪽이 모두 true인 경우에만 true가 리턴되기 때문이죠!
그래서 불린 연산자가 하나만 있을 때는 연산자를 기준으로 왼쪽부터 순서대로 확인하면 됩니다.

그럼 이 코드는 어떨까요?

// 불린 (Boolean)
console.log(7 !== 7 || 4 < 3);

이번에는 OR 연산인데요. OR연산의 경우에는 AND연산과 반대로 왼쪽이 true라면, 오른쪽은 볼 필요도 없이 결과는 true가 됩니다.
그런데 마침 OR연산의 왼쪽, 그러니까 7 !== 7이 false이기 때문에 이제 오른편도 확인해야 하네요.
4 < 3은 false이기 때문에 결과적으로 위 연산은 false OR false가 돼서 코드를 실행해보면 false가 출력됩니다.

마지막으로 하나만 더 해볼까요?

// 불린 (Boolean)
let x = 3;
console.log(x > 4 || !(x > 2));
이번에는 변수까지 활용해서 첫 번째 x라는 변수에 3이라는 값을 저장했습니다.
이번에는 조금 복잡해 보이니깐 여기 아래 코드를 하나 더 복사해서 부분부분 같이 수정하면서 확인해 봅시다.

// 불린 (Boolean)
let x = 3;
console.log(x > 4 || !(x > 2));
console.log(x > 4 || !(x > 2));

이번에도 순서대로 왼쪽의 비교연산부터 정리해 봅시다.

x > 4는 3 > 4가 되죠?

// 불린 (Boolean)
let x = 3;
console.log(x > 4 || !(x > 2));
console.log(3 > 4 || !(x > 2));
3 > 4는 false이기 때문에 오른쪽도 살펴봐야합니다.

// 불린 (Boolean)
let x = 3;
console.log(x > 4 || !(x > 2));
console.log(false || !(x > 2));
다음은 NOT연산이 있는데요. 그런데 어떤 값을 NOT연산 해야되는지 아직은 모르니깐, 괄호 안의 비교 연산을 정리해 봅시다.

x > 2는 3 > 2가 되죠?

let x = 3;
console.log(x > 4 || !(x > 2));
console.log(false || !(3 > 2));
3 > 2는 true입니다.

let x = 3;
console.log(x > 4 || !(x > 2));
console.log(false || !true);
그럼 이제 NOT연산도 정리해 줍시다.

let x = 3;
console.log(x > 4 || !(x > 2));
console.log(false || false);
결과적으로 위 연산은 false || false가 돼서

코드를 실행하면 false가 두 번 출력되는걸 확인할 수 있습니다.

let x = 3;
console.log(x > 4 || !(x > 2));
console.log(false);
false
false

연산자의 우선순위

하나의 연산식에 둘 이상의 연산자가 있는 경우, 실행 순서는 연산자의 우선순위(precedence)에 따라 결정됩니다.

5 + 3 * 6라는 기본적인 사칙연산의 식이 있을 때 곱셈이 먼저, 그 후에 덧셈이 일어난다는 것을 알고 계시죠? 이런 개념이 바로 연산자 우선순위입니다. 여기서 곱셈은 덧셈보다 더 높은 우선순위를 가진다고 할 수 있는 것이죠.

그리고 우리가 의도적으로 우선순위를 조절 하고 싶을 때도 사칙연산처럼 괄호를 사용하면 됩니다. (5 + 3) * 6라는 식에서는 곱셈보다 덧셈을 먼저 하는 것 처럼 말이죠.

자바스크립트에는 기본적인 사칙연산 외에도 다양한 연산자가 있습니다. 
그리고 이 모든 연산자에는 우선순위가 매겨져 있는데요. 우선순위 숫자가 클수록 먼저 실행됩니다.  순위가 같으면 대부분은 왼쪽부터 시작해서 오른쪽으로 연산이 수행되는데요.
(간혹  = 이나 ** 같은 몇몇 연산은 반대로 하는 경우도 있습니다.)

아래는 각 연산자들에 대한 우선순위를 정리한 표 입니다. 
잘 쓰이지 않거나, 특별한 경우에만 쓰이는 것들은 생략해 두었고, 주로 사용하는 것들에 대해서만 간단하게 요약해 놓았습니다. 생략된 부분이 궁금하시다면 노트 가장 아래 링크를 참조해 주세요! :)

다음 예시를 봅시다.

typeof (6 * 2 === 11 || 13 - 7 < 7 && !true);
일단 우선순위가 꽤 높은 typeof 연산자가 나오긴 했지만, 가장 높은 우선순위인 괄호가 있으니 괄호 내부를 먼저 연산해야 합니다.
그런데 괄호 내부에서도 다양한 연산자가 있습니다. 그럼 다시 이 괄호 내부에서 가장 높은 우선순위는 NOT연산자를 먼저 연산해줍시다.
true의 NOT연산이니깐, false가 되겠죠?

typeof (6 * 2 === 11 || 13 - 7 < 7 && false);
그 다음으로 높은 우선순위는 사칙연산이 되겠네요. 위 식에서는 곱셈과 뺄셈이 있으니 각각의 연산을 실행하면 아래와 같은 코드가 되겠죠?

typeof (12 === 11 || 6 < 7 && false);
이제 남은 연산자들 중에서 우선 순위가 가장 높은 연산자는 비교 연산입니다. 일치와 미만 연산을 해주면 아래와 같은 결과가 됩니다.

typeof (false || true && false);
이제 남은건 논리 연산입니다. 자칫 AND와 OR연산이 같은 우선순위라고 착각해서 순위가 같으니 왼쪽부터 차례대로 연산을 하려는 실수를 할 수도 있는데요. 우선순위 표를 자세히 살펴보시면 AND연산이 OR연산보다 우선순위가 한 단계 높습니다.

typeof (false || false);
true && false의 연산 결과는 false이니까, 결과적으로 괄호내부의 마지막 연산은 false || false가 됩니다.

typeof false;
결국 이 연산의 마지막은 typeof false가 되고, 이 모든 연산의 결과값은 문자열 'boolean'이 됩니다.

이렇게 복잡한 연산식을 작성할 때는 각 연산자들의 우선순위를 고려해서 작성해야 본인이 의도한 결과값을 확실하게 얻어낼 수 있고, 혹은 다른사람이 작성한 복잡한 연산식을 마주하게 될 때도, 이렇게 우선순위를 생각해서 이해를 하셔야 작성자의 의도를 명확하게 파악할 수 있습니다.

혹시 더 자세한 연산자 우선순위가 궁금하시다면 아래 링크를 참고해 보세요! :)

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

복합 할당 연산자
할당 연산자와 결합해서 자주 쓰이는 표현을 더 간략하게 쓸 수 있게 해주는 연산자를 복합 할당 연산자(Compound assignment operators)라고 합니다.

// 다음 두 줄은 같습니다
x = x + 1;
x += 1;

// 다음 두 줄은 같습니다
x = x + 2;
x += 2;

// 다음 두 줄은 같습니다
x = x * 2;
x *= 2;

// 다음 두 줄은 같습니다
x = x - 3;
x -= 3;

// 다음 두 줄은 같습니다
x = x / 2;
x /= 2;

// 다음 두 줄은 같습니다
x = x % 7;
x %= 7;
앞으로 x += 1과 같은 문법을 보게 되면, 당황하지 마시고 이 복합 할당 연산자를 떠올리시길 바랍니다 :)

증가(increment), 감소(decrement) 연산자
한 가지 팁을 더 드리자면, 변수의 값을 1씩 증가시키거나 감소시킬 때는 복합 할당 연산자보다 더 간략하게 쓸 수 있는 증가연산자, 감소연산자를 사용할 수도 있습니다.
더하기 기호를 연달아 쓰거나(++), 빼기 기호를 연달아 쓰면 되는데요(—).

아래 코드를 참고해 보세요! :)

// 다음 세 줄은 같은 의미입니다.
x = x + 1;
x += 1;
x++;

// 다음 세 줄은 같은 의미입니다.
x = x - 1;
x -= 1;
x--;

지난 시간에 switch문에 대해서 살펴봤는데요.

if문을 활용하면 switch문을 if문으로 대체할 수도 있습니다.

let myChoice = 2;

switch(myChoice) {
  case 1:
    console.log('토끼를 선택한 당신, ...');
    break;
  case 2:
    console.log('고양이를 선택한 당신, ...');
    break;
  case 3:
    console.log('코알라를 선택한 당신, ...');
    break;
  case 4:
    console.log('강아지를 선택한 당신, ...');
    break;
  default:
    console.log('1에서 4사이의 숫자를 선택해 주세요.'); 
}

if (myChoice === 1) {
  console.log('토끼를 선택한 당신, ...');
} else if (myChoice === 2) {
  console.log('고양이를 선택한 당신, ...');
} else if (myChoice === 3) {
  console.log('코알라를 선택한 당신, ...');
} else if (myChoice === 4) {
  console.log('강아지를 선택한 당신, ...');
} else {
  console.log('1에서 4사이의 숫자를 선택해 주세요.');
}
이제 이런 코드들은 어느 정도 이해할 수 있으시죠?
동작은 switch문으로 만든 원리와 똑같이 동작합니다. 이 상태로 코드를 실행해보면, 동일한 결과가 두 번 나타나는 걸 확인할 수 있는데요.

그런데 보시면 if문 쪽을 보시면 myChoice를 조건 값과 함께 비교하는 조건식을 매번 작성해야 하는 번거로움도 있고, 코드 길이만 봤을 땐 좀 더 간결한 것 같지만, 뭔가 switch문이 조금 더 눈에 잘 읽히는 것 같죠?

if문과 switch문 모두 특정한 조건에 따라 다르게 동작하는 코드를 만들 수 있지만, 어떤 넓은 범위를 만족하는 조건식을 만들 때는 if문을 활용하는 것이 좀 더 효과적이고 특정한 값에 일치하는 조건을 만들 때는 switch문이 좀 더 효과적입니다.

그런데 switch문이 익숙하지 않으신 분은 이렇게 if else문으로도 대체가 가능하니깐 switch문의 구조가 너무 어려우신 분은 if else문을 활용하셔도 좋습니다.

한 가지 주의할 점은 조건식에서 등호를 반드시 3개를 입력해 주어야 한다는 점인데요. switch문은 암시적 형 변환을 허용하지 않기 때문입니다.

let myChoice = '2';

switch(myChoice) {
  case 1:
    console.log('토끼를 선택한 당신, ...');
    break;
  case 2:
    console.log('고양이를 선택한 당신, ...');
    break;
  case 3:
    console.log('코알라를 선택한 당신, ...');
    break;
  case 4:
    console.log('강아지를 선택한 당신, ...');
    break;
  default:
    console.log('1에서 4사이의 숫자를 선택해 주세요.'); 
}

if (myChoice === 1) {
  console.log('토끼를 선택한 당신, ...');
} else if (myChoice === 2) {
  console.log('고양이를 선택한 당신, ...');
} else if (myChoice === 3) {
  console.log('코알라를 선택한 당신, ...');
} else if (myChoice === 4) {
  console.log('강아지를 선택한 당신, ...');
} else {
  console.log('1에서 4사이의 숫자를 선택해 주세요.');
}
위 코드 처럼

변수 myChoice에 숫자 2가 아니라 문자열 '2'를 할당하고 실행해보면 default문과, else문이 실행되는 모습을 확인할 수 있는데요.

1에서 4사이의 숫자를 선택해 주세요.
1에서 4사이의 숫자를 선택해 주세요.
이 상태에서 else if문을 등호 두 개로 비교하면 어떻게 될까요?

let myChoice = '2';

switch(myChoice) {
  case 1:
    console.log('토끼를 선택한 당신, ...');
    break;
  case 2:
    console.log('고양이를 선택한 당신, ...');
    break;
  case 3:
    console.log('코알라를 선택한 당신, ...');
    break;
  case 4:
    console.log('강아지를 선택한 당신, ...');
    break;
  default:
    console.log('1에서 4사이의 숫자를 선택해 주세요.'); 
}

if (myChoice == 1) {
  console.log('토끼를 선택한 당신, ...');
} else if (myChoice == 2) {
  console.log('고양이를 선택한 당신, ...');
} else if (myChoice == 3) {
  console.log('코알라를 선택한 당신, ...');
} else if (myChoice == 4) {
  console.log('강아지를 선택한 당신, ...');
} else {
  console.log('1에서 4사이의 숫자를 선택해 주세요.');
}
if문의 경우에는 문자열 2가 들어가서 동등 비교가 이뤄지면, true라는 결과가 나오기 때문에, 위 코드를 실행해보면, switch문은 default문이 실행되고, if문에서는 첫번째 else if문이 실행되는걸 확인할 수 있습니다.

1에서 4사이의 숫자를 선택해 주세요.
고양이를 선택한 당신, ...
그렇기 때문에, switch문은 값들을 비교할 때 자료형을 엄격하게 구분한다는 것과 if문으로 대체할 때는 반드시 등호 3개로 일치비교를 해야한다는 것.
이 부분은 꼭 기억해 두시면 좋을 것 같습니다! :)

for (let i = 1; i <= 10; i++) {
  console.log(`${i} 코드잇 최고!`);
}
여기 지난 시간에 배운 for 반복문 코드가 있습니다.

이 코드를 보면서 for 반복문에 대해서 조금만 더 살펴봅시다.

1. 추가동작부분을 꼭 채울 필요는 없다.
for 반복문에서 추가동작부분은 사실 꼭 채울 필요는 없습니다.

추가동작부분에서 i를 1씩 증가시키는 부분이 여기 동작부분에 들어가도 문제는 없습니다.

for (let i = 1; i <= 10;) {
  console.log(`${i} 코드잇 최고!`);
  i++;
}
위 코드 처럼 동작부분 아래에 i를 증가시켜도 아무런 문제 없이 똑같은 결과가 출력이 되는데요.
동작부분에서 i를 증가시켰고, 추가동작부분에는 아무것도 작성하지 않았기 때문에 그냥 추가 동작부분에서 아무 동작도 하지 않는 것입니다.

하지만, for문의 특성상, 이 추가동작부분이 있기 때문에 여기 동작부분에서는 실제로 반복하고자하는 내용들만 집중하고 어떤 조건과 관련된 부분은 이 소괄호에 집중하면서 좀 더 목적에 맞는 코드를 작성할 수 있게 되는 것이죠.

2. 초기화부분에서 생성한 변수는 for문의 로컬변수다.
for 반복문의 초기화 부분에서 생성한 변수는 for문 안에서의 로컬변수가 됩니다.

for (let i = 1; i <= 10; i++) {
  console.log(`${i} 코드잇 최고!`);
}

console.log(i); // Error !!
for문 안에서 생성한 로컬변수이기 때문에 for 반복문이 종료되고 나서 for 반복문 밖에서 변수를 사용하려고 하면 오류가 발생한다는 점.

사소하지만 이런 부분들도 꼭 기억해 주세요!

3. 초기화 부분도 반드시 채울 필요는 없다. 단,
for 반복문에서 초기화부분도 사실 꼭 채울 필요는 없습니다.

let i = 1; 
for (; i <= 10; i++) {
  console.log(`${i} 코드잇 최고!`);
}
위 코드 처럼 for 반복문의 로컬변수를 꼭 활용하지 않아도 반복문 밖에 있는 글로벌 변수를 활용해도 아무런 문제없이 같은 결과를 출력합니다.

단! for문의 소괄호 안쪽 가장 첫번째 세미콜론은 생략할 수 없습니다.

저 세미콜론은 초기화부분과, 조건부분을 구분하는 세미콜론이기 때문에 초기화 부분의 코드를 생략하더라도 세미콜론 만큼은 생략해선 안되는 것이죠!

for문의 소괄호 안쪽은 반드시 세미콜론 2개가 필요합니다. 그렇지 않으면 실행 오류를 만나게 된다는 점. 꼭 기억해 주세요 :)


for in문을 활용하면 객체 내부에 있는 모든 프로퍼티들을 하나씩 다룰 수 있다고 배웠습니다.

지금까지 살펴본 바로는, for in 반복문이 실행될 때 따로 정해진 순서 없이 객체에 추가한 순서를 따라서 반복문이 수행된걸 볼 수 있는데요.

그런데 이 코드를 한번 보세요.

let myObject = {
  '2': '알고리즘의 정석',
  '3': '컴퓨터 개론',
  '1': '자바스크립트 프로그래밍 기초',
};

for (let key in myObject) {
  console.log(myObject[key]);
}
자바스크립트 프로그래밍 기초
알고리즘의 정석
컴퓨터 개론
분명히 객체를 작성할 때는 알고리즘의 정석, 컴퓨터 개론, 자바스크립트 프로그래밍 기초 순서로 작성했는데, 뭔가 우리가 작성한 순서와 다르게 for in 반복문이 수행되었습니다.

왜 이렇게 된 걸까요!? 객체의 프로퍼티는 어떤 순서로 정렬이 되는 걸까요!?

반복문을 사용할 때 이 순서를 알지 못하면, 방금처럼 의도치 않은 결과를 얻게 될 수도 있습니다. 상황에 따라서는 치명적인 오류로 이어질 수도 있겠죠? 그럼 객체의 프로퍼티 네임의 예외사항과 함께 객체의 정렬 방식에 대해서 조금 더 살펴봅시다.

숫자형(양수) 프로퍼티 네임
흔한 경우는 아니라서, 처음 객체를 배우는 레슨에서 다루진 않았지만 사실 프로퍼티 네임에는 숫자형(양수)을 작성해서 사용할 수도 있습니다.

let myObject = {
  300: '정수',
  1.2: '소수',
};
다만 실제로 사용될 때는 문자열로 형 변환이 되어 사용되는데요.

let myObject = {
  300: '정수',
  1.2: '소수',
};

for (let key in myObject) {
  console.log(`${key}의 자료형은 ${typeof key}입니다.`);
}
이렇게 for in 문을 활용해서 각 프로퍼티 네임들의 자료형을 확인해보면, 모두 string, 문자열이 출력되는걸 볼 수 있습니다.

300의 자료형은 string입니다.
1.2의 자료형은 string입니다.
그리고 이렇게 예외적인 파라미터 네임은 접근할 때도 대괄호표기법으로만 접근이 가능합니다.

let myObject = {
  300: '정수',
  1.2: '소수',
};

console.log(myObject['300']);
console.log(myObject['1.2']);
console.log(myObject.300); // Error!
console.log(myObject.1.2); // Error!
정수형 프로퍼티 네임
객체의 프로퍼티 네임으로 숫자형을 그대로 사용할 수도 있다는 점을 살펴봤는데요. 
for in문을 사용할 때 주의해야 할 순간은 바로 정수형 프로퍼티 네임이 있을 때 입니다.
객체는 정수형 프로퍼티 네임을 오름차순으로 먼저 정렬하고, 나머지 프로퍼티들은 추가한 순서대로 정렬하는 특징이 있습니다.

let myObject = {
  3: '정수3',
  name: 'codeit',
  1: '정수1',
  birthDay: '2017.5.17',
  2: '정수2',
};

for (let key in myObject) {
  console.log(key);
}
이 코드를 그대로 실행해보면 아래와 같은 결과가 출력되는데요.

1
2
3
name
birthDay
분명히 3, name, 1, birthday, 2순서로 프로퍼티가 작성되었음에도 불구하고, for in문이 실행될 때는 오름차순으로 정렬이 되어 출력이 된 모습을 확인할 수 있습니다.
굳이 for문을 그대로 작성하지 않고도 그냥 콘솔에 myObject를 콘솔에 출력만 해봐도

{1: "정수1", 2: "정수2", 3: "정수3", name: "codeit", birthDay: "2017.5.17"}
객체가 정수형 프로퍼티에 한해서 오름차순으로 정렬이 되고 나머지는 추가한 순서대로 정렬이 되는 걸 확인할 수 있죠?
처음에 살펴봤던 것처럼 정수형 프로퍼티에 따옴표를 붙여 문자열처럼 만들더라도, 정렬방식은 동일하게 처리됩니다.

let myObject = {
  '3': '정수3',
  name: 'codeit',
  '1': '정수1',
  birthDay: '2017.5.17',
  '2': '정수2',
};

for (let key in myObject) {
  console.log(key);
}
1
2
3
name
birthDay
자동으로 정렬되는 특성이 장점처럼 느껴질 수도 있지만 대부분의 경우에는 의도치 않은 결과를 가져올 수도 있기 때문에, 일반적으로 정수형 프로퍼티는 잘 사용되지 않는데요.

그래서 불가피한 경우에는 이런 객체의 정렬방식을 잘 이해한 상태에서 사용하고, 가급적 명확한 의미가 있는 프로퍼티 네임을 사용하시는걸 권장해 드립니다.



Date 객체 정보 수정하기
set으로 시작하는 다양한 메서드를 활용하면, 생성된 Date객체의 정보를 수정할 수도 있습니다.

(대괄호로 감싸진 요소들은 선택적인 요소입니다.)

setFullYear(year, [month], [date])
setMonth(month, [date])
setDate(date)
setHours(hour, [min], [sec], [ms])
setMinutes(min, [sec], [ms])
setSeconds(sec, [ms])
setMilliseconds(ms)
setTime(milliseconds)(1970년 1월 1일 00:00:00 UTC부터 밀리초 이후를 나타내는 날짜를 설정)
let myDate = new Date(2017, 4, 18, 19, 11, 16);

myDate.setFullYear(2002);
myDate.setMonth(6);
myDate.setDate(20);
간단하게 시간 정보 알아내기!
간단하게 시간 정보를 표현하고 싶다면 아레와 같은 메소드를 활용해 볼 수도 있습니다.

let myDate = new Date();

console.log(myDate.toLocaleDateString()); // myDate가 가진 날짜에 대한 정보 (년. 월. 일)
console.log(myDate.toLocaleTimeString()); // myDate가 가진 시간에 대한 정보 (시:분:초)
console.log(myDate.toLocaleString()); // myDate가 가진 날짜와 시간에 대한 정보 (년. 월. 일 시:분:초)
toLocaleDateString(), toLocaleTimeString(), toLocaleString() 메소드는 사용자의 브라우저에 설정된 국가의 표기에 맞춰 날짜와 시간을 보여줍니다. 
직접 코드를 실행해서 결과를 확인해 보세요! :)

똑똑한 Date?!
Date 객체엔 자동으로 날짜를 수정해주는 유용한 기능이 있습니다. 범위를 벗어나는 값을 설정하려고 하면 자동으로 날짜를 수정해줍니다.

let myDate = new Date(1988, 0, 32); // 1988년 1월 32일은 없습니다

// 2월 1일로 자동고침 되는걸 확인할 수 있습니다.
console.log(myDate) // Mon Feb 01 1988 00:00:00
지금 이 순간..!?
Date.now() 메소드는 이 메소드가 호출된 시점의 타임스탬프를 반환합니다. 이렇게 하면 새로운 객체를 만들지 않아도 바로 현 시점의 날짜 값을 얻어낼 수 있는 것이죠!

let myDate = new Date();

console.log(Date.now() === myDate.getTime()); // true
위 코드를 보시면 알 수 있듯이 새로운 객체를 만들어서 getTime 메소드를 호출한 값과 일치한다는 사실을 확인할 수 있는데요.
새로운 객체를 만들지 않는다는 점은 일단 우리 눈에 코드 한 줄을 줄일 수 있다는 이점도 있고, 눈에는 드러나지 않지만 코드가 실행될 때 메모리의 부담을 줄여주기도 합니다.
그래서 특정한 시점이 아니라 단순히 순간순간 그 때 당시 시간 값이 필요한 경우에는 Date.now() 메소드를 활용하는 것이 코드의 가독성 뿐만아니라 성능적인 측면에서도 좀 더 유리합니다.

Date객체의 형변환
let myDate = new Date(2017, 4, 18);

console.log(typeof myDate); // object
console.log(String(myDate)); // Thu May 18 2017 00:00:00 GMT+0900 (Korean Standard Time)
console.log(Number(myDate)); // 1495033200000
console.log(Boolean(myDate)); // true
이 코드를 천천히 살펴봅시다. 세번째 줄에서 Date 객체의 자료형을 확인해보니 'object', 즉 객체라는 것을 확인할 수 있는데요.
Date 객체를 boolean 타입으로 변환하면 true가 되고, string 타입으로 변환하면 날짜값이 그대로 문자열로 변환이 됩니다.

우리가 눈여겨 볼 부분은 number 타입으로 변환할 경우입니다. 
이 값은 아무 의미없는 단순한 숫자값이 아니라 getTime() 메소드를 활용한 것과 똑같은 수치의 타임스탬프 값 입니다.

let myDate = new Date(2017, 4, 18);

console.log(myDate.getTime() === Number(myDate)); // true
이것은 다시 말해 Date 객체끼리 바로 사칙 연산도 충분히 가능하다는 뜻이기도 한데요.

let myDate1 = new Date(2017, 4, 18);
let myDate2 = new Date(2017, 4, 19);

let timeDiff = myDate2 - myDate1;
console.log(timeDiff); // 86400000 (ms)
console.log(timeDiff / 1000); // 86400 (sec)
console.log(timeDiff / 1000 / 60) // 1440 (min)
console.log(timeDiff / 1000 / 60 / 60) // 24 (hour)
console.log(timeDiff / 1000 / 60 / 60 / 24) // 1 (date)
이렇게 하니깐 두 Date객체 사이의 시간차이를 어렵지 않게 확인할 수 있죠?

날짜를 표현하는 문자열
YYYY-MM-DDThh:mm:ss형식 말고도 날짜를 표현하는 다양한 방식의 문자열이 있습니다.

let date1 = new Date('12/15/1999 05:25:30');
let date2 = new Date('December 15, 1999 05:25:30');
let date3 = new Date('Dec 15 1999 05:25:30');
하지만 이런 방식을 사용하다보면 브라우저나, 컴퓨터를 사용하는 위치의 시간대에 따라 서로 다른 결과 값이 나올 수도 있기 때문에 적어도 IETF 호환 RFC 2822 타임스탬프와 ISO8601의 한 버전의 형식을 준수하는 문자열로 Date객체를 생성하는 것을 권장드립니다!

더 많은 내용을 알고싶다면 이 링크를 참고해보세요!


배열에서 특정 값 찾기 (indexOf / lastIndexOf)
배열에서 특정 값을 찾으려면 indexOf 메소드를 사용하면 됩니다. array.indexOf(item)을 하면 array 배열에 item이 포함되어 있는지 확인할 수 있습니다.

만약 포함되어 있다면, item이 있는 인덱스가 리턴됩니다.
포함되어 있지 않다면, -1이 리턴됩니다.
여러 번 포함되어 있으면, 처음 발견된 인덱스가 리턴됩니다.
let brands = ['Google', 'Kakao', 'Naver', 'Kakao'];
console.log(brands.indexOf('Kakao'));
console.log(brands.indexOf('Daum'));
1
-1
그리고 비슷하게 lastIndexOf라는 메소드가 있는데요. indexOf와는 반대로 탐색을 뒤에서 부터 하게 됩니다. 그러니깐 방금과 같은 경우에 'Kakao'를 lastIndexOf 메소드로 찾게 되면 마지막에 있는 인덱스가 리턴되겠죠?

let brands = ['Google', 'Kakao', 'Naver', 'Kakao'];
console.log(brands.lastIndexOf('Kakao'));
console.log(brands.lastIndexOf('Daum'));
3
-1
배열에서 특정 값이 있는지 확인하기 (includes)
indexOf/lastIndexOf는 특정 값을 찾아서 해당 값의 index를 알려줍니다.
하지만, 때로는 그냥 그 값이 배열안에 있는지, 그 여부만 확인하고 싶을 수도 있는데요. 그럴때는 includes 라는 메소드를 활용하면 됩니다.

array.includes(item)을 하게되면 array배열에 item이 있을 경우 true를, 없을 경우 false를 리턴합니다.

let brands = ['Google', 'Kakao', 'Naver', 'Kakao'];
console.log(brands.includes('Kakao'));
console.log(brands.includes('Daum'));
true
false
배열 뒤집기 (reverse)
reverse라는 메소드를 활용하면, 배열의 순서를 뒤집을 수도 있습니다.

let brands = ['Google', 'Kakao', 'Naver', 'Kakao'];
console.log(brands);
brands.reverse();
console.log(brands);
(4) ["Google", "Kakao", "Naver", "Kakao"]
(4) ["Kakao", "Naver", "Kakao", "Google"]
그리고...
사실 이 밖에도 배열이 가지고 있는 유용한 메소드들이 다양하게 있는데요.

더 많은 내용을 알고싶다면, 이 링크를 참고해보세요!

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array

Date객체처럼 자바스크립트의 내장 객체 중 다양한 연산들을 유용하게 사용하기 위해 Math라는 객체가 있습니다.

이번 노트에서는 Math객체의 다양한 메소드에 대해 살펴봅시다.

절댓값 (Absolute Number)
학창 시절 수학 시간에서 배운 '절댓값(absolute value)' 기억하시나요?

간단하게 설명하자면, 어떤 값의 '양수(positive number)' 버전이라고 할 수 있습니다. 음수 -5의 절댓값은 양수 5고, 그냥 양수 5의 절댓값은 그대로 양수 5인 거죠.

Math.abs(x)를 하면 x의 절댓값이 리턴됩니다.

console.log(Math.abs(-10));
console.log(Math.abs(10));
10
10
최댓값 (Maximum)
Math.max 함수에 파라미터로 여러 수를 넘겨주면, 그중 가장 큰 값이 리턴됩니다.

console.log(Math.max(2, -1, 4, 5, 0));
5
최솟값 (Minimum)
Math.min 함수에 파라미터로 여러 수를 넘겨주면, 그중 가장 작은 값이 리턴됩니다.

console.log(Math.min(2, -1, 4, 5, 0));
-1
거듭제곱 (Exponentiation)
'제곱'의 개념 기억하시나요? '2의 3승'(혹은 '2의 세제곱')을 하면, 2를 세 번 곱한다는 뜻입니다. '2 곱하기 2 곱하기 2'를 하면 8이죠? 마찬가지로 '5의 2승'을 하면, '5 곱하기 5'를 해서 25입니다.

자바스크립트에서 Math.pow(x, y)를 하면 x의 y승의 결괏값이 리턴됩니다.

console.log(Math.pow(2, 3));
console.log(Math.pow(5, 2));
8
25
제곱근 (Square Root)
'제곱근(square root)'은 '제곱'의 반대라고 생각할 수 있습니다. 5의 제곱이 25이기 때문에, 25의 제곱근은 5입니다. 7의 제곱이 49이기 때문에, 49의 제곱근은 7입니다.

Math.sqrt(x)를 하면 x의 제곱근이 리턴됩니다.

console.log(Math.sqrt(25));
console.log(Math.sqrt(49));
5
7
반올림 (Round)
Math.round(x)를 하면 x의 반올림된 값이 리턴됩니다. 소수점 부분이 0.5 이상이면 가장 가까운 정숫값으로 올라가고, 소수점 부분이 0.5 미만이면 가장 가까운 정숫값으로 내려갑니다.

console.log(Math.round(2.3));
console.log(Math.round(2.4));
console.log(Math.round(2.49));
console.log(Math.round(2.5));
console.log(Math.round(2.6));
2
2
2
3
3
버림과 올림 (Floor and Ceil)
Math.floor(x)을 하면 x의 버림 값이, Math.ceil(x)을 하면 x의 올림 값이 리턴됩니다. 이 경우, 소수 부분이 얼마 인지와는 상관이 없습니다.

console.log(Math.floor(2.4));
console.log(Math.floor(2.49));
console.log(Math.floor(2.8));
console.log('-');
console.log(Math.ceil(2.4));
console.log(Math.ceil(2.49));
console.log(Math.ceil(2.8));
2
2
2
-
3
3
3
난수 (Random)
Math.random을 하면 0 이상 1 미만의 값이 랜덤으로 리턴됩니다.

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
0.21458369059793236
0.6622040803059857
0.785172717569619
0.9056556038884926
그리고...
이뿐만 아니라 '삼각 함수 계산'이나 '로그'같은 더 깊은 수학 계산도 가능합니다. 더 깊게 알아보고 싶다면 이 링크 를 참고해보세요!

문자열도 생각해보면 '문자' + '열'이기 때문에 배열과 비슷한 부분들이 많습니다.

비슷한 점
실제로 지난 시간에 배열과 문자열 모두 length프로퍼티를 가지고 있고, 대괄호 표기법으로 각 요소에 접근할 수 있다거나..
꽤 많은 메소드들이 배열과 문자열 모두 동일하게 사용되는 것도 확인할 수 있었는데요. 심지어 지난 시간에 다루진 못했지만 배열을 다룰 때 유용한 for..of문을 문자열에 활용할 수도 있습니다.

let myString = 'Codeit';

for (let str of myString) {
  console.log(str);
}
C
o
d
e
i
t
다른 점
하지만 비슷하다고 해서 완전히 같다고는 할 수 없습니다.

let myString = 'Codeit';
let myArray = ['C', 'o', 'd', 'e', 'i', 't'];

console.log(typeof myString);
console.log(typeof myArray);
일단 typeof 연산자를 사용해서 두 값의 자료형을 비교해보면,

string
object
string과 object, 확실히 서로 다른 자료형인 걸 확인할 수 있고,

let myString = 'Codeit';
let myArray = ['C', 'o', 'd', 'e', 'i', 't'];

console.log(myString === myArray);
console.log(myString == myArray);
두 값을 서로 비교해 보아도

false
false
일치 비교뿐만 아니라, 느슨하게 비교하는 동등비교에서도 false가 출력되는걸 확인할 수 있습니다.

mutable vs. immutable
가장 중요한 차이는 배열은 'mutable(바뀔 수 있는)' 자료형인 반면 문자열은 'immutable(바뀔 수 없는)' 자료형이라는 것입니다.

배열은 요소에 접근해서 할당연산자를 통해 요소를 수정할 수 있었죠?

문자열은 한 번 할당된 값을 수정할 수 없습니다. 다르게 표현해서, 변수에 할당된 문자열을 바꾸고 싶다면, 일부를 바꾸는 게 아니라 새로운 문자열을 지정해주어야 한다는 것이죠.

// 배열은 mutable
let myArray = ['C', 'o', 'd', 'e', 'i', 't'];
myArray[0] = 'B';
console.log(myArray);

// 문자열은 immutable
let myString = 'Codeit';
myString[0] = 'B';
console.log(myString);
(6) ["B", "o", "d", "e", "i", "t"]
Codeit
다시 한번 되돌아보면, 문자열이 가진 메소드들은 모두 retrun 값들을 활용하고, 본래의 문자열 값을 수정하지 않습니다. 
같은 의미에서 문자열에 splice 같은 메소드들은 사용할 수 없겠죠?

문자열과 배열은 서로 비슷하지만 엄연히 다른 차이가 있다는 점 꼭 기억해 주세요!


자바스크립트에는 variable의 약자를 따서 var라는 키워드로 변수를 선언할 때가 있었습니다.
자바스크립트에 변수를 선언하는 방식은 처음부터 let과 const가 아니였던 것이죠!

그래서 오래된 프로젝트들이나 혹은 자바스크립트의 정보들을 정리해둔 조금 오랜 시간이 지난 블로그들을 살펴보면 심심찮게 var라는 키워드를 만나볼 수가 있는데요.

이제는 거의 사용되지 않는 var 변수, 그래도 언제 어떻게 만나게 될지 모르니 조금만 살펴봅시다. 어떤 문제가 있길래 사용되지 않는지, 가볍게라도 알고 있는 게 좋겠죠?

변수 선언
일단 아래 코드 처럼 var 변수는 let 이나 const 처럼 똑같이 키워드 다음에 변수이름을 써서 선언할 수 있고,

var myVariable;

myVariable = 'codeit';
혹은 키워드와 변수이름, 그리고 할당연산자와 값으로 선언과 동시에 값을 할당해 줄 수도 있습니다.

var myVariable = 'codeit';
중복 선언 허용
var 키워드로 선언한 변수의 첫 번째 문제는, let과 const와는 다르게 중복 선언이 가능하다는 겁니다.
똑같은 이름으로 변수를 한 번 더 선언하게 되면, 에러가 발생하는 것이 아니라 그냥 기존의 변수를 덮어써 버리는 것이죠. let키워드로 선언한 변수에 값을 재할당하는 것과는 엄연히 다릅니다.

var myVariable = 'codeit';
console.log(myVariable);
var myVariable = 'Codeit!';
console.log(myVariable);
codeit
Codeit!
이렇게 변수가 중복선언이 되면, 길고 복잡한 코드를 작성할 때 실수를 할 가능성이 커지고, 상황에 따라서는 치명적인 오류가 발생할 수 있습니다.

함수 스코프
var 키워드 변수가 사라진 두 번째 문제는 Scope의 문제입니다. 
let과 const 키워드로 선언한 변수는 if, for, function 등등 어떤 키워드와 관계없이 코드 블록, 즉 {} 중괄호로 감싸진 부분을 기준으로 scope를 갖게 되지만, var 키워드로 선언한 변수는 scope가 function에서만 구분되어 있습니다.

{
  let x = 3;
}

function myFunction() {
  let y = 4;
}

console.log(x);
console.log(y);
Uncaught ReferenceError: x is not defined
let이나 const 키워드의 경우에는 중괄호로 감싸진 경우라면 모두 중괄호 밖에서는 지역 변수에 접근할 수 없습니다.

{
  var x = 3;
}

function myFunction() {
  var y = 4;
}

console.log(x);
console.log(y);
3
Uncaught ReferenceError: y is not defined
하지만 var 변수는 지역변수의 구분이 함수에만 있기 때문에 if, for, while, switch 등 다양한 상황에서 선언한 변수가 자칫, 전역변수의 역할을 하게 될 수도 있는 것이죠.

참고로 이렇게 함수를 기준으로만 적용되는 스코프를 함수 스코프, 코드 블록을 기준으로 적용되는 스코프를 블록 스코프라는 용어를 사용한다는 점도 참고해 주세요! :)

끌어올림 (Hoisting)
console.log(myVariable);
let myVariable;
Uncaught ReferenceError: Cannot access 'myVariable' before initialization
let과 const로 선언한 변수는 선언되기 이전에 사용될 수 없습니다. 하지만, var 변수는 함수 스코프를 기준으로 선언되기 이전에도 변수에 접근이 가능한데요.

console.log(myVariable);
var myVariable;
undefined
변수의 선언이 끌려 올라가서 마치, 2번째 줄과 첫 번째 줄이 바뀐 것처럼 동작하는 데요.

var myVariable;
console.log(myVariable);
이렇게 변수가 끌어올려 지는 현상을 '호이스팅(hoisting)'이라고 부른다는 점도 기억해 두시면 좋을 것 같아요 :)
다행히 호이스팅은 선언과 동시에 값을 할당하더라도, 선언문만 올려지기 때문에 값은 그대로 두 번째 줄에 남아있는 데요.

console.log(myVariable);
var myVariable = 2;
console.log(myVariable);
undefined
2
하지만 이런 식으로 동작하는 방식은 코드의 흐름을 방해하기에 충분해 보이죠? 한 가지 주의해야 될 부분은, 함수를 선언할 때도 이 호이스팅이 적용됩니다.

sayHi();

function sayHi() {
  console.log('hi');
}
이렇게 코드를 작성하더라도 실행해보면,

hi
당연한 듯 함수가 잘 실행되는 모습을 확인할 수 있습니다.

이런 현상은 함수를 한 번 선언하고 나면 어디서든 유연하게 사용할 수 있다는 장점이 있지만, 코드의 흐름에는 부정적인 영향을 끼칠 수 있습니다. 그래서 함수를 선언할 떄는 가급적 코드 윗부분에 선언하거나, 호출을 항상 아래쪽에서 한다거나 나름대로 규칙을 세워서 코드를 작성하시기를 권장드립니다 :)

자, 지금까지 오래된 자바스크립트에서 변수를 만들 때 사용했던 var 키워드에 대해서 살펴봤는데요.
요즘은 잘 사용되지 않지만, 그래도 자바스크립트의 상식적인 측면에서 가볍게 이해하고 계시면 좋을 것 같습니다! :)



이전 시간에 잠깐 등장했던 HTMLCollection 기억나시나요? 배열과 모양은 같지만, 완벽히 배열은 아닌 이런 형태를 유사 배열이라고 부른다고 했었는데요.
당장은 직접 유사 배열을 만들어서 사용하게 될 일은 없겠지만, 지난 시간처럼 자바스크립트로 HTML 태그를 다룰 때 종종 마주치게 되니깐 간단하게나마 개념적인 부분은 정리하고 넘어갑시다!

유사 배열(Array-Like Object)이란?
앞에서도 설명한 것처럼 이름 그대로 배열과 유사(類似)한 객체를 유사 배열, 영어로는 Array-Like Object라고 부릅니다.
하지만 마냥 모양만 비슷하다고 해서 모두 유사 배열이라고 부르진 않는데요. 유사 배열에도 최소한 갖춰야 할 조건과 특징들이 있습니다.

1. 숫자 형태의 indexing이 가능하다.
유사배열-1
배열은 각 요소에 0부터 순서대로 매겨진 index를 통해 요소끼리의 관계도 파악할 수 있고 그 index를 통해 요소에 접근할 수도 있다는 특징이 있죠?
유사 배열도 마찬가지로 배열이라는 이름에 걸맞게 각 요소에 0부터 시작하는 숫자 형태의 index가 있어야 합니다.
![image](https://user-images.githubusercontent.com/101789424/175852629-22825624-afd0-47fa-855b-becb82281a3e.png)

2. length 프로퍼티가 있다.
유사배열-2
객체가 가지고 있는 요소의 갯수를 저장하는 length 프로퍼티도 역시 배열의 특징이라고 할 수 있는데요. 유사 배열 역시 length 프로퍼티가 있어야 비로소 유사 배열이라고 할 수 있습니다. 숫자 형태의 index가 있더라도 length 프로퍼티가 없다면 유사 배열이라기보단 그냥 숫자 형태의 key로 구성된 일반적인 객체라고 볼 수 있습니다.
![image](https://user-images.githubusercontent.com/101789424/175852644-d614b961-8e6f-4c90-b0fa-e87b31476aeb.png)

3. 배열의 기본 메소드를 사용할 수 없다.
유사배열-3
상황에 따라서 직접 구현할 수도 있겠지만, 유사 배열이 완전한 배열이 아닌 가장 큰 이유는 바로 기본적인 배열의 메소드를 사용할 수 없다는 점 때문입니다. 배열의 메소드를 활용할 수 없다는 특징이 유사 배열을 활용하는 목적이 되기도 하는데요. indexing을 통해 유사 배열의 요소에 접근하는 건 쉽지만 수정하거나 삭제하는 작업이 까다롭습니다.
그래서 내부의 요소들은 배열처럼 다룰 수 있게 하면서 배열의 메소드 사용을 막고 싶거나, 혹은 일반 배열에는 없는 특별한 메소드를 제공하고 싶을 때 유사 배열을 만들어 활용하기도 합니다!
![image](https://user-images.githubusercontent.com/101789424/175852654-cd6352be-0264-4f0c-97ec-fcae0b33ebf3.png)

4. Array.isArray(유사배열)은 false다.
유사배열-4
Array 객체의 isArray 메소드는 파라미터로 전달한 값이 배열인지 아닌지를 평가해서 그 결과를 불린 형태의 값으로 리턴해주는 메소드입니다.
유사 배열은 배열과 비슷하지만 배열은 아니기 때문에 결괏값이 false 입니다.
![image](https://user-images.githubusercontent.com/101789424/175852674-68bdeab7-e7f2-40c3-955a-6c39ac50600c.png)

주의사항: 유사 배열은 다양하다!
유사 배열은 위의 특징들을 가진 대부분의 형태를 가리키는 포괄적인 개념이기 때문에 정말 다양한 형태로 존재할 수 있습니다.
예를 들어 지난 시간에 봤던 HTMLCollection의 경우 for..of 문을 활용하는 데 문제는 없었지만 어떤 유사 배열의 경우에는 for..of문을 활용할 수 없는 경우도 있습니다.
배열의 기본 메소드를 사용할 수 없다고 했지만, 직접 구현해서 마치 배열처럼 사용할 수 있도록 만들 수도 있습니다.
하지만 직접 유사 배열을 만드는 게 아니라 이미 만들어진 유사 배열에 접근하는 경우에는 대부분 위 4가지 특징을 모두 가지고 있으니깐 잘 기억해 두시면 좋을 것 같습니다 :)


지금까지 id와 class 속성을 이용해서 JavaScript로 HTML 태그를 선택하는 방법에 대해 알아봤는데요.
document.getElementsByTagName('태그이름')메소드를 활용하면 태그 이름으로 태그를 선택할 수 있습니다.

const btns = document.getElementsByTagName('button');
![image](https://user-images.githubusercontent.com/101789424/175852938-115aafc8-5c64-4511-9dd0-6a8f336960aa.png)

이렇게 하면 HTML 문서 내에 있는 모든 button 태그를 선택하게 됩니다.
![image](https://user-images.githubusercontent.com/101789424/175852959-2fdbc43f-0b55-47bd-9015-e3736fa0f12b.png)

태그이름으로태그선택하기

document.getElementsByClassName('class')메소드와 마찬가지로 태그 이름으로 요소를 찾는 경우에 여러 개의 요소가 선택될 수 있기 때문에 메소드 이름에 Element(s), s가 있고, 실행결과 역시 HTMLCollection을 리턴한다는 점도 함께 기억해 두시면 좋을 것 같습니다.

참고로 css 선택자처럼 '*' 값을 전달하게 되면 모든 태그를 선택할 수도 있는데요.
![image](https://user-images.githubusercontent.com/101789424/175852988-69bcc2af-c443-4ad6-81e3-8ec8ae9ca91b.png)

const btns = document.getElementsByTagName('button');
const allTags = document.getElementsByTagName('*');
하지만, css 스타일링을 할 때도 태그 이름으로 스타일링을 하는 경우는 거의 없죠?

마찬가지로 명확한 의도가 없이 이렇게 많은 요소들을 한꺼번에 다루게 되면 예상치 못한 실수를 할 가능성이 있기 때문에 자바스크립트에서도 많이 사용되는 메소드는 아닙니다.

![image](https://user-images.githubusercontent.com/101789424/175856055-c9a8a1a6-37ba-4047-a6cf-875c03964809.png)

2. 유사 배열이란?
배열과 유사한 객체 ex) HTMLCollection, NodeList, DOMTokenList, ...
특징
숫자 형태의 indexing이 가능하다.
length 프로퍼티가 있다.
배열의 기본 메소드를 사용할 수 없다.
Array.isArray(유사배열)의 리턴값은 false다.
3. 이벤트와 이벤트 핸들링, 그리고 이벤트 핸들러
이벤트 : 웹 페이지에서 발생하는 대부분의 일(사건)들
  ex) 버튼 클릭, 스크롤, 키보드 입력, ...

![image](https://user-images.githubusercontent.com/101789424/175856072-30c85c78-1643-46a6-9006-a37a1a347f03.png)

이벤트 핸들링 : 자바스크립트를 통해 이벤트를 다루는 일

이벤트 핸들러 : 이벤트가 발생했을 때 일어나야하는 구체적인 동작들을 표현한 코드. 이벤트 리스너(Event Listener)라고도 부른다.

![image](https://user-images.githubusercontent.com/101789424/176086567-c0d35bfe-88c9-4366-8d2f-655e84afc74a.png)

![image](https://user-images.githubusercontent.com/101789424/176086580-23599e92-471a-479a-987e-6d9b7b3da1de.png)

![image](https://user-images.githubusercontent.com/101789424/176086584-cda26702-1306-433e-aff9-465c430d9e56.png)

![image](https://user-images.githubusercontent.com/101789424/176086588-df2f5798-f090-4627-9e32-635dc9d7a5dd.png)

![image](https://user-images.githubusercontent.com/101789424/176086594-7d3e6777-78b9-4863-9280-40085e742da7.png)

![image](https://user-images.githubusercontent.com/101789424/176086606-86104d99-671e-46bc-9f0f-a6a9fc24536f.png)

![image](https://user-images.githubusercontent.com/101789424/176086613-afd39eb6-db1b-4f72-950a-e27b44465cd0.png)

![image](https://user-images.githubusercontent.com/101789424/176087487-f8625021-1153-43d2-840e-bf70e66f17a5.png)

![image](https://user-images.githubusercontent.com/101789424/176087501-b0bea3e4-e15e-4f64-97e3-1c55953d4926.png)

![image](https://user-images.githubusercontent.com/101789424/176087508-80c3d5e5-a82c-48ca-bde0-2323a19d67d7.png)

![image](https://user-images.githubusercontent.com/101789424/176087514-d64a1874-5837-422d-8bad-7f8da0011111.png)

![image](https://user-images.githubusercontent.com/101789424/176087519-61975bbd-60a7-4096-915c-492a9c4f6efd.png)

지난 시간에 살펴본 요소 노드의 프로퍼티들을 한 번 더 복습하고 넘어갑시다!

<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>JS with Codeit</title>
</head>
<body>
  <div id="content">
    <h2 id="title-1">Cat-1</h1>
    <ul id="list-1">
      <li>Ragdoll</li>
      <li>British Shorthair</li>
      <li>Scottish Fold</li>
      <li>Bengal</li>
      <li>Siamese</li>
      <li>Maine Coon</li>
      <li>American Shorthair</li>
      <li>Russian Blue</li>
    </ul>
    <h2 id="title-2">Cat-2</h1>
    <ul id="list-2">
      <li>Sphynx</li>
      <li>Munchkin</li>
      <li>Persian</li>
      <li>Norwegian Forset</li>
      <li>Turkish Angora</li>
      <li>Bombay</li>
      <li>Selkirk Rex</li>
      <li>Munchkin</li>
    </ul>
  </div>
  <script src="index.js"></script>
</body>
</html>

![image](https://user-images.githubusercontent.com/101789424/176091082-d654a081-6980-44e9-a6d9-5c1f62dd9ff4.png)

![image](https://user-images.githubusercontent.com/101789424/176091093-d6a0f103-63d6-4f5b-ae7b-e46d80a79c84.png)

![image](https://user-images.githubusercontent.com/101789424/176091098-68a79044-c110-48bc-9f9a-351565712be8.png)

![image](https://user-images.githubusercontent.com/101789424/176091110-c53a59c5-61ad-449c-b883-dd889da6d771.png)

![image](https://user-images.githubusercontent.com/101789424/176091116-13435af1-c30f-4cff-814f-c4810095b25f.png)

![image](https://user-images.githubusercontent.com/101789424/176091121-642ead59-9f2f-4e91-9d05-562c92201760.png)

![image](https://user-images.githubusercontent.com/101789424/176091126-23c97e18-f3aa-4a4a-afbb-0bb7ecb60601.png)


<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8">
  <title>JS with Codeit</title>
</head>

<body>
  <p>할 일 : <b field="title"></b></p>
  <p>담당자 : <b field="manager"></b></p>
  <p>상태 : <b field="status"></b></p>
  <div>
    상태 변경: 
    <button class="btn" status="대기중">대기중</button>
    <button class="btn" status="진행중">진행중</button>
    <button class="btn" status="완료">완료</button>
  </div>
  <script src="index.js"></script>
</body>

</html>

[status] {
  padding: 5px 10px;
}

[status="대기중"] {
  background-color: #FF6767;
  color: #FFFFFF;
}

[status="진행중"] {
  background-color: #5f62ff;
  color: #FFFFFF;
}

[status="완료"] {
  background-color: #07c456;
  color: #FFFFFF;
}

![image](https://user-images.githubusercontent.com/101789424/177676333-b9d94fce-38a9-4984-86ff-99b29107932e.png)

![image](https://user-images.githubusercontent.com/101789424/177676373-b31c28fd-6748-4780-9403-319b64233318.png)

![image](https://user-images.githubusercontent.com/101789424/177676403-6fd42048-255a-40e7-91fb-66f347d5ba4f.png)

const fields = document.querySelectorAll('[field]');
const task = {
  title: '코드 에디터 개발',
  manager: 'CastleRing, Raccoon Lee',
  status: '',
};

for (let tag of fields) {
  const field = tag.getAttribute('field');
  tag.textContent = task[field];
}

const btns = document.querySelectorAll('.btn');
for (let btn of btns) {
  const status = btn.getAttribute('status');
  btn.onclick = function () {
    fields[2].textContent = status;
    fields[2].setAttribute('status', status);
  };
}

![image](https://user-images.githubusercontent.com/101789424/177676427-f45fe054-9bd0-4dba-9efd-e540bd0d7726.png)

![image](https://user-images.githubusercontent.com/101789424/177676550-c4009f3d-baad-4674-8991-ab742283af6f.png)

![image](https://user-images.githubusercontent.com/101789424/177676633-3896f555-88ae-4516-8d88-5bbec51f5c1c.png)

<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8">
  <title>JS with Codeit</title>
</head>

<body>
  <p>할 일 : <b data-field="title"></b></p>
  <p>담당자 : <b data-field="manager"></b></p>
  <p>상태 : <b data-field="status"></b></p>
  <div>
    상태 변경: 
    <button class="btn" data-status="대기중">대기중</button>
    <button class="btn" data-status="진행중">진행중</button>
    <button class="btn" data-status="완료">완료</button>
  </div>
  <script src="index.js"></script>
</body>

</html>

[data-status] {
  padding: 5px 10px;
}

[data-status="대기중"] {
  background-color: #FF6767;
  color: #FFFFFF;
}

[data-status="진행중"] {
  background-color: #5f62ff;
  color: #FFFFFF;
}

[data-status="완료"] {
  background-color: #07c456;
  color: #FFFFFF;
}

const fields = document.querySelectorAll('[data-field]');
const task = {
  title: '코드 에디터 개발',
  manager: 'CastleRing, Raccoon Lee',
  status: '',
};

for (let tag of fields) {
  const field = tag.dataset.field;
  tag.textContent = task[field];
}

const btns = document.querySelectorAll('.btn');
for (let btn of btns) {
  const status = btn.dataset.status;
  btn.onclick = function () {
    fields[2].textContent = status;
    fields[2].dataset.status = status;
  };
}

![image](https://user-images.githubusercontent.com/101789424/177677230-b8913cf1-ee94-4a9e-b902-2ce952b0c258.png)


<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8">
  <title>JS with Codeit</title>
</head>

<body>
  <p>할 일 : <b data-field="title"></b></p>
  <p>담당자 : <b data-field="manager"></b></p>
  <p>상태 : <b data-field="status"></b></p>
  <div>
    상태 변경: 
    <button class="btn" data-status="대기중">대기중</button>
    <button class="btn" data-status="진행중">진행중</button>
    <button class="btn" data-status="완료">완료</button>
  </div>
  <script>
    const fields = document.querySelectorAll('[data-field]');
    const task = {
      title: '코드 에디터 개발',
      manager: 'CastleRing, Raccoon Lee',
      status: '',
    };

    for (let tag of fields) {
      const field = tag.dataset.field;
      tag.textContent = task[field];
    }

    const btns = document.querySelectorAll('.btn');
    for (let btn of btns) {
      const status = btn.dataset.status;
      btn.onclick = function () {
        fields[2].textContent = status;
        fields[2].dataset.status = status;
      };
    }
  </script>
</body>

</html>

[data-status] {
  padding: 5px 10px;
}

[data-status="대기중"] {
  background-color: #FF6767;
  color: #FFFFFF;
}

[data-status="진행중"] {
  background-color: #5f62ff;
  color: #FFFFFF;
}

[data-status="완료"] {
  background-color: #07c456;
  color: #FFFFFF;
}

![image](https://user-images.githubusercontent.com/101789424/177677315-693e7fdf-35ea-498d-89c0-897fb6930eeb.png)

![image](https://user-images.githubusercontent.com/101789424/177677325-19dcf274-d5f0-454b-a97e-d0c6ac0be61b.png)

![image](https://user-images.githubusercontent.com/101789424/177677479-d8050b24-b693-46ea-9009-a9511925f2b0.png)

![image](https://user-images.githubusercontent.com/101789424/177677537-9fa423fd-4495-4d15-8248-66776e0d6d57.png)

![image](https://user-images.githubusercontent.com/101789424/177677567-7de66e3c-6eb2-456d-ada6-fdfad9866cd9.png)

![image](https://user-images.githubusercontent.com/101789424/177677602-24e78127-91c8-40b7-bdfd-b557d50b724b.png)


