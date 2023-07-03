import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Updatepersondetails(props){
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    const dispatch=useDispatch();
const user=dispatch({type:'getUserById',payload:props.id});
const updateUser={id:user.id,name:name,password:password};
const currentUser=useSelector(state=>state.users.currentUser);

    function ChangeDetails(){

dispatch({type:'updatePerson',payload:{currentUser:currentUser,name:name,password:password}});
console.log(name+' '+password);
    }
    return (
        <>
                 <h1>hi</h1>
                <p>Updatepersondetails</p>
                <p>{currentUser}</p>
                <span className="p-inputgroup-addon">
        <i className="pi pi-user"></i>
    </span>
    <InputText  value={currentUser}  onChange={(e)=>setName(e.target.value)}/><br/>
    <span className="p-inputgroup-addon">
        <i className="pi pi-eye-slash"></i>
    </span>
    <InputText  value={currentUser}   onChange={(e)=>setPassword(e.target.value)}/><br/>
    <Button label="Submit" onClick={()=>ChangeDetails()}/>

                </>
    )
}
export default Updatepersondetails