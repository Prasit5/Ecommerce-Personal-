import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/shop';
import ShopCategory from './Pages/shopCategory';
import Product from './Pages/product';
import Cart from './Pages/cart';
import Login from './Pages/signupLogin';
import Footer from './Components/Footer/Footer';
import menBanner from './Components/Assets/menBanner.jpg';
import womenBanner from './Components/Assets/womenBanner.jpg';
import kidBanner from './Components/Assets/kidsBanner.jpg';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner = {menBanner} className = 'banner'category="men" />} />
          <Route path='/womens' element={<ShopCategory banner = {womenBanner} className = 'banner' category="women" />} />
          <Route path='/kids' element={<ShopCategory banner = {kidBanner} className = 'banner' category="kid" />} />
          <Route path="/product" element={<Product />} >
            <Route path=':productId' element={<Product/>}/>
            </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
</Routes>
<Footer/>
      </BrowserRouter>
    </div>
  );
}
export default App;
