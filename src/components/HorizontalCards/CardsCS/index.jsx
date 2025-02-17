import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MdOutlineArrowOutward } from "react-icons/md";
import useTranslatedRoutes from "../../../hooks/useTranslatatedRoutes";

export default function CardsCS({ titulo, imagem, descricao, slug }) {
  const { t } = useTranslation();
  const lang = localStorage.getItem('language')
  const { services } = useTranslatedRoutes();



  return (
    <div>
      {
        <div className="w-full h-56 relative text-laranja overflow-hidden items-center flex">
          <div
            className="absolute w-3/5 h-full bg-white"
            style={{
              clipPath: "polygon(0 0, 70% 0, 100% 100%, 0% 100%)",
            }}
          >
            <div className="flex px-4 flex-col items-start justify-center w-full xl:text-start text-center gap-10 mt-5 ">
              <h3 className="uppercase text-lg w-10/12 text-start leading-4 font-bold">
                {titulo}
              </h3>
              <p className="text-xs text-black w-36 text-start line-clamp-3 ">
                {descricao}
              </p>
              <Link
                to={`/${lang}/${services}/${slug}`}
                className=" font-bold bg-white flex text-xs w-fit cursor-pointer text-laranja rounded-sm gap-1"
              >
                {t("mpReadMore")}
                <div className="text-black">
                  <MdOutlineArrowOutward />
                </div>
              </Link>
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <img className="w-full h-full object-cover" src={imagem} alt="" />
          </div>
        </div>
      }
    </div>
  );
}
