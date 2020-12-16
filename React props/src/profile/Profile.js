

function Profile (props) {
const {fullName,bio, profession} = props

return (
    <div id="nom">
    <button onClick={() => alert("Mon nom est :"+fullName)}>Clique sur moi pour avoir mon nom</button>
    </div>
)
}

export default Profile;
