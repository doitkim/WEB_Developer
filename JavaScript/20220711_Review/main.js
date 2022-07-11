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

function printGrade(midtermScore, finalScore){
	let totalScore = midtermScore + finalScore;

    if (totalScore >=90) {
        console.log('A');
    }
    else if (totalScore >= 80) {
        console.log('B');
    }
    else if (totalScore >= 70) {
        console.log('C');
    }
    else if (totalScore >= 60) {
        console.log('D');
    }
    else if (totalScore < 60) {
        console.log('F');
    }
}

// 테스트 코드
printGrade(25, 35);
printGrade(50, 45);
printGrade(29, 24);
printGrade(37, 42);