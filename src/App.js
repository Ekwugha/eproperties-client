import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/authContext";
import CustomNavbar from "./components/navbar/navbar.jsx";
import Home from "./pages/home/home.jsx";
import Footer from "./components/footer/footer.jsx";
import RentPage from "./pages/rent/rent.jsx";
import SalePage from "./pages/sale/sale.jsx";
import LetPage from "./pages/let/let.jsx";
import Tenants from "./pages/tenants/tenant.jsx";
import PropertyDetail from "./pages/propertyDetails/propertydetail.jsx";
import EstateAgent from "./pages/estate-agent/estateAgent.jsx";
import Agent from "./pages/agent/agent.jsx";
import About from "./pages/about/about.jsx";
import MyComponent from "./pages/myComponent.jsx";
import GoTop from "./components/back-to-top/gotop.jsx";
import Login from "./pages/login/login.jsx";
import Register from "./pages/register/register.jsx";
import Dashboard from "./pages/dashboard/dashboard.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";



function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <CustomNavbar />
          <GoTop />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/rent" element={<RentPage />} />
            <Route exact path="/sale" element={<SalePage />} />
            <Route exact path="/short-let" element={<LetPage />} />
            <Route exact path="/tenants" element={<Tenants />} />
            <Route exact path="/propertydetails" element={<PropertyDetail />} />
            <Route exact path="/estate-agents" element={<EstateAgent />} />
            <Route exact path="/agent" element={<Agent />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/pagination" element={<MyComponent />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
          </Routes>
          <Footer />
          <ToastContainer position="top-right" />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
