import styles from "../styles/NavigationMobile.module.scss"
import React, { useState } from "react"

const NavigationMobile = ({ locale, locales }) => {

  const resolveMovies = {
    en: 'Movies',
    nl: 'Films',
  }
  const resolvePeople = {
    en: 'People',
    nl: 'Mensen',
  }
  const resolveNews = {
    en: 'News',
    nl: 'Nieuws',
  }
  const resolveGenre = {
    en: 'Genres',
    nl: 'Genres',
    fr: 'Genres',
  }
  const resolveMerchandise = {
    en: 'Shop',
    nl: 'Winkel',
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
    fr: 'Entreprises'
  }
  function togglenav() {
    setNavstate(result.data.stories);
  }

  const [navstate,setNavstate] = useState(false);
  //setNavstate(true);

  const defaultLocale = locale === 'en' ? '/' : `/${locale}/`
  return (
    <header className={styles.navigationmobilewrapper}>
      <nav className={styles.navigationmobile} role="navigation">

        <div className={styles.navlogo}>
          <a href="/">
            <img
              src="https://a.storyblok.com/f/133261/3039x582/a60d166ec2/logo-colored-full.png/m/200x0"
              alt="IMDBPlus Logo"
              className=""
            />
          </a>
        </div>
        <div className={styles.hamburger} onClick={() => setNavstate(!navstate)}><div className={styles.line}></div><div className={styles.line}></div><div className={styles.line}></div></div>
        {navstate&&<div className={styles.navlinkswrapper}>
          <div className={styles.navlinks}>
            {/* <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/movies`} className={styles.movie}>{resolveMovies[locale]}</a>
            </div> */}
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/genre_game`} className={styles.genre_game}>{resolveGenre[locale]}</a>
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
                </div>)
              })
            }
          </div>
        </div>}

      </nav>
    </header>
  )
}

export default NavigationMobile
