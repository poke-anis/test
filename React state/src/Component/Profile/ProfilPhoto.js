import cat from './cat-5605615_960_720.webp'

function ProfilePhoto (props) {
     return (
         <div id="cat">
         <img src={props.children}></img>
         </div>
     )
 }
 export default ProfilePhoto