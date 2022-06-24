// 현태는 현명하게 거스름돈을 계산해 주는 프로그램을 만들려고 합니다. 예를 들어 33,000원짜리 물건을 사기 위해 100,000원을 냈다면,

// 50,000원 1장
// 10,000원 1장
// 5,000원 1장
// 1,000원 2장
// 이런 식으로 '가장 적은 수'의 지폐를 거슬러 주는 것입니다. 방금 같은 경우에는 총 5장을 거슬러 준 거죠.

// 우리는 calculateChange라는 함수를 작성하려고 하는데요. 이 함수는 지불한 금액을 나타내는 payment와 물건의 가격을 나타내는 cost를 파라미터로 받습니다.

// 주어진 코드에 이어서 깔끔하게 프로그램을 작성해 보세요.

// 함수 모두 작성하고 프로그램을 실행하면 아래와 같은 결괏값이 콘솔에 출력되어야 합니다.

// function calculateChange(payment, cost) {
  
//     let charge = payment - cost;
//     let count50 = 0;
//     let count10 = 0;
//     let count5 = 0;
//     let count1 = 0;
  
//   while (charge > 0) {
//       if (charge >= 50000) {
//         count50++;
//         charge -= 50000;
//       }
//       else if (charge >= 10000) {
//         count10++;
//         charge -= 10000;
//       }
//       else if (charge >= 5000) {
//         count5++;
//         charge -= 5000;
//       }
//       else if (charge >= 1000) {
//         count1++;
//         charge -= 1000;
//       }
//   }
//     console.log(`50000원 지폐: ${count50}장`);
//     console.log(`10000원 지폐: ${count10}장`);
//     console.log(`5000원 지폐: ${count5}장`);
//     console.log(`1000원 지폐: ${count1}장`);
// }
    
//   // 테스트 코드
//   calculateChange(100000, 33000);
//   console.log('');
//   calculateChange(500000, 378000);

function isPalindrome(word) {
    // 여기에 코드를 입력해 주세요.
    for (let i = 0; i < Math.floor(word.length / 2); i++) {
      let left = word[i];
      let right = word[word.length - 1 - i];
      if (left !== right) {
        return false;
      }
    }
    return true;
  }
  
  // 테스트 코드
  console.log(isPalindrome("racecar"));
  console.log(isPalindrome("stars"));
  console.log(isPalindrome("기러기"));
  console.log(isPalindrome("123321"));
  console.log(isPalindrome("hello"));
  console.log(isPalindrome("kayak"));