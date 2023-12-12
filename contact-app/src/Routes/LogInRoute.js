import {React, useState} from "react";
import {  useNavigate,Navigate } from "react-router-dom";
// It is connecting the frontend to backend
// the path is of backend api accepting the login data.

const useLogIn = () => {
    const [formData, setFormData] = useState({
      email: '',
      password: '',
    });

    //const [jwtData, setJwtData] = useState();

    const navigate= useNavigate();

    const handleInputChange = (e) => {
        console.log(e);
        
        for (const [name, value] of Object.entries(e)) {
            setFormData(prev=> ({...prev, [name]: value }));
          }
      
          
          
      };

      const StoreJwtToken =(jwtToken)=>{
        localStorage.setItem('token', jwtToken);  
      }

    

    const handleSubmit = async () => {
        try {
          const response = await fetch('https://signuploginbackend-production.up.railway.app/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
          });
         
          if (response.ok) {
            const data = await response.json();
            // Process the data received from the API
            console.log(data.jwtToken);
            StoreJwtToken(data.jwtToken);
            navigate("/", { replace: true });
          } else {
            alert("User already exist");
          }
        } catch (error) {
          // Handle error for fetch or network-related issues
        }
        //alert("Done");
         };

     return [handleInputChange, handleSubmit]; 
    
}

export default useLogIn;