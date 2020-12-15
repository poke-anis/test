import './App2.css';
import ProfilePhoto from './Component/Profile/ProfilPhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';

function App() {
  return (
    <div id="container">
      <ProfilePhoto/>
      <div id="intrcontainer">
      <FullName/>
      <Address/>
      </div>
  </div>
  );
}

export default App;
