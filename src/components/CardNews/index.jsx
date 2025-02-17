import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import routeMap from '../../utils/RouteMap';

const CardNews = ({ title, image, slug }) => {
  const lang = localStorage.getItem('language')
  const { t } = useTranslation()

  return (
    <div className="flex flex-col  bg-blackBg p-4 rounded-lg ">
      <div className=' w-full md:h-64'>
        <img src={image} alt={title} className="w-full h-48 md:h-full object-cover rounded-lg" />
      </div>
      <div className="mt-4 text-white ">
        <h3 className="lg:text-xl font-bold mb-2">{title}</h3>
        <Link to={`/${lang}/${routeMap.blog[lang]}/${slug}/`} className="text-orange-500 flex items-center w-fit gap-2">
          {t('see_more')} <MdOutlineArrowOutward />
        </Link>
      </div>
    </div>
  );
};

export default CardNews;
