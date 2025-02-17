import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from 'react-icons/md';
import useTranslatedRoutes from '../../hooks/useTranslatatedRoutes';

export default function SubPages({ service }) {
    const topRef = useRef(null);
    const lang = localStorage.getItem('language')
    const { contact } = useTranslatedRoutes();

    const [openIndex, setOpenIndex] = useState(null);

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    useEffect(() => {
        if (topRef.current) {
            setTimeout(() => {
                topRef.current.scrollIntoView({ behavior: 'smooth' });
            }, 1);
        } else {
            console.error("Element reference is null");
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [service]);

    if (!service) {
        return <div className='text-white'>Service not found</div>;
    }

    return (
        <div ref={topRef} className='text-white flex flex-col w-full'>
            <Navbar />
            <div className='relative w-full h-80 lg:h-[600px]'>
                <div className='w-full absolute h-full top-0 left-0 z-10'>
                    <img className='w-full h-full object-cover opacity-65' src={service.background} alt={service.titulo} />
                </div>
                <div className='relative z-20 h-full flex items-center justify-center shadow-text2 2xl:text-8xl xl:text-7xl text-4xl text-center font-bold'>
                    <h1 className='text-center xl:w-full uppercase'>{service.titulo}</h1>
                </div>
            </div>
            <section className='lg:py-20 py-10 flex flex-col items-center justify-center bg-logoOpacity bg-cover xl:bg-contain bg-no-repeat relative'>
                <div className='text-justify xl:px-0 px-6 max-w-screen-xl 2xl:w-full xl:w-9/12 h-full flex flex-col gap-10 justify-center'>
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-laranja xl:text-justify text-start text-2xl lg:text-3xl font-bold'>{service.info.header.titulo}</h1>
                        <p className='lg:text-xl leading-8'>{service.info.header.descricao}</p>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-laranja text-2xl lg:text-3xl font-bold'>{service.info.body.titulo}</h1>
                        <p className='lg:text-xl leading-8'>{service.info.body.descricao}</p>
                        <div className='py-5'>
                            <ul className='flex flex-col gap-10 lg:text-xl'>
                                {service.info.body.items.map((item, i) => (
                                    <li key={i} className="border-b border-aboutPopUp pb-3">
                                        <button
                                            onClick={() => toggleItem(i)}
                                            className={`text-left w-full font-semibold flex justify-between items-center ${openIndex === i ? 'text-laranja' : 'text-white'}`}
                                        >
                                            {item.title}
                                            <span
                                                className={`text-laranja transition-transform duration-500 ${openIndex === i ? 'rotate-180' : 'rotate-0'}`}
                                            >
                                                <MdKeyboardArrowDown size={35} />
                                            </span>
                                        </button>
                                        <div className={`overflow-hidden transition-max-height duration-1000 ${openIndex === i ? 'max-h-screen' : 'max-h-0'}`}>
                                            <p className={`mt-3 text-white transition-opacity duration-700`}>
                                                {item.description}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className='flex flex-col gap-5'>
                        <h1 className='text-laranja text-2xl lg:text-3xl font-bold'>{service.info.footer.titulo}</h1>
                        <p className='lg:text-xl leading-8'>{service.info.footer.descricao}</p>
                    </div>
                </div>
            </section>
            <Link
                to={`/${lang}/${contact}`}
                className=" lg:my-10 my-16 m-auto"
            >
                <img src="https://crunchequation.com/devit/assets/sitecrunch/services/letswork.png" alt="" />
            </Link>
            <Footer />
        </div>
    );
}
