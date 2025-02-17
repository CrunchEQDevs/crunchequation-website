import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { IoChevronForward } from "react-icons/io5";
import { MdOutlineSquare } from "react-icons/md";
import { usePosts } from '../../utils/PostProvider';
import routeMap from '../../utils/RouteMap';
import SubmenuServices from './SubmenuServices';
import SubmenuCareers from './SubmenuCareers';

const MenuItems = ({ isActive, setIsOpen }) => {
  const { t } = useTranslation();
  const [isSubmenuServicesOpen, setIsSubmenuServicesOpen] = useState(false);
  const [isSubmenuCareersOpen, setIsSubmenuCareersOpen] = useState(false);
  const lang = localStorage.getItem('language');
  const { changeLanguage: updatePosts } = usePosts();

  const handleServiceClick = () => {
    if (window.innerWidth < 1024) {
      setIsSubmenuServicesOpen(false);
    }
  };
  
  const handleCareerClick = () => {
    if (window.innerWidth < 1024) {
      setIsSubmenuCareersOpen(false);
    }
  };

  return (
    <>
      <li className='flex items-center justify-between'>
        <div className="flex items-center justify-between gap-3 py-2 px-2 w-full">
          <div className="flex items-center gap-3">
            <div className='text-laranja lg:hidden'>
              <MdOutlineSquare size={12} />
            </div>
            <Link
              to="/"
              className={` ${isActive('/about') ? 'text-orange-500 border-b-2 border-orange-500' : ''} text-sm flex justify-between hover:text-laranja transition-colors duration-200`}
              onClick={() => setIsOpen && setIsOpen(false)}
            >
              {t('about')} {t('crunch')}
            </Link>
          </div>
        </div>
      </li>

      <li className='flex items-center justify-between'>
        <div className="flex items-center justify-between gap-3 py-2 px-2 w-full">
          <div className="flex items-center gap-3">
            <div className='text-laranja lg:hidden'>
              <MdOutlineSquare size={12} />
            </div>
            <button
              className={` ${isActive(`/${lang}/${routeMap.services[lang]}/`) ? 'text-orange-500 border-b-2 border-orange-500 w-fit' : ''} text-sm flex justify-between hover:text-laranja transition-colors duration-200 lg:gap-1 uppercase`}
              onClick={() => {
                setIsSubmenuServicesOpen((prev) => !prev);
                if (window.innerWidth >= 1024);
              }}
            >
              {t('services')}
            </button>
          </div>
          <div className='text-laranja lg:rotate-90'>
            <IoChevronForward size={20} />
          </div>
        </div>
        {isSubmenuServicesOpen && (
          <SubmenuServices setIsSubmenuServicesOpen={setIsSubmenuServicesOpen} onServiceClick={handleServiceClick} />
        )}
      </li>

      <li className='flex items-center justify-between'>
        <div className="flex items-center justify-between gap-3 py-2 px-2 w-full">
          <div className="flex items-center gap-3">
            <div className='text-laranja lg:hidden'>
              <MdOutlineSquare size={12} />
            </div>
            <Link
              to={`/${lang}/${routeMap.blog[lang]}/`}
              className={` ${isActive(`/${lang}/${routeMap.blog[lang]}/`) ? 'text-orange-500 border-b-2 border-orange-500' : ''} text-sm flex justify-between hover:text-laranja transition-colors duration-200`}
              onClick={() => setIsOpen && setIsOpen(false)}
            >
              {t('latest_news')}
            </Link>
          </div>
        </div>
      </li>

      <li className='flex items-center justify-between'>
        <div className="flex items-center justify-between gap-3 py-2 px-2 w-full">
          <div className="flex items-center gap-3">
            <div className='text-laranja lg:hidden'>
              <MdOutlineSquare size={12} />
            </div>
            <button
              className={` ${isActive(`/${lang}/${routeMap.careers[lang]}/`) ? 'text-orange-500 border-b-2 border-orange-500' : ''} text-sm flex justify-between hover:text-laranja transition-colors duration-200 lg:gap-1 uppercase`}
              onClick={() => {
                setIsSubmenuCareersOpen((prev) => !prev);
                if (window.innerWidth >= 1024);
              }}
            >
              {t('careers')}
            </button>
          </div>
          <div className='text-laranja lg:rotate-90'>
            <IoChevronForward size={20} />
          </div>
        </div>
        {isSubmenuCareersOpen && (
          <SubmenuCareers setIsSubmenuCareersOpen={setIsSubmenuCareersOpen} onCareerClick={handleCareerClick} />
        )}
      </li>

      <li className='flex items-center justify-between'>
        <div className="flex items-center justify-between gap-3 py-2 px-2 w-full">
          <div className="flex items-center gap-3">
            <div className='text-laranja lg:hidden'>
              <MdOutlineSquare size={12} />
            </div>
            <Link
              to={`/${lang}/${routeMap.contact[lang]}/`}
              className={` ${isActive(`${routeMap.contact[lang]}`) ? 'text-orange-500 border-b-2 border-orange-500' : ''} text-sm flex justify-between hover:text-laranja transition-colors duration-200`}
              onClick={() => setIsOpen && setIsOpen(false)}
            >
              {t('contacts')}
            </Link>
          </div>
        </div>
      </li>

      <li className='flex items-center justify-between'>
        <div className="flex items-center justify-between gap-3 py-2 px-2 w-full">
          <div className="flex items-center gap-3">
            <div className='text-laranja lg:hidden'>
              <MdOutlineSquare size={12} />
            </div>
            <a
              href="https://issuu.com/crunchequation/docs/proposta_-_servic_os_operacionais_crunch2025_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm flex justify-between hover:text-laranja transition-colors duration-200"
              onClick={() => setIsOpen && setIsOpen(false)}
            >
              {t('catalog')}
            </a>
          </div>
        </div>
      </li>
    </>
  );
};

export default MenuItems; 