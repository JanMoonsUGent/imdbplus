import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Review.module.scss"
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
const resolveCharacters = {
  en: 'Characters',
  nl: 'Personage',
  fr: 'Personnages',
}
const resolvePlatform ={
  en: 'Platform',
  nl: 'Platform',
  fr: 'Plateformes',
}

const Review = ({ data, level }) => {
  var locale = 'en';
  //enriching data
  if (level === 'data') {
    locale = data.story.lang;
    var content = data.story.content;
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
    var content = data;

  }
  var game=data.rels.filter(obj => {
    return content.game_review.includes(obj.uuid);
})
  var date = content.date;
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
        <div className={styles.review}>
          <h1 className={styles.title}>
            {content.title}
          </h1>
          <div  className={styles.date}  >
        Date of the review= {date}
          </div>
          <div className={styles.mainpicture} style={{ backgroundImage: `url("${content.mainpicture.filename}")` }}>
          </div>
          <div  className={styles.rating}  >
         {content.rating} stars on 5
          </div>
          <div className={styles.description}>
            {render(content.description)}
          </div>
          {/* <div className={styles.links}>
              <a href={""}>VISIT</a>
            </div> */}
          {/* <div className={styles.immagegalery}>
          <div className={styles.picture} style={{ backgroundImage: `url("${content.pictures.filename}")` }}>
          </div>
        </div> */}
         <div className={styles.review}>
        {game && game.length > 0 && <SmallCardList items={game} type='game'></SmallCardList>}
        </div>
         </div>
        
      </main>
    </SbEditable>
  )

}

export default Review
