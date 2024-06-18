import "./App.css";
import Main from "./pages/main/Main";
import Products from "./pages/products/Products";
import FAQs from "./pages/faq/FAQ";
// import Statement from './pages/statement/Statement';
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import Careers from "./pages/careers/Careers";
import ProductView from "./pages/productView/ProductView";
import AllProductView from "./pages/AllProductView/AllProductView";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Statement from "./components/about/statement/Statement";
import Team from "./components/about/team/Team";
import Testimonials from "./components/about/testimonials/Testimonials";
import News from "./components/about/news/News";
import Subscribe from "./components/subscribe/Subscribe";
import Chat from "./components/chat/Chat";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Mission from "./components/mission/Mission";
import Process from "./components/process/Process";
import FAQ from "./components/faq/FAQ";
import VendorRegistration from "./pages/register/VendorRegistration";
import Request from "./pages/request/Request";
import { HashRouter } from "react-router-dom";
import Resources from "./pages/resources/Resources";

function App() {
  const MainContent = () => {
    return (
      <div className="items">
        <Zoom duration={1000}>
          <Main />
        </Zoom>
        <Process />
        <Statement />
        <Products />
        {/* <Team /> */}
        <Mission />
        <FAQ />
        {/* <Testimonials /> */}
        {/* <News /> */}
        <Subscribe />
        <Chat />
      </div>
    );
  };
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<MainContent />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/vendor-registration" element={<VendorRegistration />} />
        <Route path="/request-refill" element={<Request />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
      <br />
      <Footer />
    </div>
  );
}

export default App;
