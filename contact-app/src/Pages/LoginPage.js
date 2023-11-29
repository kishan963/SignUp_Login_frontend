import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
import useLogIn from "../Routes/LogInRoute";


const LogInPage= ()=> {
    const [emailValue,setEmailValue] = useState('');
    const [passwordValue,setPasswordValue] = useState('');
    const navigate= useNavigate();
    const[handleInputChange, handleSubmit]= useLogIn();

    const onLoginClick= async ()=> {
        handleInputChange({email:emailValue , password:passwordValue });
        handleSubmit();
    }

    return (
        <>
        <form className="ui form" >
        <div className="content-container" >
            <h1>Log In</h1>
            
            <input value={emailValue} onChange={(e)=> { setEmailValue(e.target.value); handleInputChange({email: e.target.value})} } placeholder="Email" />
             <br></br>
            <input value={passwordValue} onChange={(e)=> {setPasswordValue(e.target.value);handleInputChange({password: e.target.value})}} type="password" placeholder="password" />
            <br></br>
            <button disabled={!emailValue || !passwordValue} onClick={(e)=> 
                {e.preventDefault();
                 onLoginClick();}
                  } >LogIn</button>
            <br></br>
            <button>Forget password</button>
            <br></br>
            <button onClick={()=> navigate("/SignUp") } >Sign Up</button>
            
        </div>
        </form>
        </>
    ); 

}

export default LogInPage;