import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  titleButtonCard: string;
}

const PortfolioCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  link,
  titleButtonCard,
}) => {
  return (
    <div className="h-[26rem] sm:max-w-[18rem] bg-gray-100 p-6  rounded-md shadow-lg transition-transform duration-300 relative hover:scale-105 hover:shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-48 top-0 left-0 object-cover rounded-t-md mb-4 absolute"
      />
      <h3 className="pt-48 text-xl font-semibold mb-2 text-black">{title}</h3>
      <p className="text-darkBlue text-sm sm:text-xs mb-4">{description}</p>
      <div className="relative">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start justify-start text-purple-600 dark:text-black hover:border-pink-500 hover:text-pink-500 transition-all duration-300"
        >
          <span>{titleButtonCard}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
        <div className="absolute -bottom-1 left-0 w-28 h-0.5 bg-pink"></div>
      </div>
    </div>
  );
};

export default PortfolioCard;
