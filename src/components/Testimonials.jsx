import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Testimonials = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  
  const testimonials = [
    {
      name: 'Fernando C.',
      position: t('team_leader_kyc'),
      image: 'https://crunchequation.com/devit/assets/sitecrunch/people/fernando.webp',
      testimonial: t('testimonial_fernando'),
    },
    {
      name: 'Rafaela M.',
      position: t('brand_manager'),
      image: 'https://crunchequation.com/devit/assets/sitecrunch/people/rafaela.webp',
      testimonial: t('testimonial_rafaela'),
    },
    {
      name: 'Robson R.',
      position: t('customer_service_agent_1'),
      image: 'https://crunchequation.com/devit/assets/sitecrunch/people/robson.webp',
      testimonial: t('testimonial_robson'),
    },
    {
      name: 'Wanessa B.',
      position: t('call_center'),
      image: 'https://crunchequation.com/devit/assets/sitecrunch/people/wanessa.webp',
      testimonial: t('testimonial_wanessa'),
    },
    {
      name: 'Gregorye D.',
      position: t('customer_service_agent_1'),
      image: 'https://crunchequation.com/devit/assets/sitecrunch/people/gregorye.webp',
      testimonial: t('testimonial_gregorye'),
    },
    {
      name: 'Iara G.',
      position: t('designer'),
      image: 'https://crunchequation.com/devit/assets/sitecrunch/people/iara.webp',
      testimonial: t('testimonial_iara'),
    },
    {
      name: 'Elizabeth P.',
      position: t('bi_analyst'),
      image: 'https://crunchequation.com/devit/assets/sitecrunch/people/elizabeth.webp',
      testimonial: t('testimonial_elizabeth'),
    },
    {
      name: 'Daniel G.',
      position: t('customer_service_agent_1'),
      image: 'https://crunchequation.com/devit/assets/sitecrunch/people/daniel.webp',
      testimonial: t('testimonial_daniel'),
    },
    {
      name: 'Regis S.',
      position: t('head_of_sales'),
      image: 'https://crunchequation.com/devit/assets/sitecrunch/people/regis.png',
      testimonial: t('testimonial_regis'),
    },

  ];

  return (
    <section className="bg-blackBg after:bg-logoOpacity after:absolute after:block after:content-[''] after:w-full after:h-full after:top-0 after:bottom-0 after:bg-left after:bg-opacity-50 after:bg-contain after:bg-no-repeat pt-12 pb-10 relative overflow-hidden" >
      <div className="container mx-auto px-2 relative z-10" data-aos="fade-up">
        <div className='pb-8 lg:pt-10 pt-0 space-y-4' >
          <div className='flex items-center justify-center lg:justify-start gap-2'>
            <h2 className='font-bold'>
              {t('our3')}
            </h2>
            <h2 className='font-bold lg:font-light'>
              {t('company')}
            </h2>
          </div>
          <h3 className="text-white text-md text-center lg:text-start leading-5 lg:text-3xl " >
            {t('what_does_crunch_mean1')} <span className='font-bold lg:text-laranja'>Crunch Equation </span>{t('what_does_crunch_mean2')} {t('get_insights')} <span className='font-bold lg:text-laranja'>{t('from-our-team')} </span>
          </h3>
        </div>

        <div className="relative lg:py-10">
          <Swiper
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={30}
            loop={true}
            navigation={true}
            autoplay={{
              delay: 12000,
             
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="px-4 w-full lg:py-10 items-center justify-center text-white flex flex-col lg:flex-row">
                  <div className="w-6/12 rounded-sm overflow-hidden lg:w-2/12 flex justify-center items-center mb-4 lg:mb-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full object-cover "
                    />
                  </div>
                  <div className="w-11/12 pt-3 lg:w-2/3 lg:pl-6 justify-center flex space-y-4 xl:h-52 flex-col">
                    <p className="text-center text-sm lg:text-xl font-light lg:text-left">“{testimonial.testimonial}”</p>
                    <div className="flex items-center gap-2 text-laranja lg:text-white text-[11px] md:text-base w-full justify-center lg:justify-end">
                      <p className="text-center lg:text-left">{testimonial.name}</p>
                      <p className="text-center lg:text-left">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
