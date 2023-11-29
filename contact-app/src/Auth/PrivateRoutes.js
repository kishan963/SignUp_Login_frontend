import React from "react";
import { Outlet, Navigate, useNavigate,useLocation } from "react-router-dom";
import ContactDetail from "../components/ContactDetail";


const PrivateRoute =()=> {
  
     
    let auth= {'token' : false}
    const navigate= useNavigate();
    const location = useLocation();
   // const [getJwtToken] = useLogIn();
    console.log(location);
    const jwtToken = localStorage.getItem('token');
    console.log(jwtToken);
    const helper = async () => {
        //console.log(getJwtToken);
          const jwt = `Bearer ${jwtToken}`;   
          console.log(jwt);
          const headers = new Headers({
            "Content-Type": "application/json",
            "Authorization": jwt
          });

          const response = await fetch('http://localhost:8080/api/get', {
            method: 'POST',
            headers
          });
        

          // try {
          //   const response = await axios.post('http://localhost:8080/api/get', {}, {
          //     headers,
          //   });
          //   console.log(response.data); // Access response data here
          // } catch (error) {
          //   console.error('Error:', error);
          // }

         console.log(response.ok);
          if (response.ok) {
            return (<ContactDetail> location.state.Contact </ContactDetail> )
          }
          else
          {
            navigate("/login", { replace: true });
          }
    }; 
     
    
    helper();
    
};

export default PrivateRoute;
