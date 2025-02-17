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
      const currentPath = window.location.pathname.replace('/devit/site', ''); // Ajuste conforme a necessidade do basename
      const storedLang = localStorage.getItem('language');
      const supportedLanguages = ['en', 'pt', 'es', 'fr', 'de', 'it']; 
      
      // Se a URL já tiver um idioma suportado, não redirecionar
      const urlLang = currentPath.split('/')[1]; // Obtém o primeiro segmento da URL
      
      if (!supportedLanguages.includes(urlLang)) {
        const defaultLang = storedLang || 'en'; // Usa o idioma armazenado ou o padrão 'en'
        localStorage.setItem('language', defaultLang);
        navigate(`/${defaultLang}${currentPath}`); // Redireciona para o idioma correto
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
            <Route path="/:lang" element={<Home />} />
            <Route path={`/:lang/${services}/*`} element={<Services />} />
            <Route path={`/:lang/${blog}/*`} element={<LastestNews />} />
            <Route path={`/:lang/${careers}/*`} element={<Careers />} />
            <Route path={`/:lang/${contact}/*`} element={<Contacts />} />
            <Route path={`/:lang/${application}/*`} element={<Application />} />
            <Route path={`/:lang/${application}/:slug/`} element={<JobDetails />} />
            <Route path={`/:lang/${blog}/:slug/`} element={<Article />} />
          </Routes>
        </div>
      </Router>
    </PostsProvider>
  );
}

export default App;
