import styles from "../styles/Navigation.module.scss"
import Image from "next/image"
const Navigation = ({ locale, locales }) => {
  const resolveMovies = {
    en: 'Movies',
    nl: 'Films',
    fr: 'Films',
  }
  const resolvePeople = {
    en: 'People',
    nl: 'Mensen',
  }
  const resolveNews = {
    en: 'News',
    nl: 'Nieuws',
  }
  const resolveMerchandise = {
    en: 'Shop',
    nl: 'Winkel',
  }
  const resolveGenre = {
    en: 'Genres',
    nl: 'Genres',
    fr: 'Genres',
  }
  const resolveGames = {
    en: 'Games',
    nl: 'Spellen',
    fr: 'Jeux',
  }
  const resolveCharacters = {
    en: 'Characters',
    nl: 'Personages',
    fr: 'Personnages',
  }
  const resolvePlatform = {
    en: 'Platforms',
    nl: 'Platforms',
    fr: 'Plateformes',
  }
  const resolveCompany = {
    en: 'Companies',
    nl: 'Bedrijven',
    fr: 'Entreprises',
  }
  let homeurl = "/";
  if (locale != 'default') {
    homeurl = "/" + locale;
  }

  const defaultLocale = locale === 'en' ? '/' : `/${locale}/`
  return (
    <header className={styles.navigationwrapper}>
      <nav className={styles.navigation} role="navigation">

        <div className={styles.navlogo}>
          <a href={homeurl}>
            {/* <img
              src="https://a.storyblok.com/f/133261/3039x582/a60d166ec2/logo-colored-full.png/m/200x0"
              alt="IMDBPlus Logo"
              className=""
            /> */}
            <Image src="/logo-colored-full.png" alt="IMDBPlus Logo" width="128" height="25" />
          </a>
        </div>
        <div className={styles.navlinkswrapper}>
          <div className={styles.navlinks}>
            {/* <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/movies`} className={styles.movie}>{resolveMovies[locale]}</a>
            </div> */}
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/genre_game`} className={styles.genre}>{resolveGenre[locale]}</a>
            </div>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/games`} className={styles.game}>{resolveGames[locale]}</a>
            </div>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/characters`} className={styles.character}>{resolveCharacters[locale]}</a>
            </div>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/platforms`} className={styles.platform}>{resolvePlatform[locale]}</a>
            </div>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/companies`} className={styles.company}>{resolveCompany[locale]}</a>
            </div>
            {/* <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/people`} className={styles.personality}>{resolvePeople[locale]}</a>
            </div>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/news`} className={styles.newsitem}>{resolveNews[locale]}</a>
            </div>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/shop`} className={styles.product}>{resolveMerchandise[locale]}</a>
            </div> */}
          </div>
          <div className={styles.navlocales}>
            {
              locales.map(loc => {
                return (<div className={styles.navlocale} key={loc}>
                  <a href={`/${loc}`} className={`${locale === loc ? "selected" : ""}`}>{loc}</a>
                  {/* <Image src="/logo-colored-full.png" alt={loc} width="128" height="25" /> */}
                </div>)
              })
            }
          </div>
        </div>

      </nav>
    </header>
  )
}

export default Navigation
