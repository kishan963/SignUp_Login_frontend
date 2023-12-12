import {React, useState} from "react";
import {  useNavigate,Navigate } from "react-router-dom";
// It is connecting the frontend to backend
// the path is of backend api accepting the signup data.

const useSignUp = () => {
    const [formData, setFormData] = useState({
      email: '',
      password: '',
    });
    const navigate= useNavigate();
    const handleInputChange = (e) => {
        console.log(e);
        for (const [name, value] of Object.entries(e)) {
            setFormData(prev=> ({...prev, [name]: value }));
          }
      };
    

    const handleSubmit = async () => {

        try {
          const response = await fetch('https://signuploginbackend-production.up.railway.app/api/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
         
          if (response.ok) {
            navigate("/login", { replace: true });
          } else {
            alert("User already exist");
            navigate("/login", { replace: true });
          }
        } catch (error) {
          // Handle error for fetch or network-related issues
        }
        //alert("Done");
         };

     return [handleInputChange, handleSubmit]; 
    
}

export default useSignUp;