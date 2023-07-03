import { produce } from 'immer'

const initialState = {
    donatesList: [{ id: 1, name: "יוסי כהן", phone: "039089319", city: "בני ברק" },
    { id: 2, name: "שושי לוי", phone: "0556756006", city: "ירושלים" },
    { id: 3, name: "חיים גולדברג", phone: "0557852204", city: "פתח תקווה" },
    { id: 4, name: "רחל לב", phone: "0559874405", city: "בני ברק" },
    { id: 5, name: "יעל ", phone: "0568974555", city: "פתח תקווה" },
    { id: 6, name: "נעמה", phone: "0556740058", city: "אלעד" }],
    currentUser: { id: 6, name: "נעמה", phone: "0556740058", city: "אלעד" }
}
export const donatesReducer = produce((state, action) => {
    switch (action.type) {
        case 'addDonate':
            state.donatesList.push(action.payload);
            break
        case 'setCurrent':
            state.currentUser=action.payload;
            console.log(state.currentUser);
            // const flag=false
            // for (let index = 0; index < state.donatesList.length; index++) {
            //     if(state.donatesList[index]==state.currentUser.phone){
            //         flag=true;
            //     }
            // }
            break

    }
}, initialState)