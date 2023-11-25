
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../css/currency.module.css';
import { Line } from 'react-chartjs-2';

const Forecast = () =>
{
  const [data, setData] = useState([]);

  useEffect(()=>{
    const fetchData = async ()=>{
      let forecast = [];
      const result = await axios.get('http://localhost:8000/forecast/gold').then(res=>{
        console.log(res);
      }).catch(err=>
      {
        console.log(err);
      });
      //const response_brent = axios.get('http://localhost:8000/forecast/brent');
      //const response_cuprum =  axios.get('http://localhost:8000/forecast/cuprum');
      let des_ar = JSON.parse(result)
      let lab = []
      let ds = []
      for (let i= 0; i < des_ar.length;i++){
        lab.push(des_ar[i]['date']);
        ds.push(des_ar[i]['predicted_mean']);
      }
      const lineChartData = {
        labels: lab,
        datasets: [
          {
            data: ds,
            label: "USD",
            borderColor: "#3333ff",
            lineTension: 0.5
          },
        ]
      };
      setData(lineChartData);
    };
    fetchData();
  }, []);

  if (data.length !== 0)
  {
    return(
      <div>
        <Line
          type="line"
          width={160}
          height={60}
          options={{
            title: {
              display: true,
              text: "Forecast gold",
              fontSize: 20
            },
            legend: {
              display: true, //Is the legend shown?
              position: "top" //Position of the legend.
            }
          }}
          data={data}
        />
      </div>
    )
  }else return (<h1>Loading data...</h1>)

}

export default Forecast;