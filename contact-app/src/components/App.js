import './App.css';
import React,{useState, useEffect} from 'react';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from './ContactList';
import FormText from './TextForm';
import ContactDetail from './ContactDetail';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RestApi from './RestApi';
import LogInPage from '../Pages/LoginPage';
import SignUpPage from '../Pages/SignUpPage';
import PrivateRoute from '../Auth/PrivateRoutes';


function App() {

  

  const [Contacts,setContacts] = useState([]);
  const LOCAL_STORAGE_KEY = "contacts_identifier";
  const AddContactHandler=(Contact) =>{
     setContacts([...Contacts,Contact]);
  };

  useEffect(()=> {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)); 
      if(retriveContacts)
      setContacts(retriveContacts);
 }, []);

  useEffect(()=> {
      if(Contacts.length>0)
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(Contacts) );
  }, [Contacts] );
  
  const deleteContact = (id)=> {
        console.log(id+ "Id data");
        const newContactList = Contacts.filter((Contact)=> {return Contact.id!==id});
        setContacts(newContactList);
  }

  return (<div className='ui container'>
    <Routes>
    
          <Route path="/add" element={<AddContact AddContactHandler={AddContactHandler}/>} />
          <Route path="/info" element={<AddContact AddContactHandler={AddContactHandler}/>} />
          <Route path="/FormText" element={<FormText/>} />
          <Route path="/" element={<ContactList Contacts={Contacts} deleteContact={deleteContact}/>} />
          <Route path="/api"  element={<RestApi/>} />
               {/* PRIVATE ROUTE */}
          <Route element={<PrivateRoute/>}>
            <Route path="/contactDetail" element={ <ContactDetail/>} />  
          </Route>
          <Route path="/Login" element={<LogInPage/>} />
          <Route path="/SignUp" element={<SignUpPage/>} />
    </Routes>
   
  </div>
  );
}
export default App;
