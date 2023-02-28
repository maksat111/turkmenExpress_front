import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Logo from './images/logo.png';
import ProductsCategory from './pages/productsCategory/ProductsCategory';

const Navbar = lazy(() => import('./components/Navbar'));
const Footer = lazy(() => import('./components/Footer'));
const Category = lazy(() => import('./components/Category'));
const Home = lazy(() => import('./pages/home/Home'));
const Links = lazy(() => import('./pages/links/Links'));
const Product = lazy(() => import('./pages/product/Product'));
const Loading = lazy(() => import('./components/Loading'));

function App() {
  return (
    <Suspense fallback={<Loading />} >
      <Navbar />
      <Routes>
        <Route path='home' element={< Category />} >
          <Route path='category' element={<Home />} />
          <Route path='product' element={<Product />} />
          <Route path='azyk' element={< ProductsCategory />} />
        </Route>
        <Route path='/links' element={<Links />} />
      </Routes>
      <Footer />
    </ Suspense>
  );
}

export default App;
