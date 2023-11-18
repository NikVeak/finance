import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "../css/ulTitle.module.css"

const News = () => {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();
  today = yyyy+'-'+mm + '-' + dd;

  const apiKey = "pub_32501e31191af2eed97dadbb00bcc6817ab8d";
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await
        axios.get("https://newsdata.io/api/1/news?"
          +"apikey="+apiKey+ "&category=business"+
          "&country=ru"+
          "&language=ru"+
        "&image=1");
      setNews(response.data.results);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="blockTitle">
      <h2 style={{color:"#ffffff"}}>Экономические новости</h2>
      <ul className={styles.ulTitle}>
        {news.map((article) => (
          <li key={article.article_id}>
            <h3>{article.title}</h3>
            <h5>{article.pubDate}</h5>
            <a href={article.link}>Перейти</a>
            <br/>
            <img className=".edge" src={article.image_url}/>
            <p>{article.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
