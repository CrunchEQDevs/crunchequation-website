import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MdOutlineSquare } from "react-icons/md";
import routeMap from '../../utils/RouteMap';

const DropdownCareer = ({ setIsSubmenuCareersOpen }) => {
  const { t } = useTranslation();
  const lang = localStorage.getItem('language');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsSubmenuCareersOpen(false);
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
  }, [setIsSubmenuCareersOpen]);
  
  return (
    <div className="absolute w-72 hidden lg:block top-[4.8rem]"
    ref={dropdownRef}>
      <ul className="flex flex-col py-4 pl-2 px-3 bg-pretoCinzento text-white transition-opacity duration-200">
        <li className='flex items-center justify-between'>
          <div className="flex items-center justify-between gap-3 py-2 px-2 w-full">
            <div className="flex items-center gap-3">
              <div className='text-laranja'>
                <MdOutlineSquare size={12} />
              </div>
              <Link
                to={`/${lang}/${routeMap.careers[lang]}/`}
                className={`text-sm flex justify-between hover:text-laranja transition-colors duration-200`}
                onClick={() => setIsSubmenuCareersOpen(false)}
              >
                {t('we_are_crunchNavbar')}
              </Link>
            </div>
          </div>
        </li>
        <li className='flex items-center justify-between'>
          <div className="flex items-center justify-between gap-3 py-2 px-2 w-full">
            <div className="flex items-center gap-3">
              <div className='text-laranja'>
                <MdOutlineSquare size={12} />
              </div>
              <Link
                to={`/${lang}/${routeMap.application[lang]}/`}
                className={`text-sm flex justify-between hover:text-laranja transition-colors duration-200`}
                onClick={() => setIsSubmenuCareersOpen(false)}
              >
                {t('open_position')}
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default DropdownCareer; 