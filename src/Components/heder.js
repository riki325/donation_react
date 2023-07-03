import { Link } from "react-router-dom";
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import React from 'react';
import { useNavigate } from "react-router-dom";
import heder from './heder.css'
import { useSelector } from "react-redux"

function Heder(){
    const navigate = useNavigate();
    const currentUser=useSelector(state=>state.users.currentUser);
    const manager=useSelector(state=>state.users.manager);
console.log(manager);
    function Login(){
        navigate('/login');

    }
    function Logout(){
        navigate('/logout');

    }
    function Items(){
        navigate('/items');

    }
    function Additem(){
        navigate('/additem');

    }
    function Donationform(){
        navigate('/donationform');

    }
    function Showalldonations(){
        navigate('/showalldonations');

    }   

    const startContent = (
        <React.Fragment>
        <Button label="Log in" icon="pi pi-plus" className="mr-2" onClick={()=>{Login()}} />
            <Button label="All items" icon="pi pi-plus" className="mr-2" onClick={()=>{Items()}} />
            {manager
        ?  <Button label="Add item" icon="pi pi-plus" className="mr-2" onClick={()=>{Additem()}} />
        : <></>
      }
                  {manager
        ? <Button label="Show all donations" icon="pi pi-plus" className="mr-2" onClick={()=>{Showalldonations()}} />
        : <></>
      }
            <Button label="Donation form" icon="pi pi-plus" className="mr-2" onClick={()=>{Donationform()}} />
        </React.Fragment>
    );
    return (
    <>
             <div className="card">
            <Toolbar start={startContent}  />
        </div> 
        </>
)}
export default Heder