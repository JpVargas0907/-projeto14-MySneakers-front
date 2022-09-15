import ProductsScreen from './components/ProductsScreen/ProductsScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/login'}></Route>
        <Route path={'/register'}></Route>
        <Route path={'/products'} element={<ProductsScreen />}></Route>
        <Route path={'/order'}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
