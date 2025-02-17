import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { RiMenu5Line } from "react-icons/ri";
import { IoCloseOutline, IoChevronBack } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import routeMap from '../../utils/RouteMap';
import MenuItems from './MenuItems';
import { usePosts } from '../../utils/PostProvider';



const Navbar = () => {
  const { changeLanguage: changePostLanguage } = usePosts();
  const { i18n } = useTranslation();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('language') || 'en');
  const menuRef = useRef(null);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const mobileLanguageDropdownRef = useRef(null);
  const desktopLanguageDropdownRef = useRef(null);
  //const { setLanguage } = useTranslation();

  
  const languages = [
    { code: 'en', label: 'ENG', flag: 'https://cdn-icons-png.flaticon.com/256/555/555417.png' },
    { code: 'pt', label: 'PT', flag: 'https://cdn-icons-png.flaticon.com/256/321/321256.png' },
    { code: 'es', label: 'ES', flag: 'https://cdn-icons-png.flaticon.com/256/330/330557.png' },
    { code: 'fr', label: 'FR', flag: 'https://cdn-icons-png.flaticon.com/256/330/330490.png' },
    { code: 'de', label: 'DE', flag: 'https://cdn-icons-png.flaticon.com/256/330/330523.png' },
    { code: 'it', label: 'IT', flag: 'https://cdn-icons-png.flaticon.com/256/10948/10948379.png' }
  ];


  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
    
  }, [i18n]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Handle desktop dropdown
      if (
        desktopLanguageDropdownRef.current && 
        !desktopLanguageDropdownRef.current.contains(event.target)
      ) {
        setIsDesktopDropdownOpen(false);
      }
      
      // Handle mobile dropdown
      if (
        mobileLanguageDropdownRef.current && 
        !mobileLanguageDropdownRef.current.contains(event.target)
      ) {
        setIsLanguageDropdownOpen(false);
      }

      // Handle mobile menu
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

    const navigate = useNavigate();

    const isActive = (path) =>{
      location.pathname === path
    };
      
    const changeLanguage = async (lng) => {
      // Muda o idioma da interface (i18n)
      i18n.changeLanguage(lng);
      localStorage.setItem("language", lng);
      setCurrentLanguage(lng);

      // Muda o idioma dos posts
      await changePostLanguage(lng);
      
      // Resto do código de navegação
      const currentPath = location.pathname.replace(/^\/(en|pt|es|fr|de|it)/, '');
      const pathSegments = currentPath.split('/').filter(Boolean);
    
      if (pathSegments.length > 0) {
        const currentRoute = pathSegments[0];

        for (const route in routeMap) {
          if (routeMap[route].en === currentRoute ||
            routeMap[route].pt === currentRoute ||
            routeMap[route].es === currentRoute ||
            routeMap[route].fr === currentRoute ||
            routeMap[route].de === currentRoute ||
            routeMap[route].it === currentRoute
          ) {
            pathSegments[0] = routeMap[route][lng];
            break;
          }
        }
      }
      
      // Constrói o novo path com o idioma e os segmentos traduzidos
      const newPath = pathSegments.length > 0 ? `/${pathSegments.join('/')}` : '';
      navigate(`/${lng}${newPath}/`);
    
      // Recarrega a página se estiver no blog
      // if (pathSegments.includes('blog')) {
      //   window.location.reload();
      // }
    };
    
    

  return (
    <nav className="bg-blackBg sticky z-[100] w-full font-bold text-white p-4 uppercase ">
      <div className="container mx-auto flex md:justify-around justify-between items-center px-2">
        <div className="text-base font-bold w-full lg:w-fit">
          <Link to="/" className="flex w-fit items-center justify-center mx-auto md:ml-0 ">
            <img src='https://crunchequation.com/devit/assets/sitecrunch/home/logocrunch.png' alt="Crunch Equation" className="h-10 ml-4 md:ml-0 " />
          </Link>
        </div>
        <div className="lg:hidden flex">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none "
          >
            <RiMenu5Line size={28} />
          </button>
        </div>
        <ul className="hidden lg:flex lg:space-x-10 ">
          <MenuItems isActive={isActive} />
        </ul>
        
        {/* Desktop Language Dropdown */}
        <div className="hidden lg:block relative" ref={desktopLanguageDropdownRef}>
          <button
            onClick={() => setIsDesktopDropdownOpen(!isDesktopDropdownOpen)}
            className="flex items-center space-x-1 hover:text-orange-500"
          >
            <span>{currentLanguage.toUpperCase()}</span>
            <IoMdArrowDropdown />
          </button>
          
          {isDesktopDropdownOpen && (
            <div className="absolute right-0 mt-2 py-2 w-24 bg-blackBg border border-gray-700 rounded-lg shadow-lg">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    changeLanguage(lang.code);
                    setIsDesktopDropdownOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 hover:bg-gray-700 hover:text-orange-500 ${
                    currentLanguage === lang.code ? 'text-orange-500' : ''
                  }`}
                >
                  <img src={lang.flag} alt={`${lang.label} flag`} className="inline-block w-4 h-4 mr-2" />
                  {lang.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div 
      ref={menuRef}
      className={`fixed top-0 left-0 h-full p-6 bg-pretoCinzento w-8/12 text-white z-50 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden`}
      >
        <div className="py-4 flex w-full justify-between items-center">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white focus:outline-none invisible"
          >
            <div className="text-laranja">
              <IoChevronBack size={28} />
            </div>
          </button>
          <div className="text-base w-full font-bold">
            <Link to="/" className="flex items-center w-fit mx-auto justify-center">
              <img src='https://crunchequation.com/devit/assets/sitecrunch/home/logocrunch.png' alt="Crunch Equation" className="h-10 mr-2" />
            </Link>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white focus:outline-none  "
          >
            <div className="text-laranja">
              <IoCloseOutline size={28} />
            </div>
          </button>
        </div>
        <ul className="flex flex-col py-4 pl-2">
          <MenuItems isActive={isActive} setIsOpen={setIsOpen} />
          
          {/* Mobile Language Dropdown */}
          <div className="relative mt-5" ref={mobileLanguageDropdownRef}>
            <button
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              className="flex items-center justify-center space-x-1 w-full py-2 hover:text-orange-500"
            >
              <span>{currentLanguage.toUpperCase()}</span>
              <IoMdArrowDropdown />
            </button>
            
            {isLanguageDropdownOpen && (
              <div className="w-full bg-gray-800 rounded-lg mt-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      changeLanguage(lang.code);
                      setIsLanguageDropdownOpen(false);
                      setIsOpen(false);
                    }}
                    className={`block w-full text-center py-2 hover:bg-gray-700 hover:text-orange-500 ${
                      currentLanguage === lang.code ? 'text-orange-500' : ''
                    }`}
                  >
                    <img src={lang.flag} alt={`${lang.label} flag`} className="inline-block w-4 h-4 mr-2" />
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
