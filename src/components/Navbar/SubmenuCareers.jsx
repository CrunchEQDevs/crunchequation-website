import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { IoChevronBack, IoCloseOutline } from "react-icons/io5";
import { MdOutlineSquare } from "react-icons/md";
import routeMap from '../../utils/RouteMap';
import DropdownCareer from './DropdownCareer';

const SubmenuCareers = ({ setIsSubmenuCareersOpen }) => {
  const { t } = useTranslation();
  const lang = localStorage.getItem('language');

  return (
    <>
      <div className={`fixed top-0 left-0 h-full p-6 bg-pretoCinzento w-full text-white z-50 transition-transform transform translate-x-0 lg:hidden`}>
        <div className="py-4 flex w-full justify-between items-center">
          <button onClick={() => setIsSubmenuCareersOpen(false)} className="text-white focus:outline-none">
            <div className="text-laranja">
              <IoChevronBack size={28} />
            </div>
          </button>
          <div className="text-base w-full font-bold">
            <Link to="/" className="flex items-center justify-center">
              <img src='https://crunchequation.com/devit/assets/sitecrunch/home/logocrunch.png' alt="Crunch Equation" className="h-10 mr-2" />
            </Link>
          </div>
          <button onClick={() => setIsSubmenuCareersOpen(false)} className="text-white focus:outline-none">
            <div className="text-laranja">
              <IoCloseOutline size={28} />
            </div>
          </button>
        </div>
        <ul className="flex flex-col py-4 pl-2">
          <li className='flex items-center justify-between'>
            <div className="flex items-center justify-between gap-3 py-2 px-2 w-full">
              <div className="flex items-center gap-3">
                <div className='text-laranja'>
                  <MdOutlineSquare size={12} />
                </div>
                <Link
                  to={`/${lang}/${routeMap.careers[lang]}/`}
                  className="text-sm flex justify-between hover:text-laranja transition-colors duration-200"
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
                  className="text-sm flex justify-between hover:text-laranja transition-colors duration-200"
                  onClick={() => setIsSubmenuCareersOpen(false)}
                >
                  {t('open_position')}
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <DropdownCareer setIsSubmenuCareersOpen={setIsSubmenuCareersOpen} />
    </>
  );
};

export default SubmenuCareers; 