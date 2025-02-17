import Navbar from '../../components/Navbar/index.jsx';
import ContactsHero from '../../components/Hero/ContactsHero/index.jsx';
import Footer from '../../components/Footer/index.jsx';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ContactPopUp from '../../components/PopUps/ContactPopUp/index.jsx';

const Contacts = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Envio do formulário para a API do SheetMonkey
    try {
      const response = await fetch('https://api.sheetmonkey.io/form/gmqm8r51fKV13PyVQfV1Se', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        openModal(); // Abre o modal após o envio bem-sucedido
      } else {
        console.error('Erro ao enviar o formulário:', response);
      }
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);

  return (
    <div>
      <Navbar />
      <ContactsHero />
      <div className='bg-pretoQuase100 bg-no-repeat bg-cover relative after:absolute after:block after:w-full after:h-full justify-center flex items-center after:top-0 after:left-0 after:bg-black after:-z-10  w-full xl:py-16 '>
        <div className='bg-pretoQuase100 w-11/12 xl:w-3/5 2xl:w-2/5 xl:p-10 px-5 py-10 relative justify-center z-40 flex flex-col'>
          <header className='flex flex-col gap-3 w-full text-white items-center text-center'>
            <h3 className='text-xl xl:text-3xl font-bold uppercase text-laranja '>{t("formContactTitle")}</h3>
            <p className='xl:text-lg w-full'>{t("formContactDescription")}</p>
          </header>
          <form className='text-lg h-full w-full text-white' onSubmit={handleSubmit}>
            <div className='py-10 gap-10 h-full flex flex-col justify-around'>
              <div className='flex flex-col'>
                <label htmlFor="name">{t('formContactName')} <span className='text-primary'>*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='bg-transparent border-b-2 border-primary p-1 outline-none'
                />
              </div>
              <div className='flex flex-col'>
                <label htmlFor="email">Email <span className='text-primary'>*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='bg-transparent border-b-2 border-primary outline-none'
                />
              </div>
              <div className='flex flex-col'>
                <label htmlFor="subject">{t('formContactSubject')} </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className='bg-transparent border-b-2 border-primary outline-none'
                />
              </div>
              <div className='flex flex-col'>
                <label htmlFor="message">{t('formContactMessage')}  <span className='text-primary'>*</span></label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className='bg-transparent border-b-2 h-full border-primary p-1 outline-none'
                ></textarea>
              </div>
            </div>
            <div className=''>
              <button
                className='rounded-md uppercase py-5 px-6 text-base xl:text-2xl bg-custom-gradient font-semibold'
                type="submit"
                disabled={isSubmitting} // Desabilita o botão durante o envio
              >
                {isSubmitting ? t("formSending") : t("formContactButton")} {/* Mostra feedback visual */}
              </button>
            </div>
          </form>
          {isModalOpen && (
            <ContactPopUp closeModal={closeModal}/>
          )}

          
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contacts;
