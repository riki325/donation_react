export function addUser(user){
    return {type:'addUser', payload:user}
}
export function setCurrentUser(user){
    return {type:'setCurrentUser', payload:user}
}