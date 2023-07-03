const initialState = {
    item: [
        { name: 'רכב', price: 50 },
        { name: 'IRobot', price: 35 },
        { name: 'שיפוץ לבית', price: 45 },
        { name: 'פאה', price: 30 },
        { name: 'פליימוביל', price: 20 }
    ],
    user: [
        { name: "תמר", password: "111" },
        { name: "שירתי", password: "2141shirati" },
        { name: "ברכי", password: "325442085" },
        { name: "גיטי", password: "22102002" },
        { name: "הני", password: "A0548502034" }
    ]
}

const reducer = produce((state, action) => {
    switch (action.type) {
        case 'setUserName':
            state.user.name = action.payload
            break
        case 'setUserPassword':
            state.user.password = action.payload
            break
        case 'setItemName':
            state.item.name = action.payload
            break
        case 'setItemPrice':
            state.item.price = action.payload
            break
        case 'addUser':
            state.user.push(action.payload)
            break
        case 'addItem':
            state.item.push(action.payload)
            break
        
    }
}, initialState)

export const store=createStore(reducer)