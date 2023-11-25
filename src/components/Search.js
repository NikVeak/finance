import React, { useEffect, useState } from 'react';
import styles from "../css/enterField.module.css";
const Search = ()=>{
    const[enter, setEnter] = useState([]);

    useEffect(()=>{

    });

    return(
      <div className="containerInput" style={{position: "relative"}}>
          <input type="search" placeholder="Поиск..." className={styles.enterField}/>
      </div>
    )
}

export default Search;