import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dollar = () =>{
  const [data, setData] = useState([]);

  useEffect(()=>{

     const fetchData = async ()=>{
       const response = await axios.get('http://localhost:3010/dollar')
         console.log("gg",response.data);
         setData(response.data['usd']);
     };
      fetchData();
  }, []);

  return(
    <div className="mainFin" style={{color:"#ffffff"}}>
      <h5>USD/RUB: {data} RUB</h5>

    </div>
  );

};

export default Dollar;