---
layout: post
title:  "Flutter의 State 정리."
categories: [ Flutter ]
image: assets/images/flutter.png
beforetoc: "Flutter의 상태 관리에 대해 알아보기. with 공홈"
toc: true
---

###### 공식 홈페이지를 참고하여 flutter state의 개념에 대해 알아보고 나름대로 정리를 해 놓은 글로 오역 및 잘못된 정보가 있을 수 있습니다 !!
보다 더 정확한 내용은 아래의 링크를 참고하시는게 좋습니다-! (영문)
[Flutter 공식 홈페이지에 나온 설명](https://flutter-ko.dev/docs/development/data-and-backend/state-mgmt/intro)



#### Ephemeral state ( 단일 위젯 상태 )
UI state, Local state등 으로도 불리는 사용후 삭제되는 상태.

공홈에 나온 예시들 )
- PageView 안의 현재 페이지.
- 복잡한 애니메이션의 현재 진행 상황.
- BottomNavigationBar 안의 현재 선택된 탭.

단순한 방법으로 변경되며, 위젯 트리의 다른 부분에서 해당 상태에 엑세스 할 필요가 없는 상태에 사용.
상태 관리(Redux, getX 등)를 사용할 필요없이, Stateful Widget만을 사용해도 충분할 때.
++나의 생각) api, data 등 서버 통신이 필요 없을 때. 한 페이지(route) 안에서 끝나는 작업들에 적합한 것으로 예상된다.




#### App State ( 공유 상태 )
사용 후 삭제 되지않고, App 내의 여러 곳에서 공유되며, 사용자 세션 유지등에 필요한 상태.

공홈에 나온 예시들)
- 사용자 기본 설정
- 로그인 정보
- SNS앱에서 알림
- E-커머스 앱에서 장바구니
- 신문앱의 기사나, 게시글의 읽음/읽지 않음 상태. 

여러 곳에서 전역적으로 사용되는 상태. 앱에 로그인한 사용자의 정보 또는 로그인 정보등이 대표적이다.
++나의 생각) 단순히 화면UI가 바뀌는 상태가 아니라, api, data등 서버 통신이 필요할 때 쓰일 것으로 예상된다.
나는 App State를 서비스의 DB 테이블을 참고하여 구조를 짤 계획이다. App State Management Tool 로 getX를 사용할 것이다. 
[getX 한국어 버전 설명](https://github.com/jonataslaw/getx/blob/master/README.ko-kr.md)


------------------------------------

