//1. השם חייב להתחיל באות גדולה
//2. מחזיר אובייקט HTML אחד
function Names(){
    const names = [{fname: 'Haim', lname: 'Cohen'}, {fname: 'Rivka', lname: 'Levi'}, {fname: 'Sara', lname: 'Grin'}]

    return (
        <>
            <Name firstName={names[0].fname}/>
            <Name lastName={names[1].lname}/>
            <Name firstName={names[2].fname} lastName={names[2].lname}/>
        </>
    )
}
//{ firstName:..., lastName:...}
function Name(props){
    // const firstName = props.firstName
    // const lastName = props.lastName
    
    const { lastName, firstName } = props
    return (
        <>
            <h1>fName: {firstName}</h1>
            <h2>lName: {lastName}</h2>
        </>
    )
}

Name.defaultProps = {
    lastName: 'Cohen'
}
export default Names;