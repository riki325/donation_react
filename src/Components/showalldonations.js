
import {  useSelector } from 'react-redux';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import './items.css'
function Showalldonations(){

    const donations=useSelector(state=> state.donations.donationsArr);
    const navigate = useNavigate();

function godonation(event){
    navigate('/donation',{state:{event}});

}
    return(
        <>
<div >{donations.map((value,index)=>
    <Card id='card' key={index} >
<h1>{donations[index].user}</h1>
<h2>{donations[index].address}</h2>
<h2>{donations[index].mail}</h2>
<h2>{donations[index].phone}</h2>
<h3>sum: {donations[index].sum}</h3>
<Button label="Details" onClick={()=>{godonation(value)}}/>
</Card>)}
</div>
        </>
    )
}
export default Showalldonations