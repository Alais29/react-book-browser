import React, { useContext } from 'react';
import { BookDetailsContext } from "../../context/BookDetailsContext";

const Details = () => {
  const { doneFetchBookDetails, details } = useContext(BookDetailsContext);
  
  return ( 
    <div>
      <h1>From Details</h1> 
      {details &&
        <div>
          <p>{details.volumeInfo.title}</p>
          <div id="viewerCanvas" style={{width: "600px", height: "500px"}}></div>
        </div>
      }
    </div>
  );
}
 
export default Details;