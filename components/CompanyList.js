import React, { useState } from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"
import styles from "../styles/CompanyList.module.scss"
import { getAllItems } from "../utils/storyblok"
import BigCardList from "./BigCardList"

const CompanyList = ({ data, level, locale }) => {
  if (level === 'data') {
    var content = data.story.content;
  } else {
    var content = data;
  }
  const [sortby, setSortby] = useState();

  const [items, setItems] = useState([]);
  getAllItems('Company', locale, sortby).then(
    function (result) {
      setItems(result.data.stories);
    });

  return (
    <div className={styles.list}>
      <div>
        {items && items.length > 0 && <BigCardList items={items} type="Company"></BigCardList>}
      </div>
    </div>

  );
};

export default CompanyList;
