import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import ProductDetails from './pages/product/ProductDetails';
import Checkout from './pages/order/Checkout';
import Cart from './pages/cart/Cart';
import CategoryProducts from './pages/category/CategoryProducts';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import ProductList from './pages/admin/product/ProductsList';
import CreateProduct from './pages/admin/product/CreateProduct';
import CategoryList from './pages/admin/category/CategoryList';
import CreateCategory from './pages/admin/category/CreateCategory';
import CreateBrand from './pages/admin/brand/CreateBrand';
import BrandList from './pages/admin/brand/BrandList';
import OrdersList from './pages/admin/order/OrdersList';
import OrderDetails from './pages/admin/order/OrderDetails';
import UpdateCategory from './pages/admin/category/UpdateCategory';
import UpdateBrand from './pages/admin/brand/UpdateBrand';
import UpdateProduct from './pages/admin/product/UpdateProduct';
import CouponList from './pages/admin/coupon/CouponList';
import CreateCoupon from './pages/admin/coupon/CreateCoupon';
import UpdateCoupon from './pages/admin/coupon/UpdateCoupon';
import BlogList from './pages/admin/blog/BlogList';
import CreateBlog from './pages/admin/blog/CreateBlog';
import UpdateBlog from './pages/admin/blog/UpdateBlog';
import BrandProducts from './pages/brand/BrandProducts';
import PopularProducts from './pages/popular/PopularProducts';
import CheckoutSingleProduct from './pages/order/CheckoutSingleProduct';
import OrderList from './pages/order/OrderList';
import OutStore from './pages/ourStore/OutStore';
import HomeNav from './components/navbar/HomeNav';
import Footer from './components/navbar/Footer';
import BlogDetails from './pages/blog/BlogDetails';
import WishList from './pages/wishlist/WishList';
import Search from './pages/search/Search';
import BlogsPage from './pages/blogs/BlogsPage';
function App() {
  return (
    <div className='App w-full'>
      <BrowserRouter>
      <Navbar/>
      <HomeNav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin/product-list' element={<ProductList/>}/>
        <Route path='/admin/create-product' element={<CreateProduct/>}/>
        <Route path='/admin/update-product/:id' element={<UpdateProduct/>}/>
        <Route path='/admin/order-list' element={<OrdersList/>}/>
        <Route path='/admin/order-details/:id' element={<OrderDetails/>}/>
        <Route path='/admin/category-list' element={<CategoryList/>}/>
        <Route path='/admin/create-category' element={<CreateCategory/>}/>
        <Route path='/admin/update-category/:id' element={<UpdateCategory/>}/>
        <Route path='/admin/coupons-list' element={<CouponList/>}/>
        <Route path='/admin/create-coupon' element={<CreateCoupon/>}/>
        <Route path='/admin/update-coupon/:id' element={<UpdateCoupon/>}/>
        <Route path='/admin/brand-list' element={<BrandList/>}/>
        <Route path='/admin/create-brand' element={<CreateBrand/>}/>
        <Route path='/admin/update-brand/:id' element={<UpdateBrand/>}/>
        <Route path='/admin/blogs-list' element={<BlogList/>}/>
        <Route path='/admin/create-blog' element={<CreateBlog/>}/>
        <Route path='/admin/update-blog/:id' element={<UpdateBlog/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/> 
        <Route path='/checkout' element={<Checkout/>}/> 
        <Route path='/checkout/:id' element={<CheckoutSingleProduct/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/wishlist' element={<WishList/>}/>
        <Route path='/orders' element={<OrderList/>}/>
        <Route path='/our-store' element={<OutStore/>}/>
        <Route path='/cat-products/:name' element={<CategoryProducts/>}/>
        <Route path='/search/:search' element={<Search/>}/>
        <Route path='/blog-details/:id' element={<BlogDetails/>}/>
        <Route path='/brand-products/:name' element={<BrandProducts/>}/>
        <Route path='/popular-products' element={<PopularProducts/>}/>
        <Route path='/blogs' element={<BlogsPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
