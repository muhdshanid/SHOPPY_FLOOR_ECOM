import './App.css';
import HomeNav from './components/home/HomeNav';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import ProductDetails from './pages/product/ProductDetails';
import Checkout from './pages/order/Checkout';
function App() {
  return (
    <div className='App w-full'>
      <Navbar/>
      <BrowserRouter>
      <HomeNav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<ProductDetails/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
