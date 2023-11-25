import React from 'react';
import styles from "./css/ul.module.css";
import News from './components/News';
import { Link } from 'react-router-dom';


function Home(){
  return(
    <div>
      <div className="menu">
        <ul className={styles.mainUl}>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/">Индексы</Link>
          </li>
          <li>
            <div>
              <Link to="/list_stock">Акции</Link>
            </div>
          </li>
          <li>
            <div>
              <Link to="/list_currencies">Валюты</Link>
            </div>
          </li>
          <li>
            <div>
              <Link to="/list_commodities">Товары</Link>
            </div>
          </li>
          <li>
            <div>
              <Link to="/forecast">Прогнозы</Link>
            </div>
          </li>
        </ul>
      </div>
      <div className="news">
        <News/>
      </div>
    </div>

  );
}
export default Home;