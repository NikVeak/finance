import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dollar = () =>{
  const [data, setData] = useState([]);

  useEffect(()=>{

     const fetchData = async ()=>{
       const response = await axios.get('http://localhost:3010/dollar')
         console.log("gg",response.data);
         setData(response.data);
     };
      fetchData();
  }, []);

  return(
    <div className="mainFin" style={{color:"#ffffff",
      float: "left"}}>
      <p>USD/RUB: </p>
      {data}
    </div>
  );

};

export default Dollar;