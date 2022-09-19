import ProductsScreen from './components/ProductsScreen/ProductsScreen';
import CartScreen from './components/CartScreen/CartScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import UserContext from './contexts/UserContext';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import SignIn from "./components/Sign-in/Sign-in";
import SignUp from "./components/Sign-up/Sign-up";
import Payment from "./components/Payment/Payment";

export default function App() {
  const [token, setToken] = useState('');
  const [cart, setCart] = useState([]);
  const [email, setEmail] = useState('');
  let [sum, setSum] = useState(0);
  let [itensCounter, setItensCounter] = useState(0);
  
  return (
    <UserContext.Provider value={{token, setToken, email, setEmail, cart, setCart, itensCounter, setItensCounter, sum, setSum}}>
    <ToastContainer
        position="top-right"
        autoClose={5000}
        theme="colored"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
    />   pauseOnFocusLoss
     
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<SignIn />} />
        <Route path={"/sign-up"} element={<SignUp />} />
        <Route path={'/products'} element={<ProductsScreen />}></Route>
        <Route path={'/cart'} element={<CartScreen />}></Route>
        <Route path={"/payment"} element={<Payment />} />
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  );
}
