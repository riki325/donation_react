import produce from "immer"

const initialState = {
    currentUser: { user: '', password: '', sum:0},
    users: [{ name: "תמר", password: "111" },
    { name: "שירתי", password: "2141shirati" },
    { name: "ברכי", password: "325442085" },
    { name: "גיטי", password: "22102002" },
    { name: "הני", password: "A0548502034" }],
    manager: { user: 'aa', password: '12' }
}
export const usersReducer = produce((state, action) => {
    switch (action.type) {
        case 'setCurUserName':
            state.currentUser.user = action.payload
            break
        case 'setCurUserPass':
            state.currentUser.password = action.payload
            break
        case 'addUser':
            state.users.push(action.payload)
            break
       case 'addToSum':
       state.currentUser.sum=action.payload
       break
    }
}, initialState)