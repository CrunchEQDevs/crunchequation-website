import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer/index.jsx';
import Navbar from '../components/Navbar/index.jsx';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FiPaperclip, FiX } from 'react-icons/fi';
import { FaRegCircleCheck } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';
import routeMap from '../utils/RouteMap/index.jsx';

const Application = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const lang = localStorage.getItem('language') || 'en';
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedDept, setExpandedDept] = useState(null); // Estado para controlar a expansão
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    field: '',
    resume: '',
    applicationType: 'Open Application',
  });

  useEffect(() => {
    const pathParts = location.pathname.split('/');
    if (pathParts.length >= 2) {
      pathParts[1] = lang;
      
      if (pathParts[2] === routeMap.application[pathParts[1]]) {
        pathParts[2] = routeMap.application[lang];
      }

      const newPath = pathParts.join('/');
      
      if (newPath !== location.pathname) {
        navigate(newPath);
      }
    }
  }, [lang, location.pathname, navigate]);

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
    return slugs;
  };

  const slugs = getJobSlugByLanguague();

  const positionsData = [

    {
      department: t('CustomerRelationshipManagement'),
      jobs: [
        { id: 1, slug: slugs.crmSpecialist, title: t('CRMSpecialist'), type: 'Full Time', experience: t('CRMSpecialistExperience') },
      ],
    },
    {
      department: t('Human Resources'),
      jobs: [
        { id: 2, slug: slugs.humanResourcesSpecialist, title: t('HumanResourcesSpecialist'), type: 'Full Time', experience: t('HumanResourcesSpecialistExperience') },
      ],
    },
    {
      department: t('SEO'),
      jobs: [
        { id: 3, slug: slugs.seoSpecialist, title: t('SEOSpecialist'), type: 'Full Time', experience: t('SEOSpecialistExperience') },
      ],
    },
    {
      department: t('Finance'),
      jobs: [
        { id: 4, slug: slugs.financeManager, title: t('FinanceManager'), type: 'Full Time', experience: t('FinanceManagerExperience') },
        { id: 5, slug: slugs.financeAssistant, title: t('FinanceAssistant'), type: 'Full Time', experience: t('FinanceAssistantExperience') },
      ],
    },
    {
      department: t('OfficeManagement'),
      jobs: [
        { id: 8, slug: slugs.salesExecutive, title: t('SalesExecutive'), type: 'Full Time', experience: t('SalesExecutiveExperience') },
      ],
    },
    {
      department: t('Marketing'),
      jobs: [
        
        { id: 9, slug: slugs.digitalMarketingManager, title: t('DigitalMarketingManager'), type: 'Full Time', experience: t('DigitalMarketingManagerExperience') },
      ],
    },
    {
      department: t('CasinoManagement'),
      jobs: [
        { id: 10, slug: slugs.casinoSpecialist, title: t('CasinoSpecialist'), type: 'Full Time', experience: t('CasinoSpecialistExperience') },
      ],
    },
    {
      department: t('BrandManagement'),
      jobs: [
        { id: 11, slug: slugs.SiteOwner, title: t('SiteOwner'), type: 'Full Time', experience: t('SiteOwnerExperience') },
      ],
    },
    {
      department: t('Affiliatee'),
      jobs: [
        { id: 6, slug: slugs.affiliateManager, title: t('AffiliateManager'), type: 'Full Time', experience: t('AffiliateManagerExperience') },
      ],
    },
    {
      department: t('VIPS'),
      jobs: [
        { id: 7, slug: slugs.vipSpecialist, title: t('VIPSpecialist'), type: 'Full Time', experience: t('VIPSpecialistExperience') },
      ],
    },
  ];

  const [resumeFileName, setResumeFileName] = useState('');
  const [uploading, setUploading] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formError, setFormError] = useState(false);

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  const totalOpenPositions = positionsData.reduce((total, department) => total + department.jobs.length, 0);

  const filteredPositions = selectedDepartment
    ? positionsData.filter((position) => position.department === selectedDepartment)
    : positionsData;

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, resume: file });
    setResumeFileName(file.name);
  };

  const toggleDepartment = (index) => {
    setExpandedDept(expandedDept === index ? null : index);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.field || !formData.resume) {
      setFormError(true);
      return;
    } else {
      setFormError(false);
    }
    setUploading(true);
    const apiUrl = 'https://api.sheetmonkey.io/form/ntc2WRtNmRVvUJsmXWFcaB';
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('field', formData.field);
    formDataToSend.append('resume', formData.resume);
    formDataToSend.append('applicationType', formData.applicationType);

    try {
      const response = await fetch(apiUrl, { method: 'POST', body: formDataToSend });
      if (response.ok) {
        setUploading(false);
        setIsPopupOpen(true);
        setFormData({ name: '', email: '', field: '', resume: '', applicationType: 'Open Application' });
        setResumeFileName('');
        handleCloseModal();
      } else {
        alert('Error submitting the application');
      }
    } catch (error) {
      alert('An error occurred while submitting the form');
      console.error('Error:', error);
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className='w-full flex flex-col'>
        <div className='relative bg-careers-bg bg-cover opacity-90 flex justify-center flex-col py-5 lg:py-32 items-center text-white '>
          <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
          <div className="relative z-10 flex justify-center flex-col items-center h-16">
            <h1 className="md:text-5xl text-xl font-bold uppercase">{t('careersTitle')}</h1>
          </div>
        </div>
        <div className='flex bg-footer-gradient md:flex-row flex-col md:gap-16 md:px-20 md:pt-10'>
          <div className="md:min-h-screen md:w-[50%] text-white">
            <div className="mb-6">
              <div className="flex justify-between items-center bg-[#303030] py-2 px-5">
                <label htmlFor="department" className="block text-base font-bold">
                  {t('Openform2')}  <span className='text-laranja'>{t('Positionss')}</span>
                </label>
                <span className="text-lg font-bold">({totalOpenPositions})</span>
              </div>
              <select
                id="department"
                value={selectedDepartment}
                onChange={handleDepartmentChange}
                className="block w-[90%] p-2 border rounded bg-[#1f1f1f] border-laranja mx-5 text-white focus:outline-none focus:ring-2 focus:ring-laranja focus:border-laranja my-8"
              >
                <option value="">{t('AllDepartments')}</option>
                {positionsData.map((dept, index) => (
                  <option key={index} value={dept.department}>
                    {dept.department}
                  </option>
                ))}
              </select>
            </div>
            <div>
              {filteredPositions.map((dept, index) => (
                <div key={index} className="">
                  <div
                    className="flex justify-between items-center bg-[#303030] py-1 mb-4 px-5 cursor-pointer"
                    onClick={() => toggleDepartment(index)}
                  >
                    <h2 className="text-xl font-semibold text-left text-white">{dept.department}</h2>
                    <span className="text-lg font-bold mr-5">({dept.jobs.length})</span>
                  </div>
                  {expandedDept === index && (
                    dept.jobs.length > 0 ? (
                      dept.jobs.map((job) => (
                        <div key={job.id} className="mb-4">
                          <Link to={`/${lang}/${routeMap.application[lang]}/${job.slug}/`} className="text-lg font-semibold text-orange-500 hover:underline ml-5">
                            {job.title}
                          </Link>
                          <p className="text-sm mx-5">
                            {job.type} {job.experience && `• ${job.experience}`}
                          </p>
                        </div>
                      ))
                    ) : (
                      <div className="ml-5 pb-10">
                        <button
                          onClick={handleOpenModal}
                          className="text-orange-500 font-bold"
                        >
                          {t('Openform')} {t('Applicationform')}
                        </button>
                      </div>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="md:flex flex-col md:w-[50%] m-10 md:m-0">
            <h2 className="text-xl font-bold mb-4 normal-case">{t('Openform')} <span className='font-normal text-laranja'>{t('Applicationform')}</span></h2>
            {formError && (
              <p className="text-red-500 mb-4">{t('formerror')}</p>
            )}
            <form className="grid gap-4 text-white bg-pretoCinzento p-5 rounded" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-light mb-1">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 bg-pretoCinzento border border-orange-500 rounded"
                  placeholder={t('namePlaceholder')}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-light mb-1">E-mail:</label>
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
                  placeholder={t('aboutYouPlaceholder')}
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
              <button type="submit" className="bg-custom-gradient text-white px-4 py-2 rounded" disabled={uploading}>
                {uploading ? t('uploading') : t('submitApplication')}
              </button>
            </form>
          </div>
        </div>
            {/* Modal de Sucesso */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="w-[340px] h-[242px] bg-custom-gradient p-8 rounded-md relative max-w-sm text-center text-white">
            <button onClick={closePopup} className="absolute top-4 right-4 text-white">
              <FiX size={24} />
            </button>
            <FaRegCircleCheck size={70} className="mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2 text-black text-center">{t('sentSuccessfully')}</h2>
            <p className="text-sm"> {t('analyzing2')}</p>
          </div>
        </div>
      )}
      </div>
      <Footer />
    </>
  );
};

export default Application;
