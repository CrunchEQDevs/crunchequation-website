import { MdOutlineArrowOutward } from "react-icons/md";
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";
import { FiX } from 'react-icons/fi';
import { FaRegCircleCheck } from "react-icons/fa6";


function SuccessModal({ closeModal }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]">
            <div className="w-[340px] h-[242px]  bg-custom-gradient p-8 rounded-md relative max-w-sm text-center text-white">
                <button 
                    onClick={closeModal} 
                    className="absolute top-4 right-4 text-white"
                >
                    <FiX size={24} />
                </button>
                <FaRegCircleCheck size={70} className="mx-auto mb-4" />
                <h2 className="text-xl font-bold mb-2 text-black">Sent Successfully</h2>
                <p className="text-sm">
                Your message was sent successfully. We will contact you as soon as possible.
                </p>
            </div>
        </div>
    );
}

export default function Form() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://api.sheetmonkey.io/form/gmqm8r51fKV13PyVQfV1Se', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.ok) {
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                });
                setIsSubmitted(true);
            }
        })
        .catch(error => {
            console.error('Erro ao enviar o formulário', error);
        });
    };

    const closeModal = () => {
        setIsSubmitted(false);
    };

    return (
        <div className="bg-footer-gradient flex flex-col items-center pb-12 lg:pb-32 text-white">
            <div className="w-10/12 lg:container lg:px-4 space-y-5 lg:space-y-10 flex md:flex-row flex-col items-center justify-center">
                <div className=" md:w-7/12 w-screen flex flex-col justify-center items-center">
                    <h2 className="text-laranja font-bold text-2xl md:hidden block">{t('getintouch')}</h2>
                    <p className="font-bold text-xl lg:text-5xl text-laranja hidden md:block">{t('getin')}</p>
                    <p className=" text-white text-5xl lg:text-7xl font-bold hidden md:block">{t('touchform')}</p> 
                    <div className="text-sm lg:text-lg text-center font-light md:w-2/3 mt-3 w-[80%]">
                        <p>{t('formContactDescription')}</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4 w-full lg:w-7/12">
                    <div className="flex flex-col space-y-2">
                        <label className="text-sm lg:text-base">{t('formContactName')} <span className="text-laranja">*</span></label>
                        <input 
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            className="outline-none bg-transparent border-b-[1px] border-opacityOrangent text-sm text-white px-2 py-1"
                            required 
                        />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label className="text-sm lg:text-base">Email <span className="text-laranja">*</span></label>
                        <input 
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="outline-none bg-transparent border-b-[1px] border-opacityOrangent text-sm text-white px-2 py-1"
                            required 
                        />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label className="text-sm lg:text-base">{t('formContactSubject')} <span className="text-laranja"></span></label>
                        <input 
                            name="subject"
                            type="text"
                            value={formData.subject}
                            onChange={handleChange}
                            className="outline-none bg-transparent border-b-[1px] border-opacityOrangent text-sm text-white px-2 py-1" 
                        />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label className="text-sm lg:text-base">{t('formContactMessage')} <span className="text-laranja">*</span></label>
                        <textarea 
                            name="message"
                            rows={3}
                            value={formData.message}
                            onChange={handleChange}
                            className="outline-none bg-transparent border-b-[1px] border-opacityOrangent text-sm text-white px-2 py-1"
                            required 
                        />
                    </div>
                    <button type="submit" className="w-full flex text-center py-2 justify-center gap-1">
                        {t('formContactButton')}
                        <div className="text-laranja">
                            <MdOutlineArrowOutward />
                        </div>
                    </button>
                </form>
            </div>

            {/* Renderiza o modal se o formulário for enviado com sucesso */}
            {isSubmitted && <SuccessModal closeModal={closeModal} />}
        </div>
    );
}
