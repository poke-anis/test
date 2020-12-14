import "./App.css";
import React, { Component, useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  rootrow: {
    flexGrow: 1,
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [spacing, setSpacing] = React.useState(2);
  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = React.useState(false);
  const modelOpen = () => {
    setOpen(true);
  };

  const modelClose = () => {
    setOpen(false);
  };

  const [articles, setArticles] = useState([]);
  useEffect(() => {
    var url =
      "http://newsapi.org/v2/top-headlines?" +
      "country=fr&" +
      "apiKey=d8231ec656e84db586ea3780a6d044f1";
    var req = new Request(url);

    fetch(req)
      .then((response) => response.json())
      .then((data) => {
        setArticles([...data.articles]);
      });
  }, []);

  return (
    <div className="">
      <div id="nav">
        <Nav
          handleClose={handleClose}
          handleClick={handleClick}
          anchorEl={anchorEl}
        />
        <Logo />
      </div>
      <div>
      <Grida
        articles={articles.filter(
          (el) => el.description !== "" && el.urlToImage !== null
        )}
        spacing={spacing}
        handleChange={handleChange}
      />
      </div>
      <div>
      <Faba modelOpen={modelOpen} 
        modelClose={modelClose}
        open={open}
        fullScreen={fullScreen}/>
      </div>
    </div>
  );
}

const Nav = (props) => {
  const { handleClick, handleClose, anchorEl } = props;
  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        The Blog
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>

    </div>
  );
};

const Logo = (props) => {
  return (
    <div>
      <img id="logo" src=".\logo-via-logohub.png"></img>
    </div>
  );
};

const Grida = (props) => {
  const classes = useStyles();
  const { spacing, articles } = props;
  return (
    <Grid
      id="container"
      container
      className={classes.rootrow}
      spacing={2}
    >
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {articles.map((art, index) => (
            <Grid key={index} item>
              <ArticleCard article={art} key={index} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

const ContArt = (props) => {
  const { articles } = props;
  return (
    <div id="articles">
      {articles.map((art, index) => (
        <ArticleCard article={art} key={index} />
      ))}
    </div>
  );
};

const ArticleCard = (props) => {
  const { article } = props;
  return <MediaCard article={article} />;
};

const MediaCard = (props) => {
  const classes = useStyles();
  const { article } = props;
  console.log(props);
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={article.urlToImage}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography noWrap={true} gutterBottom variant="h5" component="h2">
            {article.title}
          </Typography>
          <Typography
            noWrap={true}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {article.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

const Faba = (props) => {
const {modelOpen,modelClose,open,fullScreen} = props
  return (
      <div>
      <Fab id="bouton" onClick={modelOpen} color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={modelClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={modelClose} color="primary">
            Disagree
          </Button>
          <Button onClick={modelClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
};


export default App;
