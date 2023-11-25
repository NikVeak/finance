import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../css/currency.module.css';

const ListCommodity = () =>
{
  const [data, setData] = useState([]);

  useEffect(()=>{
    const fetchData = async()=>{
      let commodity = [];
      const response_gold = await axios.get('http://localhost:3010/gold');
      const response_silver = await axios.get('http://localhost:3010/silver');
      const response_palladium = await axios.get('http://localhost:3010/palladium');
      const response_platinum = await axios.get('http://localhost:3010/platinum');
      commodity.push(response_gold.data);
      commodity.push(response_silver.data);
      commodity.push(response_palladium.data);
      commodity.push(response_platinum.data);
      console.log(commodity);
      setData(commodity);
    };
    fetchData();
  }, []);

  if (data.length !== 0)
  {
    return(
      <div>
        <div className={styles.currency}>
          <h3>Золото</h3>
          <h3>XAU/USD</h3>
          <h5>{data[0].gold} $</h5>
        </div>

        <div className={styles.currency}>
          <h3>Серебро</h3>
          <h3>XAR/USD</h3>
          <h5>{data[1].silver} $</h5>
        </div>

        <div className={styles.currency}>
          <h3>XPD/USD</h3>
          <h3>Палладий</h3>
          <h5>{data[2].palladium} $</h5>
        </div>

        <div className={styles.currency}>
          <h3>XPT/USD</h3>
          <h3>Платина</h3>
          <h5>{data[3].platinum} $</h5>
        </div>

      </div>
    )
  }else return (<h1>Loading data...</h1>)

}

export default ListCommodity;