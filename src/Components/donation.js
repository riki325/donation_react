import {useLocation} from 'react-router-dom';
import { Card } from 'primereact/card';
import { OrderList } from 'primereact/orderlist';



function Donation(){
    const location = useLocation();
    const itemTemplate = (item) => {
        if(item.count>0){
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
                <h3>count: {item.count}</h3>
                <span className="font-bold text-900">{item.count*30}$</span>
            </div>
        );}
    };
    return (
        <>
<Card  >
<h1>{location.state.event.user}</h1>
<h2>{location.state.event.address}</h2>
<h2>{location.state.event.mail}</h2>
<h2>{location.state.event.phone}</h2>
<OrderList value={location.state.event.items}  itemTemplate={itemTemplate} header="Products" ></OrderList>
</Card>
                </>
    )
}
export default Donation