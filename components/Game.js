import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Game.module.scss"
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
  nl: 'Personages',
  fr: 'Personnages',
}
const resolvePlatform ={
  en: 'Platforms',
  nl: 'Platforms',
  fr: 'Plateformes',
}
const resolvePublisher ={
  en: 'Publishers',
  nl: 'Uitgevers',
  fr: 'Editeur'
}
const resolveDate ={
  en: 'Original release date =',
  nl: 'Oorspronkelijke releasedatum =',
  fr: 'Date de sortie originelle=',
}
const ResolveLink ={
  en: 'Amazon purchase link',
  nl: 'Amazon aankooplink',
  fr: "Lien d'achat Amazon",
}

const Game = ({ data, level }) => {
  var locale = 'en';
  //enriching data
  if (level === 'data') {
    locale = data.story.lang;
    var content = data.story.content;
    var platforms = data.rels.filter(obj => {
      return content.platform.includes(obj.uuid);
    });
    if (content.minimumage){
    var minimumage = data.rels.filter(obj => {
      return content.minimumage.includes(obj.uuid);
    })};
    if (content.publisher){
      var publisher = data.rels.filter(obj => {
      return content.publisher.includes(obj.uuid);
    })};
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
    if (content.character){
      var characters=data.rels.filter(obj => {
        return content.character.includes(obj.uuid);
    })
    
    

  } else {
    var content = data;

  }
  var pictures = content.pictures;
  var date = content.releasedate;
  var trailer = content.trailer;
  
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

  const [reviews, setReviews] = useState([]);
  getData(data.story.uuid, locale, content.preview = false, 'review', 'game_review').then(
    function (result) {
      setReviews(result.data.stories);
    });
  //returning the HTML
  return (
    <SbEditable content={content} key={content._uid}>
      <main>
        {/* <div className={[styles.movie, styles.test].join(' ')}> */}
        <div className={styles.game}>
          <h1 className={styles.title}>
            {content.title}
          </h1>
          <div  className={styles.date}>
        {resolveDate[locale]}{date}
        <div className={styles.link}>
        {content.link && content.link.length > 0 && <a href={content.link}>{ResolveLink[locale]}</a>}</div>
          </div>
          <div className={styles.imagegallery}>
    
            <InPageSlideshow pictures={pictures}></InPageSlideshow>
          </div>  
          <div className={styles.Summary}>
            {render(content.Summary)}
          </div>

          {/* <div className={styles.links}>
              <a href={""}>VISIT</a>
            </div> */}
          <div className={styles.mainpicture} style={{ backgroundImage: `url("${content.mainpicture.filename}")` }}> {characters && characters.length > 0 && <RelatedItemGallerySmall items={characters} title={resolveCharacters[locale]} type='character'></RelatedItemGallerySmall>}<div className={styles.minimumage}>
                  {minimumage && minimumage.length > 0 && <BigCardList items={minimumage} type='minimumage'></BigCardList>}
                  </div>
          </div>
          {/* <div className={styles.videowrapper}> <iframe src={content.trailer.filename} frameborder="300" allowFullScreen></iframe>
          </div> */}
          <div className={styles.trailer}>
          {content.trailerlink && content.trailerlink.length > 0 &&<iframe width="560" height="315" src={content.trailerlink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>link</iframe>}
          {/* <video width="320" height="240" controls="controls" mute="mute" preload="auto"> <source scr={"http://techslides.com/demos/sample-videos/small.mp4"} type="video/mp4"></source></video>
          {/* <div className={styles.immagegalery}> */}</div>
          <div className={styles.picture} style={{ backgroundImage: `url("${content.pictures.filename}")` }}>
          </div>
        </div>
        
       
        <div className={styles.platforms}>
                {platforms && platforms.length > 0 && <BigCardList items={platforms} title={resolvePlatform[locale]} type='platform'></BigCardList>}
                  </div>
                  
          <div className={styles.publisher}>
          {publisher && publisher.length > 0 && <BigCardList items={publisher} title={resolvePublisher[locale]} type='Company'></BigCardList>}
                  </div>
                  
                  {reviews && reviews.length > 0 && <SmallCardList items={reviews}  title = 'Reviews' type="review"></SmallCardList>} 
                  
                  
      </main>
    </SbEditable>
  )
}
}

export default Game
