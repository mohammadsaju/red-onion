import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ProductDetails from './pages/ProductDetails';
import ShoppingCart from './pages/ShoppingCart';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import { useStateValue } from './app/StateProvider';
import { useEffect } from 'react';
import Placed from './components/Placed';
import PrivateRoute from './private/PrivateRoute';

function App() {
  const [{foods, cart, user}, dispatch] = useStateValue();
  useEffect(() => {
    fetch('./foods.json')
      .then(res => res.json())
      .then(data => dispatch({
        type: 'FETCH_SUCCESS',
        payload: data
      }));
      dispatch({type:'GET_TOTAL'});
  },[cart]);
  return (
    <div className="app">
      <Router>
        <Header/>
        <Switch>
          <Route path='/' exact>
            <Home/>
          </Route>
          <Route path='/login' exact>
            <Login/>
          </Route>
          <Route path='/register' exact>
            <SignUp/>
          </Route>
          <Route path='/product-details/:productId' exact>
            <ProductDetails/>
          </Route>
          <Route path='/shopping-cart' exact>
            <ShoppingCart/>
          </Route>
          <PrivateRoute path='/place-order' exact>
            <Placed/>
          </PrivateRoute>
          <Route path='*' exact>
            <NotFound/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
