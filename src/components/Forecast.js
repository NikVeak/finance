import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ChartComp from './ChartComp';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import styles from '../css/forecast.module.css';

Chart.register(CategoryScale);

const Forecast = () =>
{

  const rechargeData = (result, name_label) =>{
    let des_ar = result
    console.log(result);
    let lab = []
    let ds = []

    if (des_ar !== undefined)
    {
      for (let i = 0; i < des_ar.length; i++) {
        lab.push(des_ar[i]["date"]);
        ds.push(des_ar[i]["predicted_mean"]);
      }
    }

    return {
      labels: lab,
      datasets: [
        {
          label: name_label,
          fontsize:"20px",
          data: ds,
          fill: false,
          borderColor: "#3333ff",
          lineTension: 0.9,
          backgroundColor:"#282525",
          pointRadius:5
        },
      ]
    };
  };


  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(()=>{
    let result;
    const fetchData = async ()=> {
      let data_list = []
      const response_gold = await axios.get('http://localhost:8000/forecast/gold');
      const response_brent = await axios.get('http://localhost:8000/forecast/brent');
      const response_cuprum =  await axios.get('http://localhost:8000/forecast/cuprum');
      const response_dollar = await axios.get('http://localhost:8000/forecast/dollar');
      const response_imoex =  await axios.get('http://localhost:8000/forecast/imoex');

      data_list.push(rechargeData(response_imoex["data"], "Прогноз по Индексу Мосбиржи (RUB)"));
      data_list.push(rechargeData(response_dollar["data"], "Прогноз по доллару США (RUB)"));
      data_list.push(rechargeData(response_gold["data"], "Прогноз по золоту (USD)"));
      data_list.push(rechargeData(response_brent["data"], "Прогноз по нефти марки Brent (USD)"));
      data_list.push(rechargeData(response_cuprum["data"], "Прогноз по меди (USD)"));

      console.log(data_list);
      setLoading(true);
      setData(data_list);
    };
    fetchData();


  }, [] )

  if (isLoading)
  {
    return(
      <div className={styles.forecast}>
        <ChartComp chartData={data[0]}/>
        <br/>
        <div style={{marginBottom:"10%"}}></div>
        <ChartComp chartData={data[1]}/>
        <br/>
        <div style={{marginBottom:"10%"}}></div>
        <ChartComp chartData={data[2]}/>
        <br/>
        <div style={{marginBottom:"10%"}}></div>
        <ChartComp chartData={data[3]}/>
        <br/>
        <div style={{marginBottom:"10%"}}></div>
        <ChartComp chartData={data[4]}/>
      </div>
    )
  }else return (<h1>Loading data...</h1>)

}

export default Forecast;