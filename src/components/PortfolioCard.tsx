// PortfolioCard.tsx
import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const PortfolioCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  link,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:transform hover:scale-105">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-600 hover:text-purple-800"
      >
        Ver Proyecto
      </a>
    </div>
  );
};

export default PortfolioCard;
