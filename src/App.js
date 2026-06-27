import { Route, Routes } from 'react-router-dom';
import Nav from './PAGES/Nav';
import Home from './PAGES/Home';
import Product1 from './PAGES/Product1';
import Product2 from './PAGES/Product2';
import Product3 from './PAGES/Product3';
import Footer from './PAGES/Footer';
import Cart from './PAGES/Cart';
import Dpage from './Dpage';

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product1" element={<Product1 />} />
        <Route path="/product2" element={<Product2 />} />
        <Route path="/product3" element={<Product3 />} />
        <Route path="/product/:id" element={<Dpage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
