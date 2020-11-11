import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Create, Update, List } from './pages/Users'
import { Create as CreateProd } from './pages/Products'
import { Login } from './pages/Auth';
import Home from './pages/Home/index'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/users" exact component={List} />
        <Route path="/users/create" exact component={Create} />
        <Route path="/users/:id/update" exact component={Update} />
        {/* Rotas de produtos */}
        <Route path="/produtos/create" exact component={CreateProd} />
        {/* Autenticação */}
        <Route path="/auth" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
