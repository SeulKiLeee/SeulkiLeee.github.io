
var documents = [{
    "id": 0,
    "url": "/404.html",
    "title": "404",
    "body": "404 Page not found!Please use the search bar from the bottom left or visit our homepage! "
    }, {
    "id": 1,
    "url": "/about",
    "title": "Memoirs, a free minimalist Jekyll blogging theme with modern design",
    "body": "This website is a demonstration to see Memoirs Jekyll theme in action. The theme is compatible with Github pages, in fact even this demo itself is created with Github Pages and hosted with Github.  Get Memoirs for Jekyll → "
    }, {
    "id": 2,
    "url": "/authors",
    "title": "Authors",
    "body": "{% for author in site. authors %}                       {% if author[1]. gravatar %}                {% else %}                {% endif %}                  {% if author[1]. web %}                       {% endif %}          {% if author[1]. twitter %}                      {% endif %}          {% if author[1]. email %}                      {% endif %}                                     {{ author[1]. display_name }}:         {{ author[1]. description }}                {% endfor %}"
    }, {
    "id": 3,
    "url": "/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 4,
    "url": "/contact",
    "title": "Contact",
    "body": "  Please send your message to {{site. name}}. We will reply as soon as possible!   "
    }, {
    "id": 5,
    "url": "/",
    "title": "Home",
    "body": "  {% for post in paginator. posts %}    {% include postbox. html %}  {% endfor %}  {% include pagination. html %}"
    }, {
    "id": 6,
    "url": "/react",
    "title": "React",
    "body": ""
    }, {
    "id": 7,
    "url": "/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 8,
    "url": "/third-note/",
    "title": "Flutter에서 Social Login 기능 붙이기.",
    "body": "2021/06/25 - Flutter를 배워보자. : 회사에서 flutter로 새로운 앱 서비스를 준비하고 있다. 나는 재작년부터 ‘EggMorning’ 앱 스터디를 하면서 React Native로 앱 개발을 처음 도전 해봤는데, 그 때는 RN업데이트 마다 라이브러리의 버전 충돌 이슈들을 잡느라 곤욕을 치르며 결국 스터디에서는 flutter로 갈아타기로 결정된 상태였다. 회사에서 AR기능의 앱을 서비스 하고 있는데, wikitude의 SDK를 사용하고 있었다. 그래서 wikitude에서 모바일 플랫폼 용으로 SDK를 지원하는 Flutter를 사용하게 되었다. (RN은 Third-party Plugins지원. ) RN에서도 wikitude를 테스트 해봤지만, 나는 실패했다. ㅋㅋㅋㅋ Flutter에서는 wikitude의 샘플 AR이 정상 작동했다. 야호! 이렇게 feasible test를 통해 새로운 서비스는 Flutter 로 결정!열공해야즵-! wikitude SDK Download Link 정상 작동중인 Wikitude-Flutter Sample App 꺅!! 신난당ㅎ_ㅎ(아이패드로 테스트)"
    }, {
    "id": 9,
    "url": "/second-note/",
    "title": "Flutter로 Wikitude AR SDK 테스트 하기 -!",
    "body": "2021/06/22 - Flutter를 배워보자. : 회사에서 flutter로 새로운 앱 서비스를 준비하고 있다. 나는 재작년부터 ‘EggMorning’ 앱 스터디를 하면서 React Native로 앱 개발을 처음 도전 해봤는데, 그 때는 RN업데이트 마다 라이브러리의 버전 충돌 이슈들을 잡느라 곤욕을 치르며 결국 스터디에서는 flutter로 갈아타기로 결정된 상태였다. 회사에서 AR기능의 앱을 서비스 하고 있는데, wikitude의 SDK를 사용하고 있었다. 그래서 wikitude에서 모바일 플랫폼 용으로 SDK를 지원하는 Flutter를 사용하게 되었다. (RN은 Third-party Plugins지원. ) RN에서도 wikitude를 테스트 해봤지만, 나는 실패했다. ㅋㅋㅋㅋ Flutter에서는 wikitude의 샘플 AR이 정상 작동했다. 야호! 이렇게 feasible test를 통해 새로운 서비스는 Flutter 로 결정!열공해야즵-! wikitude SDK Download Link 정상 작동중인 Wikitude-Flutter Sample App 꺅!! 신난당ㅎ_ㅎ(아이패드로 테스트)"
    }, {
    "id": 10,
    "url": "/first-note/",
    "title": "2021년 5월 22일 토요일, 개발 블로그를 다시 시작하다.",
    "body": "2021/05/21 - &lt; 노마드 코더의 풀스택 인스타그램 클론 코딩 &gt;인스타그램 백엔드 + 프론트엔드 + 앱 + 서버를 배우는 과정. 노마드코더 홈페이지에 나와있는 강의 정보를 가져왔다. https://nomadcoders. co/instaclone 프로젝트가 끝나고 한숨 돌릴 여유가 생겼으니 이제 열공 해야지-! 강의 정보: 총 강의수: 232개. 2,119분 (36시간 19분) Django 인스타그램 1. 0 (2017)Prisma 인스타그램 2. 0 (2019)인스타그램 클론코딩 버전 3. 0 (2021) 강의 목표: 백엔드 + 프론트엔드 + 앱 (ios &amp; 안드로이드) = 걍 몽땅 다 해먹는 강의임Expo 로 앱을 만들고. 추가로 React Native CLI 로 설명도 해드릴 예정!-노마드코더-SPEC: 프론트엔드: Apollo, React, React Hook Form, Styled Components, React Hooks백엔드: Apollo Server, GraphQL, Prisma Studio, Prisma Migrate, Prisma Client앱: iOS &amp; Android: React Native, Expo, React Native CLI, React Navigation, React Native Web "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-primary btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><small><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});