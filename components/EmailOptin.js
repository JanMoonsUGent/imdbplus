import React, { useState } from "react"
import styles from "../styles/EmailOptin.module.scss"

const EmailOptin = ({ }) => {
  function toggleformstate() {
    setFormstate(!formstate);
  }
  const [formstate,setFormstate] = useState(false);
  return (
    
    <div className={styles.emailoptin}>
      <div className={styles.optinbutton} onClick={() => toggleformstate()}>Keep me posted through the newsletter</div>
      {formstate&&<iframe width="540" height="900" src="https://e6c958d6.sibforms.com/serve/MUIEAJ2E7WKVidHqw19EOQ7Mtm20sGV1QzOBr68DEQA4IHhLccdreybmcHXG4tR3s5Lq5I6z59pbk2Zf_0rBctz9Q5Vwo5aWQQ32mifuZi3ud9M2v_MSz6JKpbVaQCev5sif5XeuES8ZTptbviJHbSZv8S65q5EqG5RfDblxAlkon88VzZr32Jkk_Jgz1NbvYoNkoTYBQiSbPAJd" frameborder="0" scrolling="auto" allowfullscreen style={{ display: `block`, marginLeft: `auto`, marginRight: `auto`, maxWidth: '100%' }}></iframe>}
    </div>
  );
};

export default EmailOptin;
