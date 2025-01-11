import React from "react";

interface ExpertiseCardProps {
  iconSrc: string; // Ruta del GIF
  title: string;
  description: string;
  color: string; // Clase de color para fondo opcional
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({
  iconSrc,
  title,
  description,
  color,
}) => {
  return (
    <div
      className={`w-64 h-80 md:w-80 md:h-80 flex flex-col items-start justify-start text-left p-6 rounded-lg shadow-md ${color} relative hover:shadow-lg transition-shadow duration-300 group`}
    >
      {/* Ícono animado */}
      <img src={iconSrc} alt={title} className="w-16 h-16 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent rounded-b-lg group-hover:bg-purple transition-all duration-300"></div>
    </div>
  );
};

export default ExpertiseCard;
