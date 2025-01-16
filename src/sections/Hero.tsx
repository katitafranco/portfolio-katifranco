//Hero.tsx

import { useTranslation } from "react-i18next";
import imgHero from "../assets/Hero2.png";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className=" flex items-center justify-around bg-gray-100 dark:text-black px-8 pb-8 h-[90vh] mt-[10vh]"
    >
      {/* Columna de contenido */}
      <div
        id="contentHero"
        className="flex flex-col justify-center text-left max-w-lg z-10 ml-10"
      >
        <p className="text-purple-600">{t("hero.introduce")}</p>
        <h1 className="text-3xl lg:text-4xl font-bold text-purple-800">
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

      <div
        id="imageHero"
        className="hidden lg:flex flex-shrink-0 items-center justify-center w-1/2 h-full ml-8 relative "
      >
        {/* Forma SVG púrpura detrás de la imagen */}
        <svg
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute z-0 left-1/2 top-2/4 transform -translate-x-1/2 -translate-y-1/2 w-[450px] h-[400px]"
          style={{ fill: "#6C63FF" }}
        >
          <path d="M421.5,291.5Q374,333,353,375Q332,417,292,447Q252,477,207.5,457.5Q163,438,124,410Q85,382,63,341Q41,300,33,250Q25,200,47,156.5Q69,113,110,98Q151,83,202,67.5Q253,52,304,71Q355,90,386.5,130.5Q418,171,433.5,210.5Q449,250,421.5,291.5Z" />
        </svg>

        {/* Imagen del héroe */}
        <img
          src={imgHero}
          alt="Perfil"
          className="relative z-10 max-h-[70%] w-auto object-cover rounded-t-[50%] rounded-b-[15%] rounded-br-[25%] "
        />
      </div>
    </section>
  );
};

export default Hero;
