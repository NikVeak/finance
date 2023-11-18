import React, { useEffect, useState } from 'react';

const Oil = () =>{
  const [data, setData] = useState([]);

  useEffect(()=>{

  }, []);

  return(
    <div className="mainFin" style={{color:"#ffffff",
      float: "left"}}>
      <p>Нефть Brent:</p>
      {data}
    </div>
  );

};

export default Oil;