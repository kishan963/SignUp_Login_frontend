import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
import useSignUp from "../Routes/signUpRoute";


const SignUpPage= ()=> {
    const [emailValue,setEmailValue] = useState('');
    const [passwordValue,setPasswordValue] = useState('');
    const [confirmPasswordValue,setConfirmPasswordValue] = useState('');
    const navigate= useNavigate();
    const[handleInputChange, handleSubmit]= useSignUp();
    
    const onSignUpClick= ()=> {
        
        if(passwordValue!=confirmPasswordValue)
        {
            alert("Different Password");
            return;
        }
       
        handleInputChange({email: emailValue,password: passwordValue});
        //handleInputChange({});
        handleSubmit();

    }

    return (
        <form className="ui form" >
        <div className="content-container" >
            <h1>Sign Up</h1>
            
            <input value={emailValue} onChange={(e)=> { 
                setEmailValue(e.target.value)
                handleInputChange({email: e.target.value}) 
                } } placeholder="Email" />
             <br></br>
            <input value={passwordValue} onChange={(e)=> {
                setPasswordValue(e.target.value)
                handleInputChange({password: e.target.value})
                } } type="password" placeholder="password" />
            <br></br>
            <input value={confirmPasswordValue} onChange={(e)=> setConfirmPasswordValue(e.target.value)} type="password" placeholder="Confirm password" />
            <br></br>
            <button disabled={!emailValue || !passwordValue || !confirmPasswordValue} onClick={(e)=>{
                e.preventDefault();
                onSignUpClick();
            }}>Sign Up</button>
            
        </div>
        </form>
    ); 

}

export default SignUpPage;