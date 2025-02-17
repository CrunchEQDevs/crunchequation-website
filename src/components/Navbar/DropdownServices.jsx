import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { IoChevronForward } from "react-icons/io5";
import { MdOutlineSquare } from "re\act-icons/md";
import routeMap from '../../utils/RouteMap';

const DropdownServices = ({ currentServices, setIsSubmenuServicesOpen }) => {
  const { t } = useTranslation()
  const lang = localStorage.getItem('language')
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsSubmenuServicesOpen(false);
      }
    };

    const isDesktop = window.matchMedia('(min-width: 1024px)').matches;

    if (isDesktop) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      if (isDesktop) {
        document.removeEventListener('mousedown', handleClickOutside);
      }
    };
  }, [setIsSubmenuServicesOpen]);

  return (
    <div className="absolute w-72 py-4 hidden bg-pretoCinzento lg:block top-[4.8rem]"
    ref={dropdownRef}>
      <div className='flex pb-2 justify-between items-center'>
        <Link className='px-3 lg:text-base text-sm hover:text-custom-gradient transition-colors duration-300' to={`/${lang}/${routeMap.services[lang]}/`}>
          {t('all_services')}
        </Link>
        <div className='text-laranja pr-2'>
          <IoChevronForward size={20} />
        </div>
      </div>
      <ul className={`px-3  bg-pretoCinzento text-white transition-opacity duration-200`}>
        {currentServices.map((service) => (
          <li key={service.slug} className='py-2'>
            <Link
              to={`/${lang}/${routeMap.services[lang]}/${service.slug}/`}
              className="hover:text-laranja gap-2 flex  items-center transition-colors text-sm duration-200"
              onClick={() => setIsSubmenuServicesOpen(false)}
            >
              <div className='text-laranja'>
                <MdOutlineSquare size={12} />
              </div>
              {service.titulo}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownServices; 