import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Api from '../../services/FakeStoreApi';
import Implement from '../../services/repositories/Produtos'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 340,
      width: 250,
    },
    control: {
      padding: theme.spacing(2),
    },
    largura:{
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  }));

export default function Produtos() {
  const [spacing, setSpacing] = React.useState(10);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const [products, setProducts ] = useState([{}]);
  useEffect(() => {
    const getAllProducts = async ()=> {
        //const response = await Api.get('/products?limit=5');
        const response = await Implement.listProducts();
        setProducts(response);
    };
    getAllProducts();
}, [products]);
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {products.map((value) => (
            <Grid key={value.id} item>
              <Card className={classes.largura}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={value.image}
          title={value.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {value.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {value.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Incluir no Carrinho 
        </Button>
        <Button size="small" color="primary">
          R$ {value.price}
        </Button>
      </CardActions>
    </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}