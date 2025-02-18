import { Link } from 'react-router-dom';
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import useScrollToTop from '../../hooks/useScrollToTop';
import routeMap from '../../utils/RouteMap';

const NewsletterModal = ({ isOpen, setIsOpen }) => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');
    const { t } = useTranslation();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage('');

        try {
            const response = await fetch('https://api.sheetmonkey.io/form/9uk88wPQKjHEuXzgKayfjG', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setMessage(t('subscriptionSuccess', 'Subscrição realizada com sucesso!'));
                setEmail('');
                setTimeout(() => setIsOpen(false), 4000);
            } else {
                setMessage(t('subscriptionError', 'Ocorreu um erro. Por favor, tente novamente.'));
            }
        } catch (error) {
            setMessage(t('subscriptionError', 'Ocorreu um erro. Por favor, tente novamente.'));
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-pretoQuase100 bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-pretoQuase100 border-2  border-laranja p-6 rounded-lg w-11/12 max-w-md relative">
                {/* Close button */}
                <button 
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-white hover:text-laranja"
                >
                    ✕
                </button>
                
                <h2 className="text-white text-xl font-bold mb-4">
                    {t('subscribeNewsletter', 'Subscrever Newsletter')}
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="email"
                            placeholder={t('enterEmail', 'Seu e-mail')}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full p-2 bg-transparent border-2 border-laranja rounded text-white focus:outline-none focus:border-white"
                        />
                    </div>
                    
                    {message && (
                        <p className={`text-sm ${message.includes('sucesso') ? 'text-green-500' : 'text-green-500'}`}>
                            {message}
                        </p>
                    )}
                    
                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className={`w-full bg-laranja hover:bg-laranja/80 text-white py-2 rounded transition-colors duration-200 
                            ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {isSubmitting ? 
                            t('sending', 'A enviar...') : 
                            t('subscribe', 'Subscrever')
                        }
                    </button>
                </form>
            </div>
        </div>
    );
};

const MenuItems = ({ isActive, setIsOpen }) => {
    const { t } = useTranslation();
    const lang = localStorage.getItem('language')
    const scrollToTop = useScrollToTop();

    return (
        <>
            <li className='flex items-center justify-between'>
                <div className="flex items-center gap-3 py-2 px-2 lg:px-0 hover:text-laranja duration-200  w-full">
                    <Link
                        to="/"
                        className={` ${isActive('/') ? 'text-laranja border-b-2 border-orange-500' : ''} text-sm xl:text-base uppercase font-semibold text-center ic flex w-full justify-between`}
                        onClick={() => setIsOpen && setIsOpen(false)}
                    >
                        {t('about')} {t('crunch')}
                    </Link>
                </div>
            </li>

            <li className='flex items-center justify-between'>
                <div className="flex items-center gap-3 py-2 px-2 hover:text-laranja duration-200 w-full transition">
                    <Link
                        to={`/${lang}/${routeMap.services[lang]}/`}
                        className={`${isActive('/services') ? 'text-laranja border-b-2 border-orange-500' : ''} text-sm xl:text-base uppercase font-semibold text-center flex w-full justify-between`}
                        onClick={() => {setIsOpen && setIsOpen(false); scrollToTop();}}
                    >
                        {t('services')}
                    </Link>
                </div>
            </li>
            <li className='flex items-center justify-between'>
                <div className="flex items-center gap-3 py-2 px-2 hover:text-laranja duration-200 w-full">
                    <Link
                        to={`/${lang}/${routeMap.blog[lang]}/`}
                        className={` ${isActive('/news') ? 'text-laranja border-b-2 border-orange-500' : ''} text-sm xl:text-base uppercase font-semibold text-center flex w-full justify-between`}
                        onClick={() => {setIsOpen && setIsOpen(false); scrollToTop();}}
                    >
                        BLOG
                    </Link>
                </div>
            </li>
            <li className='flex items-center justify-between'>
                <div className="flex items-center gap-3 py-2 px-2 hover:text-laranja duration-200 w-full">
                    <Link
                        to={`/${lang}/${routeMap.careers[lang]}/`}
                        className={` ${isActive('/careers') ? 'text-laranja border-b-2 border-orange-500' : ''} text-sm xl:text-base uppercase font-semibold text-center  flex w-full justify-between`}
                        onClick={() => {setIsOpen && setIsOpen(false); scrollToTop();}}
                    >                        
                        {t('careers')}
                    </Link>
                </div>
            </li>
            <li className='flex items-center justify-between'>
                <div className="flex items-center gap-3 py-2 px-2 hover:text-laranja duration-200 w-full">
                    <Link
                        to={`/${lang}/${routeMap.contact[lang]}/`}
                        className={` ${isActive('/contacts') ? 'text-laranja border-b-2 border-orange-500' : ''} text-sm xl:text-base uppercase font-semibold text-center flex w-full justify-between`}
                        onClick={() => {setIsOpen && setIsOpen(false); scrollToTop();}}
                    >
                        {t('contacts')}
                    </Link>
                </div>
            </li>
        </>
    );
};

const Copyrights = () => {
    return (
        <h3 className='text-opacityOrangent text-xs'>Copyright © 2024 | Crunch Equation | All Rights Reserved</h3>
    )
}

export default function Footer() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const isActive = (path) => location.pathname === path;
    const { t } = useTranslation();

    return (
        <div className="bg-black z-20 text-white w-full flex flex-col lg:flex-row space-y-10 lg:space-y-0 items-center relative">
            <div className='border-b-2 lg:border-b-0 lg:border-r-2 lg:flex-[.5] border-laranja w-10/12 py-10 lg:py-24 font-bold h-full flex flex-col items-center space-y-4 md:space-y-5'>
                <div className='flex flex-col items-center xl:text-xl -space-y-2 lg:space-y-1'>
                    <h3>{t('newsletterFooter')}</h3>
                    <span className='upper text-laranja text-3xl xl:text-5xl'>{t('newsletter2Footer')}</span>
                </div>
                <div className='flex w-full items-center justify-center'>
                    <button 
                        className='w-9/12 md:w-5/12'
                        onClick={() => setIsModalOpen(true)}
                    >
                        <img 
                            className='w-full object-cover' 
                            src="https://crunchequation.com/devit/assets/sitecrunch/footer/buttonSubscribe.png" 
                            alt="Subscribe to newsletter" 
                        />
                    </button>
                </div>
            </div>
            <div className='w-full h-full flex flex-col lg:flex-row lg:justify-around lg:items-center lg:flex-1'>
                <div className='flex flex-col items-center gap-5'>
                    <nav>
                        <ul className='flex flex-col lg:flex-row items-center lg:items-start'>
                            <MenuItems isActive={isActive} />
                        </ul>
                    </nav>
                    <div className='text-sm xl:text-base font-light space-y-2 flex flex-col items-center lg:items-start text-center justify-center w-8/12 lg:w-full'>
                        <span>{t('addressFooter')}: Rua Senhora da mestra 40, 4410-511 Serzedo</span>
                        <span>E-mail: info@crunchequation.com</span>
                        <span> {t('phoneFooter')}: +351 924 692 168</span> 
                        <div className='lg:block hidden'> 
                            <Copyrights />
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-12 py-16 flex-col lg:flex-row lg:justify-center'>
                    <div className='flex gap-5'>
                        <a href="https://www.facebook.com/crunchequation/" target='_blank' rel="noopener noreferrer">
                            <IoLogoFacebook className='hover:text-laranja transition-colors duration-200 cursor-pointer' size={32} />
                        </a>
                        <a href="https://www.instagram.com/crunchequation/" target='_blank' rel="noopener noreferrer">
                            <IoLogoInstagram className='hover:text-laranja transition-colors duration-200 cursor-pointer' size={32} />
                        </a>
                        <a href="https://www.linkedin.com/company/crunchequation/mycompany/" target='_blank' rel="noopener noreferrer">
                            <IoLogoLinkedin className='hover:text-laranja transition-colors duration-200 cursor-pointer' size={32} />
                        </a>
                    </div>
                </div>
                <div className='lg:hidden block text-center py-10'>
                    <Copyrights/>
                </div>
            </div>
            <NewsletterModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
        </div>
    );
}