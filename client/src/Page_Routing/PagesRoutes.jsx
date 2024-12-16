import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ServicesPage from "../pages/ServicesPage";
import ContactPage from '../pages/ContactPage';
import TeamsPage from '../pages/TeamsPage';
import TermsPage from '../pages/TermsPage';
import NotFoundPage from '../pages/NotFoundPage';
import Navbar from '../components/Navbar/Navbar.jsx';
import Footer from '../components/footer/footer.jsx';

export default function PagesRoutes() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Services" element={<ServicesPage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  )
}
