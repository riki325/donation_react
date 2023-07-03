import produce from "immer";
const initialState={
    items:[
    {id:0,name:'car',description:'you get a mazda5 car',src:'car.jpg',count:0},
    {id:1,name:'money',description:'you get 100,000$ ',src:'money.jpg',count:0},
    {id:2,name:'computer',description:'you get dell computer windows 11',src:'computer.jpg',count:0},
    {id:3,name:'half',description:'you get half of the money of this item',src:'half.jpg',count:0},
    {id:4,name:'book',description:'have a prestigious library',src:'book.jpg',count:0},
    {id:5,name:'camera',description:'you get G7 camera',src:'camera.jpg',count:0},
    {id:6,name:'cleaner',description:'have a cleaner for a year 3 days a week',src:'clean.jpg',count:0},
    {id:7,name:'coffee',description:'you get coffee machine',src:'coffee.jpg',count:0},
    {id:8,name:'family',description:'A family vacation in B&B for 3 days',src:'family.jpg',count:0},
    {id:9,name:'hazorfim',description:'you get 10,000 in hazorfim store',src:'hazorfim.jpg',count:0},
    {id:10,name:'korkinet',description:'you get an electricity korkinet',src:'kor.jpg',count:0},
    {id:11,name:'Osher Ad',description:'you get 12,000 in Osher Ad store',src:'osher.jpg',count:0},
    {id:12,name:'table',description:'you get a table with 6 chairs',src:'table.jpg',count:0},
    {id:13,name:'sefer tora',description:'donate sefer tora wherever you want',src:'tora.jpg',count:0},
    {id:14,name:'trip',description:'have a trip for 12 hours to the north',src:'trip.jpg',count:0},
    {id:15,name:'couple vacation',description:'A couple vacation at the hotel',src:'zug.jpg',count:0},

],

}
export const itemReducer=produce((state,action)=>{
    switch(action.type){
    //     case 'setItemName':
    // state.items.name=action.payload
    // break;
    // case 'setItemSrc':
    //     state.items.src=action.payload
    //     break;
        case 'increase':
            state.items[action.payload].count+=1;
            break;
            case 'decrease':
            if(state.items[action.payload].count>0)
            state.items[action.payload].count-=1;
                break;
        case 'addItem':
            state.items.push(action.payload);
            break;
            // case 'AddToCart':
            //     state.itemsUser.push(action.payload);
            //     break;
                case 'deleteItems':
                    state.items.map((item)=>item.count=action.payload)
                
}
},initialState)