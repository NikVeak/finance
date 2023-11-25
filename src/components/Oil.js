import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Oil = () =>{
  const [data, setData] = useState([]);

  useEffect(()=>{
    const fetchData = async ()=>{
      const response = await axios.get('http://localhost:3010/oil')
      console.log("gg",response.data['oil']);
      setData(response.data['oil']);
    };
    fetchData();
  }, []);

  return(
    <div className="mainFin" style={{color:"#ffffff"}}>
      <h5>Нефть Brent: {data} $</h5>
    </div>
  );

};

export default Oil;