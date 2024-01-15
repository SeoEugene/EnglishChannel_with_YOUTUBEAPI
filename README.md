# 나만의 영어 콘텐츠 유튜브 만들기

## 사이트 바로가기

## 개요
영어 콘텐츠를 소개하고, 자주 보는 vlog형식의 콘텐츠를 모아놓음으로 써 유튜브 검색 시간을 줄이고자 제작된 웹 서비스 입니다.
2n년간 영어에 관심은 많지만 늘지 않는 나를 위한 맞춤형 영어 추천 영상을 보여드립니다.
시험을 보지않더라도 영어와 친숙해지기 위해 영어 콘텐츠를 되도록이면 많이 보려고 하지만 현지인들의 억양과 속도는 못따라가는 것이 현실입니다.
애니메이션, 예능 프로그램 혹은 쉬운 단어가 나오는 드라마, 영화를 보는 것이 좋은 방법이지만 영상이 길어지다보니 심심할 때 보기에는 적합하지 않은 감이 있죠.
그래서 유튜브로 영어에 대한 귀가 트이고 맥락을 유추할 수 있는 훈련을 하기 좋은 방법은 한국계 미국인 혹은 한글이 모국어인 사람의 영어콘텐츠가 적합하다 생각했고, 여러가지 콘텐츠가 많은 영어 채널과 한글 자막이 함께 있는 영상들을 모아놓아보자고 결심했습니다.


## 기능
1. 채널 추천
2. 검색
3. 채널가기
4. 영상보기

## Library
1. react-router-dom 
2. axios
3. react-icons
4.  react-player
5.  sass
6.  react-helmet-async
7.  swiper

## 페이지 구성
1. Home
![Home](Main1.png)
![Home](Main2.png)

2. Today
![Today](Today.png)

3. Youtuber
![Youtuber](Youtuber.png)

4. Search
![Search](Search.png)

5. Channel
![Channel](Channel.png)

6. Video
![Video](Video.png)

## Layout (header, Search, Footer)
### header (Logo, Menu, Sns)
1. Logo.jsx
```
const Logo = ({ toggleMenuBar }) => {
    return (
        <>
            <h1 className='header__logo'>
                <Link to='/' onClick={toggleMenuBar}>
                    <em><GiButterfly /></em>
                    <div>Find English</div>
                </Link>
            </h1>
        </>
    )
}
```

2. Menu.jsx
```
const Menu = () => {
    const location = useLocation();
    return (
        <nav className='header__menu'>
            <ul className='menu'>
                {menuText.map((menu, key) => (
                    <li key={key} className={location.pathname === menu.src ? 'active' : ''}>
                        <Link to={menu.src}>
                            {menu.icon} {menu.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <ul className='keyword'>
                {keywordText.map((keyword, key) => (
                    <li key={key} className={decodeURIComponent(location.pathname) === decodeURIComponent(keyword.src) ? 'active' : ''}>
                        <Link to={keyword.src}>
                            {keyword.icon} {keyword.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
```

3. Sns.jsx
```
const Sns = () => {
    return (
        <div className="header__sns">
            <ul>
                {snsText.map((sns, key) => (
                    <li key={key}>
                        <a href={sns.src} target='_blank' rel='nonopener noreferrer'>
                            <span>{sns.icon}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
```

### Search
1. Search
```
const Search = () => {
    const [searchKeyword, setSearchKeyword] = useState('');
    const Navigate = useNavigate();

    const handleSearch = () => {
        if (searchKeyword) {
            Navigate(`/search/${searchKeyword}`);
            setSearchKeyword('');
        }
    }

    return (
        <div id='search'>
            <div className="search__inner">
                <label htmlFor="searchInput">검색</label>
                <input type='search'
                    id='searchInput'
                    placeholder='검색어를 입력해주세요.'
                    autoComplete='off'
                    className='search__input'
                    onChange={e => setSearchKeyword(e.target.value)}
                    onKeyDown={e => {
                        if (e.key === "Enter") {
                            handleSearch();
                        }
                    }}
                />
            </div>
        </div>
    )
}
```

### Footer
1. Footer
```
const Footer = () => {
    return (
        <footer id='footer' role='contentinfo'>
            <a href="mailto:97.eugene.s@gmail.com"
                rel="noopener noreferrer">
                97.eugene.s@gmail.com
            </a>
        </footer>
    )
}
```

## install
`npm install 
 react-router-dom axios react-icons react-player sass react-helmet-async swiper`

### `npm start`
### `npm test`
### `npm run build`npm install swiper@latest
### `npm run eject`
### `npm run build` fails to minify

## API
use youtube API

### postman
<p>API 개발 및 테스트를 위한 협업 도구로 널리 사용되는 소프트웨어입니다. API 개발 및 테스트를 위한 협업 도구로 널리 사용되는 소프트웨어입니다.</p>
1. API 요청 및 응답 테스트:
HTTP 메서드(GET, POST, PUT, DELETE 등)를 사용하여 API 요청을 작성하고 보낼 수 있습니다.
요청에 필요한 헤더, 바디, 파라미터 등을 쉽게 관리할 수 있습니다.
서버의 응답을 확인하고 테스트할 수 있습니다.
<br>
2. 환경 및 변수:
여러 환경을 설정하여 각각의 환경에 따라 다른 설정을 사용할 수 있습니다.
변수를 사용하여 동적으로 데이터를 생성하고 재사용할 수 있습니다.
<br>
3.컬렉션:
관련된 API 요청을 그룹화하여 컬렉션으로 저장하고 공유할 수 있습니다.
컬렉션을 사용하여 테스트 시나리오를 작성하고 실행할 수 있습니다.
<br>
4.자동화 및 테스트 스크립트:
JavaScript 기반의 스크립트를 사용하여 테스트를 자동화할 수 있습니다.
테스트 시나리오를 스크립트로 작성하여 반복적인 테스트를 자동화할 수 있습니다.
<br>
5. 문서화:
API 요청 및 응답에 대한 문서를 작성하고 공유할 수 있습니다.
Swagger 및 OpenAPI 형식을 지원하여 API 정의를 문서화할 수 있습니다.
<br>
6.모니터링:
API 엔드포인트를 주기적으로 테스트하고 모니터링할 수 있는 기능을 제공합니다.


## git
echo "# EnglishChannel_with_YOUTUBEAPI" >> README.md
  git init
  git add README.md
  git commit -m "first commit"
  git branch -M main
  git remote add origin https://github.com/SeoEugene/EnglishChannel_with_YOUTUBEAPI.git
  git push -u origin main


`git config --global core.autocrlf true // 시스템 전체에 적용`
`git config core.autocrlf true // 해당 프로젝트에만 적용`          

