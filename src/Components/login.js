import { InputText } from 'primereact/inputtext';
import "primeicons/primeicons.css";                                         
import { Button } from 'primereact/button';
import { useState } from 'react';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import { addUser, setCurrentUser } from '../store/userAction';

function Login(){
     let flag=false;
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    const users=useSelector(state=>state.users.users);
    const dispatch=useDispatch();
    const navigate = useNavigate();
     
    function logIn(){
        users.map(e => {
            if (e.name === name && e.password === password) {
                flag=true;
                dispatch(setCurrentUser(name));
            }
        });
        if (flag ===false){
            dispatch(addUser({name:name,password:password}))
        }
        navigate("/items")
    }
    return (
        <>
    <span className="p-inputgroup-addon">
        <i className="pi pi-user"></i>
    </span>
    <InputText placeholder="User Name"  onChange={(e)=>setName(e.target.value)}/><br/>
    <span className="p-inputgroup-addon">
        <i className="pi pi-eye-slash"></i>
    </span>
    <InputText placeholder="Password"  required onChange={(e)=>setPassword(e.target.value)}/><br/>
    <Button label="Submit" onClick={()=>logIn()}/>
</>
    )
}
export default Login