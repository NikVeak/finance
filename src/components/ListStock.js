import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../css/ulStock.module.css';
import { Link, useLocation } from 'react-router-dom';
const ListStock = () =>{

  const [data, setData] = useState([]);

  useEffect(()=>{
      axios.get('http://localhost:3010/stock/list')
        .then(response => {
          console.log(response.data);
          setData(response.data);
          localStorage.setItem("stocks", response.data);
        })
        .catch(error=>{
          console.error(error);
        })
  }, []);

  return(
    <div className="listStock">
      <h3 style={{color:'white'}}>Российские акции</h3>
      <ul className={styles.ulStock}>
        {data.map((stock)=>(
          <li key={stock[0]}>
            <h5><Link to={`/stock/${stock[0]}`}>{stock[0]}</Link>: {stock[1]} RUB</h5>
            <p></p>
          </li>
        ))}
      </ul>
    </div>
  )

}

export default ListStock;