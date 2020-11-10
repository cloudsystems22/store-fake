import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
//import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '35ch',
      },
    },
    grid: {
        flexGrow: 1,
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
    }
  }));

export default function Create(){
    //const { id } = useParams();
    const [spacing, setSpacing] = React.useState(10);
    const classes = useStyles();
    const [product, setProduct] = useState({
        title: '',
        price: 0,
        description: '',
        image: '',
        category: ''
    })
    const handleChange = (prop) => (event) => {
        setProduct({ ...product, [prop]: event.target.value });
      };
    return (
        <>
        <Grid container className={classes.grid} spacing={2}>
         <Grid item xs={12}>
            <Grid container justify="center" spacing={spacing}>
                <Grid key={1} item>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="outlined-basic" label="Produto" variant="outlined" />
                        <TextField id="inputEmail" label="Preço" variant="outlined" />
                        <InputLabel htmlFor="outlined-adornment-amount">Preço</InputLabel>
                        <OutlinedInput
                           id="outlined-adornment-amount"
                           value={product.price}
                           onChange={handleChange('price')}
                           startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                           labelWidth={60}
                        />
                    </form>
                </Grid>
            </Grid>
         </Grid>
        </Grid>
        </>
    )
}