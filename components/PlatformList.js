import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/PlatformList.module.scss"
import { getAllItems } from "../utils/storyblok"
import SmallCardList from "./SmallCardList" 

const PlatformList = ({ data, level, locale }) => {
  if (level === 'data') {
    var content = data.story.content;
  } else {
    var content = data;
  }
  const [sortby, setSortby] = useState();

  function updateSortby(sortby){
    setSortby(sortby);
    getAllItems('platform', locale, sortby).then(
      function (result) {
        setItems(result.data.stories);
      });
  }
  const [items, setItems] = useState([]);
  getAllItems('platform', locale, sortby).then(
    function (result) {
      setItems(result.data.stories);
    });

  return (
    <div className={styles.list}>
      <div className={styles.orderbypicker}>
        
      </div>
      <div>
        {items && items.length > 0 && <SmallCardList items={items} type="platform"></SmallCardList>}
      </div>
    </div>

  );
};

export default PlatformList;
