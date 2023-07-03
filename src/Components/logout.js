
import { useDispatch, useSelector } from 'react-redux';


function Logout(){
    const currentUser=useSelector(state=>state.users.currentUser);
    const dispatch=useDispatch();

    dispatch({type:'setCurrentUser',payload:null})


    return (
        <>
                 <h1>hi</h1>
                <p>Logout</p>
                </>
    )
}
export default Logout