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
    <div className="bg-gray-150 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold mb-2 text-black">{title}</h3>
      <p className="text-darkBlue mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex  items-start justify-start text-purple-600 border-b-3 border-red hover:border-pink-500 hover:text-pink-500 transition-all duration-300"
      >
        <span>View In Dribbble</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5 ml-2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
};

export default PortfolioCard;
