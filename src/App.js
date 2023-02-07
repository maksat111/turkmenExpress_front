import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Logo from './images/logo.png';
import Home from './pages/home/Home';

const Navbar = lazy(() => import('./components/Navbar'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <Suspense fallback={<img src={Logo} alt='Loading...' />}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </Suspense>
  );
}

export default App;
