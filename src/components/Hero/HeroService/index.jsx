import { useTranslation } from "react-i18next";

export default function HeroService() {

    const { t } = useTranslation()

    return (
        <div className="relative pt-10 pb-12 md:py-20 lg:py-32 flex items-center justify-center">
            <div className="text-center relative z-40 flex items-center gap-2">
                <h2 className="text-3xl md:text-4xl lg:text-5xl ">{t('our2')}</h2>
                <h2 className="text-white font-normal text-3xl md:text-4xl lg:text-5xl">{t('services')}</h2>
            </div>
        </div>
    );
}