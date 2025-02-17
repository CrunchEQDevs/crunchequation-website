import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Footer from '../components/Footer/index.jsx';
import Navbar from '../components/Navbar/index.jsx';
import { MdArrowBack } from 'react-icons/md';
import { FiMapPin, FiFileText, FiPaperclip, FiX } from 'react-icons/fi';
import { FaRegCircleCheck } from "react-icons/fa6";
import { CiMonitor } from 'react-icons/ci';
import { IoMdAlarm } from 'react-icons/io';
import { MdOutlineArrowOutward } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import routeMap from '../utils/RouteMap/index.jsx';


const JobDetails = () => {
  const { t } = useTranslation();
  const { slug } = useParams();
  const lang = localStorage.getItem('language')  

  const [activeTab, setActiveTab] = useState('overview');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    field: '',
    resume: '',
    socials: '',
    speakEnglish: '',
    aboutYou: '',
    jobTitle: '',
  });

  const getJobSlugByLanguague = () => {

    const slugs = {
      crmSpecialist: 'crm-manager',
      humanResourcesSpecialist: 'human-resources-specialist',
      seoSpecialist: 'seo-specialist',
      financeManager: 'finance-manager',
      financeAssistant: 'finance-assistant',
      affiliateManager: 'affiliate-manager',
      vipSpecialist: 'vip-specialist',
      salesExecutive: 'sales-executive',
      digitalMarketingManager: 'digital-marketing-manager',
      casinoSpecialist: 'casino-specialist',
      SiteOwner: 'site-owner',
    };

    return slugs
  }
 const slugs = getJobSlugByLanguague()

 const positionsData = [
  {
    id: 1, 
    slug: slugs.crmSpecialist,
    title: t('CRMSpecialist'),
    location: `${t('onSite')} Vila Nova de Gaia`,
    type: t('Full Time'),
    contract: t('OpenEnded'),
    department: t('CRM'),
    description: t('CRMDescription'),
    expectations: [
      t('CRMExpectation_1'),
      t('CRMExpectation_2'),
      t('CRMExpectation_3'),
      t('CRMExpectation_4'),
     
    ],
    responsibilities: [
      t('CRMResponsibility_1'),
      t('CRMResponsibility_2'),
      t('CRMResponsibility_3'),
      t('CRMResponsibility_4'),
      t('CRMResponsibility_5'),
 
    ],
    benefits: [
      t('CRMBenefit_1'),
      t('CRMBenefit_2'),
      t('CRMBenefit_3'),
      t('CRMBenefit_4'),
    ],
    applicationInstructions: t('ApplicationInstruction'),
  },

  {
    id: 2,
    slug: slugs.humanResourcesSpecialist,
    title: t('HumanResourcesSpecialist'),
    location: `${t('onSite')} Vila Nova de Gaia`,
    type: t('Full Time'),
    contract: t('OpenEnded'),
    department: t('Human Resources'),
    description: t('HumanResourcesSpecialistDescription'),
    expectations: [
      t('HumanResourcesSpecialistExpectation_1'),
      t('HumanResourcesSpecialistExpectation_2'),
      t('HumanResourcesSpecialistExpectation_3'),
      t('HumanResourcesSpecialistExpectation_4'),
      t('HumanResourcesSpecialistExpectation_5'),
      t('HumanResourcesSpecialistExpectation_6'),
      t('HumanResourcesSpecialistExpectation_7')
    ],
    responsibilities: [
      t('HumanResourcesSpecialistResponsibility_1'),
      t('HumanResourcesSpecialistResponsibility_2'),
      t('HumanResourcesSpecialistResponsibility_3'),
      t('HumanResourcesSpecialistResponsibility_4'),
      t('HumanResourcesSpecialistResponsibility_5')
    ],
    benefits: [
      t('HumanResourcesSpecialistBenefit_1'),
      t('HumanResourcesSpecialistBenefit_2'),
      t('HumanResourcesSpecialistBenefit_3'),
      t('HumanResourcesSpecialistBenefit_4')
    ],
    applicationInstructions: t('ApplicationInstruction'),
  },

  {
    id: 3,
    slug: slugs.seoSpecialist,
    title: t('SEOSpecialist'),
    location: `${t('onSite')} Vila Nova de Gaia`,
    type: t('Full Time'),
    contract: t('OpenEnded'),
    department: t('Marketing'),
    description: t('SEOSpecialistDescription'),
    expectations: [
      t('SEOSpecialistExpectation_1'),
      t('SEOSpecialistExpectation_2'),
      t('SEOSpecialistExpectation_3'),
      t('SEOSpecialistExpectation_4'),
      t('SEOSpecialistExpectation_5'),
      t('SEOSpecialistExpectation_6'),
      t('SEOSpecialistExpectation_7')
    ],
    responsibilities: [
      t('SEOSpecialistResponsibility_1'),
      t('SEOSpecialistResponsibility_2'),
      t('SEOSpecialistResponsibility_3'),
      t('SEOSpecialistResponsibility_4'),
      t('SEOSpecialistResponsibility_5'),
      t('SEOSpecialistResponsibility_6'),
      t('SEOSpecialistResponsibility_7'),
      t('SEOSpecialistResponsibility_8'),
      t('SEOSpecialistResponsibility_9')
    ],
    benefits: [
      t('SEOSpecialistBenefit_1'),
      t('SEOSpecialistBenefit_2'),
      t('SEOSpecialistBenefit_3'),
      t('SEOSpecialistBenefit_4')
    ],
    applicationInstructions: t('ApplicationInstruction'),
  },

  {
    id: 4,
    slug: slugs.financeManager,
    title: t('FinanceManager'),
    location: `${t('onSite')} Vila Nova de Gaia`,
    type: t('Full Time'),
    contract: t('OpenEnded'),
    department: t('Finance'),
    description: t('FinanceManagerDescription'),
    expectations: [
      t('FinanceManagerExpectation_1'),
      t('FinanceManagerExpectation_2'),
      t('FinanceManagerExpectation_3'),
      t('FinanceManagerExpectation_4'),
      t('FinanceManagerExpectation_5'),
      t('FinanceManagerExpectation_6'),
      t('FinanceManagerExpectation_7')
    ],
    responsibilities: [
      t('FinanceManagerResponsibility_1'),
      t('FinanceManagerResponsibility_2'),
      t('FinanceManagerResponsibility_3'),
      t('FinanceManagerResponsibility_4'),
      t('FinanceManagerResponsibility_5'),
      t('FinanceManagerResponsibility_6'),
      t('FinanceManagerResponsibility_7'),
      t('FinanceManagerResponsibility_8')
    ],
    benefits: [
      t('FinanceManagerBenefit_1'),
      t('FinanceManagerBenefit_2'),
      t('FinanceManagerBenefit_3'),
      t('FinanceManagerBenefit_4')
    ],
    applicationInstructions: t('ApplicationInstruction'),
  },

  {
    id: 5,
    slug: slugs.financeAssistant,
    title: t('FinanceAssistant'),
    location: `${t('onSite')} Vila Nova de Gaia`,
    type: t('Full Time'),
    contract: t('OpenEnded'),
    department: t('Finance'),
    description: t('FinanceAssistantDescription'),
    expectations: [
      t('FinanceAssistantExpectation_1'),
      t('FinanceAssistantExpectation_2'),
      t('FinanceAssistantExpectation_3'),
      t('FinanceAssistantExpectation_4'),
      t('FinanceAssistantExpectation_5'),
      t('FinanceAssistantExpectation_6')
    ],
    responsibilities: [
      t('FinanceAssistantResponsibility_1'),
      t('FinanceAssistantResponsibility_2'),
      t('FinanceAssistantResponsibility_3'),
      t('FinanceAssistantResponsibility_4'),
      t('FinanceAssistantResponsibility_5'),
      t('FinanceAssistantResponsibility_6'),
      t('FinanceAssistantResponsibility_7'),
      t('FinanceAssistantResponsibility_8')
    ],
    benefits: [
      t('FinanceAssistantBenefit_1'),
      t('FinanceAssistantBenefit_2'),
      t('FinanceAssistantBenefit_3'),
      t('FinanceAssistantBenefit_4')
    ],
    applicationInstructions: t('ApplicationInstruction'),
  },

  {
    id: 6,
    slug: slugs.affiliateManager,
    title: t('AffiliateManager'),
    location: `${t('onSite')} Vila Nova de Gaia`,
    type: t('Full Time'),
    contract: t('OpenEnded'),
    department: t('Affiliatee'),
    description: t('AFManagerDescription'),
    expectations: [
      t('AFManagerExpectation_1'),
      t('AFManagerExpectation_2'),
      t('AFManagerExpectation_3'),
      t('AFManagerExpectation_4'),


    ],
    responsibilities: [
      t('AFManagerResponsibility_1'),
      t('AFManagerResponsibility_2'),
      t('AFManagerResponsibility_3'),
      t('AFManagerResponsibility_4'),
      t('AFManagerResponsibility_5'),
  
    ],
    benefits: [
      t('AFManagerBenefit_1'),
      t('AFManagerBenefit_2'),
      t('AFManagerBenefit_3'),
      t('AFManagerBenefit_4'),
    ],
    applicationInstructions: t('ApplicationInstruction'),
  },

  {
    id: 7,
    slug: slugs.vipSpecialist,
    title: t('VIPSpecialist'),
    location: `${t('onSite')} Vila Nova de Gaia`,
    type: t('Full Time'),
    contract: t('OpenEnded'),
    department: t('VIPS'),
    description: t('VIPSpecialistDescription'),
    expectations: [
      t('VIPExpectation_1'),
      t('VIPExpectation_2'),
      t('VIPExpectation_3'),
      t('VIPExpectation_4'),
      t('VIPExpectation_5'),
    ],
    responsibilities: [
      t('VIPResponsibility_1'),
      t('VIPResponsibility_2'),
      t('VIPResponsibility_3'),
      t('VIPResponsibility_4'),
      t('VIPResponsibility_5'),
      t('VIPResponsibility_6'),
      t('VIPResponsibility_7'),
    ],
    benefits: [
      t('VIPBenefit_1'),
      t('VIPBenefit_2'),
      t('VIPBenefit_3'),
      t('VIPBenefit_4'),
  ],
  applicationInstructions: t('VIPApplicationInstruction'),
  },

  {
    id: 8,
    slug: slugs.salesExecutive,
    title: t('SalesExecutive'),
    location: `${t('onSite')} Vila Nova de Gaia`,
    type: t('Full Time'),
    contract: t('OpenEnded'),
    department: t('Sales'),
    description: t('SalesExecutiveDescription'),
    expectations: [
      t('SalesExecutiveExpectation_1'),
      t('SalesExecutiveExpectation_2'),
      t('SalesExecutiveExpectation_3'),
      t('SalesExecutiveExpectation_4'),
      t('SalesExecutiveExpectation_5'),
      t('SalesExecutiveExpectation_6'),
      t('SalesExecutiveExpectation_7')
    ],
    responsibilities: [
      t('SalesExecutiveResponsibility_1'),
      t('SalesExecutiveResponsibility_2'),
      t('SalesExecutiveResponsibility_3'),
      t('SalesExecutiveResponsibility_4'),
      t('SalesExecutiveResponsibility_5'),
      t('SalesExecutiveResponsibility_6'),
      t('SalesExecutiveResponsibility_7')
    ],
    benefits: [
      t('SalesExecutiveBenefit_1'),
      t('SalesExecutiveBenefit_2'),
      t('SalesExecutiveBenefit_3'),
      t('SalesExecutiveBenefit_4')
    ],
    applicationInstructions: t('ApplicationInstruction'),
  },

  {
    id: 9,
    slug: slugs.digitalMarketingManager,
    title: t('DigitalMarketingManager'),
    location: `${t('onSite')} Vila Nova de Gaia`,
    type: t('Full Time'),
    contract: t('OpenEnded'),
    department: t('Marketing'),
    description: t('DigitalMarketingManagerDescription'),
    expectations: [
      t('DigitalMarketingManagerExpectation_1'),
      t('DigitalMarketingManagerExpectation_2'),
      t('DigitalMarketingManagerExpectation_3'),
      t('DigitalMarketingManagerExpectation_4'),
      t('DigitalMarketingManagerExpectation_5'),
      t('DigitalMarketingManagerExpectation_6'),
      t('DigitalMarketingManagerExpectation_7'),
      t('DigitalMarketingManagerExpectation_8'),
      t('DigitalMarketingManagerExpectation_9')
    ],
    responsibilities: [
      t('DigitalMarketingManagerResponsibility_1'),
      t('DigitalMarketingManagerResponsibility_2'),
      t('DigitalMarketingManagerResponsibility_3'),
      t('DigitalMarketingManagerResponsibility_4'),
      t('DigitalMarketingManagerResponsibility_5'),
      t('DigitalMarketingManagerResponsibility_6'),
      t('DigitalMarketingManagerResponsibility_7'),
      t('DigitalMarketingManagerResponsibility_8'),
      t('DigitalMarketingManagerResponsibility_9')
    ],
    benefits: [
      t('DigitalMarketingManagerBenefit_1'),
      t('DigitalMarketingManagerBenefit_2'),
      t('DigitalMarketingManagerBenefit_3'),
      t('DigitalMarketingManagerBenefit_4')
    ],
    applicationInstructions: t('ApplicationInstruction'),
  },

  {
    id: 10,
    slug: slugs.casinoSpecialist,
    title: t('CasinoSpecialist'),
    location: `${t('onSite')} Vila Nova de Gaia`,
    type: t('Full Time'),
    contract: t('OpenEnded'),
    department: t('CasinoManagement'),
    description: t('CasinoSpecialistDescription'),
    expectations: [
      t('CasinoSpecialistExpectation_1'),
      t('CasinoSpecialistExpectation_2'),
      t('CasinoSpecialistExpectation_3'),
      t('CasinoSpecialistExpectation_4'),
      t('CasinoSpecialistExpectation_5'),
      t('CasinoSpecialistExpectation_6'),
      t('CasinoSpecialistExpectation_7')
    ],
    responsibilities: [
      t('CasinoSpecialistResponsibility_1'),
      t('CasinoSpecialistResponsibility_2'),
      t('CasinoSpecialistResponsibility_3'),
      t('CasinoSpecialistResponsibility_4'),
      t('CasinoSpecialistResponsibility_5'),
      t('CasinoSpecialistResponsibility_6')
    ],
    benefits: [
      t('CasinoSpecialistBenefit_1'),
      t('CasinoSpecialistBenefit_2'),
      t('CasinoSpecialistBenefit_3'),
      t('CasinoSpecialistBenefit_4')
    ],
    applicationInstructions: t('ApplicationInstruction'),
  },

  {
    id: 10,
    slug: slugs.SiteOwner,
    title: t('SiteOwner'),
    location: `${t('onSite')} Vila Nova de Gaia`,
    type: t('Full Time'),
    contract: t('OpenEnded'),
    department: t('BrandManagerr'),
    description: t('SiteOwnerDescription'),
    expectations: [
      t('SiteOwnerExpectation_1'),
      t('SiteOwnerExpectation_2'),

      
    ],
    responsibilities: [
      t('SiteOwnerResponsibility_1'),
      t('SiteOwnerResponsibility_2'),
      t('SiteOwnerResponsibility_3'),
      t('SiteOwnerResponsibility_4'),


    ],
    benefits: [
      t('SiteOwnerBenefit_1'),
      t('SiteOwnerBenefit_2'),
      t('SiteOwnerBenefit_3'),
      t('SiteOwnerBenefit_4')
    ],
    applicationInstructions: t('ApplicationInstruction'),
},

];

  const [uploading, setUploading] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [resumeFileName, setResumeFileName] = useState('');
  const job = positionsData.find((job) => job.slug === slug);

  if (!job) {
    return <p className="text-white">{t('jobNotFound')}</p>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value, jobTitle: job.title });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, resume: file });
    setResumeFileName(file.name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificando se todos os campos obrigatórios estão preenchidos
    if (!formData.name || !formData.email || !formData.field || !formData.resume || !formData.socials || !formData.speakEnglish || !formData.aboutYou) {
      alert(t('allFieldsRequired')); // Exibe mensagem de alerta caso algum campo esteja vazio
      return;
    }

    setUploading(true);

    const apiUrl = 'https://api.sheetmonkey.io/form/nxTLMqKC8PjbLpJ9fxS6aH';
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('field', formData.field);
    formDataToSend.append('resume', formData.resume);
    formDataToSend.append('socials', formData.socials);
    formDataToSend.append('speakEnglish', formData.speakEnglish);
    formDataToSend.append('aboutYou', formData.aboutYou);
    formDataToSend.append('jobTitle', formData.jobTitle);

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setUploading(false);
        setIsPopupOpen(true);
        setFormData({
          name: '',
          email: '',
          field: '',
          resume: '',
          socials: '',
          speakEnglish: '',
          aboutYou: '',
          jobTitle: '',
        });
        setResumeFileName('');
      } else {
        alert(t('submissionError'));
      }
    } catch (error) {
      alert(t('submissionError'));
      console.error('Error:', error);
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <Navbar />

      <div className="relative bg-careers-bg bg-cover opacity-90 flex justify-center flex-col py-5 md:py-32 items-center text-white">
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
        <Link to={`/${lang}/${routeMap.application[lang]}/`}  className="absolute top-1 left-5 flex items-center text-orange-500 hover:text-orange-700 z-10">
          <MdArrowBack className="mr-2" size={24} />
        </Link>
        <div className="relative z-10 flex justify-center flex-col items-center h-16">
          <h1 className="md:text-5xl text-xl font-bold uppercase">{job.title}</h1>
        </div>
      </div>

      <div className="md:px-28 px-6 pt-6 bg-footer-gradient min-h-screen text-white pb-28 ">
       {/* <div className=" ml-4">
      <h1 className="text-2xl font-bold md:text-left  text-center">{job.title}</h1>
      </div> */}
      <div className='md:flex md:justify-center gap-20  '> 

        <div className="flex flex-col md:justify-start justify-center items-left lg:mr-10 mt-5 lg:mt-28 ">
          <div className="flex flex-col items-center w-full">
            <div className="mb-2 flex items-center">
              <FiMapPin className="text-orange-500 mr-2" />
              <div className="flex flex-col w-full">
                <strong className="text-white">{t('location')}</strong>
                <div className="bg-laranja h-[2px] w-[200px]"></div>
                {job.location}
              </div>
            </div>
            <div className="mb-2 flex items-center">
              <IoMdAlarm className="text-orange-500 mr-2" />
              <div className="flex flex-col w-full">
                <strong className="text-white">{t('jobType')}</strong>
                <div className="bg-laranja h-[2px] w-[200px]"></div>
                {job.type}
              </div>
            </div>
            <div className="mb-2 flex items-center">
              <FiFileText className="text-orange-500 mr-2" />
              <div className="flex flex-col w-full">
                <strong className="text-white">{t('contract')}</strong>
                <div className="bg-laranja h-[2px] w-[200px]"></div>
                {job.contract}
              </div>
            </div>
            <div className="mb-2 flex items-center">
              <CiMonitor className="text-orange-500 mr-2" />
              <div className="flex flex-col w-full">
                <strong className="text-white">{t('department')}</strong>
                <div className="bg-laranja h-[2px] w-[200px]"></div>
                {job.department}
              </div>
            </div>
          </div>
        </div>

        <div className='w-full'> 
        <div className="flex my-6 justify-evenly   ">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 font-semibold ${activeTab === 'overview' ? 'border-b-2 border-orange-500 text-orange-500' : 'text-gray-400'}`}
          >
            {t('overview')}
          </button>
          <button
            onClick={() => setActiveTab('application')}
            className={`px-4 py-2 font-semibold ${activeTab === 'application' ? 'border-b-2 border-orange-500 text-orange-500' : 'text-gray-400'}`}
          >
            {t('applicationTab')}
          </button>
        </div>

        {activeTab === 'overview' && (
  <div className=''>
    <div className="mb-6">
      <h2 className="text-2xl md:text-left font-semibold mb-2">{t('jobOverview')}</h2>
      <p className='lg:text-base text-sm '>{job.description}</p>
    </div>

    {job.expectations && (
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-orange-500 mb-2">{t('responsibilities')}</h3>
        <ul className="list-disc list-inside">
          {job.expectations.map((expectation, index) => (
            <li className='lg:text-base text-sm lg:pb-0 pb-1' key={index}>{expectation}</li>
          ))}
        </ul>
      </div>
    )}

    {job.responsibilities && (
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-orange-500 mb-2">{t('expectations')}</h3>
        <ul className="list-disc list-inside">
          {job.responsibilities.map((responsibility, index) => (
            <li className='lg:text-base text-sm lg:pb-0 pb-1' key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>
    )}

    {job.benefits && (
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-orange-500 mb-2">{t('benefits')}</h3>
        <ul className="list-disc list-inside">
          {job.benefits.map((benefit, index) => (
            <li className='lg:text-base text-sm lg:pb-0 pb-1' key={index}>{benefit}</li>
          ))}
        </ul>
      </div>
    )}

    {/* Adicionando as Instruções de Aplicação */}
    {job.applicationInstructions && (
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-orange-500 mb-2">{t('applicationInstructions')}</h3>
        <p className='lg:text-base text-sm'>{job.applicationInstructions}</p>
      </div>
    )}

    <div className="mt-10 text-center flex justify-center">
      <p
        className="text-lg font-bold text-orange-500 cursor-pointer hover:text-orange-700 transition-colors duration-300"
        onClick={() => setActiveTab('application')}
      >
        {t('applyToJob')}
      </p>
      <div className="text-laranja ml-2">
        <MdOutlineArrowOutward />
      </div>
    </div>
  </div>
)}

{activeTab === 'application' && (
          <div className='md:flex md:flex-col md:justify-center md:w-full  '>
            <form className="grid gap-4 md:mx-[5%] bg-pretoCinzento p-7 rounded-[3px] " onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-light mb-1 ">{t('nameLabel')}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="  w-full p-2 bg-pretoCinzento border border-orange-500 rounded"
                  placeholder={t('namePlaceholder')}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-light mb-1">{t('emailLabel')}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 bg-pretoCinzento border border-orange-500 rounded"
                  placeholder={t('emailPlaceholder')}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-light mb-1">{t('fieldLabel')}</label>
                <input
                  type="text"
                  name="field"
                  value={formData.field}
                  onChange={handleChange}
                  className="w-full py-4 pl-2 bg-pretoCinzento border border-orange-500 rounded"
                  placeholder={t('fieldPlaceholder')}
                  required
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-light mb-1">{t('resumeLabel')}</label>
                <input
                  type="file"
                  name="resume"
                  accept=".pdf"
                  onChange={handleFileChange}
                  id="resumeUpload"
                  className="hidden"
                />
                <label
                  htmlFor="resumeUpload"
                  className="w-full h-28 bg-pretoCinzento border border-dotted border-orange-500 rounded flex items-center justify-center cursor-pointer space-x-4"
                >
                  <div className="bg-custom-gradient text-xs text-white py-2 px-4 rounded flex items-center">
                    <FiPaperclip className="mr-2" size={20} />
                    <span>{t('uploadFile')}</span>
                  </div>
                  <span className="text-white text-xs">{t('dragAndDrop')}</span>
                </label>
                {resumeFileName && (
                  <p className="text-sm text-white mt-2">{t('fileUploaded')} {resumeFileName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-light mb-1">{t('socialsLabel')}</label>
                <textarea
                  type="text"
                  name="socials"
                  value={formData.socials}
                  onChange={handleChange}
                  className="w-full p-2 bg-pretoCinzento border border-orange-500 rounded"
                  placeholder={t('socialsPlaceholder')}
                  rows="3"
                />
              </div>

              <div>
                <label className="block text-sm font-light mb-1">{t('speakEnglishLabel')}</label>
                <div className="flex space-x-4">
                  <button
                    type="button"
                    className={`px-6 py-2 rounded ${formData.speakEnglish === 'Yes' ? 'bg-orange-500 text-white' : 'bg-pretoCinzento border border-orange-500 text-orange-500'}`}
                    onClick={() => setFormData({ ...formData, speakEnglish: 'Yes' })}
                  >
                    {t('yes')}
                  </button>
                  <button
                    type="button"
                    className={`px-6 py-2 rounded ${formData.speakEnglish === 'No' ? 'bg-orange-500 text-white' : 'bg-pretoCinzento border border-orange-500 text-orange-500'}`}
                    onClick={() => setFormData({ ...formData, speakEnglish: 'No' })}
                  >
                    {t('no')}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-light mb-1">{t('aboutYouLabel')}</label>
                <textarea
                  name="aboutYou"
                  value={formData.aboutYou}
                  onChange={handleChange}
                  className="w-full p-2 bg-pretoCinzento border border-orange-500 rounded"
                  placeholder={t('aboutYouPlaceholder')}
                  rows="4"
                />
              </div>
              <div className='flex justify-center items-center'>
              <button type="submit" className="bg-custom-gradient text-white w-2/3  px-4 py-2 rounded" disabled={uploading}>
                {uploading ? t('uploading') : t('submitApplication')}
              </button>
              </div>
            </form>
          </div>
        )}
          </div>  
          
        </div>  
      

        {/* Modal de Sucesso */}
        {isPopupOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="w-[340px] h-[242px] md:w-[360px] md:h-[262px] bg-custom-gradient p-8 rounded-md relative max-w-sm text-center text-white">
              <button onClick={closePopup} className="absolute top-4 right-4 text-white">
                <FiX size={24} />
              </button>
              <FaRegCircleCheck size={70} className="mx-auto mb-4" />
              <h2 className="text-xl text-pretoQuase100 text-center font-bold mb-2">{t('sentSuccessfully')}</h2>
              <p className="text-[13px] pb-5">
                {t('applicationSentMessage')}<br /> {job.title}.
              </p>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default JobDetails;
