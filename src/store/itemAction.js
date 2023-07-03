export function increase(item){
    return {type:'increase', payload:item}
}
export function decrease(item){
    return {type:'decrease', payload:item}
}
export function addItem(item){
    return {type:'addItem', payload:item}
}
export function deleteItems(item){
    return {type:'deleteItems', payload:item}
}