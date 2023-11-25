import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ItemStock() {
  const [data, setData] = useState();
  const {symbol} = useParams();

  useState(()=>{

    const fetchData = async () =>
    {
        const response_stock = await axios.get(`http://localhost:8080/api/quotes/stock/${symbol}`);
        console.log(response_stock);


    }


  });

  return(
    <div>

    </div>
  );
}
export default ItemStock;