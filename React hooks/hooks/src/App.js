import React, {useState,useReducer, useEffect}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import TextField from '@material-ui/core/TextField';

import './App.css';


function App() {
  const [movies, setMovies] = useState([{"title" : "Pirates des Caraïbes",
  "description": "Petite, Elizabeth Swann, la fille du gouverneur, a sauvé de la noyade Will Turner après le naufrage de son bateau. Les années ont passé, Will et Elizabeth ont grandi. Will est devenu forgeron à Port Royal, et Elizabeth se prépare à épouser le commodore Norrington...",
   "posterUrl": "https://static.wikia.nocookie.net/piratesdescaraibes/images/5/5f/19713505.jpg/revision/latest/scale-to-width-down/340?cb=20150310135538&path-prefix=fr",
   "rate": "4/5"},
   {
   "title" : "Spider-Man",
   "description": "Orphelin, Peter Parker est élevé par sa tante May et son oncle Ben dans le quartier Queens de New York. Tout en poursuivant ses études à l'université, il trouve un emploi de photographe au journal Daily Bugle. Il partage son appartement avec Harry Osborn, son meilleur ami.",
   "posterUrl": "https://i.pinimg.com/474x/21/48/2e/21482ef0fe2461e034387e2181821eb5.jpg",
   "rate": "5/5"},
   {
    "title" : "L'odyssée de Pi",
    "description": "Après que leur bateau est victime d'une violente tempête et coule au fond du Pacifique, un adolescent et un tigre du Bengale se retrouvent sur un petit canot de sauvetage et doivent apprendre à se faire confiance pour survivre",
    "posterUrl": "https://fr.web.img6.acsta.net/medias/nmedia/18/93/60/26/20298702.jpg",
    "rate": "5/5"}]);
    const formReducer = (state, event) => {
      return {
        ...state,
        [event.target.name]: event.target.value
      }
     }
  const [movie, setMovie] = useReducer(formReducer, {});
  const addmov = (event)=> {
    event.preventDefault();
    setMovies([...movies,movie])}
  return (
    <div className="App">
      <NavBar/>
      <MovieList movies={movies} movie={movie}/>
      <Text addmov={setMovie} updmov={addmov}/>

    </div>
  );
}

function NavBar(props){
  return(
    <AppBar position="static" color="secondary" >
      <Toolbar >
        <IconButton edge="start" className={props.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={props.title}>
          Movieslist
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
function MovieList(props){

const {movies,movie}= props
console.log(movie)
  return(
    <div className="card">
  {movies.map((el,index)=>(<MovieCard key={index} movies={el}/>))}
    </div>
  )
}

function MovieCard(props){
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 350,
    },
  });
  const classes = useStyles();
  const {movies} = props
  return(
    <div >
          <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={movies.posterUrl}
          title={movies.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {movies.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">{movies.description}
          </Typography>
          <Typography  component="p">
          Rate :{movies.rate}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
    </div>
  )
}

function Text(props) {
  const {addmov,updmov} = props
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    inp:{
      backgroundColor: 'white',
    }
  }));
  const classes = useStyles();

  return (
    <form onSubmit={updmov} className={classes.root} noValidate autoComplete="off" >
      <TextField onChange={addmov} name ="title" className={classes.inp} id="outlined-basic" label="Name" variant="outlined"/>
      <TextField onChange={addmov} name ="description" className={classes.inp} id="outlined-basic" label="Description" variant="outlined" />
      <TextField onChange={addmov} name ="posterUrl" className={classes.inp} id="outlined-basic" label="Poster url" variant="outlined" />
      <TextField onChange={addmov} name ="rate" className={classes.inp} id="outlined-basic" label="rate" variant="outlined" />
      <Add />
    </form>
  );
}


function Add(props){
  const {addmov} = props
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
  }));
  const classes = useStyles();
  return(
    <div className={classes.root}>
    <input
      accept="image/*"
      className={classes.input}
      id="contained-button-file"
      multiple
      type="string"
    />
    <label htmlFor="contained-button-file">
      <Button  type="submit" onClick={addmov} variant="contained" color="secondary" component="button">
        Add
      </Button>
    </label>

  </div>
  )
}

export default App;
