
// --------------- HTML COMPONENTS  ---------------------

const header = `
  <header>
  <nav>
    <ul>
      <li id="intro-menu">intro</li>
      <li id="schools-menu">tanulmányok</li>
      <li id="jobs-menu">munkatapasztalat</li>
      <li id="works-menu">referenciák</li>
      <li id="contact-menu">kontakt</li>
      <a target='_blank' href='https://www.linkedin.com/in/rendicsek/'>
      <li><img src="style/imgs/icons/linkedin.svg" alt="linkedin"></li>
    </a>
    <a target='_blank' href='https://github.com/SzegBer'>
      <li><img src="style/imgs/icons/github.svg" alt="github"></li>
    </a>
    </ul>
  </nav>
  </header>
`

const footer = `
<footer>
  <h2>kontakt</h2>
  <p>A gonosz spam robotok miatt email címemet és a telefonszámomat nem teszem nyílvánossá.<br>Kapcsolatba lépéshez kérlek üzenj linkedIn-en!</p>
  <ul>
    <a target='_blank' href='https://www.linkedin.com/in/rendicsek/'>
      <li><img src="style/imgs/icons/linkedin.svg" alt="linkedin"></li>
    </a>
    <a target='_blank' href='https://github.com/SzegBer'>
      <li><img src="style/imgs/icons/github.svg" alt="github"></li>
    </a>
  </ul>
</footer>
`

const banner = `
  <section id="banner">
    <h1>hello.</h1>
    <p>A nevem <strong>Szegedi Bernadett</strong>, és junior frontend fejlesztő vagyok.</p>
    <p>15 évet dolgoztam nyomdaipari és marketing területen, mint projektmenedzser, most a kreatív megvalósítás irányába fejlődöm tovább.</p>
    <p>Szívszerelmem maradt a nyomdai kivitelezés is, ám most a digitális megoldások felé vettem az irányt.</p>
    <button id="portfolio-button">munkáim</button>
  </section>
`

const strengths = `
  <section id="strengths">
    <h2>erősségek</h2>
    <article>
      <img src="style/imgs/coding.png" alt="Coding">
      <h3>Programozás</h3>
      <p>2023 elején kedztem el komolyabban programozni, és már rengeteg technológiával megismerkedtem: JavaScript, HTML, CSS, Sass, Node.js, Unit testing - és ez a lista csak hosszabb lesz!</p>
      <button class="more">pacsi</button>
    </article>
    <article>
      <img src="style/imgs/graphic.png" alt="Graphic">
      <h3>Grafika</h3>
      <p>Egyre magabiztosabban kezelem az alapvető Adobe grafikai szoftvereket (Photoshop, Illustrator, InDesign), miközben a Canva és Figma felületein is könnyen elboldogulok.</p>
      <button class="more">pacsi</button>
    </article>
    <article>
      <img src="style/imgs/personality.png" alt="Personality">
      <h3>Hozzáállás</h3>
      <p>Legyen az kreatív tervezés, vagy kalapálós munka, lelkiismeretesen és lelkesedve vágok bele egy projektbe, amiből igyekszem a maximumot kihozni. Nem félek új dolgokat tanulni, szeretek kísérletezni.</p>
      <button class="more">pacsi</button>
    </article>
  </section>
`

const schools = `
  <section id="schools">
    <h2>tanulmányok</h2>
      <div>
        <h3><span>Junior Frontend fejlesztő</span><br>2023 / Codecool</h3>
        <p>HTML5, CSS3, SVG, JavaScript / EcmaScript, React.js, Node.js / NPM, Express.js, HTTP, Git, GitHub</p>
      </div>
      <div>
        <h3><span>Online Marketing Alapismeretek</span><br>2022 / Ruander Oktatóközpont</h3>
        <p>Facebook és Instagram hirdetések, Google Ads, Google Analytics and SEO alapok</p>
      </div>
      <div>
        <h3><span>Kiadványszerkesztő</span><br>2022 / Ruander Oktatóközpont</h3>
        <p>Photoshop, Illustrator, InDesign szoftverek alapvető funkciói</p>
      </div>
      <div>
        <h3><span>Érettségi</span><br>2001 – 2005 / Magyar Hajózási Szakközépiskola és Szakiskola</h3>
        <p>Angol szak, műszaki tantárgyak (villamosságtan, műszaki rajz, műhely-gyakorlat)</p>
      </div>
  </section>
`

const technologies = `
<section id="technologies">
  <h2>ismeretek ▼</h2>
  <article>
    <img src="style/imgs/tech-logo/HTML5_logo-2.svg" alt="html">
    <h3>html</h3>
  </article>
  <article>
    <img src="style/imgs/tech-logo/CSS3-2.svg" alt="CSS">
    <h3>css3</h3>
  </article>
  <article>
    <img src="style/imgs/tech-logo/sass.svg" alt="Sass">
    <h3>sass</h3>
  </article>
  <article>
    <img src="style/imgs/tech-logo/javascript.svg" alt="javascript">
    <h3>javascript</h3>
  </article>
  <article>
    <img src="style/imgs/tech-logo/Node.js_logo-1.svg" alt="node">
    <h3>node js</h3>
  </article>
  <article>
    <img src="style/imgs/tech-logo/github-2.svg" alt="github">
    <h3>github</h3>
  </article>
  <article>
    <img src="style/imgs/tech-logo/bootstrap-2.svg" alt="bootstrap">
    <h3>bootstrap</h3>
  </article>
  <article>
    <img src="style/imgs/tech-logo/React-1.svg" alt="react">
    <h3>react</h3>
  </article>
  <article>
    <img src="style/imgs/tech-logo/jest.svg" alt="jest">
    <h3>jest</h3>
  </article>
  <article>
    <img src="style/imgs/tech-logo/ps.svg" alt="photoshop" style="padding: 20px">
    <h3>photoshop</h3>
  </article>
  <article>
    <img src="style/imgs/tech-logo/ai.svg" alt="illustrator">
    <h3>illustrator</h3>
  </article>
  <article>
    <img src="style/imgs/tech-logo/id.svg" alt="indesign">
    <h3>indesign</h3>
  </article>
  <article>
    <img src="style/imgs/tech-logo/figma.svg" alt="figma" style="padding: 20px">
    <h3>figma</h3>
  </article>
  <article>
    <img src="style/imgs/tech-logo/canva.svg" alt="canva" style="padding: 20px">
    <h3>canva</h3>
  </article>
  <article>
    <img src="style/imgs/tech-logo/monday.svg" alt="monday" style="padding: 20px">
    <h3>monday</h3>
  </article>
</section>
`

const jobs = `
<section id="jobs">
  <h2>munkatapasztalat</h2>
  <p>A szakközépiskolát befejezve nem tanultam tovább, fontosabbnak tartottam a tapasztalatszerzést, és kialakítani az anyagi függetlenségem.
  A korai évek az útkeresésről szóltak. Nagyon élveztem a kis létszámú cégek családias hangulatát, amelyek segítettek alapvető képességeim felismerésében.</p>
  <p>Később nyomdaipari területen helyezkedtem el, ahol korábbi tapasztalataimat hasznosítva már párhuzamosan több pozícióban is végeztem összetett feladatokat, ahogy azok a cég életében adódtak vagy szükségessé váltak. A grafikai tervezésre és a termékfejlesztésre egyre nagyobb szenvedéllyel tekintettem.</p>
  <details>            
    <summary><h3>Reklámeszköz.hu</h3></summary>
    <h4>2012 - 2022<br>digitális nyomda & kiállítási eszközök gyártása és forgalmazása</h4>
    <p>Az évek alatt több pozícióban is dolgoztam párhuzamosan.
    Állandó szerepeim: <strong>projekt menedzser, értékesítési vezető, beszerzési vezető, operatív ügyvezető, termékfelelős. </strong>Alkalmanként pedig a kétkezi munkát sem vetettem meg: <strong>dekoratőrként</strong> is segítettem a projekteket, valamint marketing vezetőnket támogattam <strong>grafikai anyagok előállításával.</strong>
    </p>
  </details>
  <details>            
    <summary><h3>DisplayHáz</h3></summary>
    <h4>2009 - 2012<br>digitális nyomda & kiállítási eszközök gyártása és forgalmazása</h4>
    <p>Az akkor még kis családi cégben több szerepkörben is volt lehetőség bizonyítani. Elsősorban nyomdai <strong>projekt menedzserként</strong> dolgoztam, és a területtel kapcsolatos <strong>pénzügyi adminisztratív feladatokat</strong> láttam el. Saját műhelyben egyedi reklámberendezések gyártásában is részt vettem a <strong>tervezéstől a tesztelésig.</strong> A weboldal megújításánál pedig a fejlesztővel egyeztetést, a tartalom feltöltést és ahhoz szükséges <strong>grafikai munkákat</strong> vállaltam önként.
    </p>
  </details>
  <details>
    <summary><h3>Siffredi Productions</h3></summary>
    <h4>2009<br>filmgyártás és forgalmazás külföldi piacra</h4>
    <p>A budapesti irodában elsősorban <strong>személyi asszisztensként</strong>, utazások szervezésével és ad-hoc feladatok megoldásával foglalkoztam. A cég <strong>pénzügyi asszisztenseként</strong> minden napos volt a könyvelővel egyeztetés, és a banki ügyintézés.
    </p>
  </details>
  <details>            
    <summary><h3>EzIT</h3></summary>
    <h4>2008 – 2009<br>szerverbérlés, domain szolgáltatások, hálózat karbantartás</h4>
    <p>Szolgáltatásainkkal kapcsolatos alapvető <strong>ügyfélszolgálati</strong> feladatok ellátása mellett <strong>irodavezetőként</strong> feleltem a 10 fős iroda zavartalan működéséért is. Ügyvezető munkáját segítettem továbbá <strong>pénzügyi asszisztensként</strong>, valamint megismerkedtem a weboldal szerkesztés alapjaival, és néhány ügyfelünknek vállaltam <strong>tartalom feltöltést és formázást</strong> (wordPress).
    </p>
  </details>
  <details>            
    <summary><h3>Pharma Dekor</h3></summary>
    <h4>2006 – 2008<br>POS kampány dekorációk készítése gyógyszertárakban</h4>
    <p>Országos gyógyszertári kirakatok berendezésével és fóliázásában segítettem a céget <strong>dekoratőrként</strong>. A kirakatok mellett partnereink kiállítására is készítettünk stand dekorációkat. A 2-3 fős budapesti irodában <strong>irodavezetőként</strong> és <strong>rendszergazdaként </strong>is részt vettem a napi irodai életben.
    </p>
  </details>
</section>
`

const motivation = `
  <section id="motivation">
    <h2>motiváció</h2>
    <p>Szerencsémre az elmúlt években rengeteg hozzám hasonló gondolkodású és kreatív emberrel dolgozhattam együtt, így csak a legritkább esetben éreztem a munkát tehernek. Sokkal inkább tekintettem rá, mint lehetőségre a tanuláshoz és a fejlődéshez, miközben remekül szórakozom, és kávézhatok is! A számomra ideális munkahelyen a feladatok összekötik az elemző és kreatív énemet, miközben egy energikus és jókedvű csapattal dolgozhatok együtt.</p>
    <img src="style/imgs/motivation.gif" alt="motivation">
  </section>
`

const swiperWrapper = `
<div style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class="swiper mySwiper">
  <div class="swiper-wrapper"></div>
  <div class="swiper-button-next"></div>
  <div class="swiper-button-prev"></div>
  <div class="swiper-pagination"></div>
</div>
`

const swiperSlide = (data) => `
<div class="swiper-slide">

  <div class="parallax-bg" style="
  background-image: url(/style/imgs/portfolio${data.url});
  " data-swiper-parallax="-23%"></div>

  <div class="title" data-swiper-parallax="-300">${data.title}</div>
  <div class="subtitle" data-swiper-parallax="-200">${data.subtitle}</div>
  <div class="text" data-swiper-parallax="-100">
    <p>${data.paragraph}</p>
    ${data.gitPage}
    ${data.gitRepo}
  </div>
</div>
`
const swiperCommunicator = () => {
  const swiper = new Swiper(".mySwiper", {
    speed: 600,
    parallax: true,
    effect: "fade",//
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

const contact = `
<section id="contact">
  <h2>hello.</h2>
</section>
`

// --------------- SELECTORS ---------------------------
  
const body = document.querySelector('body')

// --------------- CLICK EVENT LISTENERS ---------------

const menuEventListener = () => {
  document.querySelector('ul').addEventListener('click', (e) => {
    
    const target = e.target.id

    switch(target){
      case 'intro-menu':
        mainPageLoader()
        break;
      case 'schools-menu':
        schoolsPageLoader()
        break;
      case 'jobs-menu':
        jobsPageLoader();
        break;
      case 'works-menu':
        portfolioPageLoader();
        break;
      case 'contact-menu':
        contactPageLoader();
        break;
    }
  })
}

const pacsiEventListener = () => {

  document.querySelectorAll('.more').forEach((button) => {
    button.addEventListener('click', (e) => {
      schoolsPageLoader();
    })
  })

  document.querySelector('#portfolio-button').addEventListener('click', () => {
    portfolioPageLoader();
  })
}

// --------------- FETCH DATA --------------------------

const getPortfolioData = async () => {
  const response = await fetch('./scripts/data/portfolio.JSON')
  const data = await response.json()
  return data
}

// --------------- PAGE BUILDERS -----------------------

const fixPageElements = () => {
  body.innerHTML = "<main></main>"
  body.insertAdjacentHTML('afterbegin', header)
  body.insertAdjacentHTML('beforeend', footer)
  window.scrollTo(0,0)
  menuEventListener()
}

const mainPageLoader = () => {
  fixPageElements()
  const main = document.querySelector('main')

  main.insertAdjacentHTML('afterbegin', strengths)
  main.insertAdjacentHTML('afterbegin', banner)
  pacsiEventListener();
}

const schoolsPageLoader = () => {
  fixPageElements()
  const main = document.querySelector('main')
  main.insertAdjacentHTML('afterbegin', `<div id="studies"></div>`)
  document.querySelector('#studies').insertAdjacentHTML('afterbegin', schools)
  document.querySelector('#studies').insertAdjacentHTML('afterbegin', technologies)
 }

const jobsPageLoader = () => {
  fixPageElements()
  const main = document.querySelector('main')
  main.insertAdjacentHTML('afterbegin', motivation)
  main.insertAdjacentHTML('afterbegin', jobs)
}

const portfolioPageLoader = async () => {
  fixPageElements()
  const main = document.querySelector('main')
  main.insertAdjacentHTML('afterbegin', swiperWrapper)
  swiperCommunicator();
  const swiperWrapperElement = document.querySelector('.swiper-wrapper')
  const data = await getPortfolioData()
  for(i=0; i<data.length;i++){
    swiperWrapperElement.insertAdjacentHTML('afterbegin', swiperSlide(data[i]))
  }
}

const contactPageLoader = () => {
  fixPageElements()
  const main = document.querySelector('main')
  main.insertAdjacentHTML('afterbegin', contact)
}

// --------------- ONLOADING --------------------------

mainPageLoader();
