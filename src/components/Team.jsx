import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import linkedinIcon from '/assets/home/MINIC.png';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Team = () => {
  const { t } = useTranslation();
  // URLs das imagens externas

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  const teamMembers = [
    { 
      name: 'Daniela Gomez', 
      image: 'https://crunchequation.com/devit/assets/sitecrunch/home/DANIELA.png', 
      hoverImage: 'https://crunchequation.com/devit/assets/sitecrunch/home/DANIELA_HOVER.png', 
      linkedin: 'https://www.linkedin.com/in/danielagomez19/', 
      role: t('finance')
    },
    { 
      name: 'Rodrigo Taveira', 
      image: 'https://crunchequation.com/devit/assets/sitecrunch/home/RODRIGO.png', 
      hoverImage: 'https://crunchequation.com/devit/assets/sitecrunch/home/RODRIGO_HOVER.png', 
      linkedin: 'https://www.linkedin.com/in/rodrigo-taveira-16bba8137/', 
      role: t('operations')
    },
    { 
      name: 'Vanessa Carvalho', 
      image: 'https://crunchequation.com/devit/assets/sitecrunch/home/VANESSA.png', 
      hoverImage: 'https://crunchequation.com/devit/assets/sitecrunch/home/VANESSA.png', 
      linkedin: 'https://www.linkedin.com/in/vanessa-carvalho-767078156/', 
      role: t('marketing')
    },
    { 
      name: 'Januário Ferreira', 
      image: 'https://crunchequation.com/devit/assets/sitecrunch/home/JANUARIO.png', 
      hoverImage: 'https://crunchequation.com/devit/assets/sitecrunch/home/JANUARIO_HOVER.png', 
      linkedin: 'https://www.linkedin.com/in/janu%C3%A1rio-ferreira-34894a196/', 
      role: t('operations')
    },
    { 
      name: 'Regis Souza', 
      image: 'https://crunchequation.com/devit/assets/sitecrunch/home/REGIS.png', 
      hoverImage: 'https://crunchequation.com/devit/assets/sitecrunch/home/REGIS_HOVER.png', 
      linkedin: 'https://www.linkedin.com/in/regis-souza-3a196182/', 
      role: t('sales')
    }
  ];
  

  return (
    <section className="bg-blackBg pb-8 pt-4 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10" data-aos="fade-up">
        <div className='flex flex-col space-y-3 pb-10' >
          <div className='flex items-center justify-center lg:justify-start  gap-1'>
            <h2 className='font-bold text-xl lg:text-2xl'>
              {t('meet')}
            </h2>
            <h2 className='font-bold lg:font-light text-xl lg:text-2xl'>
              {t('our_professionals')}
            </h2>
          </div>
          <h3 className="text-white font-semibold text-md text-center lg:text-start lg:text-3xl px-4 lg:px-0 leading-5">
            {t('dream_team')}
          </h3>
        </div>
        <div className=''>
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 2
              },
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            centeredSlides={false}
            spaceBetween={30}
            pagination={{
              type: 'fraction',
            }}
            navigation={false}
            modules={[Navigation]}
            className="mySwiper"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <div className="swiper-slide-content relative cursor-pointer">
                    <div className='w-full'>
                      <img
                        src={member.hoverImage}
                        alt={member.name}
                        className="w-full h-full object-contain transition-opacity duration-300 ease-in-out"
                      />
                    </div>
                    <div className="text-white text-center w-full mt-4 flex items-center justify-between">
                      <div className='flex flex-col items-start text-start'>
                        <p className="lg:text-lg text-sm font-bold">{member.name}</p>
                        <p className="text-gray-400 text-xs lg:text-base font-bold">{member.role}</p>
                      </div>
                      <img
                        src='https://crunchequation.com/devit/assets/sitecrunch/home/MINIC.png'
                        alt="LinkedIn Icon"
                        className="w-6 h-6 ml-2 transition-opacity duration-300 ease-in-out "
                      />
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

    </section>
  );
};

export default Team;
