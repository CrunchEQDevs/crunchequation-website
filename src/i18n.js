import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// English imports
import careersEN from './i18n/en/careers.json'
import contactEN from './i18n/en/contact.json'
import footerEN from './i18n/en/footer.json'
import homeEN from './i18n/en/home.json'
import servicesEN from './i18n/en/services.json'
import testimonialsEN from './i18n/en/testimonials.json'
import urlsEN from './i18n/en/urls.json'

// Portuguese imports
import careersPT from './i18n/pt/careers.json'
import contactPT from './i18n/pt/contact.json'
import footerPT from './i18n/pt/footer.json'
import homePT from './i18n/pt/home.json'
import servicesPT from './i18n/pt/services.json'
import testimonialsPT from './i18n/pt/testimonials.json'
import urlsPT from './i18n/pt/urls.json'

// Spanish imports
import careersES from './i18n/es/careers.json'
import contactES from './i18n/es/contact.json'
import footerES from './i18n/es/footer.json'
import homeES from './i18n/es/home.json'
import servicesES from './i18n/es/services.json'
import testimonialsES from './i18n/es/testimonials.json'
import urlsES from './i18n/es/urls.json'

// French imports
import careersFR from './i18n/fr/careers.json'
import contactFR from './i18n/fr/contact.json'
import footerFR from './i18n/fr/footer.json'
import homeFR from './i18n/fr/home.json'
import servicesFR from './i18n/fr/services.json'
import testimonialsFR from './i18n/fr/testimonials.json'
import urlsFR from './i18n/fr/urls.json'

// Danish imports
import careersDE from './i18n/de/careers.json'
import contactDE from './i18n/de/contact.json'
import footerDE from './i18n/de/footer.json'
import homeDE from './i18n/de/home.json'
import servicesDE from './i18n/de/services.json'
import testimonialsDE from './i18n/de/testimonials.json'
import urlsDE from './i18n/de/urls.json'

// Italian imports
import careersIT from './i18n/it/careers.json'
import contactIT from './i18n/it/contact.json'
import footerIT from './i18n/it/footer.json'
import homeIT from './i18n/it/home.json'
import servicesIT from './i18n/it/services.json'
import testimonialsIT from './i18n/it/testimonials.json'
import urlsIT from './i18n/it/urls.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          ...careersEN,
          ...servicesEN,
          ...footerEN,
          ...homeEN,
          ...contactEN,
          ...testimonialsEN,
          ...urlsEN,
        }
      },
      pt: {
        translation: {
          ...careersPT,
          ...servicesPT,
          ...footerPT,
          ...homePT,
          ...contactPT,
          ...testimonialsPT,
          ...urlsPT,
        }
      },
      es: {
        translation: {
          ...careersES,
          ...servicesES,
          ...footerES,
          ...homeES,
          ...contactES,
          ...testimonialsES,
          ...urlsES,
        }
      },
      fr: {
        translation: {
          ...careersFR,
          ...servicesFR,
          ...footerFR,
          ...homeFR,
          ...contactFR,
          ...testimonialsFR,
          ...urlsFR,
        
        }
      },
      de: {
        translation: {
          ...careersDE,
          ...servicesDE,
          ...footerDE,
          ...homeDE,
          ...contactDE,
          ...testimonialsDE,
          ...urlsDE,
        }
      },
      it: {
        translation: {
          ...careersIT,
          ...servicesIT,
          ...footerIT,
          ...homeIT,
          ...contactIT,
          ...testimonialsIT,
          ...urlsIT,
        }
      }
    },
    lng: localStorage.getItem('language') || 'en', 
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
