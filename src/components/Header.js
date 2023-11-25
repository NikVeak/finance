import React from "react";
import Search from './Search';
import styles from "../css/header.module.css"
import Oil from './Oil';
import Dollar from './Dollar';

const Header = ()=>{
  return(
    <header className={styles.headerC}>
      <Search/>
      <ul style={{float:'left'}}>
        <li>
          <Oil/>
        </li>
        <li>
          <Dollar/>
        </li>
      </ul>
      <h1 className="titleH1" style={{color: "#ffffff"}}>GGInvestment.ru</h1>
    </header>
  )
}

export default Header;