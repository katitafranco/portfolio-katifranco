import { useTranslation } from "react-i18next";
import PortfolioCard from "../components/PortfolioCard";

const Portfolio = () => {
  const { t } = useTranslation();

  interface Project {
    title: string;
    description: string;
    image: string;
    link: string;
  }

  const projects = t("portfolio.projects", {
    returnObjects: true,
  }) as Project[];

  return (
    <section id="portfolio" className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div
          id="titlePortfolio"
          className="flex flex-col sm:flex-row justify-between mb-2 whitespace-nowrap"
        >
          <h2 className="text-4xl font-bold text-purple-600 text-center mb-2">
            {t("portfolio.title")}
          </h2>

          {/* <a
            href="https://github.com/katitafranco/"
            target="_blank"
            className=" flex flex-row justify-between px-6 pb-0 mb-0 items-center bg-pink text-white rounded-md hover:bg-purple-800 transition-colors "
          > */}
          <a
            href="https://github.com/katitafranco/"
            target="_blank"
            className="inline-flex flex-row justify-between px-6 sm:px-2 sm:mx-2 py-1 mb-0 items-center bg-pink text-white rounded-md hover:bg-purple-800 transition-colors"
          >
            <span className="mr-2">{t("portfolio.button")}</span>
            {/* Aquí está el logo de GitHub en formato SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="30px"
              height="30px"
            >
              <path
                d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"
                fill="#FFFFFF"
              />
            </svg>
          </a>
        </div>
        <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <PortfolioCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
