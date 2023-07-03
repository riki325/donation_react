export function addDonate(donate){
    return { type: 'addDonate', payload: donate }
}
export function setCurrent(donate){
    return { type: 'setCurrent', payload: donate }
}