import { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import HeroService from "../../components/Hero/HeroService";
import CardsCS from "../../components/HorizontalCards/CardsCS";
import Footer from "../../components/Footer";
import SubPages from "./SubPages";
import { useTranslation } from "react-i18next";
import { servicesEN, servicesPT, servicesES, servicesFR, servicesDE, servicesIT } from "../../utils/ServicesInfo";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ServicesDesktop from "../../components/HorizontalCards/ServicesDesktop";
import routeMap from "../../utils/RouteMap";

export default function Services() {
  const { t, i18n } = useTranslation()
  const location = useLocation();
  
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
      default:
        return servicesEN;
    }
  };

  const currentServices = getCurrentServices();
  const isSubPage = currentServices.some(service => location.pathname.includes(service.slug));
  const desktopWidth = 767
  const [swiperRef, setSwiperRef] = useState(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > desktopWidth);
  const lang = localStorage.getItem('language')

  const updateMedia = () => {
    setIsDesktop(window.innerWidth > desktopWidth);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener('resize', updateMedia)
    return () => window.removeEventListener('resize', updateMedia)
  }, [location.pathname]);

  return (
    <div className="bg-pretoQuase100 h-dvh overflow-x-hidden">
      {!isSubPage && (
        <>
          <Navbar />
          <HeroService />
          {isDesktop ? (
            <ServicesDesktop />
          ) : (
            <div>
              <Swiper
                onSwiper={setSwiperRef}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                centeredSlides={false}
                spaceBetween={30}
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper mt-6"
              >
                {currentServices.map((service) => (
                  <SwiperSlide className='pb-8 px-4'>
                    <CardsCS
                      key={service.id}
                      titulo={service.titulo}
                      imagem={service.imagem}
                      descricao={service.descricao}
                      slug={service.slug}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="py-16 flex w-full items-center justify-center flex-col gap-10">
                <div className="text-center text-white lg:text-4xl text-xl">
                  <h1 className="capitalize font-semibold"> {t('mpReadyNextStep')}</h1>
                  <h4 className="lg:text-3xl font-thin md:mt-5"> {t('mpClickBelow')}</h4>
                </div>
                <div>
                  <Link to={`/${lang}/${routeMap.contact[lang]}`} className="flex items-center justify-center w-full">
                    <img src={'https://crunchequation.com/devit/assets/sitecrunch/contact/buttoncontact.png'} alt="contact" />
                  </Link>
                </div>
              </div>
            </div>
          )}
          <Footer />
        </>
      )}
      <Routes>
        {currentServices.map(service => (
          <Route key={service.slug} path={service.slug} element={<SubPages service={service} />} />
        ))}
      </Routes>
    </div>
  );
}
