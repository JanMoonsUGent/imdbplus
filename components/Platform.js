import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Platform.module.scss"
import { getData } from "../utils/storyblok"
import RelatedItemGallerySmall from "./RelatedItemGallerySmall"
import RelatedItemGallery from "./RelatedItemGallery"
import InPageSlideshow from "./InPageSlideshow"
import SmallCardList from "./SmallCardList"
import { resolveHref } from "next/dist/next-server/lib/router/router"
import BigCardList from "./BigCardList"

// const resolveDirectors = {
//   en: 'Directors',
//   nl: 'Regisseurs',
// }

// const resolveWriters = {
//   en: 'Writers',
//   nl: 'Schrijvers',
// }

// const resolveStars = {
//   en: 'Stars',
//   nl: 'Sterren',
// }

// const resolveMerchandise = {
//   en: 'Merchandise',
//   nl: 'Producten',
// }

// const resolveNews = {
//   en: 'News',
//   nl: 'Nieuws',
// }
const resolveCompanies = {
  en : 'Company',
  nl: 'Bedrijf',
  fr: 'Entreprise'
}
const resolveGames = {
  en: 'Games',
  nl: 'Spellen',
  fr: 'Jeux'
}
const Platform = ({ data, level }) => {
  var content = data;
  var locale = 'en';
  //enriching data
  if (level === 'data') {
    locale = data.story.lang;
    var content = data.story.content; 
    var company = data.rels.filter(obj => {
      return content.companies.includes(obj.uuid);
    });
    


    // var directors = data.rels.filter(obj => {
    //   return content.directors.includes(obj.uuid);
    // });
    // var stars = data.rels.filter(obj => {
    //   return content.stars.includes(obj.uuid);
    // });
    // var writers = data.rels.filter(obj => {
    //   return content.writers.includes(obj.uuid);
    // })
    // var studios = data.rels.filter(obj => {
    //   return content.studios.includes(obj.uuid);
    // })
    

  } else {
  }
  const [games_good, setGames] = useState([]);
  getData(data.story.uuid, locale, content.preview = false, 'game', 'platform').then(
    function (result) {
      setGames(result.data.stories);
    });
  // const [products, setProducts] = useState([]);
  // getData(data.story.uuid, locale, content.preview = false, 'product', 'game').then(
  //   function (result) {
  //     setProducts(result.data.stories);
  //   });

  // const [newsitems, setNewsitems] = useState([]);
  // getData(data.story.uuid, locale, content.preview = false, 'newsitem', 'game').then(
  //   function (result) {
  //     setNewsitems(result.data.stories);
  //   });


  //returning the HTML
  return (
    <SbEditable content={content} key={content._uid}>
      <main>
        {/* <div className={[styles.movie, styles.test].join(' ')}> */}
        <div className={styles.game}>
          <h1 className={styles.title}>
            {content.title}
          </h1>

          {/* <div className={styles.links}>
              <a href={""}>VISIT</a>
            </div> */}
          <div className={styles.mainpicture} style={{ backgroundImage: `url("${content.mainpicture.filename}")` }}>
          </div>
          {/* <div className={styles.immagegalery}>
          <div className={styles.picture} style={{ backgroundImage: `url("${content.pictures.filename}")` }}>
          </div>
        </div> */}
        {/* <div className={styles.game}>
        {characters && characters.length > 0 && <SmallCardList items={characters} title={resolveCharacters[locale]} type='character'></SmallCardList>}
        </div> */}
        <div className={styles.company}>
                {company && company.length > 0 && <BigCardList items={company} title={resolveCompanies[locale]} type='company'></BigCardList>}
                  </div>
                  {games_good && games_good.length > 0 && <SmallCardList items={games_good} title={resolveGames[locale]} type="game"></SmallCardList>}
        </div>
      </main>
    </SbEditable>
  )
}


export default Platform
