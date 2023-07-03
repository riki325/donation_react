import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import { Button } from 'primereact/button';
import "primeicons/primeicons.css";                                         
import { Card } from 'primereact/card';
import { Badge } from 'primereact/badge';
import { useCounter } from 'primereact/hooks';
import { type } from "@testing-library/user-event/dist/type";
import { useNavigate } from "react-router-dom";
import { decrease, increase } from "../store/itemAction";
 function Items(){
const items=useSelector(state=> state.items.items);
const url='/images/';
const dispatch=useDispatch();
    const { count, increment, decrement, reset } = useCounter(0);
    const navigate = useNavigate();


function Increase(value){
    dispatch(increase(value))
}
function Decrease(value){
    dispatch(decrease(value))
}
function goitem(event){
    navigate('/item',{state:{event}});
}
function Submit(){
    navigate('/donationForm');
}
    return(
        <>
        <div > {items.map((value,index)=>
        <Card id="card" key={index} title={value.name} subTitle={value.description}  header={<img alt="Card" src={`/images/${value.src}`}  onClick={()=>{goitem(value)}}/>} className="md:w-25rem">
        <Button icon="pi pi-minus" onClick={()=>Decrease(index)}></Button>
        <p>{value.count}</p>
        <Button icon="pi pi-plus" onClick={()=>Increase(index)}></Button>
        </Card>)}
        </div>
    <Button id="submit" label="Donate" onClick={()=>Submit()}/>

        </>
    )
}
export default Items
