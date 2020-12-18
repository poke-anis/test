import './App2.css';
import ProfilePhoto from './Component/Profile/ProfilPhoto';
import Profile from './profile/Profile';
import Address from './Component/Profile/Address';
import cat from './Component/Profile/cat-5605615_960_720.webp'
import PropTypes from "prop-types";
import React from "react"

class App extends React.Component {
  constructor(props){
  super(props);
  this.showChange = this.showChange.bind(this);
  this.state = {
    show: false,
    Person : "",
    date: 0
  };

}
tick(){
  this.setState({
    date: this.state.date+1,
  })
};
showChange(){
  this.setState({show : !this.state.show})
  console.log(this.state.show)
};
componentDidMount(){
  this.timerID = setInterval(
    () => this.tick(),
    1000
  );
  this.prevshow= this.state.show
  console.log(this.prevshow)

}
componentDidUpdate(){
  if (this.state.show !== this.prevshow){
    this.state.Person = {fullName:"Anis" ,profession :"Chomeur"}
  }
}
  render(){
    return (
    <div id="container">
      <ProfilePhoto>{cat}</ProfilePhoto> {/*Children prop*/}
      <div id="intrcontainer">
      <Profile show={this.showChange}/>
      <Address Person={this.state.Person} date={this.state.date}/>
      </div>
  </div>
  )
  }
}
Profile.propTypes = {
  fullName: PropTypes.string,
  profession: PropTypes.string,
  bio: PropTypes.number /*pour le test*/
};
{/*Props type*/}  

export default App;

