import produce from "immer";
const initialState={
    donationsArr:[
    ]
}
export const donationReducer=produce((state,action)=>{
    switch(action.type){
        case 'AddDonation':
         state.donationsArr.push(action.payload);
         break;
    }
},initialState)