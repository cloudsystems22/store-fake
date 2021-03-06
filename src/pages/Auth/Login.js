import React, { useState } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import * as AuthActions from '../../store/Auth/actions';

import Implement from '../../services/repositories/Auth'


function Login({ Auth, saveLogin }){
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //const [token, setToken] = useState("");
    const history = useHistory();
    const handleSubmit = async(event) => {
      event.preventDefault();
      const user = {
        email,
        password,
      }
      const response = await Implement.Login(user);
      saveLogin(response);

      history.push('/')
      
    }
    return(
        <form className="w-50" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-success" type="submit">
            Login
          </button>
        </div>
      </form>
  
    );

}

const mapStateToProps = (state) => ({Auth: state.Auth });
const mapDispatchToProps = (dispatch) => bindActionCreators(AuthActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
