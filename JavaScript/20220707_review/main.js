// console.log(15)
// console.log(10+5)
// console.log(20-5)

// 커피를 만들 때 들어가는 재료들의 칼로리는 다음과 같습니다.

// 에스프레소 : 10 kCal
// 우유 : 170 kCal
// 초코시럽 : 50 kCal
// 휘핑크림 : 60 kCal

// 우리가 판매했던 메뉴들의 칼로리를 한번 계산해 보려고 하는데요, 각 재료의 이름을 변수 이름으로 사용하여, 메뉴들의 칼로리를 저장해 주세요.
// 변수를 사용하는 테스트 코드는 이미 작성되어 있으니 별도로 편집하지 않으셔도 됩니다. 여러분은 변수를 선언하고 값을 입력해 주세요!

// 변수를 제대로 작성했다면 콘솔에는 아래와 같이 출력되어야 합니다.

// 출력예시
// 10
// 180
// 230
// 290

// let espresso = 10;
// let milk = 170;
// let chocosyrub = 50;
// let whiping_cream = 60;

// console.log(espresso);
// console.log(espresso+milk);
// console.log(espresso+milk+chocosyrub);
// console.log(espresso+milk+chocosyrub+whiping_cream);

// function printChorus() {
//     console.log('무궁화 삼천리 화려 강산');
//     console.log('대한 사람 대한으로 길이 보전하세');
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

// 진성이는 이번에 노트북을 새로 선물 받았습니다. 전원을 켜고 확인해보니 저장 가능한 데이터의 용량이 4TB였습니다.

// 우리가 흔히 사용하는 파일들의 용량 단위는 보통 GB 혹은 MB 단위인데요. 갑자기 2TB는 몇 GB, 몇 MB 인지 궁금해졌습니다.

// 인터넷에 검색해보니 데이터 용량 단위는
// 1MB = 1024KB
// 1GB = 1024MB
// 1TB = 1024GB 라고 합니다.

// 이 정보를 참고해서 TB 단위를 입력하면 GB 단위를 출력해주는 teraToGiga 함수와 TB 단위를 입력하면 MB 단위를 출력해주는 teraToMega 함수 두 가지 함수를 작성해 주세요.

// 각 함수는 숫자 값을 파라미터로 받고 첫 번째 줄에서는 입력받은 용량을, 두 번째 줄에서는 변환한 용량을 출력해야 합니다.

// 함수를 잘 작성하셨다면 아래와 같이 출력되어야 합니다.

// 출력예시
// 2TB는
// 2048GB 입니다.
// 2TB는
// 2097152MB 입니다.

function teraToGiga (Terabyte) {
    gigabyte = Terabyte * 1024;
    console.log(`${Terabyte}는`)
    console.log(`${gigabyte}GB 입니다.`)
}

function teraToMega (Terabyte) {
    megabyte = Terabyte *1024 *1024;
    console.log(`${Terabyte}는`)
    console.log(`${megabyte}MB 입니다.`)
}

teraToGiga(2);
teraToMega(2);