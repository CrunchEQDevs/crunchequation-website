import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Services from './pages/Services/index.jsx';
import LastestNews from './pages/LastestNews.jsx';
import Careers from './pages/Careers.jsx';
import Contacts from './pages/Contacts';
import Application from './pages/Application';
import JobDetails from './pages/JobDetails';
import './index.css';
import { PostsProvider } from './utils/PostProvider/index.jsx';
import Article from './pages/Article';
import useTranslatedRoutes from './hooks/useTranslatatedRoutes.jsx';

const App = () => {
  const { services, careers, application, contact, blog } = useTranslatedRoutes();

  const LanguageRedirect = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
      const currentPath = window.location.pathname.replace('/devit/site', '');
      const storedLang = localStorage.getItem('language');
      const supportedLanguages = ['en', 'pt', 'es', 'fr', 'de', 'it', 'ar']; 
      
      const urlLang = currentPath.split('/')[1];
      
      if (!supportedLanguages.includes(urlLang)) {
        const defaultLang = storedLang || 'en';
        localStorage.setItem('language', defaultLang);
        navigate(`/${defaultLang}${currentPath}`);
      }
    }, [navigate]);
    
    return null;
  };
  
  return (
    <PostsProvider>
      <Router basename='/'>
        <LanguageRedirect />
        <div>
          <Routes>
            <Route path="/" element={<Navigate to={`/${localStorage.getItem('language') || 'en'}/`} />} />
            <Route path="/:lang">
              <Route index element={<Home />} />
              <Route path={services} element={<Services />} />
              <Route path={`${services}/*`} element={<Services />} />
              <Route path={blog} element={<LastestNews />} />
              <Route path={`${blog}/*`} element={<LastestNews />} />
              <Route path={careers} element={<Careers />} />
              <Route path={`${careers}/*`} element={<Careers />} />
              <Route path={contact} element={<Contacts />} />
              <Route path={`${contact}/*`} element={<Contacts />} />
              <Route path={application} element={<Application />} />
              <Route path={`${application}/*`} element={<Application />} />
              <Route path={`${application}/:slug`} element={<JobDetails />} />
              <Route path={`${blog}/:slug`} element={<Article />} />
            </Route>
            <Route path="*" element={<Navigate to={`/${localStorage.getItem('language') || 'en'}/`} />} />
          </Routes>
        </div>
      </Router>
    </PostsProvider>
  );
}

export default App;
