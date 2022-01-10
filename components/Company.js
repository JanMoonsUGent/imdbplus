import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/Company.module.scss"
import { getData } from "../utils/storyblok"
import BigCardList from "./BigCardList"
import SmallCardList from "./SmallCardList"
const resolvePlatform ={
  en: 'Platforms',
  nl: 'Platforms',
  fr: 'Plateformes',
}
const resolveGames = {
  en: 'Games',
  nl: 'Spellen',
  fr: 'Jeux',
}
const Company= ({ data }) => {
  var locale = data.story.lang;
  
  var content = data.story.content;
  var countries = data.rels.filter(obj => {
    return content.country.includes(obj.uuid);
  });

  const [platforms_good, setPlatforms] = useState([]);
  getData(data.story.uuid, locale, content.preview = false, 'platform', 'companies').then(
    function (result) {
      setPlatforms(result.data.stories);
    });
    const [games_good, setGames] = useState([]);
  getData(data.story.uuid, locale, content.preview = false, 'game', 'publisher').then(
    function (result) {
      setGames(result.data.stories);
    });
  return (
    <SbEditable content={content} key={content._uid}>
      <main>
        {/* <div className={[styles.movie, styles.test].join(' ')}> */}
        <div className={styles.studio}>
          <h1 className={styles.title}>
            {content.title}
          </h1><div className={styles.logo}>
          <img src={content.logo.filename} />
          </div>
            {countries.map((item, index) => (
              <div className={styles.country}>
                <img src={item.content.flag.filename}></img>
              </div>
            ))}
          
        
        <div className={styles.description}>
          {render(content.description)}
        </div>


  {platforms_good && platforms_good.length > 0 && <BigCardList items={platforms_good}  title={resolvePlatform[locale]} type="platform"></BigCardList>} 
  {games_good && games_good.length > 0 && <SmallCardList items={games_good}  title={resolveGames[locale]} type="game"></SmallCardList>} </div>
          
      </main>
    </SbEditable>
  )
}

export default Company
