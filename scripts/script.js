const header = `
  <header>
  <nav>
    <ul>
      <li id="intro-menu">Bemutatkozás</li>
      <li id="schools-menu">Tanulmányok</li>
      <li id="jobs-menu">Munkatapasztalat</li>
      <li id="works-menu">Referenciák</li>
      <li id="contact-menu">Elérhetőségek</li>
    </ul>
  </nav>
  </header>
`

const footer = `
<footer>
  <h2>kontakt</h2>
  <p>A gonosz spam robotok miatt email címemet és a telefonszámomat nem teszem nyílvánossá.<br>Elérhetőségeimet a linkedIn profilomon üzenve kérd el!</p>
  <ul>
    <li><img src="style/imgs/icons/linkedin.svg" alt="linkedin"></li>
  </ul>
</footer>
`

// --------------- MAIN PAGE elements

const banner = `
  <section id="banner">
    <h1>hello.</h1>
    <p>A nevem <strong>Szegedi Bernadett</strong>, és junior frontend fejlesztő vagyok.</p>
    <p>15 évet dolgoztam nyomdaipari és marketing területen, mint projektmenedzser, most a kreatív megvalósítás irányába fejlődöm tovább.</p>
    <p>Szívszerelmem maradt a nyomdai kivitelezés is, ám most a digitális megoldások felé vettem az irányt.</p>
    <button>munkáim</button>
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

const motivation = `
  <section id="motivation">
    <h2>motiváció</h2>
    <p>Korábbi tapasztalataimat hasznosítva szeretnék egy olyan csapatban dolgozni, ahol a feladatok sokszínűsége és a kihívások megfűszerezik a mindennapokat, ahol a munkaadóm megbecsüli az emberi kapcsolatokat, partnerként szólítja meg a munkatársait, és konstruktív párbeszédekkel tekinthetünk együtt a kihívásokra.</p>
    <img src="style/imgs/motivation.gif" alt="motivation">
  </section>
`

const schools = `
  <section id="schools">
    <h2>Tanulmányok</h2>
      <div>
        <h3>2023 / Codecool <span># Junior Frontend fejlesztő</span></h3>
        <p>HTML5, CSS3, SVG, JavaScript / EcmaScript, React.js, Node.js / NPM, Express.js, HTTP, Git, GitHub</p>
      </div>
      <div>
        <h3>2022 / Ruander Oktatóközpont <span># Online Marketing Alapismeretek</span></h3>
        <p>Facebook és Instagram hirdetések, Google Ads, Google Analytics and SEO alapok</p>
      </div>
      <div>
        <h3>2022 / Ruander Oktatóközpont <span># Kiadványszerkesztő</span></h3>
        <p>Photoshop, Illustrator, InDesign szoftverek használata</p>
      </div>
      <div>
        <h3>2001 – 2005 / Magyar Hajózási Szakközépiskola és Szakiskola <span># Érettségi</span></h3>
        <p>Angol szak, műszaki tantárgyak (villamosságtan, műszaki rajz, műhely-gyakorlat)</p>
      </div>
  </section>
`

const jobs = `
<section id="jobs">
  <h2>Munkatapasztalat</h2>
  <p>A szakközépiskolát befejezve nem tanultam tovább, fontosabbnak tartottam a tapasztalatszerzést, és kialakítani az anyagi függetlenségem.</p>
  <p>A korai évek az útkeresésről szóltak. Nagyon élveztem a kis létszámú cégek családias hangulatát, amelyek segítettek alapvető képességeim felismerésében.
  Később nyomdaipari területen helyezkedtem el, ahol korábbi tapasztalataimat hasznosítva már párhuzamosan több pozícióban is végeztem összetett feladatokat, ahogy azok a cég életében adódtak vagy szükségessé váltak. A grafikai tervezésre és a termékfejlesztésre egyre nagyobb szenvedéllyel tekintettem.</p>
  <p>Szerencsémre az elmúlt években rengeteg hozzám hasonló gondolkodású és kreatív emberrel dolgozhattam együtt, így csak a legritkább esetben éreztem a munkát tehernek. Sokkal inkább tekintettem rá, mint lehetőségre a tanuláshoz és a fejlődéshez, miközben remekül is szórakozom. A számomra ideális munkahelyen a feladatok összekötik az elemző és kreatív énemet, miközben egy energikus csapattal dolgozhatok együtt.</p>
  <details>            
    <summary><h3>Reklámeszköz.hu</h3></summary>
    <h4>2012 - 2022<br>digitális nyomda & kiállítási eszközök gyártása és forgalmazása</h4>
    <p>Az évek alatt több pozícióban is dolgoztam párhuzamosan.
    Állandó szerepeim: <strong>projekt menedzser, értékesítési vezető, beszerzési vezető, operatív ügyvezető, termékfelelős. </strong>Alkalmanként pedig a kétkezi munkát sem vetettem meg: <strong>dekoratőrként</strong> is segítettem a projekteket, valamint marketing vezetőnket támigattam <strong>grafikai anyagok előállításával.</strong>
    </p>
  </details>
  <details>            
    <summary><h3>DisplayHáz</h3></summary>
    <h4>2009 - 2012<br>digitális nyomda & kiállítási eszközök gyártása és forgalmazása</h4>
    <p>Az akkor kis méretű családi cégben több szerepkörben is volt lehetőség bizonyítani. Elsősorban nyomdai <strong>projekt menedzserként</strong> dolgoztam, és azokkal kapcsolatos <strong>pénzügyi adminisztratív feladatokat</strong> láttam el. Saját műhelyünkben egyedi reklámberendezések gyártásában is részt vettem a <strong>tervezéstől a tesztelésig.</strong> A weboldal megújításánál pedig a tartalom feltöltés és ahhoz szükséges <strong>grafikai munkákat</strong> vállaltam önként.
    </p>
  </details>
  <details>
    <summary><h3>Siffredi Productions</h3></summary>
    <h4>2009<br>filmgyártás és forgalmazás</h4>
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

const technologies = `
<section id="technologies">
<h2>ismeretek</h2>
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



const swiper = new Swiper(".mySwiper", {
  speed: 600,
  parallax: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});





// --------------- SELECTORS ------------------------------
  
const body = document.querySelector('body')

// --------------- CLICK EVENT LISTENERS ------------------

const menuEventListener = () => {
  document.querySelector('ul').addEventListener('click', (e)=> {
    
    const target = e.target.id
    console.log(target)

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
        
        break;
      case 'contact-menu':
        
        break;
    }
  })
}

/*
document.querySelectorAll('.more').forEach((button) => {
  button.addEventListener('click', console.log('click'))
})
*/



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
}

const schoolsPageLoader = () => {
  fixPageElements()
  const main = document.querySelector('main')
  main.insertAdjacentHTML('afterbegin', technologies)
  main.insertAdjacentHTML('afterbegin', schools)
}

const jobsPageLoader = () => {
  fixPageElements()
  const main = document.querySelector('main')
  main.insertAdjacentHTML('afterbegin', motivation)
  main.insertAdjacentHTML('afterbegin', jobs)
}




/*
mainPageLoader();
*/


