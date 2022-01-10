import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Character.module.scss"
import { getData } from "../utils/storyblok"
import RelatedItemGallerySmall from "./RelatedItemGallerySmall"
import RelatedItemGallery from "./RelatedItemGallery"
import InPageSlideshow from "./InPageSlideshow"
import SmallCardList from "./SmallCardList"
import { resolveHref } from "next/dist/next-server/lib/router/router"

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
  fr: 'Personnages'
}
const resolveEnnemies = {
  en: 'Friends, family and ennemies',
  nl: 'Vrienden, gezin en vijanden',
  fr: 'Amis, famille et ennemis',
}
const resolveGames = {
  en: 'Games',
  nl: 'Spellen',
  fr: 'Jeux',
}
const resolveAge = {
  en: 'Age of the character:',
  nl: 'Leeftijd van het personage:',
  fr: 'Âge du personnage:',
}
const Character = ({ data, level }) => {
  var locale = 'en';
  //enriching data
  if (level === 'data') {

    locale = data.story.lang;
    var content = data.story.content;
    var roles = data.rels.filter(obj => {
      return content.role.includes(obj.uuid);
    });
    // var genders =data.story.content.gender;
    var genders=data.rels.filter(obj => {
      return content.gender.includes(obj.uuid);
      });
    var relatedcharacters=data.rels.filter(obj => {
    return content.character.includes(obj.uuid);
    })
    var playables = data.rels.filter(obj => {
      return content.playable.includes(obj.uuid);
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


    var pictures = content.mainpicture;
  } else {
    var content = data;
  }
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
  const [games_good, setGames] = useState([]);
  getData(data.story.uuid, locale, content.preview = false, 'game', 'character').then(
    function (result) {
      setGames(result.data.stories);
    });

  //returning the HTML
  return (
    <SbEditable content={content} key={content._uid}>
      <main>
        {/* <div className={[styles.movie, styles.test].join(' ')}> */}
        <div className={styles.character}>
          <h1 className={styles.title}>
            {content.title}
          </h1>
          <div className={styles.genders}>
            {genders.map((item, index) => (
              <div className={styles.gendersname}> 
              {item.content.title}
              <div className={styles.gender}> 
                <img src={item.content.logo.filename}></img>
                
                        </div>
                  </div> ))} 
          <div className={styles.roles}>
            {roles.map((item, index) => (
              <div className={styles.role}> 
                <img src={item.content.logo.filename}></img>
                  </div>
            ))} 
            <div className={styles.roles}>
            {roles.map((item, index) => (
              <div className={styles.rolesname}> 
                {item.content.title}
                  </div>
            ))} </div>
          </div>
          
          <div className={styles.age}>  
          {resolveAge[locale]} {render(content.age)} 
          </div>
          <div className={styles.mainpicture} style={{ backgroundImage: `url("${content.mainpicture.filename}")` }}>
          </div>
          <div className={styles.imagegallery} style={{ backgroundImage: `url("${content.mainpicture.filename}")` }}>
          </div>
          <div className={styles.relatedcharacters}> 
        {relatedcharacters && relatedcharacters.length > 0 && <SmallCardList items={relatedcharacters} title={resolveEnnemies[locale]} type='character'></SmallCardList>}
        </div>
          {/* <div className={styles.links}>
              <a href={""}>VISIT</a>
            </div> */}
        </div>
        {games_good && games_good.length > 0 && <SmallCardList items={games_good} title={resolveGames[locale]} type="game"></SmallCardList>}</div>
      </main>
    </SbEditable>
  )
}

export default Character
