import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import routeMap from '../../utils/RouteMap';

export default function OurServices() {

    const { t } = useTranslation();
    const [swiperRef, setSwiperRef] = useState(null);
    const lang = localStorage.getItem('language')


    const servicesList = [
        {
            id: 1,
            name: t('customer_support'),
            image: '/assets/services/cs_mobile.webp',
            link: `/${lang}/${routeMap.services[lang]}/customer-support`,
            alt: 'Customer Support'
        },
        {
            id: 2,
            name: t('brand_manager'),
            image: '/assets/services/brand_mobile.webp',
            link: `/${lang}/${routeMap.services[lang]}/brand-management`,
            alt: 'Brand Management'
        },
        {
            id: 3,
            name: t('design'),
            image: '/assets/services/design_mobile.webp',
            link: `/${lang}/${routeMap.services[lang]}/design`,
            alt: 'Design'
        },
        {
            id: 4,
            name: t('socialMedia'),
            image: '/assets/services/socialMedia_mobile.webp',
            link: `/${lang}/${routeMap.services[lang]}/social-media`,
            alt: 'Social Media'
        },
        {
            id: 5,
            name: ('it_support'),
            image: '/assets/services/it_mobile.webp',
            link: `/${lang}/${routeMap.services[lang]}/it-support`,
            alt: 'IT Support'
        },
        {
            id: 6,
            name: ('crm'),
            image: '/assets/services/crm_mobile.webp',
            link: `/${lang}/${routeMap.services[lang]}/crm`,
            alt: 'CRM'
        },
        {
            id: 7,
            name: ('risk_management'),
            image: '/assets/services/risk_mobile.png',
            link: `/${lang}/${routeMap.services[lang]}/risk-management`,
            alt: 'Risk Management'
        },
        {
            id: 8,
            name: ('affiliation'),
            image: '/assets/services/aff_mobile.webp',
            link: `/${lang}/${routeMap.services[lang]}/affiliation`,
            alt: 'Affiliation'
        },
        {
            id: 9,
            name: ('seo'),
            image: '/assets/services/seo_mobile.webp',
            link: `/${lang}/${routeMap.services[lang]}/seo`,
            alt: 'SEO'
        },
        {
            id: 10,
            name: ('payments'),
            image: '/assets/services/payments_mobile.png',
            link: `/${lang}/${routeMap.services[lang]}/payments`,
            alt: 'Payments'
        },
        {
            id: 11,
            name: ('cms'),
            image: '/assets/services/cms_mobile.webp',
            link: `/${lang}/${routeMap.services[lang]}/cms`,
            alt: 'CMS'
        },
        {
            id: 12,
            name: ('software_development'),
            image: '/assets/services/software_mobile.jpg',
            link: `/${lang}/${routeMap.services[lang]}/software-development`,
            alt: 'Software Development'
        },
        {
            id: 13,
            name: ('web_development'),
            image: '/assets/services/web_mobile.webp',
            link: `/${lang}/${routeMap.services[lang]}/web-develpment`,
            alt: 'Web Development'
        },
        {
            id: 14,
            name: ('kyc'),
            image: '/assets/services/kyc_mobile.webp',
            link: `/${lang}/${routeMap.services[lang]}/kyc`,
            alt: 'KYC'
        },
        {
            id: 15,
            name: ('vip'),
            image: '/assets/services/vip_mobile.webp',
            link: `/${lang}/${routeMap.services[lang]}/vip`,
            alt: 'VIP Management'
        },

    ]

    return (
        <section className='flex items-center justify-center'>
            <div className="mt-12 w-full container">
                <div className="flex flex-col gap-5" data-aos="fade-up">
                    <div className='w-full flex items-center justify-center lg:justify-start gap-1'>
                        <h2 className='font-bold'>{t('our2')}</h2>
                        <h2 className='font-bold lg:font-light'>{t('services')}</h2>
                    </div>
                    <div>
                        <p className="text-white  text-md text-center lg:text-start lg:text-3xl px-4 lg:px-0 leading-5">
                            {t('services2')}
                            <span> </span>
                            <span className='text-laranja font-bold'>{t('services3')}</span>
                        </p>
                    </div>
                </div>
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
                    {servicesList.map((service) => (
                        <SwiperSlide className='pb-8' key={service.id}>
                            <Link to={service.link} className="swiper-slide-content relative w-full h-auto rounded-lg overflow-hidden cursor-pointer">
                                <div className='w-full flex items-center justify-center'><img src={service.image} alt={service.alt} className="lg:w-11/12 w-10/12 object-cover rounded-lg" /></div>
                                <div className="overlay absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}