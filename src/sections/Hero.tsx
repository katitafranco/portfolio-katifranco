import { useTranslation } from "react-i18next";
import imgHero from "../assets/Hero2.png";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="flex items-center justify-between h-screen bg-gray-100 p-8"
    >
      {/* Columna de contenido */}
      <div
        id="contentHero"
        className="flex flex-col justify-center text-left max-w-lg z-10 ml-10"
      >
        <p className="text-purple-600">{t("hero.introduce")}</p>
        <h1 className="text-4xl font-bold text-purple-800">
          {t("hero.title").split("Frontend")[0]}
          <span className="text-purple">Frontend</span>
          {t("hero.title").split("Frontend")[1].split("React")[0]}
          <span className="text-purple">React</span>
          {t("hero.title").split("React")[1]}
        </h1>
        <p className="text-lg text-gray-700 mt-4">{t("hero.subtitle")}</p>
        <div>
          <a
            href="#contact"
            className="inline-block mt-6 py-2 px-4 bg-purple text-white rounded-sm hover:bg-purple-800 transition-colors w-auto"
          >
            {t("hero.cta")}
          </a>
        </div>
      </div>

      {/* Columna de imagen */}
      <div
        id="imageHero"
        className="hidden lg:flex flex-shrink-0 items-center justify-center w-1/2 h-full ml-8"
      >
        <img
          src={imgHero}
          alt="Perfil"
          className="max-h-[70%] w-auto object-cover rounded-t-[50%] shadow-lg -ml-40"
        />
      </div>
    </section>
  );
};

export default Hero;
