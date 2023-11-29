import React, { useEffect, useState } from "react";

const RestApi = () => {

    const [data, setData ]= useState(null);
    useEffect(()=>{
          fetch('https://api.github.com/users/moonhighway').then((response)=> response.json() ).then((data)=> setData(data));

           
    },[]);

        if(data)
        return(
          <pre>{JSON.stringify(data,null,2)} </pre>
         );

    

}

export default RestApi;