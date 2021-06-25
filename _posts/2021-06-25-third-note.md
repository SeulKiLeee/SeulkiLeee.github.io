---
layout: post
title:  "Flutter에서 Social Login 기능 붙이기."
categories: [ Flutter ]
image: assets/images/wikitudesdk.png
beforetoc: "회사에서 Flutter를 통해 새로운 AR 서비스를 진행하기로 했다...!! wikitude AR SDK가 지원되는 Framework를 찾아 보자!"
---

#### Flutter를 배워보자.
회사에서 flutter로 새로운 앱 서비스를 준비하고 있다. 
나는 재작년부터 'EggMorning' 앱 스터디를 하면서 React Native로 앱 개발을 처음 도전 해봤는데, 
그 때는 RN업데이트 마다 라이브러리의 버전 충돌 이슈들을 잡느라 곤욕을 치르며 결국 스터디에서는 flutter로 갈아타기로 결정된 상태였다.

회사에서 AR기능의 앱을 서비스 하고 있는데, wikitude의 SDK를 사용하고 있었다. 
그래서 wikitude에서 모바일 플랫폼 용으로 SDK를 지원하는 Flutter를 사용하게 되었다. (RN은 Third-party Plugins지원.) 
RN에서도 wikitude를 테스트 해봤지만, 나는 실패했다.ㅋㅋㅋㅋ Flutter에서는 wikitude의 샘플 AR이 정상 작동했다. 야호!

이렇게 feasible test를 통해 새로운 서비스는 Flutter 로 결정!
열공해야즵-!

[wikitude SDK Download Link](https://www.wikitude.com/download/)


![wikitude-Flutter AR 테스트 영상](https://seulkileee.github.io/assets/video/wiki-sample.gif)
###### 정상 작동중인 Wikitude-Flutter Sample App 꺅!! 신난당ㅎ_ㅎ(아이패드로 테스트)
------------------------------------

