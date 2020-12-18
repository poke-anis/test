function Address (props) {
const {fullName,profession,bio} = props.Person
    return (
        <div id="add">
        <div>Mon nom est : {fullName}<br></br>je suis : {profession}<br></br>The Component has mounted since: {props.date} seconds</div>
        <div></div>
        </div>
        
    )

}
export default Address