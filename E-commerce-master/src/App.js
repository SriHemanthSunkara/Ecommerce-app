import HomePage from './components/HomePage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import Checkout from './components/Chekout';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
