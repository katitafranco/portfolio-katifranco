import { useTranslation } from "react-i18next";
import imgAboutMe from "../assets/aboutME2.jpg";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="bg-gray-100 h-screen py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Título */}

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Imagen */}
          <div className="flex-shrink-0 mb-8 md:mb-0 md:w-1/3">
            <img
              src={imgAboutMe} // Aquí deberías poner tu imagen
              alt="Foto de Katiuska"
              className="w-48 h-48 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full object-cover mx-auto"
            />
          </div>

          {/* Descripción */}
          <div className="text-justify md:text-left md:w-2/3">
            <h2 className="text-4xl font-bold text-purple-600 text-center mb-8">
              {t("aboutMe.title")}
            </h2>
            <p className="text-md  md:text-lg lg:text-xl text-gray-700">
              {t("aboutMe.description")}
            </p>
            <br />
            <p className="text-gray-900 mx-8">{t("aboutMe.skills")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
