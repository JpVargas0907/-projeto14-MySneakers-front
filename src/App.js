import ProductsScreen from './components/ProductsScreen/ProductsScreen';
import CartScreen from './components/CartScreen/CartScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import UserContext from './contexts/UserContext';

function App() {
  const [token, setToken] = useState('');
  const [cart, setCart] = useState([]);
  let [itensCounter, setItensCounter] = useState(0);

  return (
    <UserContext.Provider value={{token, setToken, cart, setCart, itensCounter, setItensCounter}}>
    <BrowserRouter>
      <Routes>
        <Route path={'/login'}></Route>
        <Route path={'/register'}></Route>
        <Route path={'/products'} element={<ProductsScreen />}></Route>
        <Route path={'/cart'} element={<CartScreen />}></Route>
        <Route path={'/order'}></Route>
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
