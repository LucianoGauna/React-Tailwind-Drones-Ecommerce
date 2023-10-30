import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Product from './pages/Product';
import Error404 from './pages/Error404';
import ContactUs from './pages/ContactUs';
import Cart from './pages/Cart';
import CartProvider from './cartContext/context';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <CartProvider>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/contact" exact element={<ContactUs />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </CartProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
