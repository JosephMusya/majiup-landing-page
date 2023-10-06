import './App.css';
import Main from './pages/main/Main';
import Products from './pages/products/Products';
import FAQs from './pages/faq/FAQ';
// import Statement from './pages/statement/Statement';
import Footer from './components/footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Careers from './pages/careers/Careers';
import ProductView from './pages/productView/ProductView';
import AllProductView from './pages/AllProductView/AllProductView';
import Navbar from './components/navbar/Navbar';
import './App.css';
import Statement from './components/about/statement/Statement';
import Team from './components/about/team/Team';
import Testimonials from './components/about/testimonials/Testimonials';
import News from './components/about/news/News';

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
      <Statement />
      <Products />
      <Team />
      {/* <FAQs /> */}
      <Testimonials />
      <News />
      {/* <Statement />            */}
      <br />
      <Footer />
    </>    
  )
}

export default App

