import './App.css';
import HomeNav from './components/home/HomeNav';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import ProductDetails from './pages/product/ProductDetails';
import Checkout from './pages/order/Checkout';
import Cart from './pages/cart/Cart';
import CategoryProducts from './pages/category/CategoryProducts';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import ProductList from './pages/admin/ProductsList';
import CreateProduct from './pages/admin/CreateProduct';
import CategoryList from './pages/admin/CategoryList';
import CreateCategory from './pages/admin/CreateCategory';
import CreateBrand from './pages/admin/CreateBrand';
import BrandList from './pages/admin/BrandList';
import OrdersList from './pages/admin/OrdersList';
import OrderDetails from './pages/admin/OrderDetails';
function App() {
  return (
    <div className='App w-full'>
      <BrowserRouter>
      {/* <Navbar/>
      <HomeNav/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin/product-list' element={<ProductList/>}/>
        <Route path='/admin/create-product' element={<CreateProduct/>}/>
        <Route path='/admin/order-list' element={<OrdersList/>}/>
        <Route path='/admin/order-details' element={<OrderDetails/>}/>
        <Route path='/admin/category-list' element={<CategoryList/>}/>
        <Route path='/admin/create-category' element={<CreateCategory/>}/>
        <Route path='/admin/brand-list' element={<BrandList/>}/>
        <Route path='/admin/create-brand' element={<CreateBrand/>}/>
        <Route path='/product' element={<ProductDetails/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/category' element={<CategoryProducts/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
