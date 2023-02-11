import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Logo from './images/logo.png';

const Navbar = lazy(() => import('./components/Navbar'));
const Footer = lazy(() => import('./components/Footer'));
const Category = lazy(() => import('./components/Category'));
const Home = lazy(() => import('./pages/home/Home'));

function App() {
  return (
    <Suspense fallback={<img src={Logo} alt='Loading...' />}>
      <Navbar />
      <Routes>
        <Route path='home' element={< Category />} >
          <Route path='category' element={<Home />} />
        </Route>
      </Routes>
      <Footer />
    </Suspense>
  );
}

export default App;
