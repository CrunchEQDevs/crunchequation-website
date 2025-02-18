import Navbar from '../components/Navbar/index.jsx';
import React, { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/index.jsx';
import { useTranslation } from 'react-i18next';
import { Video } from 'cloudinary-react';
import routeMap from '../utils/RouteMap/index.jsx';


const Careers = () => {
  const { t } = useTranslation()
  const benefits = Array(6).fill(`${t('benefits_marquee')}`);
  const lang = localStorage.getItem('language')

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className='bg-blackBg'>
      <Navbar />

      <div className="text-center relative overflow-hidden">
        <div className='h-52 md:h-full w-full relative after:absolute after:bottom-0 after:left-0 after:w-full after:block after:h-28 after:lg:h-64 after:bg-career-gradient'>
          <img
            src="https://crunchequation.com/devit/assets/sitecrunch/home/equipa_hori.webp"
            alt="We Are Crunch"
            className="h-full w-full object-cover bg-white"
          />
        </div>
        <div className="lineline  ">
          <h1 className="text-white">{t('weAre')}</h1>
          <span className="text-orange-500">{t('crunch')}</span>
        </div>
        <div className="text-center w-full pb-10">
          <h3 className="text-sm lg:text-2xl font-semibold text-white">{t('do_you_want')} <br /> <span className='text-3xl lg:text-5xl'> {t('work_with')}?</span></h3>
          <Link to={`/${lang}/${routeMap.application[lang]}/`}  className="text-laranja text-lg font-semibold mt-4 hover:underline flex justify-center">
            {t('submit_application')}
            <div className="text-white">
              <MdOutlineArrowOutward />
            </div>
          </Link>
        </div>

        <div className="flex flex-col justify-center md:hidden ">
          <Video
            className="rounded-lg shadow-lg w-full h-96 w-lg"
            cloudName="dfhywii5z"
            publicId="eurocrunch_b3p6cm"
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            alt=''
          />
          <p className="text-center text-xl font-bold text-white mt-2">
            Euro <span className='text-laranja'>Crunch</span> 2024
          </p>
        </div>


        <section className="bg-blackBg text-white py-16 md:flex hidden justify-center text-left items-center ml-10 ">
          <div className="container mx-auto flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-10">

            <div className="flex-1 space-y-5">
              <h1 className="text-4xl ">
                {t('fueled_by')} <span className=" font-bold">{t('innovationca')}</span>, {t('inspired_by')} <span className='font-bold'>{t('peaple')}</span>.
              </h1>
              <p className="text-lg text-gray-300">
                {t('digital_realm')}
              </p>
            </div>
            <div className="flex-1 flex justify-center items-center ">
              <div>
                <Video
                  className=" shadow-lg w-full h-96 w-lg bg-white py-6 px-3"
                  cloudName="dfhywii5z"
                  publicId="eurocrunch_b3p6cm"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls={false}
                  alt=''
                  
                />
                <p className="bg-white text-black text-base text-center font-bold pb-2">
                  {t('euro_crunch')}
                </p>
              </div>
            </div>
          </div>
        </section>


        <section className="bg-blackBg text-white py-16 md:flex hidden justify-center items-center mx-10">
          <div className="container mx-auto flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-10 ">

            <div className="flex-1">
              <img
                src="https://crunchequation.com/devit/assets/sitecrunch/careers/petra_miguel_janu_web.png"
                alt={t('team_at_crunch_equation')}
                className="rounded-lg shadow-lg w-full h-auto max-w-sm md:max-w-md"
              />
            </div>

            <div className="flex-1 space-y-5 mt-2">
              <h1 className="text-2xl text-left">
                {t('embracing_differences')}, <span className="font-bold">{t('fair_play')}</span>, <br /> {t('unity')} {t('at')} <span className="text-orange-500 font-bold">CrunchEquation</span>.
              </h1>
              <p className="text-lg text-justify text-gray-300 leading-6">
                {t('crunch_equation_description')}
              </p>
            </div>
          </div>
        </section>
        <div className="text-white text-center mx-auto p-6 md:hidden ">
          <h2 className="text-lg text-laranja text-left font-semibold mb-4">
            {t('fueled_by2')}
          </h2>
          <p className="text-left text-sm">
            {t('digital_realm')}
          </p>
        </div>

        <div className="md:hidden flex justify-center items-center flex-col after:bg-logoOpacity after:absolute after:block after:content-[''] after:w-full after:h-full after:top-0 after:bottom-0 after:bg-left after:bg-opacity-50 after:bg-contain after:bg-no-repeat pt-12 pb-10 relative overflow-hidden">
          <img className='rounded-sm w-[90%] h-full object-cover' src="https://crunchequation.com/devit/assets/sitecrunch/careers/petra_miguel_janu.png" alt="team" />
          <div className="text-white text-center mx-auto p-6">
            <h2 className="text-lg text-left font-semibold mb-4 text-laranja ">
              {t('embracing_differences')}
            </h2>
            <p className="text-left text-sm">
              {t('celebrate_individuality')}
            </p>
          </div>
        </div>

        <div className="marquee-container">
          <div className="teste">
            {benefits.map((benefit, index) => (
              <React.Fragment key={index}>
                <p>{benefit}</p>
                <img src="https://crunchequation.com/devit/assets/sitecrunch/home/MINICORANGE.png" alt="Benefits" className="pt-1 w-10" />
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className='bg-footer-gradient w-full h-full border-[0.1px] border-transparent '>
          <div className="bg-blackBg text-white p-8 text-left container mx-auto bg-logoOpacity bg-contain bg-no-repeat my-16 md:block hidden footer-gradient">

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">{t('faq_career_title_1')}</h2>
              <p className={`text-gray-400 ${document.dir === 'rtl' ? 'text-right' : ''}`}>{t('faq_career_answer_1')}</p>
              <div className="border-t-8 border-laranja max-w-[50%] mt-4"></div>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">{t('faq_career_title_2')}</h2>
              <p className={`text-gray-400 ${document.dir === 'rtl' ? 'text-right' : ''}`}>{t('faq_career_answer_2')}</p>
              <div className="border-t-8 border-laranja max-w-[60%] mt-4"></div>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">{t('faq_career_title_3')}</h2>
              <p className={`text-gray-400 ${document.dir === 'rtl' ? 'text-right' : ''}`}>{t('faq_career_answer_3')}</p>
              <div className="border-t-8 border-laranja max-w-[70%] mt-4"></div>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">{t('faq_career_title_4')}</h2>
              <p className={`text-gray-400 ${document.dir === 'rtl' ? 'text-right' : ''}`}>{t('faq_career_answer_4')}</p>
              <div className="border-t-8 border-laranja max-w-[90%] mt-4"></div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className=" text-white mt-10 bg-footer-gradient pb-32 md:hidden   ">

          <div className="max-w-xs md:max-w-2xl mx-auto">
            {[
              { question: `${t('faq_career_title_1')}`, answer: t('faq_career_answer_1') },
              { question: `${t('faq_career_title_2')}`, answer: t('faq_career_answer_2') },
              { question: `${t('faq_career_title_3')}`, answer: t('faq_career_answer_3') },
              { question: `${t('faq_career_title_4')}`, answer: t('faq_career_answer_4') }
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-600 py-4">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center text-left text-lg font-semibold focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <span>
                    {openFaq === index ? <MdKeyboardArrowUp size={35} /> : <MdKeyboardArrowDown size={35} />}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${openFaq === index ? 'max-h-40' : 'max-h-0'}`}
                >
                  <p className="mt-2 text-gray-400 text-left">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center w-full pt-10">
            <h3 className="text-sm font-semibold">{t('do_you_want')} <br /> <span className='text-3xl'> {t('work_with')}?</span></h3>
            <Link to={`/${lang}/${routeMap.application[lang]}/`}  className="text-laranja text-lg font-semibold mt-4 hover:underline flex justify-center">
              {t('submit_here')}
              <div className="text-white">
                <MdOutlineArrowOutward />
              </div>
            </Link>
          </div>
        </div>
      </div>


      <Footer />
    </div>
  );
}

export default Careers;
