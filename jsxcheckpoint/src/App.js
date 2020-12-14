import './App.css';
import imageInSrc from './imageInSrc.png'

function App() {
  return (
    <div>
    <div className="cont" style={{borderSolid:"1px black" ,maxWidth:"100vw"}}>
        <h1 className="title red">My name here</h1>
        <br/>
        <img src={imageInSrc} alt="smoking weed cat"/>
        <br/>
        <img src="/imageInPublic.jpg"/>
    </div>
  <video width="320" height="240" controls>
    <source src="myVideo.mp4" type="video/mp4"/>
  </video>
  </div>
  );
}

export default App;
