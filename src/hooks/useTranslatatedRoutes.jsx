import { useTranslation } from "react-i18next";
import { useMemo } from "react";

export default function useTranslatedRoutes() {

    const { t } = useTranslation();

    return useMemo(() => ({
        services: `${t('services-url')}`,
        careers: `${t('careers-url')}`,
        contact: `${t('contact-url')}`,
        application: `${t('application-url')}`,
        blog: `${t('blog-url')}`,

    }), [t]);

    
}