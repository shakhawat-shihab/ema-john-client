import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AddProduct from './Components/AddProduct/AddProduct';
import Header from './Components/Header/Header';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import OrderReview from './Components/OrderReview/OrderReview';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Register from './Components/Register/Register';
import Shipping from './Components/Shipping/Shipping';
import Shop from './Components/Shop/Shop';
import AuthProvider from './context/AuthProvider';

function App() {

  return (
    <div >
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route path='/home'>
              <Shop></Shop>
            </Route>
            <Route exact path='/'>
              <Shop></Shop>
            </Route>
            {/* <Route path='/shop'>
              <Shop></Shop>
            </Route> */}
            <Route path='/order-review'>
              <OrderReview></OrderReview>
            </Route>
            <PrivateRoute path='/inventory'>
              <Inventory></Inventory>
            </PrivateRoute>
            <PrivateRoute path='/shipping'>
              <Shipping></Shipping>
            </PrivateRoute>
            <PrivateRoute path='/place-order'>
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/regsiter'>
              <Register></Register>
            </Route>
            <Route path='/addProduct'>
              <AddProduct></AddProduct>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
