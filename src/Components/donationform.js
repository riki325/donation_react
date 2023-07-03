import { useSelector ,useDispatch} from "react-redux"
import { InputText } from "primereact/inputtext";
import React, { useState } from "react";
import { OrderList } from 'primereact/orderlist';
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import { InputNumber } from 'primereact/inputnumber';
import { InputMask } from 'primereact/inputmask';
import { decrease, deleteItems, increase } from "../store/itemAction";
import { AddDonation } from "../store/donationAction";
function Donationform(){
const currentUser=useSelector(state=>state.users.currentUser);
const items=useSelector(state=> state.items.items);
const navigate = useNavigate();
console.log(items);
const [mail, setMail] = useState('');
const [address, setAddress] = useState('');
const [phone, setPhone] = useState('');
const [creditcard, setCreditcard] = useState('');
const [expiaryDate, setExpiaryDate] = useState(null);
const [digits, setDigits] = useState('');
const dispatch=useDispatch();
const donation=  {user:currentUser,sum:0,items:items,address:address,
phone:phone,mail:mail};
function Increase(value){
    dispatch(increase(value))
}
function Decrease(value){
    dispatch(decrease(value))
}
const itemTemplate = (item) => { 
     if(item.count>0){
    const price=item.count*30;
    return (
        <div className="flex flex-wrap p-2 align-items-center gap-3">
            <img className="w-4rem shadow-2 flex-shrink-0 border-round" src={`/images/${item.src}`} alt={item.name} />
            <div className="flex-1 flex flex-column gap-2 xl:mr-8">
                <span className="font-bold">{item.name}</span>
                <div className="flex align-items-center gap-2">
                    <i className="pi pi-tag text-sm"></i>
                    <span>{item.category}</span>
                </div>
            </div>
            <Button icon="pi pi-minus" onClick={()=>Decrease(item.id)}></Button>
        <p>{item.count}</p>
        <Button icon="pi pi-plus" onClick={()=>Increase(item.id)}></Button><br></br>
            <span className="font-bold text-900">{price}$</span>
        </div>
    );}
};

function Submit(){
items.map((value)=>donation.sum+=value.count*30)
dispatch(AddDonation(donation));
dispatch(deleteItems(0));
navigate('/items');
}
    return (
        <>
    <p>{currentUser}</p>
    <label htmlFor="username">Email</label><br/>
    <InputText id="username" type={"email"} value={mail} onChange={(e) => setMail(e.target.value)} /><br/>
    <label htmlFor="username">Address</label><br/>
    <InputText id="username" type={"text"} value={address} onChange={(e) => setAddress(e.target.value)} /><br/>
    <label htmlFor="username">Phone</label><br/>
    <InputText id="username" type={"number"} value={phone} onChange={(e) => setPhone(e.target.value)} /><br/>
    <label htmlFor="username">credit card</label><br/>
    <InputMask value={creditcard} onChange={(e) => setCreditcard(e.target.value)} mask="9999-9999-9999-9999" placeholder="9999-9999-9999-9999" /><br/>
    <label htmlFor="username">expiary Date</label><br/>
    <InputMask value={expiaryDate} onChange={(e) => setExpiaryDate(e.target.value)}  mask="99/9999" placeholder="01/2030" slotChar="mm/yyyy" /><br/>
    <label htmlFor="username">3 digits</label><br/>
    <InputMask value={digits} onChange={(e) => setDigits(e.target.value)} mask="999" placeholder="999" /><br/>
<OrderList value={items}  itemTemplate={itemTemplate} header="Products" ></OrderList>

<Button label="Donate" icon="pi pi-check" iconPos="right" onClick={()=>{Submit()}}/>

                </>
    )
}
export default Donationform