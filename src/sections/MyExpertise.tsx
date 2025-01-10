import React from "react";
import { useTranslation } from "react-i18next";
import ExpertiseCard from "../components/ExpertiseCard";

// Importa los GIFs correctamente
import fullStackGif from "../assets/computer.png";
import frontEndGif from "../assets/ux-design.gif";
import uiUxGif from "../assets/graphic-designer.gif";
import teachingGif from "../assets/elearning.gif";

const Expertise = () => {
  const { t } = useTranslation();

  const colorCard = "bg-purple-100";
  const skills = [
    {
      iconSrc: fullStackGif, // Pasa directamente la ruta del archivo
      title: t("expertise.fullstackTitle"),
      description: t("expertise.fullstackDescription"),
      color: "bg-purple-100",
    },
    {
      iconSrc: frontEndGif, // Pasa directamente la ruta del archivo
      title: t("expertise.frontendTitle"),
      description: t("expertise.frontendDescription"),
      color: "bg-purple-100",
    },
    {
      iconSrc: uiUxGif, // Pasa directamente la ruta del archivo
      title: t("expertise.uiuxTitle"),
      description: t("expertise.uiuxDescription"),
      color: "bg-purple-100",
    },
    {
      iconSrc: teachingGif, // Pasa directamente la ruta del archivo
      title: t("expertise.teachingTitle"),
      description: t("expertise.teachingDescription"),
      color: "bg-purple-100",
    },
  ];

  return (
    <section id="expertise" className="bg-white py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-purple-600 text-center mb-12">
          {t("expertise.title")}
        </h2>
        <div className="flex justify-between items-center gap-6 flex-wrap">
          {skills.map((skill, index) => (
            <ExpertiseCard
              key={index}
              iconSrc={skill.iconSrc} // Asegúrate de pasar el src correcto
              title={skill.title}
              description={skill.description}
              color={colorCard}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
