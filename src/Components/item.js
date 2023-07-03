import { Card } from 'primereact/card';
import {useLocation} from 'react-router-dom';
import { useDispatch } from "react-redux";
import './items.css';
function Item(){
const location = useLocation();
const dispatch=useDispatch();

let count=location.state.event.count;
    return (
        <>
<p>{location.state.event.name}</p>
        <Card title={location.state.event.name} subTitle={location.state.event.description}  header={<img alt="Card" src={`/images/${location.state.event.src}`} />} className="md:w-25rem">
        <p>{count}</p>
        </Card>
                </>
    )
}
export default Item
