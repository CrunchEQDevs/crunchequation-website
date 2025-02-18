import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TbChevronDown } from "react-icons/tb";
import OurServices from './OurServices';

const AboutCrunch = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section
      className="bg-blackBg after:lg:absolute after:lg:w-full  after:lg:h-full after:lg:top-0 after:lg:left-0 after:lg:bg-logoOpacity after:lg:bg-no-repeat after:2xl:bg-leftCustom pb-4 relative overflow-hidden lg:py-10"
    >
      <div className="container mx-auto px-4 relative z-10 ">
        <div className={`py-8 w-full flex items-center ${isRTL ? 'lg:justify-end' : 'lg:justify-start'} justify-center gap-1`}>
          <h2 className='font-bold'>
            {t('about')}
          </h2>
          <h2 className='lg:font-light font-bold'>{t('crunch')}</h2>
        </div>
        <div className={`overflow-hidden lg:overflow-visible flex flex-col lg:w-3/6 space-y-3 relative ${isRTL ? 'lg:ml-auto' : ''}`}
          data-aos={isRTL ? "fade-right" : "fade-left"}
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          <div className='overflow-hidden lg:overflow-visible h-72 lg:h-auto'>
            <img className='rounded-md w-full h-full object-cover' src="https://crunchequation.com/devit/assets/sitecrunch/crunchteam.webp" alt="CrunchTeam" />
          </div>
          <div className={`lg:absolute space-y-3 relative after:lg:top-0 after:lg:left-0 after:lg:w-full after:lg:h-full after:lg:blur-sm after:lg:-z-10 after:lg:bg-aboutPopUp after:lg:absolute ${
            isRTL ? 'lg:right-1/2 lg:-translate-x-1/2' : 'lg:left-1/2 lg:translate-x-1/2'
          } lg:-translate-y-1/2 lg:px-10 lg:py-10 lg:top-1/2 lg:w-full`}>
            <div className={`text-white text-sm lg:text-lg 2xl:text-xl leading-5 space-y-2 ${isRTL ? 'text-right' : ''}`}>
              <p id='exposed'>
                {t('welcome')} <span className="font-bold text-laranja">{t('igaming')}</span>, {t('welcome2')}
              </p>
              {isExpanded && (
                <>
                  <p>{t('young_company')}</p>
                  <p>{t('mission')}</p>
                  <p>{t('join')}</p>
                </>
              )}
            </div>
            <button
              onClick={toggleExpand}
              className={`text-laranja text-sm lg:text-lg 2xl:text-xl hover:text-white font-semibold flex ${isRTL ? 'justify-end' : 'justify-start'} items-center`}
            >
              {isExpanded ? (
                <div className="text-laranja flex items-center">
                  {isRTL && <div className='rotate-180 ml-1'><TbChevronDown rotate={180} color='#fff' /></div>}
                  {t('see_less')}
                  {!isRTL && <div className='rotate-180 ml-1'><TbChevronDown rotate={180} color='#fff' /></div>}
                </div>
              ) : (
                <div className="text-laranja flex items-center">
                  {isRTL && <div className='ml-1'><TbChevronDown color='#fff' /></div>}
                  {t('see_more')}
                  {!isRTL && <div className='ml-1'><TbChevronDown color='#fff' /></div>}
                </div>
              )}
            </button>
          </div>
        </div>

        <div className={`flex text-sm lg:text-2xl 2xl:text-3xl font-extrabold uppercase lg:capitalize text-white font-sans pt-14 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div className="text-center w-full">
            <span className="block text-3xl lg:text-5xl 2xl:text-6xl">
              <CountUp end={2} duration={5} />
            </span>
            <div className={`flex flex-col lg:flex-row lg:items-center lg:justify-center text-xs lg:text-2xl 2xl:text-3xl lg:gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <span className="leading-4 lg:leading-normal">{t('years_of_existence')}</span>
              <span className="leading-4">{t('years_of_existence2')}</span>
            </div>
          </div>
          <div className="text-center border-r-2 border-l-2 border-cinza w-full">
            <div className="flex flex-col items-center">
              <span className={`text-3xl lg:text-5xl 2xl:text-6xl text-white flex gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <p className="text-laranja">+</p>
                <CountUp end={50} duration={10} delay={1} />
              </span>
              <span>{t('clients')}</span>
            </div>
          </div>
          <div className="text-center w-full">
            <div className="flex flex-col items-center justify-center">
              <span className={`text-3xl lg:text-5xl 2xl:text-6xl text-white flex gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <p className="text-laranja">+</p>
                <CountUp end={100} duration={10} delay={1} />
              </span>
              <span>{t('employees')}</span>
            </div>
          </div>
        </div>
        <div className='lg:pt-20'>
          <OurServices />
        </div>

      </div>

    </section>
  );
};

export default AboutCrunch;
