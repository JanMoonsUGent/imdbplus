import React, { useState } from "react"
import styles from "../styles/ReviewOptin.module.scss"

const ReviewOptin = ({ }) => {
  function toggleformstate() {
    setFormstate(!formstate);
  }
  const [formstate,setFormstate] = useState(false);
  return (
    
    <div className={styles.emailoptin}>
      <div className={styles.optinbutton} onClick={() => toggleformstate()}>Submit my review</div>
      {formstate&&<iframe width="540" height="900" src="https://e6c958d6.sibforms.com/serve/MUIEAK_NKC4IjFRYyEigJQRy8fZK_EMVCUQs60X45uUSBBuL5telE4bHEdR_6h5I4paBjxxD8PwZxIXvt0dZTNfxJScmv-n-PSbBRoBwHiU8BY8lz9FFHv5orhr-9Ifhacm5ckpMATAZxSeiQ2RUToFj6on4n0HXi2XWuqBjUDWBXoaINnbWX02pRpjj0zGjoGFQZtF0xUnAKTYf" frameborder="0" scrolling="auto" allowfullscreen style={{ display: `block`, marginLeft: `auto`, marginRight: `auto`, maxWidth: '100%' }}></iframe>}
    </div>
  );
};

export default ReviewOptin;
