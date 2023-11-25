import React, { useEffect, useState } from 'react';
import styles from '../css/currency.module.css'
import axios from 'axios';

const ListCurrency = () =>{

  const [data, setData] = useState([]);

  useEffect(()=>{
    const fetchData = async()=>{
      let currency = [];
      const response_hkd = await axios.get('http://localhost:3010/hongkongdollar');
      const response_cny = await axios.get('http://localhost:3010/cny');
      currency.push(response_cny.data);
      currency.push(response_hkd.data);
      console.log(currency);
      setData(currency);
    };
    fetchData();
  }, []);

  if (data.length !== 0)
  {
    return(
      <div>
        <div className={styles.currency}>
          <h3>Гонконгский доллар</h3>
          <p>
            Гонко́нгский до́ллар (кит. трад. 港圓, упр. 港元, пиньинь Gǎngyuán,
            палл. ган юань, англ. Hong Kong dollar) —
            денежная единица Специального административного района Гонконг Китайской Народной Республики.
            Буквенный код гонконгского доллара в стандарте ISO 4217 — HKD, цифровой — 344,
            Официальный символ — HK$.
            По состоянию на апрель 2019 года гонконгский доллар является девятой наиболее
            торгуемой валютой в мире и применяется в межбанковских расчётах.
          </p>
          <h5>HKD: {data[1].hkd} RUB</h5>
        </div>
        <div className={styles.currency}>
          <h3>Китайский юань</h3>
          <p>
            Юа́нь (кит. трад. 圓, упр. 元, пиньинь Yuán) — современная валюта Китайской Народной Республики,
            в которой измеряется стоимость жэньминьби (кит. упр. 人民币, пиньинь Rénmínbì,
            буквально: «народные деньги», сокращённо RMB). Входит в «корзину» специальных прав заимствования МВФ.
            Международное обозначение валюты в стандарте ISO 4217 — CNY.
          </p>
          <h5>CNY: {data[0].cny} RUB</h5>
        </div>
      </div>
    )
  }else{
    return (<h1>Loading data...</h1>)
  }

}

export default ListCurrency;