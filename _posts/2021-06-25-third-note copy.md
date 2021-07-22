---
layout: post
title:  "Flutter+FireBase Google Login 기능 붙이기."
categories: [ Flutter ]
image: assets/images/wikitudesdk.png
beforetoc: "Flutter를 이용한 앱 개발 / FireBase를 이용한 Google Login 기능을 앱에 추가해 보자."
toc: true
---

#### Flutter Firebase 소셜 로그인을 위한 기본 셋팅.
플러터에서 firesbase를 이용하여 소셜 로그인을 하려면, firebase 내에서 몇 가지 준비와,
flutter에서 기본 세팅들이 필요하다. 이 글은 기본 셋팅이 모두 완료 됐다는 가정하에 작성 한다-!
(사실 나도 블로그들을 이것 저것 보며 어떻게 한거라서.. 세세하게 기억나지 않는다..ㅠㅠ)


#### 프로젝드 개발 환경
우선 우리 회사의 프로젝트는
GCP 이용중 ( Node.js, Express ),
Firebase 이용중 (Core, Authentication, Storage)
그리고 DB는 Mysql을 이용중 -!

구글 로그인은 firebase에서 지원하는 소셜 로그인이기 때문에 순조롭게(?) 구현할 수 있었다.



#### FlutterFire (google_sign_in)

나는 FlutterFire 문서를 보고 google_sign_in 을 사용하여 구글 로그인을 구현했다.
[FlutterFire의 소셜 Auth 링크](https://firebase.flutter.dev/docs/auth/social/)
플러터를 이용해서 구글 로그인을 보다 쉽게 도와주는 툴 인것 같다.



------------------------------------

