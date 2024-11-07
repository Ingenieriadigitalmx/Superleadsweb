import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import { IntlProvider } from "react-intl";
import esMessages from "./locale/es.json";
import enMessages from "./locale/en.json";
import Contacto from "./pages/Contacto";
import Crm from "./pages/Crm";

const messages = {
  es: esMessages,
  en: enMessages,
};

function App() {
  const location = useLocation();
  const language = location.pathname.startsWith("/en") ? "en" : "es";

  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/en/*" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/crm" element={<Crm  />} />
        {/* Define other routes here */}
      </Routes>
      <Footer />
    </IntlProvider>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
