import './App2.css';
import ProfilePhoto from './Component/Profile/ProfilPhoto';
import Profile from './profile/Profile';
import Address from './Component/Profile/Address';
import cat from './Component/Profile/cat-5605615_960_720.webp'
import PropTypes from "prop-types";

function App() {
  return (
    <div id="container">
      <ProfilePhoto>{cat}</ProfilePhoto> {/*Children prop*/}
      <div id="intrcontainer">
      <Profile />
      <Address/>
      </div>
  </div>
  );
}

Profile.defaultProps = {  
  fullName: "anis",
  profession: "futur chomeur",
  bio: "trop longue"
}
{/*Default Props*/}  

Profile.propTypes = {
  fullName: PropTypes.string,
  profession: PropTypes.string,
  bio: PropTypes.number /*pour le test*/
};
{/*Props type*/}  

export default App;

