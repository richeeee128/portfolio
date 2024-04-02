<!-- <details> -->
<summary><h1>내용 정리</h1></summary>

Html 문서는 HTML 요소들로 구성됨. 한 쌍으로 이루어짐.  
 paragraph (단락, 절)이라는 의미의 p 태그  
<태그 속성1 = "값"1> 컨텐츠, 보이는 내용 </태그>  
중첩 요소 가능 span, strong 처럼.
컨텐츠가 없는 태그도 있음. (Void Elements) 그래서 Void라는 타입을 지정해주는구나  
이해완

</details>

## Head 정리

head - 메타데이터 (웹사이트에 대한 설명) : 책 표지  
문서의 메타데이터 + UI상으로 보여지지 않는 정보들  
SEO(타이틀, 설명, 저자), CSS스타일, JS링크 등
charset(문자열 세트) : UTF-8 인코딩

```HTML
<meta charset = "UTF-8">
```

## body 내용 정리

body - 웹사이트 내용 (UI) : 책 내용
구조적인 텍스트는 제목, 부제목, 단락으로 구성되어 있음

```HTML
<div> 떡칠하지 말고
<main>, <article>, <section> 을 사용하라.
지금 프로젝트 하는 것처럼 하면 메인이 곧 전체 outline이고 acticle이 2개(상세 페이지, 댓글), section 이 제목, 판매자, 콘텐츠 내용로 구성되겠네.

```
