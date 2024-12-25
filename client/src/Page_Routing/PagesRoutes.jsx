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
import CoursesPage from '../pages/CoursesPage.jsx';
import Login from '../components/auth/Login.jsx';
import SignUp from '../components/auth/Signup.jsx';
import GraphicsPage from '../pages/subPages/GraphicsPage';
import BackEndCoursesPage from '../pages/subPages/BackEndCoursesPage';
import Webdevelopment from '../pages/subPages/Webdevelopment.jsx';
import SeoPage from '../pages/subPages/SeoPage.jsx';
import DataAnalyticsPage from '../pages/subPages/DataAnalyticsPage.jsx';
import DigitalMarketingPage from '../pages/subPages/DigitalMarketingPage.jsx';
import UiuxPage from '../pages/subPages/UiuxPage.jsx';
import FrontEndCouresPages from '../pages/subPages/FrontEndCouresPages.jsx';
import AppDevelopmentPage from '../pages/subPages/AppDevelopmentPage.jsx';

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
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/graphics-design" element={<GraphicsPage/>}></Route>
          <Route path="/digital-marketing" element={<DigitalMarketingPage/>}></Route>
          <Route path="/email-marketing" element={<DigitalMarketingPage/>}></Route>
          <Route path="/seo" element={<SeoPage/>}></Route>
          <Route path="/full-stack-development" element={<Webdevelopment/>}></Route>
          <Route path="/front-end-web-development" element={<FrontEndCouresPages/>}></Route>
          <Route path="/back-end-development" element={<BackEndCoursesPage/>}></Route>
          <Route path="/data-analysis" element={<DataAnalyticsPage/>}></Route>
          <Route path="/ui-ux-design" element={<UiuxPage/>}></Route>
          <Route path="/app-development" element={<AppDevelopmentPage/>}></Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  )
}
