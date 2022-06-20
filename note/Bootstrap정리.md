<!DOCTYPE> 선언
HTML 파일을 쓸 때는 가장 먼저 <!DOCTYPE> 선언을 써야 합니다. 
이전의 html 버전을 사용하려면 <!DOCTYPE>을 복잡하게 써야 하지만, 그냥 최신 버전인 HTML 5를 사용하기 위해서는 이렇게만 쓰면 됩니다

<!DOCTYPE html>

------------------------------------------------------------------------------------------------------------------------------------

<title> 태그

페이지의 제목은 <title> 태그에 써주면 됩니다. 
브라우저의 탭이나 방문 기록에 나와 있는 바로 그 제목이 이 곳에 들어갑니다.

<title>My First Website</title>

------------------------------------------------------------------------------------------------------------------------------------

<h1>~<h6> 태그

한 페이지에 여러 개의 머리말이 있을 수 있는데요. 그 중 가장 중요한 머리말은 <h1>(heading 1), 그 다음으로 중요한 머리말은 <h2>(heading 2). 이런 식으로 <h6>(heading 6)까지 작성할 수 있습니다.

<h1>머리말 1</h1>
<h2>머리말 2</h2>
<h3>머리말 3</h3>
<h4>머리말 4</h4>
<h5>머리말 5</h5>
<h6>머리말 6</h6>

------------------------------------------------------------------------------------------------------------------------------------

<p> 태그
보통 문단은 <p>(paragraph) 태그 안에 넣습니다. 물론 직접 설정할 수도 있지만 <p> 태그 위, 아래에는 기본적으로 여백이 조금씩 있습니다.

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

------------------------------------------------------------------------------------------------------------------------------------

<b> 태그
텍스트를 굵게 쓰고 싶으면 'bold'의 약자인 <b> 태그를 사용하면 됩니다.

Hello <b>World</b>!

------------------------------------------------------------------------------------------------------------------------------------
<i> 태그
텍스트를 날려 쓰고 싶으면 'italics'의 약자인 <i> 태그를 사용하면 됩니다.

------------------------------------------------------------------------------------------------------------------------------------

Phrase Tags
<b> 태그는 그냥 텍스트를 '볼드체'로 만들어주고, 마찬가지로 <i> 태그는 그냥 텍스트를 '이탤릭체'로 만들어줍니다. 둘 다 '시각적인 특징'만 갖고 있는 태그인데요. HTML에서는 시각적인 특징 뿐만 아니라 의미도 담고 있는 phrase tag가 있습니다.

<strong> 태그
Hello <strong>World</strong>!

<b> 태그는 텍스트를 굵게 만드는 것이 목적이지만, <strong> 태그는 감싸고 있는 텍스트가 중요하다고 표시하는 것이 목적입니다. 지금 겉보기에는 두 태그가 똑같지만, 스크린리더(컴퓨터의 화면 낭독 소프트웨어: 시각 장애인, 학습/인지 장애인, 노인, 다문화 가정의 웹 접근성을 지원해주는 목적)가 글을 읽어줄 때 <strong>은 강조해서 읽을 수 있겠죠?

<em> 태그
Hello <em>World</em>!

------------------------------------------------------------------------------------------------------------------------------------

사이트에 CSS 스타일을 입혀주기 위해서 <style> 태그를 사용할 수 있습니다.

<!-- 여기에 html 코드 -->

<style>
/* 여기에 CSS 코드 */
</style>
아주 기본적인 CSS 속성 몇 가지만 봅시다. 그냥 간단하게 사용할 수 있는 정도로만 보고, 이후 섹션에서 각 속성을 더 자세히 살펴보겠습니다.

폰트 크기
CSS에서 폰트 크기를 표현할 수 있는 단위 몇 가지가 있는데, 그 중 픽셀(px)이 가장 많이 사용됩니다.


<h1>Heading 1</h1>
<h2>Heading 2</h2>

<style>
h2 {
  font-size: 72px;
}
</style>


텍스트 정렬
글은 왼쪽, 가운데, 또는 오른쪽으로 정렬할 수 있습니다.

<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>

<style>
h1 {
  text-align: left;
}

h2 {
  text-align: right;
}

h3 {
  text-align: center;
}
</style>


텍스트 색
글에 색을 입히고 싶으면 color 속성을 사용하면 됩니다. CSS에서 색을 표현하는 방식 몇 가지가 있는데, 나중에 살펴보도록 합시다.

<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>

<style>
h1 {
  color: lime;
}

h2 {
  color: hotpink;
}

h3 {
  color: blue;
}
</style>

여백
margin 속성을 사용하면 요소 사이의 여백을 설정할 수 있습니다. 여백의 크기도 픽셀(px) 단위로 설정해주시면 됩니다.

<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>

<style>
h1 {
  margin-bottom: 80px;
}

h3 {
  margin-left: 50px;
}
</style>


-------------------------------------------------------------------------------------------------------------------------------------------------

이제 <html>, <head>, <body> 태그를 배워봤는데요. 이전에 이 태그들을 쓰지 않아도 별 문제 없었죠? 이 세 태그는 사실 필수가 아니라 '옵셔널 태그'입니다.

그럼 이 태그들은 꼭 써야 할까요?
의견이 분분합니다.

이 강의에서 저는 정리(organization)의 목적으로 세 태그를 모두 사용하겠습니다. 요소들을 <head>와 <body>에 묶어주면 html 파일의 구조가 눈에 더 잘 들어온다고 생각하기 때문이죠.

하지만 세 옵셔널 태그의 사용을 권장하지 않는 의견들도 있습니다. 심지어 구글 HTML/CSS 스타일 가이드에서도 옵셔널 태그를 생략하라고 나와 있습니다.

개인적인 작업을 할 때는 직접 결정하시면 되고, 팀으로 작업을 할 때는 상의 후 정하시면 됩니다!


-------------------------------------------------------------------------------------------------------------------------------------------------

픽셀
HTML에서 무언가의 크기를 설정할 때는 기본적으로 '픽셀(px)' 단위를 사용합니다.

픽셀은 화면을 구성하는 기본 단위입니다.

별 이미지의 일부를 확대해서 보니까 작은 정사각형 단위로 되어 있죠? 각 정사각형을 픽셀이라고 부릅니다.  만약 어떤 이미지의 가로 길이가 100px로 설정되었다면, 가로로 저 작은 정사각형 100개가 있다는 거죠.

폰트 크기
폰트 크기도 픽셀로 설정하는 경우가 많은데요. 폰트 크기가 24px로 설정되어 있으면 폰트의 세로 길이가 24px이라는 뜻입니다.

퍼센트
길이를 픽셀 말고 퍼센트(%)로 설정할 수도 있습니다.
<img src="https://i.imgur.com/CDPKjZJ.jpg" width="100%">
<img src="https://i.imgur.com/CDPKjZJ.jpg" width="50%">
<img src="https://i.imgur.com/CDPKjZJ.jpg" width="25%">

-------------------------------------------------------------------------------------------------------------------------------------------------

HTML 요소에게 '이름'을 주는 방법은 두 가지가 있습니다:

클래스 (class)
아이디 (id)

클래스 (class)
<p class="big-blue-text">First</p>
<p>Second</p>
<p class="big-blue-text">Third</p>

위의 코드에서 첫 번째 p 요소와 세 번째 p 요소는 "big-blue-text"라는 클래스 이름을 갖고 있습니다. 그러면 css에서 .big-blue-text에 스타일을 입혀주면 됩니다. 클래스 이름이라는 걸 나타내는 '.(마침표)'를 잊지 맙시다!

아이디 (id)
<p id="favorite-text">First</p>
<p>Second</p>
<p>Third</p>

위의 코드에서 첫 번째 p 요소는 "favorite-text"라는 아이디를 갖고 있습니다. 그러면 css에서 #favorite-text에 스타일을 입혀주면 됩니다. 클래스 이름을 나타내기 위해 '.(마침표)'를 붙인 것처럼 아이디를 나타내기 위해서는 '#(샾 표시)'를 써줘야 합니다.

클래스 vs 아이디
클래스와 아이디. 얼핏 보기에는 똑같아 보이는데요. 핵심적인 차이점 몇 가지가 있습니다:

같은 클래스 이름을 여러 요소가 가질 수 있지만, 같은 아이디를 여러 요소가 공유할 수는 없습니다.
한 요소가 여러 클래스를 가질 수 있지만, 한 요소는 하나의 아이디만 가질 수 있습니다. (단, 한 요소가 클래스도 여러 개 갖고 아이디도 하나 가질 수 있습니다!)

-------------------------------------------------------------------------------------------------------------------------------------------------

스타일을 적용하는 방법
HTML 코드에 스타일을 입히는 방법에는 세 가지가 있습니다.

1. <style> 태그

<style>
  h1 {
    color: green;
    text-align: center;
  }

  p {
    font-size: 18px;
  }
</style>

<h1>Hello World!</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet lorem sit amet nunc ornare convallis. Pellentesque ac posuere lectus. In eu ipsum et quam finibus fermentum vitae sit amet magna.</p>

2. style 속성

<h1 style="color: green; text-align: center;">Hello World!</h1>
<p style="font-size: 18px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet lorem sit amet nunc ornare convallis. Pellentesque ac posuere lectus. In eu ipsum et quam finibus fermentum vitae sit amet magna.</p>

3. 외부 CSS 파일 + <link> 태그
css/styles.css

h1 {
  color: green;
  text-align: center;
}

p {
  font-size: 18px;
}
index.html

<link href="css/styles.css" rel="stylesheet">

<h1>Hello World!</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet lorem s

어떤 방법을 써야 할까?
일반적으로는 외부 CSS 파일에 스타일을 쓰고 HTML 코드에서 <link> 태그로 연결해주는 것이 가장 좋은 방식입니다. 하지만 조금씩 새로운 스타일을 시도해볼 때에는 간편함을 위해서 <style>태그를 쓰는 방법 또는 style 속성에서 테스트를 하고, 나중에 외부 CSS 파일로 옮기는 방법도 있습니다!

-------------------------------------------------------------------------------------------------------------------------------------------------

HTML 코멘트
<!-- 첫 번째 영화: 굿 윌 헌팅 (Good Will Hunting) -->
<div class="movie">
  <h2>Good Will Hunting (굿 윌 헌팅)</h2>
  <p>수학, 법학, 역사학 등 모든 분야에 재능이 있는 ‘윌’(맷 데이먼)은 천재적인 두뇌를 가지고 있지만 어린 시절 받은 상처로 인해 세상에 마음을 열지 못하는 불우한 반항아.</p>
</div>

<!-- 두 번째 영화: 뷰티풀 마인드 (A Beautiful Mind) -->
<div class="movie">
  <h2>뷰티풀 마인드 (A Beautiful Mind)</h2>
  <p>40년대 최고의 엘리트들이 모이는 프린스턴 대학원. 시험도 보지 않고 장학생으로 입학한 웨스트버지니아 출신의 한 천재가 캠퍼스를 술렁이게 만든다. 너무도 내성적이라 무뚝뚝해 보이고, 오만이라 할 정도로 자기 확신에 차 있는 수학과 새내기 존 내쉬. 누구도 따라올 수 없는 뛰어난 두뇌와 수려한 용모를 지녔지만 괴짜 천재인 그는 기숙사 유리창을 노트 삼아 단 하나의 문제에 매달린다. 바로 자신만의 '오리지날 아이디어'를 찾아내는 것. 어느 날 짖궂은 친구들과 함께 들른 술집에서 금발 미녀를 둘러싸고 벌이는 친구들의 경쟁을 지켜보던 존 내쉬는 섬광같은 직관으로 '균형이론'의 단서를 발견한다. 1949년 27쪽 짜리 논문을 발표한 20살의 청년 존 내쉬는 하루 아침에 학계의 스타로, 제2의 아인슈타인으로 떠오른다.</p>
</div>
<!-- 내용 -->의 형태로 되어 있는 부분이 HTML의 '코멘트(comment)'입니다.

CSS 코멘트
/* 영화 제목 */
.movie h2 {
  color: #4d9fff;
  text-align: center;
  font-size: 48px;
}

/* 영화 줄거리 */
.movie p {
  font-size: 24px;
}
/* 내용 */의 형태로 되어 있는  부분이 CSS의 '코멘트(comment)'입니다.

정리
코멘트는 사실 브라우저가 무시하기 때문에 실제 결과물인 사이트에 반영이 되지 않습니다. 하지만 복잡한 부분들을 설명함으로써 지저분해 보일 수 있는 코드를 정리해주는 중요한 역할을 합니다.

몇 년 뒤에 자신이 쓴 코드를 확인했을 때, 또는 동료 개발자에게 코드를 보여줬을 때 코멘트로 설명이 잘 되어 있어야 이해하기 쉽겠죠?

-------------------------------------------------------------------------------------------------------------------------------------------------

텍스트의 색을 지정해주기 위해서는 color 속성을 사용하면 되는데요. CSS에서 색을 표현하는 방식이 세 가지가 있습니다.

색 이름
CSS에서 정해준 색 이름 중 하나를 쓰는 방법이 있습니다. 모든 색이 있지는 않지만, 무려 140개의 색이 대부분 브라우저에서 지원된다고 하네요!
h1 {
  color: blue;
}

<h1>Hello World!</h1>

RGB 값
모든 색은 빨강(Red), 초록(Green), 파랑(Blue)의 조화로 표현할 수 있습니다. 이 표현 방식이 바로 'RGB'입니다. 
https://htmlcolorcodes.com/color-picker/ 이런 사이트에서 원하는 색을 찾아보세요.

h1 {
  color: rgb(83, 237, 65);
}

HEX 값 (16진법)
HEX 값은 단순히 RGB 값을 16진법으로 표현한 방식입니다. 83는 16진법으로 53이고, 237는 16진법으로 ED이고, 65는 16진법으로 41입니다. 따라서 rgb(83, 237, 65)는 #53ED41과 같은 거죠.

h1 {
  color: #53ED41;
}

-------------------------------------------------------------------------------------------------------------------------------------------------

폰트 굵기를 설정하기 위해서는 font-weight 속성을 사용하면 됩니다.

사용법
사용 가능한 값은 얇은 순서로 100, 200, 300, 400, 500, 600, 700, 800, 900입니다. 100이 가장 얇고, 900이 가장 굵다는 뜻이죠.

<p id="p1">Hello World!</p>
<p id="p2">Hello World!</p>
<p id="p3">Hello World!</p>
<p id="p4">Hello World!</p>

참고로 font-weight: normal;은 font-weight: 400과 똑같고, font-weight: bold;는 font-weight: 700과 똑같습니다!

주의 사항
150, 230과 같은 값은 사용할 수 없습니다. 만약 사용한다면 그냥 기본값으로 설정됩니다.

또 주의할 점이 있습니다. 폰트나 브라우저에 따라서 지원하는 폰트 굵기 값이 다릅니다. 어떤 폰트는 100, 400, 700만 지원될 수도 있다는 뜻이죠. 잘 확인하고 사용하시길 바랍니다!

-------------------------------------------------------------------------------------------------------------------------------------------------

text-decoration을 사용하면 텍스트를 몇 가지 방법으로 꾸밀 수 있습니다. 사실 옵션도 몇 가지 없고 딱히 예쁘지도 않지만 한 번 살펴봅시다.

Underline
underline 값을 사용하면 밑줄이 그어집니다.

h1 {
  text-decoration: underline;
}

Overline
overline 값을 사용하면 글 위에 줄이 그어집니다.
h1 {
  text-decoration: overline;
}

Line-through
line-through 값을 사용하면 줄이 글을 관통합니다.
h1 {
  text-decoration: line-through;
}

None
none 값을 사용하면 아무 줄도 없습니다. 이게 기본 값입니다!
h1 {
  text-decoration: none;
}

<a> 태그와 사용
사실 제가 text-decoration을 가장 많이 사용하는 경우는 텍스트를 꾸미기 위해서가 아니라 꾸밈을 없애기 위해서입니다. 
<a> 태그는 기본적으로 밑줄이 그어져 있는데, 이걸 없애기 위해서 text-decoration: none;을 사용합니다.

.no-decoration {
  text-decoration: none;
}

-------------------------------------------------------------------------------------------------------------------------------------------------

text-align 속성을 사용하면 텍스트를 왼쪽, 오른쪽, 또는 가운데로 정렬할 수 있습니다.

#p1 {
  color: red;
  text-align: left;
}

#p2 {
  color: green;
  text-align: right;
}

#p3 {
  color: blue;
  text-align: center;
}

<p> 태그나 헤더 태그들 뿐만 아니라 <div> 태그의 내용물도 정렬을 할 수 있습니다!

.navigation {
  text-align: center;
}

-------------------------------------------------------------------------------------------------------------------------------------------------

line-height를 사용하면 줄간격을 조절할 수 있습니다. 사실 line-height 속성을 '완벽하게' 이해하려면 타이포그래피 지식이 조금 필요한데요. 
  우선은 아주 간단하게만 설명드리겠습니다.
  
![image](https://user-images.githubusercontent.com/101789424/173263173-a1cd800d-e528-4767-9677-068673fdcbd0.png)

  
위 사진에 파란 줄 보이시죠? 이 파란 줄 사이가 실제 내용이 들어가 있는 'content area'(콘텐츠 영역)입니다.  font-family와 font-size에 따라서 'content area'가 정해지고, line-height는 'content area'에 영향을 주지 않습니다.

line-height를 통해서는 각 줄이 실질적으로 차지하는 공간을 정해줄 수 있습니다. 예를 들어서 99px로 설정하면 'content area'보다 40px이 많기 때문에 위 아래로 20px의 공간이 추가로 생깁니다.

반대로 40px로 설정하면 'content area'보다 19px이 적기 때문에 위 아래로 -9.5px의 공간이 줄어듭니다.

<p class="p1">gallantly</p>
<p class="p2">gallantly</p>
<p class="p3">gallantly</p>

<p class="p1">gallantly gallantly gallantly gallantly gallantly gallantly gallantly gallantly gallantly gallantly gallantly gallantly</p>
<p class="p2">gallantly gallantly gallantly gallantly gallantly gallantly gallantly gallantly gallantly gallantly gallantly gallantly</p>
<p class="p3">gallantly gallantly gallantly gallantly gallantly gallantly gallantly gallantly gallantly gallantly gallantly gallantly</p>

-------------------------------------------------------------------------------------------------------------------------------------------------
Padding과 Margin의 차이
Padding과 Margin은 쉽게 헷갈릴 수 있는 개념입니다. 차이를 정확히 집고 넘어갑시다!

요소는 내용(content), 패딩(padding), 테두리(border)로 이루어져 있습니다. Padding은 내용과 테두리 사이의 '여유 공간'입니다. 반면에 Margin은 요소 주위의 여백입니다. 즉, 테두리 밖의 공간인 셈이죠.

Padding
Padding을 주는 방법에는 몇 가지가 있습니다.

가장 직관적인 방법
우선 가장 직관적인 방법입니다:

p {
  border: 1px solid blue;
  padding-top: 20px;
  padding-bottom: 40px;
  padding-left: 120px;
  padding-right: 60px;
}

한 줄에
한 줄에 쓰고 싶으면 padding 속성을 쓰면 되는데요. 순서는 위(padding-top)부터 시계 방향으로 하나씩 쓰면 됩니다.

p {
  padding: 위 오른쪽 아래 왼쪽;
}

p {
  border: 1px solid blue;
  padding: 20px 60px 40px 120px;
}

위, 아래, 왼쪽, 오른쪽이 다 같은 경우
만약 위, 아래, 왼쪽, 오른쪽에 똑같은 padding을 주고 싶으면 더 간편합니다. 모두 50px의 padding을 주려면 이렇게 하면 됩니다:

p {
  border: 1px solid blue;
  padding: 50px;
}

위, 아래가 같고, 왼쪽, 오른쪽이 같은 경우
위, 아래에 50px의 padding을 주고, 왼쪽, 오른쪽에 100px의 padding을 주려면 이렇게 하면 됩니다:

p {
  border: 1px solid blue;
  padding: 50px 100px;
}

Margin
요소에게 margin을 주는 방법은 padding을 주는 방법과 똑같습니다.

가장 직관적인 방법

p {
  border: 1px solid blue;
  margin-top: 50px;
  margin-bottom: 40px;
  margin-left: 200px;
  margin-right: 60px;
}

한 줄에
p {
  margin: 위 오른쪽 아래 왼쪽;
}
그러니까 위의 코드와 똑같이 쓰기 위해서는 이렇게 하면 되는 거죠:

p {
  margin: 50px 60px 40px 200px;
}
위, 아래, 왼쪽, 오른쪽이 다 같은 경우
p {
  margin: 50px;
}
위, 아래가 같고, 왼쪽, 오른쪽이 같은 경우
p {
  margin: 50px 70px;
}
가운데 정렬
요소를 가운데 정렬하고 싶으면 왼쪽과 오른쪽 margin 값을 auto로 설정해줘야 합니다. auto는 말 그대로 '자동으로 계산'하라는 뜻인데요. 
왼쪽과 오른쪽을 auto로 설정하면 자동으로 왼쪽과 오른쪽을 똑같이 함으로써 요소는 가운데 정렬이 됩니다.

p {
  border: 1px solid blue;
  width: 500px;
  margin-left: auto;
  margin-right: auto;
}

----------------------------------------------------------------------------------------------------------------------------------

가로 길이, 세로 길이
텍스트
요소의 가로 길이(width)와 세로 길이(height)를 설정해봅시다.

p {
  border: 1px solid blue;
  width: 400px;
  height: 300px;
}

이미지
사진의 크기도 똑같이 css에서 설정할 수 있습니다.

.bond-img {
  width: 400px;
  height: 300px;
}

최소, 최대 가로 길이
min-width, max-width로 요소의 최소, 최대 가로 길이를 설정할 수 있습니다.

.p1 {
  border: 1px solid blue;
  max-width: 1000px;
}

.p2 {
  border: 1px solid red;
  max-width: 200px;
}

.p3 {
  border: 1px solid blue;
  min-width: 2000px;
}

.p4 {
  border: 1px solid red;
  min-width: 200px;
}


최소, 최대 세로 길이
min-height, max-height로 요소의 최소, 최대 세로 길이를 설정할 수 있습니다.

.p1 {
  border: 1px solid blue;
  min-height: 400px;
}

.p2 {
  border: 1px solid red;
  min-height: 200px;
}

.p3 {
  border: 1px solid blue;
  max-height: 1000px;
}

.p4 {
  border: 1px solid red;
  max-height: 50px;
}

----------------------------------------------------------------------------------------------------------------------------------

width, height, max-width, max-height 등을 설정하다 보면 내용물이 들어갈 공간이 부족한 경우가 있습니다.

p {
  border: 1px solid blue;
  width: 300px;
  height: 200px;
}

이렇게 넘쳐나는 내용물을 overflow 속성으로 처리해줄 수 있는데요. 몇 가지 옵션이 있습니다.

옵션 1: visible
visible 값을 사용하면 넘쳐나는 내용물이 그대로 보입니다. 따로 설정해주지 않으면 이게 기본값입니다!

p {
  border: 1px solid blue;
  width: 300px;
  height: 200px;
  overflow: visible;
}

옵션 2: hidden
hidden 값을 사용하면 넘쳐나는 부분을 아예 숨겨줄 수도 있습니다.

p {
  border: 1px solid blue;
  width: 300px;
  height: 200px;
  overflow: hidden;
}

옵션 3: scroll
내용물을 숨겼다가, 사용자가 스크롤을 하면 볼 수 있게 해주는 방법도 있습니다!

p {
  border: 1px solid blue;
  width: 300px;
  height: 200px;
  overflow: scroll;
}

옵션 4: auto
scroll과 거의 똑같은데, 한 가지 차이점이 있습니다. scroll은 항상 스크롤바를 보여주고, auto는 내용물이 넘쳐날 때만 스크롤바를 보여줍니다.
참고로 Mac OS에서는 스크롤을 할 때만 스크롤바를 보여주는 경향이 있기 때문에 scroll과 auto의 차이를 보기 힘들 수도 있습니다.

p {
  border: 1px solid blue;
  width: 300px;
  height: 200px;
  overflow: auto;
}

----------------------------------------------------------------------------------------------------------------------------------

다른 속성들과 마찬가지로, 테두리를 설정해주는 방법도 다양합니다.

한 줄에 끝내기
가장 일반적인 방법은 border 속성으로 한 줄에 다 쓰는 것입니다. 이 방식을 사용하면 위, 아래, 왼쪽, 오른쪽 모두 같은 테두리가 생깁니다. 값을 쓰는 순서는 굵기, 스타일(실선, 점선 등), 색입니다.

.p1 {
  border: 2px solid #4d9fff;
}

.p2 {
  border: 2px dotted #4d9fff;
}

.p3 {
  border: 2px dashed #4d9fff;
}

명확하게 나누기
다른 방법은 border-style, border-color, border-width 속성을 써서 테두리의 스타일을 하나씩 지정해주는 것입니다.

.p1 {
  border-style: dotted;
  border-color: red;
  border-width: 5px;
}

다채로운 테두리
지금까지는 4면의 테두리가 모두 같았는데, 다 다르게 설정해주고 싶으면 이렇게 하면 됩니다:

.p1 {
  border-top: 3px dotted #4d9fff;
  border-bottom: 2px dashed red;
  border-left: 5px solid green;
}

테두리 없애기
어떤 요소들(예: <input> 태그)은 기본적으로 테두리가 설정되어 있습니다. 이런 요소들의 테두리를 없애고 싶으면 직접 border 속성을 설정해주면 되는데요. 
두 가지 방법이 있습니다:

border: none;
border: 0;


----------------------------------------------------------------------------------------------------------------------------------

border-radius라는 속성을 사용하면 요소의 모서리를 둥글게 만들 수 있습니다. 더 큰 값을 쓰면 더 둥글게 되는 거죠!

.div1 {
  border: 1px solid green;
  border-radius: 5px;
  margin-bottom: 20px;
}

.div2 {
  border: 1px solid green;
  border-radius: 30px;
}

개별 설정
그냥 border-radius 속성을 사용하면 모서리 네 개 모두 똑같이 둥글게 되는데요. 각 모서리를 개별 설정할 수도 있습니다.

h1 {
  border: 1px solid green;
  border-top-left-radius: 50px; /* 왼쪽 위 */
  border-top-right-radius: 5px; /* 오른쪽 위 */
  border-bottom-right-radius: 0px; /* 오른쪽 아래 */
  border-bottom-left-radius: 20px; /* 왼쪽 아래 */
}

----------------------------------------------------------------------------------------------------------------------------------

배경색
background-color 속성을 사용하면 배경색을 설정할 수 있습니다. 폰트 색을 설정할 때처럼 색 이름, RGB 코드, HEX 코드 중 하나를 입력하면 됩니다.

페이지 배경색
페이지 전체의 배경색을 설정하고 싶으면 body 태그에 background-color 속성을 입혀주면 됩니다. 

그리고 배경색을 투명하게 두고 싶으면 transparent 값으로 설정해주면 되는데, 따로 설정을 해주지 않으면 transparent가 기본값으로 설정됩니다!


body {
  background-color: #4d9fff;
}

h1 {
  background-color: white;
}

h2 {
  background-color: transparent
}

----------------------------------------------------------------------------------------------------------------------------------

요소에 그림자를 주기 위해서는 box-shadow 속성을 사용하면 되는데요. 기본값은 none입니다. 그림자가 없다는 뜻이죠.

.div1 {
  background-color: #eeeeee;
  width: 400px;
  height: 300px;
  box-shadow: none;
}

그림자 추가
위치 설정
그림자의 위치만 설정해주면 그림자가 나타납니다. 가로 위치와 세로 위치를 설정해줍시다.

.div1 {
  background-color: #eeeeee;
  width: 400px;
  height: 300px;
  box-shadow: 40px 10px;
}

그림자 색 설정
위의 예시를 보시면 그림자가 검정색이죠? 따로 설정해주지 않으면 그림자는 검정색입니다. 만약 다른 색으로 바꾸고 싶으면 box-shadow속성에 추가로 색을 써주면 됩니다.

.div1 {
  background-color: #eeeeee;
  width: 400px;
  height: 300px;
  box-shadow: 40px 10px #4d9fff;
}

흐림 정도 (blur)
box-shadow 속성에서 그림자가 얼마나 흐리게 나올지 설정해줄 수 있습니다. 가로, 세로 위치 뒤에 추가해주면 되는데요. 기본값은 0px입니다.

.div1 {
  background-color: #eeeeee;
  width: 400px;
  height: 300px;
  box-shadow: 40px 10px 10px #4d9fff;
}

그림자 크기 (spread)
그림자가 얼마나 퍼질지도 설정할 수 있습니다. 흐림 값 이후에 써주면 됩니다.

.div1 {
  background-color: #eeeeee;
  width: 400px;
  height: 300px;
  box-shadow: 40px 10px 10px 20px #4d9fff;
}


----------------------------------------------------------------------------------------------------------------------------------

box-sizing을 정리해 봅시다.

.div1 {
  border: 10px solid red;
  width: 300px;
  height: 200px;
  margin-bottom: 50px;
}

.div2 {
  border: 10px solid red;
  width: 300px;
  height: 200px;
  padding: 40px;
}

.div1과 .div2의 width와 height를 똑같이 설정해줬는데, 결과물을 보면 크기가 서로 다르네요. 그 이유는 width와 height가 테두리(border)와 패딩(padding)을 뺀 내용물(content)의 크기만 나타내기 때문입니다. 

 

따라서 .div1의 실제 가로 길이는 테두리까지 포함한 320px, 세로 길이는 테두리까지 포함한 220px인 거죠. 반면 .div2의 실제 가로 길이는 테두리와 패딩까지 포함한 400px, 세로 길이는 300px입니다.

 

실제 가로, 세로 크기가 300px, 200px이기 위해서는 테두리와 패딩을 고려해서 계산을 해줘야 한다는 불편함이 있습니다.

해결책: box-sizing
다행히 CSS3부터는 box-sizing 속성을 사용하면 이 문제를 해결할 수 있습니다. 따로 설정해주지 않으면 box-sizing의 기본값은 content-box인데, 이걸 border-box로 바꿔봅시다.

.div1 {
  box-sizing: border-box;
  border: 10px solid red;
  width: 300px;
  height: 200px;
  margin-bottom: 50px;
}

.div2 {
  box-sizing: border-box;
  border: 10px solid red;
  width: 300px;
  height: 200px;
  padding: 40px;
}

box-sizing 속성을 border-box 값으로 설정해주면 width와 height는 테두리와 패딩과 내용물을 모두 포함한 길이가 됩니다. 따라서 더 이상 귀찮은 계산을 할 필요가 없는 거죠!

더 간편하게!
box-sizing 속성을 사용하면 너무 편하다 보니, 요즘 많은 개발자들이 모든 요소에 box-sizing: border-box;를 써주는 추세입니다. 이걸 간편하게 한 번에 처리하기 위해서는 모든 요소를 나타내는 *에 속성을 써주면 되겠죠?


* {
  box-sizing: border-box;
}

.div1 {
  border: 10px solid red;
  width: 300px;
  height: 200px;
  margin-bottom: 50px;
}

.div2 {
  border: 10px solid red;
  width: 300px;
  height: 200px;
  padding: 40px;
}

----------------------------------------------------------------------------------------------------------------------------------

배경 이미지에는 여러가지 설정이 가능합니다.
아래의 세 가지 속성을 좀 더 자세히 살펴봅시다.

background-repeat
background-repeat는 이미지를 반복시킬 것인지 아닐 것인지, 그리고 반복시킨다면 어떤 방식으로 반복시킬 것인지 정해주는 속성입니다.
여기에는 우리가 배운 repeat, no-repeat 외에도 다양한 옵션이 있습니다.

/* 반복하지 않음 */
background-repeat: no-repeat;

/* 가로 방향으로만 반복 */
background-repeat: repeat-x;

/* 세로 방향으로만 반복 */
background-repeat: repeat-y;

/* 가로와 세로 모두 반복 */
background-repeat: repeat;

/* 반복할 수 있는 만큼 반복한 뒤, 남는 공간은 이미지 간의 여백으로 배분 */
background-repeat: space;

/* 반복할 수 있는 만큼 반복한 뒤, 남는 공간은 이미지 확대를 통해 배분 */
background-repeat: round;

body {
  background-color: gray;
}

div {
  width: 300px;
  height: 230px;
  border: 2px solid white;
  background-image: url("https://i.imgur.com/WxH5bez.png");
  margin: 30px;
}

#div1 {
  /* 반복하지 않음 */
  background-repeat: no-repeat;
}

#div2 {
  /* 가로 방향으로만 반복 */
  background-repeat: repeat-x;
}

#div3 {
  /* 세로 방향으로만 반복 */
  background-repeat: repeat-y;
}

#div4 {
  /* 가로와 세로 모두 반복 */
  background-repeat: repeat;
}

#div5 {
  /* 반복할 수 있는 만큼 반복한 뒤, 남는 공간은 이미지 간의 여백으로 배분 */
  background-repeat: space;
}

#div6 {
  /* 반복할 수 있는 만큼 반복한 뒤, 남는 공간은 이미지 확대를 통해 배분 */
  background-repeat: round;
}

background-size
background-size는 배경 이미지의 사이즈를 정해주는 속성입니다.

/* 원래 이미지 사이즈대로 출력 */
background-size: auto;

/* 화면을 꽉 채우면서, 사진 비율을 유지 */
background-size: cover;

/* 가로, 세로 중 먼저 채워지는 쪽에 맞추어서 출력 */
background-size: contain;

/* 픽셀값 지정 (가로: 30px, 세로: 50px로 설정) */
background-size: 30px 50px;

/* 퍼센트값 지정 (가로: 부모 요소 width의 60%, 세로: 부모 요소 height의 70%로 설정) */
background-size: 60% 70%;

body {
  background-color: gray;
}

div {
  width: 300px;
  height: 230px;
  border: 2px solid white;
  background-image: url("https://i.imgur.com/WxH5bez.png");
  margin: 30px;
  background-repeat: no-repeat;
}

#div1 {
  /* 원래 이미지 사이즈대로 출력 */
  background-size: auto;
}

#div2 {
  /* 화면을 꽉 채우면서, 사진 비율을 유지 */
  background-size: cover;
}

#div3 {
  /* 가로, 세로 중 먼저 채워지는 쪽에 맞추어서 출력 */
  background-size: contain;
}

#div4 {
  /* 픽셀값 지정 (가로: 150px, 세로: 10px로 설정) */
  background-size: 150px 10px;
}

#div5 {
  /* 픽셀값 지정 (가로: 200px, 세로: 200px로 설정) */
  background-size: 200px 200px;
}

#div6 {
  /* 퍼센트값 지정 (가로: 부모 요소 width의 50%, 세로: 부모 요소 height의 50%로 설정) */
  background-size: 50% 50%;

}

#div7 {
  /* 퍼센트값 지정 (가로: 부모 요소 width의 30%, 세로: 부모 요소 height의 100%로 설정) */
  background-size: 30% 100%;
}

background-position
background-position은 배경 이미지의 위치를 정해주는 속성입니다.

/* 단어로 지정해주기 (가로: left, center, right, 세로: top, center, bottom) */
/* 아래와 같은 총 9개의 조합이 가능 */
background-position: left top;
background-position: left center;
background-position: left bottom;
background-position: right top;
background-position: right center;
background-position: right bottom;
background-position: center top;
background-position: center center;
background-position: center bottom;

/* 퍼센트로 지정해주기 (가로: 전체 width의 25% 지점, 세로: 전체 height의 75% 지점 ) */
background-position: 25% 75%;

/* 픽셀로 지정하기 (가로: 가장 왼쪽 가장자리에서부터 오른쪽으로 100px 이동한 지점, 세로: 가장 상단 가장자리에서 아래로 200px 이동한 지점) */
background-position: 100px 200px;


body {
  background-color: gray;
}

div {
  width: 300px;
  height: 230px;
  border: 2px solid white;
  background-image: url("https://i.imgur.com/WxH5bez.png");
  margin: 30px;
  background-repeat: no-repeat;
}

#div1 {
  /* 단어로 지정해주기 (가로: 왼쪽, 세로: 상단) */
  background-position: left top;
}

#div2 {
  /* 단어로 지정해주기 (가로: 왼쪽, 세로: 센터) */
  background-position: left center;
}

#div3 {
  /* 단어로 지정해주기 (가로: 센터, 세로: 상단) */
  background-position: center top;
}

#div4 {
  /* 단어로 지정해주기 (가로: 오른쪽, 세로: 하단) */
  background-position: right bottom;
}

#div5 {
  /* 퍼센트로 지정해주기 (가로: 전체 width의 25% 지점, 세로: 전체 height의 75% 지점 ) */
  background-position: 25% 75%;
}

#div6 {
  /* 퍼센트로 지정해주기 (가로: 전체 width의 50% 지점, 세로: 전체 height의 100% 지점 ) */
  background-position: 50% 100%;

}

#div7 {
  /* 픽셀로 지정하기 (가로: 가장 왼쪽 가장자리에서부터 오른쪽으로 10px 이동한 지점, 세로: 가장 상단 가장자리에서 아래로 200px 이동한 지점) */
  background-position: 10px 200px;
}

#div8 {
  /* 픽셀로 지정하기 (가로: 가장 왼쪽 가장자리에서부터 오른쪽으로 150px 이동한 지점, 세로: 가장 상단 가장자리에서 아래로 20px 이동한 지점) */
  background-position: 150px 20px;
}


----------------------------------------------------------------------------------------------------------------------------------

CSS에서 스타일링 해줄 요소는 '선택자'로 결정합니다.

우리가 이미 알고 있는 것들부터 시작해서, 또 어떤 선택자들이 있는지 살펴봅시다!

태그 이름

/* 모든 <h1> 태그 */
h1 {
  color: orange;
}

클래스/아이디

/* 'important'라는 클래스를 갖고 있는 모든 태그 */
.important {
  color: orange;
}

/* 'favorite'라는 아이디를 갖고 있는 태그 */
#favorite {
  color: blue;
}

자식 (children)

/* 'div1' 클래스를 갖고 있는 요소의 자식 중 모든 <i> 태그 */
.div1 i {
  color: orange;
}

직속 자식 (direct children)
/* 'div1' 클래스를 갖고 있는 요소의 직속 자식 중 모든 <i> 태그 */
.div1 > i {
  color: orange;
}

복수 선택
/* 'two' 클래스를 가지고 있는 태그 모두와 'four' 클래스를 가지고 있는 태그 모두 선택 */
.two, .four {
  color: orange;
}

여러 조건

/* 'outside' 클래스를 갖고 있으면서 'one' 클래스도 갖고 있는 태그 */
.outside.one {
  color: blue;
}

/* 'inside' 클래스를 갖고 있으면서 'two' 클래스도 갖고 있는 태그 */
.inside.two {
  color: orange;
}

Pseudo-class (가상 클래스)
콜론(:)을 사용하면 몇 가지 '가상 클래스'를 선택할 수 있습니다.

n번째 자식

/* .div1의 자식인 <p> 태그 중 3번째 */
.div1 p:nth-child(3) {
  color: blue;
}

/* .div1의 자식인 <p> 태그 중 첫 번째 */
.div1 p:first-child {
  color: red;
}

/* .div1의 자식인 <p> 태그 중 마지막 */
.div1 p:last-child {
  color: green;
}

/* .div1의 자식 중 마지막 자식이 아닌 <p> 태그 */
.div1 p:not(:last-child) {
  font-size: 150%;
}

/* .div1의 자식 중 첫 번째 자식이 아닌 <p> 태그 */
.div1 p:not(:first-child) {
  text-decoration: line-through;
}

마우스 오버 (hover)

h1 {
  color: orange;
}

/* 마우스가 <h1> 태그에 올라갔을 때 */
h1:hover {
  color: green;
}

----------------------------------------------------------------------------------------------------------------------------------

CSS에는 '상속'이라는 개념이 있습니다. 말 그대로 부모 요소의 속성들을 자식들한테 넘겨주는 것인데요. 예시를 한 번 봅시다.

.div1 {
  color: blue;
}

.div1의 폰트 색을 blue로 설정해주었고, <h1>과 <p>에 대해서는 별도의 설정이 없었습니다. 그런데도 <h1>과 <p> 태그의 폰트 색이 파란색으로 설정되었죠? 그 이유는 .div1의 스타일이 자식들에게 상속되었기 때문입니다.

상속되는 속성들
하지만 태그와 속성에 따라 상속이 되지 않는 경우도 많이 있습니다. 예를 들어서 부모 태그에 설정한 margin이 모든 자식들에게도 적용되면 총체적 난국이 되겠죠?

웬만하면 상속되는 몇 가지 속성들입니다:

color
font-family
font-size
font-weight
line-height
list-style
text-align
visibility
이외에도 많지만 일단 자주 사용하는 몇 가지만 적어두었습니다.

위에 있는 속성들도 항상 상속되는 건 아닙니다. 대표적인 예로 <a> 태그에는 color 속성이 상속되지 않습니다. <a> 태그가 억지로 상속을 받아오기 위해서는 해당 속성에 inherit 값을 쓰면 됩니다!

.div1 {
  color: green;
}

.div2 {
  color: orange;
}

.div2 a {
  color: inherit;
}

----------------------------------------------------------------------------------------------------------------------------------
다양한 선택자를 배워봤습니다. 그런데 여러 선택자가 같은 요소를 가리키면 우선 순위를 어떻게 평가할까요?

순서
우선 가장 간단한 겁니다. 완전 똑같은 선택자가 나중에 또 나오면, 이전에 나온 스타일을 덮어쓰게 됩니다.

h1 {
  color: blue;
  text-align: center;
}

h1 {
  color: green;
}

명시도 (Specificity)
같은 요소를 가리키지만 선택자가 다르다면, '명시도(specificity)'에 따라 우선 순위가 결정됩니다.

명시도 계산기
명시도 계산 방법을 알려드리겠습니다.

인라인 스타일이 가장 우선 순위가 높습니다.
선택자에 id가 많을 수록 우선 순위가 높습니다.
선택자에 class, attribute, pseudo-class가 많을 수록 우선 순위가 높습니다.
그 다음은 그냥 요소(또는 가상 요소)가 많은 순서입니다.
<ul> 태그 안에 <li> 태그 안에 <a id="link">가 있다고 가정해봅시다. <ul>과 <li>는 나중에 배울 '리스트' 태그입니다.

![image](https://user-images.githubusercontent.com/101789424/173265510-0af82015-bf8f-4890-b0f2-4e5d59e06d90.png)

첫 번째 경우에는 일반 요소가 세 개, 가상 클래스가 한 개 있어서 '명시도 점수'가 13입니다. 두 번째 경우에는 일반 요소가 두 개, 가상 클래스가 한 개, 그리고 id가 한 개 있어서 112점입니다.

따라서 두 선택자에서 겹치는 스타일이 있는 경우, 두 번째 경우인 ul li:first-child #link 선택자의 스타일이 적용되는 거죠!

ul li:first-child #link {
  color: green;
}

ul li:first-child a {
  color: orange;
}

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

CSS에는 px, rem, em, % 등 여러 단위가 있습니다. 폰트 크기 뿐만 아니라 padding, margin, width 등 다양한 속성들에 이 단위들을 사용할 수 있습니다.

이 단위들의 차이에 대해 알아봅시다.

px
px는 절대적인 값입니다. 다른 요소의 값에 영향을 받지 않는다는 거죠.

html {
  font-size: 20px;
}

.container {
  padding-top: 40px;
  background-color: lime;
}

rem
rem 은 상대적인 값입니다. 하지만 오직 <html> 태그의 font-size에만 영향을 받습니다.

2rem은 <html> 태그의 font-size의 2배 크기입니다.

html {
  font-size: 20px;
}

.container {
  padding-top: 2rem; /* html의 font-size * 2 = 40px */
  background-color: lime;
}

em
em도 rem과 마찬가지로 상대적인 값입니다. em은 자기 자신의 font-size를 기준으로 합니다.

2em은 자기 자신의 font-size의 2배 크기입니다. 자기 자신의 font-size를 따로 정해주지 않을 경우, 상위 요소에서 상속받은 값을 기준으로 합니다.

html {
  font-size: 20px;
}

.container {
  /* 자동으로 html의 font-size 20px을 상속받음 */
  padding-top: 2em; /* 자신의 font-size * 2 = 40px */
  background-color: lime;
}

만약 자기 자신에게 정해진 font-size가 있다면 그 값을 기준으로 em이 결정됩니다.

html {
  font-size: 20px;
}

.container {
  font-size: 40px;
  padding-top: 2em; /* 자신의 font-size * 2 = 80px */
  background-color: lime;
}

퍼센트 (%)
% 역시 상대적인 값이겠죠? %는 어느 항목에서 쓰이냐에 따라 다른 기준이 적용됩니다.

예를 들어 font-size에서 %가 쓰일 경우, 상위 요소의 font-size에 곱해주는 방식으로 계산합니다.

.container {
  font-size: 20px;
  background-color: lime;
}

.text {
  font-size: 180%; /* 상위 요소인 container의 font-size * 1.8 = 36px */
  background-color: skyblue;
  margin: 0;
}

%가 margin이나 padding의 단위로 사용될 경우, 상위 요소의 width를 기준으로 계산됩니다.

.container {
  width: 200px;
  background-color: lime;
}

.text {
  padding-left: 30%; /* 상위 요소의 width * 0.3 = 60px */
}

재미있는 점은 margin-top이나 padding-bottom 등 세로(상하) 속성를 조절할 때에도 상위 요소의 height가 아닌 width를 기준으로 계산된다는 것입니다.

.container {
  width: 200px;
  background-color: lime;
}

.text {
  padding-top: 30%; /* 상위 요소의 width * 0.3 = 60px */
}

참고
더 자세히 알아보고 싶으신 분들은 아래 링크를 참고해보세요:

https://webdesign.tutsplus.com/ko/tutorials/comprehensive-guide-when-to-use-em-vs-rem--cms-23984


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

HTML 요소의 레이아웃을 결정하는 가장 중요한 속성 중 하나는 display입니다.

display의 종류
모든 요소는 딱 한 개의 display 값을 갖고 있습니다. 가질 수 있는 display의 종류는

inline
block
inline-block
flex
list-item
none
등 여러 가지가 있는데, 대부분의 요소들은 inline과 block 중 한 가지입니다.

inline display
inline 요소들은 다른 요소들과 같은 줄에 머무르려고 하는 성향과, 필요한 만큼의 가로 길이만 차지하는 성향이 있습니다.

다음 요소들은 기본 display 값이 inline입니다.

<span>
<a>
<b>
<i>
<img>
<button>


i {
  background-color: green;
}

<i> 태그는 기본적으로 inline이기 때문에 앞, 뒤의 텍스트와 같은 줄에 머무르고 있고, 가로 길이는 필요한 만큼만 차지하고 있습니다.

block display
block 요소들은 다른 요소들과 독단적인 줄에 가려고 하는 성향과, 최대한 많은 가로 길이를 차지하는 성향이 있습니다.

다음 요소들은 기본 display 값이 block입니다.

<div>
<h1>, <h2>, <h3>, <h4>, <h5>, <h6>
<p>
<nav>
<ul>
<li>

div {
  background-color: green;
}

<div> 태그는 기본적으로 block이기 때문에 새로운 줄에 가버립니다. 그리고 가로 길이는 최대한 많이, 100%를 차지하고 있죠?

display 바꾸기
모든 요소는 기본적으로 정해진 display 값이 있는데요. CSS를 통해서 이를 바꿀 수 있습니다!

inline 요소를 block으로 바꾸기

i {
  display: block; /* <i> 태그를 block으로 바꾸기 */
  background-color: green;
}

block 요소를 inline으로 바꾸기

div {
  display: inline; /* <div> 태그를 inline으로 바꾸기 */
}

.div1 {
  background-color: green;
}

.div2 {
  background-color: blue;
}

Block 요소에게는 가로 길이와 세로 길이를 직접 설정해줄 수 있지만, inline 요소는 자동으로 설정이 됩니다. Inline 요소에게는 가로, 세로 길이의 개념이 딱히 없는 셈이죠.

만약 inline 요소처럼 다른 요소들과 같은 줄에 머무르면서 block 요소처럼 가로, 세로 길이도 설정해주고 싶으면 어떻게 해야 할까요? 바로 그 둘을 섞어놓은 inline-block을 사용하면 됩니다!

inline-block

i {
  display: inline-block;
  width: 200px;
  height: 200px;
  background-color: green;
}


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

가로 가운데 정렬
세로 가운데 정렬을 알아보기 전에, 간단하게 가로 가운데 정렬을 알아봅시다.  
어떤 요소를 가로로 가운데 정렬하려면 어떻게 해야 할까요? 간단합니다.

inline 요소
inline 또는 inline-block 요소면 부모 태그에 text-align: center;를 써주면 됩니다.

.container {
  text-align: center;
  background-color: lime;
}

block 요소
block 요소면 margin-left: auto;, margin-right: auto;를 써주면 되죠?

.block-element {
  width: 100px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  background-color: lime;
}

세로 가운데 정렬
그렇다면 세로로 가운데 정렬하려면 어떻게 해야 할까요? 저도 이것 때문에 짜증난 적이 많은데요! 사실 CSS에서 모든 걸 한 번에 딱 가운데 정렬을 시키는 방법이 없기 때문에, 저희가 지금까지 배운 다양한 지식을 섞어서 해야 합니다.

몇 가지 방법을 봅시다.

가짜 요소 더하기
vertical-align: middle;을 하면 해결될까요? 우선 vertical-align 속성은 인라인 또는 인라인 블록 요소에 적용되기 때문에 .info를 인라인 블록으로 바꾸겠습니다. 그리고 vertical-align: middle;을 설정해주면...?

.container {
  width: 300px;
  height: 400px;
  background-color: gray;
  text-align: center;
}

.info {
  background-color: lime;
  display: inline-block;
  vertical-align: middle;
}

vertical-align: middle;은 요소의 가운데를 부모 요소의 소문자 'x'의 가운데와 맞춥니다. 확인해봅시다.

.container {
  width: 300px;
  height: 400px;
  background-color: gray;
  text-align: center;
}

.info {
  background-color: lime;
  display: inline-block;
  vertical-align: middle;
}

.info 요소를 완전 가운데로 오게 하려면 우선 소문자 'x'가 가운데로 와야 합니다. 방법이 하나 있습니다. 세로 길이가 100%인 요소를 만들고, 그 요소에도 vertical-align: middle;을 하는 거죠!

.container {
  width: 300px;
  height: 400px;
  background-color: gray;
  text-align: center;
}

.helper {
  display: inline-block;
  height: 100%;
  vertical-align: middle;
  
  /* 설명을 위해서 */
  width: 10px;
  background-color: red;
}

.info {
  background-color: lime;
  display: inline-block;
  vertical-align: middle;
}

이제 거의 다 되었습니다. 여기서 소문자 'x'를 지우고, .helper 요소의 가로 길이를 없애면 되겠죠?

.container {
  width: 300px;
  height: 400px;
  background-color: gray;
  text-align: center;
}

.helper {
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}

.info {
  background-color: lime;
  display: inline-block;
  vertical-align: middle;
}

근데 아직도 문제가 조금 있습니다. .info의 가로 길이가 100%라면 어떻게 되는지 봅시다.

.container {
  width: 300px;
  height: 400px;
  background-color: gray;
  text-align: center;
}

.helper {
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}

.info {
  background-color: lime;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
}

갑자기 이상한 곳에 위치되네요. 사실 .helper 와 .info 요소 사이에 띄어쓰기가 한 칸 있어서, 가로 길이 100%인 .info 요소는 자리 부족으로 다음 줄로 가버립니다!

이 문제를 해결하기 위해서는 두 가지 방법이 있습니다.

우선 띄어쓰기를 없애는 방법:

.container {
  width: 300px;
  height: 400px;
  background-color: gray;
  text-align: center;
}

.helper {
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}

.info {
  background-color: lime;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
}

띄어쓰기 공간 만큼의 마이너스 여백을 주는 방법:

.container {
  width: 300px;
  height: 400px;
  background-color: gray;
  text-align: center;
}

.helper {
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}

.info {
  background-color: lime;
  display: inline-block;
  vertical-align: middle;
  width: 100%;

  /* 이 경우 띄어쓰기는 5~7px 정도였습니다! */
  margin-left: -7px;
}

주의 사항:

어떤 요소에 height: 100%;를 설정하기 위해서는 부모의 height가 설정되어 있어야 합니다. 위 경우에는 .helper의 부모인 .container에 height가 설정되어 있었기 때문에 가능했던 것이죠.

line-height로 해결
.info를 인라인 블록으로 설정해주면, line-height 속성을 활용해볼 수도 있습니다. 부모인 .container에 height와 동일한 line-height를 줘보세요.

line-height 속성은 자식들에게 상속되기 때문에 .info에는 line-height: normal;을 꼭 써주셔야 합니다!

.container {
  width: 300px;
  height: 400px;
  background-color: gray;
  text-align: center;
  line-height: 400px;
}

.info {
  background-color: lime;
  display: inline-block;
  line-height: normal;
  vertical-align: middle;
}

다른 방식?
위의 방법들 말고도 세로 가운데 정렬을 하는 다양한 방식들이 있습니다. 포지셔닝을 이용할 수도 있고, 최근에 나온 flexbox를 이용할 수도 있습니다.
위의 방식으로는 해결되지 않는 상황들도 있을 수 있기 때문에, 다양한 방식들을 연구하는 걸 추천드립니다!

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------


제가 부트스트랩을 사용할 때 가장 마음에 드는 점은 간편한 그리드 시스템입니다.

기본 구성원
부트스트랩 그리드 시스템에는 세 가지 구성원이 있습니다:

컨테이너 (container)
행 (row)
열 (column)
기본 규칙
부트스트랩 사이트에 자세히 설명되어 있지만 많은 분들이 무시하는 몇 가지 규칙입니다:

행(<div class="row">)은 꼭 컨테이너(<div class="container">) 안에 넣어주세요.
열(<div class="col">)은 꼭 행(<div class="row">) 안에 넣어주세요. 오직 열만 행의 직속 자식이 될 수 있습니다.
콘텐츠(우리가 그리드에 넣고 싶은 내용)는 꼭 열(<div class="col">) 안에 넣어주세요.
이 규칙들만 지켜도 예상치 못한 레이아웃이 나오지는 않을 것입니다!

기본 사용법
구성원들과 규칙을 알았으면 이제 사용법을 알아봅시다.

부트스트랩 그리드에는 한 줄에 기본적으로 12칸의 열(column)이 있다고 생각하시면 됩니다. 예를 들어서 한 줄을 정확히 3등분하고 싶으면 네 칸을 차지하는 열 세 개를 쓰면 되는 거죠. 네 칸을 사용하는 열은 <div class="col-4">입니다.

아래의 코드에서는 다양한 방식으로 12칸을 나누어보았습니다.

.container {
  text-align: center;
}

.first {
  background-color: yellow;
}

.second {
  background-color: lime;
}

.third {
  background-color: orange;
}

12칸을 넘어가면?
만약 한 행에 12칸이 넘는 열이 들어간다면, 새로운 줄로 넘어가게 됩니다.

.container {
  text-align: center;
}

.first {
  background-color: yellow;
}

.second {
  background-color: lime;
}

.third {
  background-color: orange;
}

.fourth {
  background-color: blue;
}


Why 12?
부트스트랩을 만든 분들은 왜 하필 12라는 숫자로 정했을까요?

12는 상당히 많은 숫자들(1, 2, 3, 4, 6, 12)로 나누어지기 때문에 굉장히 유연합니다!

예를 들어서 8칸으로 나누고 싶더라도 12라는 숫자의 유연함 덕분에 쉽게 할 수 있습니다. col-6를 두 개 쓰면 2등분 할 수 있고, 그 안에서 또 col-3로 4등분을 하면 8칸이 생기겠죠?

이런식으로 열을 또 여러 열로 나누는 것을 '중첩(nesting)'한다고 부릅니다. 중첩을 하기 위해서는 우선 열(<div class="col-6">) 안에 새로운 행(<div class="row">)을 쓰셔야 합니다. 예제를 통해 살펴보세요:

.container {
  text-align: center;
}

.first {
  background-color: yellow;
}

.second {
  background-color: lime;
}

.third {
  background-color: orange;
}

.fourth {
  background-color: blue;
}

부트스트랩의 그리드 시스템은 반응형 웹 디자인을 할 때 가장 빛을 발합니다.

다음은 부트스트랩에서 정해둔 구간들입니다.

Extra Small (< 576px): 모바일
Small (≥ 576px): 모바일
Medium (≥ 768px): 타블릿
Large (≥ 992px): 데스크탑
Extra Large (≥ 1200px): 와이드 데스크탑
컨테이너 (container)
기본적으로 컨테이너는 가운데 정렬이 되어 있고, 그리드의 행들을 감싸주는 역할을 합니다 (행들은 열들을 감싸주고 있고요!). 컨테이너의 종류는 두 가지인데요.

<div class="container">: 구간별로 그리드에 고정된 width를 설정해줍니다.
<div class="container-fluid">: 그리드는 항상 width: 100%;입니다.
<div class="container">
만약 구간별로 그리드에 고정된 가로값을 설정해주고 싶으면 "container" 클래스를 사용하세요. 구간별로 그리드가 고정되어 있으면 레이아웃이 더 예상 가능합니다. 따라서 저는 개인적으로 "container" 클래스를 사용하는 것을 선호하고, 디자이너에게 이렇게 구간별로 고정되는 방식으로 만들기를 부탁합니다!

"container"클래스를 사용하면 아래의 CSS 코드가 적용됩니다.

.container {
  width: 100%; /* extra small */
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

/* small */
@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

/* medium */
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

/* large */
@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

/* extra large */
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

<div class="container-fluid">
저는 많은 경우에 "container" 클래스를 선호하지만, 상황에 따라 그리드가 항상 100%의 가로 길이를 갖는 것이 좋을 때가 있습니다. 그럴 때는 "container-fluid" 클래스를 사용하면 됩니다.

"container-fluid"클래스를 사용하면 아래의 CSS 코드가 적용됩니다.

.container-fluid {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

열 (column)
반응형 구간별로 (총 12칸 중) 열이 차지하는 칸의 개수도 다르게 할 수 있습니다.

예시를 몇 가지 봅시다.

예시 1 (구간별로 모두 설정되어 있는 경우)
<div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
Extra Small (< 576px): 12칸을 모두 차지
Small (≥ 576px): 6칸 차지
Medium (≥ 768px): 4칸 차지
Large (≥ 992px): 3칸 차지
Extra Large (≥ 1200px): 2칸 차지
예시 2 (특정 구간만 설정되어 있는 경우)
아래와 같이 특정 구간에만 열 수가 설정되어 있는 경우도 있습니다. 그렇다면 그 구간부터 새로운 설정이 있는 상위 구간까지는 같은 칸 수를 차지합니다.

<div class="col-12 col-lg-3">
Extra Small (< 576px): 12칸을 모두 차지
Small (≥ 576px): 12칸을 모두 차지
Medium (≥ 768px): 12칸을 모두 차지
Large (≥ 992px): 3칸 차지
Extra Large (≥ 1200px): 3칸 차지
<div class="col-6">
Extra Small (< 576px): 6칸 차지
Small (≥ 576px): 6칸 차지
Medium (≥ 768px): 6칸 차지
Large (≥ 992px): 6칸 차지
Extra Large (≥ 1200px): 6칸 차지

