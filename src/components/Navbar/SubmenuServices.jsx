import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { IoChevronBack, IoCloseOutline } from "react-icons/io5";
import { MdOutlineSquare } from "react-icons/md";
import { servicesPT, servicesEN, servicesES, servicesFR, servicesDE, servicesIT, servicesAR } from '../../utils/ServicesInfo';
import routeMap from '../../utils/RouteMap';
import DropdownServices from './DropdownServices';
import PropTypes from 'prop-types';

const SubmenuServices = ({ setIsSubmenuServicesOpen }) => {
  const { i18n } = useTranslation();
  
  const getCurrentServices = () => {
    switch(i18n.language) {
      case 'pt':
        return servicesPT;
      case 'es':
        return servicesES;
      case 'fr':
        return servicesFR;
      case 'de':
        return servicesDE;
      case 'it':
        return servicesIT;
      case 'ar':
        return servicesAR;
      default:
        return servicesEN;
    }
  };

  const currentServices = getCurrentServices();
  const lang = (() => {
    try {
      return localStorage.getItem('language') || 'en';
    } catch (error) {
      console.warn('localStorage não disponível:', error);
      return 'en';
    }
  })();
  
  return (
    <>
      <div className={`fixed top-0 left-0 h-full p-6 bg-pretoCinzento w-full text-white z-50 transition-transform transform translate-x-0 lg:hidden`}>
        <div className="py-4 flex w-full justify-between items-center">
          <button onClick={() => setIsSubmenuServicesOpen(false)} className="text-white focus:outline-none">
            <div className="text-laranja">
              <IoChevronBack size={28} />
            </div>
          </button>
          <div className="text-base w-full font-bold">
            <Link to="/" className="flex items-center justify-center">
              <img src='https://crunchequation.com/devit/assets/sitecrunch/home/logocrunch.png' alt="Crunch Equation" className="h-10 mr-2" />
            </Link>
          </div>
          <button onClick={() => setIsSubmenuServicesOpen(false)} className="text-white focus:outline-none">
            <div className="text-laranja">
              <IoCloseOutline size={28} />
            </div>
          </button>
        </div>
        <ul className="flex flex-col py-4 pl-2">
          {currentServices.map((service) => (
            <li key={service.slug} className='flex items-center justify-between'>
              <div className="flex items-center justify-between gap-3 py-2 px-2 w-full">
                <div className="flex items-center gap-3">
                  <div className='text-laranja'>
                    <MdOutlineSquare size={12} />
                  </div>
                  <Link
                    to={`/${lang}/${routeMap.services[lang]}/${service.slug}/`}
                    className="text-sm flex justify-between hover:text-laranja transition-colors duration-200"
                    onClick={() => setIsSubmenuServicesOpen(false)}
                  >
                    {service.titulo}
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <DropdownServices currentServices={currentServices} setIsSubmenuServicesOpen={setIsSubmenuServicesOpen} />
    </>
  );
};

SubmenuServices.propTypes = {
  setIsSubmenuServicesOpen: PropTypes.func.isRequired,
};

export default SubmenuServices; 