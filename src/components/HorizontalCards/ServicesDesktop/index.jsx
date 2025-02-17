import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { servicesEN, servicesPT, servicesES, servicesFR, servicesDE, servicesIT } from "../../../utils/ServicesInfo";
import routeMap from "../../../utils/RouteMap";

export default function ServicesDesktop() {

const { t, i18n } = useTranslation()
const currentServices = i18n.language === 'pt' ? servicesPT : 
                        i18n.language === 'es' ? servicesES : 
                        i18n.language === 'fr' ? servicesFR : 
                        i18n.language === 'de' ? servicesDE : 
                        i18n.language === 'it' ? servicesIT :   

                        servicesEN;
const lang = localStorage.getItem('language')

return (
    <div>
        {
            currentServices.map((service, i) => (
                <div key={i} className="w-full h-3/4 relative after:absolute after:content-[''] after:block after:w-full after:h-full justify-center items-center after:top-0 after:left-0 after:bg-black after:opacity-75 flex flex-col mb-32">
                    <div className="absolute top-0 left-0 h-full w-full">
                        <img className="w-full h-full object-cover" src={service.background} alt="" />
                    </div>
                    <div className="w-10/12 xl:gap-0 gap-10 h-full grid grid-cols-1 xl:grid-cols-2 xl:place-items-start place-items-center py-20 z-20 relative">
                        <div className={`${i % 2 === 0 ? 'order-1' : 'order-2'} h-full w-full flex items-center justify-center`}>
                            <img className="max-w-full 2xl:w-8/12" src={service.imagem} alt="" />
                        </div>
                        
                        <div className={`${i % 2 === 0 ? 'order-2' : 'order-1'} flex flex-col items-center xl:items-start justify-center gap-10 h-full w-full text-white xl:pl-0 px-10 xl:text-start text-center`}>
                            <h3 className="uppercase text-4xl lg:text-4xl w-full font-bold">{service.titulo}</h3>
                            <p className="text-xl 2xl:text-2xl w-full text-justify">{service.descricao}</p>
                            <Link to={`/${lang}/${routeMap.services[lang]}/${service.slug}`} className="uppercase font-bold w-fit cursor-pointer text-laranja ">
                            {t('mpReadMore')}
                            </Link>
                        </div>
                    </div>
                    <div className={`${i % 2 === 0 ? 'left-0' : 'right-0'} absolute -bottom-16 xl:w-1/4 w-1/2 h-1 bg-laranja z-20`}>
                    </div>
                </div>
            ))
        }
    </div>
);
}