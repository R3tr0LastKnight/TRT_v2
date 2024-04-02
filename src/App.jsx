import { Route, Routes } from "react-router-dom";
import "./App.css";
import IndexPage from "./Pages/IndexPage";
import Layout from "./Layout";
import AboutPage from "./Pages/AboutPage";
import ProdutsPage from "./Pages/ProdutsPage";
import ServicesPage from "./Pages/ServicesPage";
import CredentialsPage from "./Pages/CredentialsPage";
import ContactPage from "./Pages/ContactPage";

function App() {
  return (
    <div>
      {/* <IndexPage /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProdutsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/credentials" element={<CredentialsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
