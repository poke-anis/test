import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import List from '@material-ui/core/List';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

function App() {
  const [planetes, setPlanetes] = useState([])
  useEffect(() => {

    fetch('cont.json')
      .then(response => response.json())
      .then((data) => setPlanetes(data))
  }, [])
  return (
    <div className="App">
      <Lists/>
      <TitlebarGridList planetes={planetes} />
    </div>
  );
}

function TitlebarGridList(props) {
  const { planetes } = props
  console.log(planetes)
  return (
    <div >
      <GridList cellHeight={180} >
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Planetes</ListSubheader>
        </GridListTile>
        {planetes.map((tile) => (
          <GridListTile key={tile.pl_name}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.pl_name}
              subtitle={<span>by: {tile.pl_name}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} >
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

function Lists(props) {
  return(
    <List>
      {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
  );
};

export default App;
