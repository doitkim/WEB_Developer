// adultTag = '삑!';
// teenagerTag ='삑삑!';
// transferTag = '환승입니다.';
// errorTag = '삑삑삑!';

// function tagNotification(tagCase) {
//     console.log(tagCase);
// }

// tagNotification(adultTag);
// tagNotification(teenagerTag);
// tagNotification(transferTag);
// tagNotification(errorTag);
// tagNotification(adultTag);


// function checkHeight (height) {
//     const LIMIT = 140;
//     let passMessage = '탑승이 가능합니다';
//     let failMessage = '탑승이 불가능합니다';

//     if (height >= 140) {
//         console.log(passMessage);
//     }
//     else {
//         console.log(failMessage);
//     }
// }
// checkHeight(140);
// checkHeight(135);
// checkHeight(170);

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

// 나의 나이와, 나의 성별을 저장하는 변수
let myAge = 26;
let myGender = 'male';

// 호칭을 담은 변수
let callOlderBrother = '형';
let callOlderSister = '누나';
let callFriend = '친구';
let callYoungerSister = '여동생';
let callYoungerBrother = '남동생';

// 상대방의 나이와 성별에 따른 호칭을 리턴하는 함수 whatShouldICall를 완성하세요.
function whatShouldICallYou(yourAge, yourGender) {
  if (myAge > yourAge) {
    if (myGender == yourGender) {
        // console.log(callYoungerBrother);
        return callYoungerBrother;
    }
    else {
        // console.log(callYoungerSister);
        return callYoungerSister;
    }
  }
  else if (myAge < yourAge) {
    if (myGender == yourGender) {
        // console.log(callOlderBrother);
        return callOlderBrother;
    }
    else {
        // console.log(callOlderSister);
        return callOlderSister;
    }
  }
  else {
    // console.log(callFriend);
    return callFriend;
  }
}

// 테스트 코드
let result1 = whatShouldICallYou(25, 'female');
let result2 = whatShouldICallYou(20, 'male');
let result3 = whatShouldICallYou(26, 'female');
let result4 = whatShouldICallYou(30, 'male');
let result5 = whatShouldICallYou(31, 'female');

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);