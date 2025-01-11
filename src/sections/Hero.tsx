// src/sections/Hero.tsx

import { useTranslation, Trans } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="flex items-center justify-between h-screen bg-gray-100 p-8"
    >
      <div className="text-left max-w-lg z-10 relative">
        <p className="text-purple-600">{t("hero.introduce")}</p>
        {/* <h1 className="text-4xl font-bold text-purple-800">
          {t("hero.title")}
        </h1>{" "} */}
        <h1 className="text-4xl font-bold text-purple-800">
          {/* Divide el título en partes y resalta con JSX */}
          {t("hero.title").split("Frontend")[0]}
          <span className="text-purple">Frontend</span>
          {t("hero.title").split("Frontend")[1].split("React")[0]}
          <span className="text-purple">React</span>
          {t("hero.title").split("React")[1]}
        </h1>
        {/* Traducción de 'Hey, I am John' */}
        <p className="text-lg text-gray-700 mt-4">{t("hero.subtitle")}</p>{" "}
        {/* Descripción breve */}
        <a
          href="#contact"
          className="inline-block mt-6 py-2 px-4 bg-purple bg-transparent text-white rounded-lg hover:bg-purple-800 transition-colors"
        >
          {t("hero.cta")} {/* Botón "Get in Touch" */}
        </a>
      </div>
      <div className="relative w-1/2 hidden lg:block">
        <img
          src="./src/assets/hero2.png"
          alt="Perfil"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-purple-200 opacity-50 rounded-lg"></div>{" "}
        {/* Fondo decorativo con color púrpura claro */}
      </div>
    </section>
  );
};

export default Hero;
