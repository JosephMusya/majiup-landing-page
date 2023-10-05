import './App.css';
import Main from './pages/main/Main';
import Products from './pages/products/Products';
import FAQs from './pages/faq/FAQ';
import Statement from './pages/statement/Statement';
import Footer from './components/footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Careers from './pages/careers/Careers';
import ProductView from './pages/productView/ProductView';
import AllProductView from './pages/AllProductView/AllProductView';
import Navbar from './components/navbar/Navbar';
import './App.css';

function App() {
  const MainContent = () => {
    return (
      <div className='items'>
        <Main/>
        <Products />
        <FAQs />
        <Statement />
      </div>
    )
  }
  return (
    <>
      <Navbar /> 
      <Main/>
      <Products />
      <FAQs />
      <Statement />           
      <Footer />
    </>    
  )
}

export default App

