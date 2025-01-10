// Portfolio.tsx
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
    <section id="portfolio" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-purple-600 text-center mb-12">
          {t("portfolio.title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            console.log(project.image);

            // Verificar cada proyecto que se está iterando
            return (
              <PortfolioCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
