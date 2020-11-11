import React, { useState } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


import * as AuthActions from '../../store/Auth/actions';

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

function Create({ Auth }) {
    const [spacing, setSpacing] = React.useState(10);
    const classes = useStyles();

    const [user, setUser] = useState({
        email:'',
        username:'',
        password:'',
        name:{
            firstname:'',
            lastname:''
        },
        address:{
            city:'',
            street:'',
            number:0,
            zipcode:'',
            geolocation:{
                lat:'',
                long:''
            }
        },
        phone:''
    })

  return (
    <Grid container className={classes.grid} spacing={2}>
         <Grid item xs={12}>
            <Grid container justify="center" spacing={spacing}>
                <Grid key={1} item>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="outlined-basic" label="Nome" variant="outlined" value={user.name.firstname} onChange={ e => setUser({ ...user, name:{...user.name, firstname: e.target.value}})} />
                        <TextField id="inputEmail" label="E-mail" variant="outlined" value={user.email} onChange={ e => setUser({...user, email: e.target.value })}/>
                        <TextField
                            id="inputPassword"
                            label="Password"
                            type="password"
                            autoComplete="current-password" 
                            variant="outlined"
                        />
                         <TextField
                            id="inputRPassword"
                            label="Confirma Password"
                            type="password"
                            autoComplete="current-password" 
                            variant="outlined"
                        />
                    </form>
                </Grid>
            </Grid>
         </Grid>
    </Grid>
    
  );
}

const mapStateToProps = (state) => ({Auth: state.Auth });

export default connect(mapStateToProps)(Create);