import { useTranslation } from "react-i18next";

export default function ContactsHero() {

    const { t } = useTranslation()

    return (
        <div className="lg:h-80 h-52 z-10 bg-contact-bg bg-no-repeat bg-cover after:absolute after:block after:w-full after:h-full justify-center flex items-center after:top-0 after:left-0 after:bg-black after:-z-10">
            <div className="absolute z-10 -left-20 h-1/2 w-1/3 -top-3/4 rounded-l-full"></div>
            <div className="text-center relative z-40 flex flex-col gap-5 text-white ">
                <h1 className="text-4xl xl:text-7xl font-bold uppercase">{t('heroContacts')}</h1>
                <p className="font-medium capitalize xl:px-0 px-5 text-lg xl:text-xl">{t('heroDescriptionContacts')}</p>
            </div>
        </div>
    );
}