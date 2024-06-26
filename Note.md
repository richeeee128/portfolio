# 내용 정리

## HTML

<details>
<summary>기본 HTML</summary>

Html 문서는 HTML 요소들로 구성됨. 한 쌍으로 이루어짐.  
 paragraph (단락, 절)이라는 의미의 p 태그  
<태그 속성1 = "값"1> 컨텐츠, 보이는 내용 </태그>  
중첩 요소 가능 span, strong 처럼.
컨텐츠가 없는 태그도 있음. (Void Elements) 그래서 Void라는 타입을 지정해주는구나  
이해완

</details>
<details>
<summary>HEAD 정리</summary>

head - 메타데이터 (웹사이트에 대한 설명) : 책 표지  
문서의 메타데이터 + UI상으로 보여지지 않는 정보들  
SEO(타이틀, 설명, 저자), CSS스타일, JS링크 등
charset(문자열 세트) : UTF-8 인코딩

```HTML
<meta charset = "UTF-8">
```

</details>

<details>
<summary>BODY 정리</summary>

head - 메타데이터 (웹사이트에 대한 설명) : 책 표지  
문서의 메타데이터 + UI상으로 보여지지 않는 정보들  
SEO(타이틀, 설명, 저자), CSS스타일, JS링크 등
charset(문자열 세트) : UTF-8 인코딩

body - 웹사이트 내용 (UI) : 책 내용
구조적인 텍스트는 제목, 부제목, 단락으로 구성되어 있음

```HTML
<div> 떡칠하지 말고
<main>, <article>, <section> 을 사용하라.
지금 프로젝트 하는 것처럼 하면 메인이 곧 전체 outline이고 acticle이 2개(상세 페이지, 댓글), section 이 제목, 판매자, 콘텐츠 내용로 구성해야겠다.

```

HTML

```
section*5
```

왜 나에게 \*n 이후 엔터를 하면 똑같이 나온다는 걸 말해주지 않은걸까  
한줄한줄 복사 했는데 😂

```
lorem
```

입숨이 내장되어 있다! 입숨 사이트를 검색해서 넣었는데 그럴 필요가 없었다! 매우 기쁨

</details>

## CSS

<!-- <details> -->
<summary>기본 CSS</summary>
BEM (Block Element Modifiy)

```
block__element--modifier
```

블럭\_\_요소--상태값  
이런 순으로 CSS 이름을 지음  
이름 충돌을 방지하기 위함

```
.card
.card__img
.card__title
.card__button--blue
```

재사용하는 것이라면 그냥 고유한 이름을 붙여도 된다.

```
.header_logo img
.header_logo_img
```

.hdeader_logo 하고나서 img 태그를 찾는 것은 수많은 img 태그를 모두 다 훑어보면서 .header_logo 를 찾는 것이므로 매우 비경제적이다. 따라서 번거롭더라도 class 와 id 지정하는 것을 추천

### 스타일링으로 간단하게 위치 변경

```
.testimonial:nth-child(even) .testimonial_img {
  order: 1;
```

order - 현재 요소의 배치 순서를 지정함. 따라서 0번으로 시작한 img를 1로 지정함으로써 뒤로 밀려나게 되는 것임.
그리고 even을 이용하여 짝수마다 변경. testimonial이 하나 더 생기면 그것은 이미지가 뒤에 있는 상태로 생성됨.

</details>

<details>
<summary>복사용<summary>
</details>
