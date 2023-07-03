import produce from "immer";


const initialState={
 
    users:[
        {id:1,name:'Dassi Fuss',password:"3223"},
        {id:2,name:'Hadas Fus',password:"6156"},
        {id:3,name:'H',password:"1"},
        {id:4,name:'D',password:"2"},
    ],
    currentUser: '',
    manager:false,
    user:false
}
export const userReducer=produce((state, action)=> {
    switch(action.type){
        case 'setCurrentUser':
                state.currentUser=action.payload;
                if(action.payload==='H')
               state.manager=true;
               else state.manager=false;
            break;
         case 'addUser':
            state.users.push(action.payload);
              break;
        }
    },initialState)
