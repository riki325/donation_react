import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'primereact/button';
import { InputTextarea } from "primereact/inputtextarea";
import { addItem } from "../store/itemAction";
import {  useNavigate } from 'react-router-dom';

function Additem(){
  const [name,setName]=useState('');
  const [src,setSrc]=useState('');
  const [description,setDescription]=useState('');
  const items=useSelector(state=> state.items.items);
  const item=  {id:items[items.length-1].id+1,name:name,description:description,src:src,count:0};
  const dispatch=useDispatch();
  const navigate=useNavigate();
function Add(){
    dispatch(addItem(item));
navigate('/items');
}
    return (
        <>
            <label htmlFor="username">Name</label><br/>
    <InputText id="username" type={"text"} value={name} onChange={(e) => setName(e.target.value)} /><br/>
    <label htmlFor="username">src</label><br/>
    <InputText id="username" type={"text"} value={src} onChange={(e) => setSrc(e.target.value)} /><br/>
    <InputTextarea autoResize value={description} onChange={(e) => setDescription(e.target.value)} rows={5} cols={30} /><br></br>
    <Button label="Add" icon="pi pi-check" iconPos="right" onClick={()=>{Add()}}/>
                </>
    )
}
export default Additem