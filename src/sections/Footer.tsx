import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState<string | null>(null);

  const openModal = (modalType: string) => setIsModalOpen(modalType);
  const closeModal = () => setIsModalOpen(null);

  const modalContent = {
    terms: (
      <div>
        <h2 className="text-lg font-bold mb-4">Términos y Condiciones</h2>
        <p>
          Este sitio web se proporciona solo con fines informativos. Todos los
          derechos de propiedad intelectual sobre el contenido presentado son
          reservados. No se permite el uso indebido de este sitio web ni sus
          recursos.
        </p>
      </div>
    ),
    privacy: (
      <div>
        <h2 className="text-lg font-bold mb-4">Política de Privacidad</h2>
        <p>
          Este sitio no recopila ni almacena información personal sin tu
          consentimiento. La información proporcionada a través del formulario
          de contacto se utiliza únicamente para responder a tus consultas.
        </p>
      </div>
    ),
  };

  return (
    <footer className="bg-lightGray text-gray-700 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-8">
          {/* GitHub */}
          <div className="group">
            <a
              href="https://github.com/katitafranco"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group-hover:text-purple transition-all"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
              <p className="text-xs mt-2 group-hover:text-purple">GitHub</p>
            </a>
          </div>

          {/* LinkedIn */}
          <div className="group">
            <a
              href="https://www.linkedin.com/in/katiuska-franco-t/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group-hover:text-purple transition-all"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
              <p className="text-xs mt-2 group-hover:text-purple">LinkedIn</p>
            </a>
          </div>

          {/* Email */}
          <div className="group">
            <a
              href="mailto:kati.franco@gmail.com"
              className="flex flex-col items-center group-hover:text-purple transition-all"
            >
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
              <p className="text-xs mt-2 group-hover:text-purple">Email</p>
            </a>
          </div>
        </div>

        <p className="text-center mt-4">
          &copy; {new Date().getFullYear()} Katiuska Franco. Todos los derechos
          reservados.
        </p>

        <div className="text-center mt-2 text-sm">
          <button
            className="text-purple underline hover:no-underline"
            onClick={() => openModal("terms")}
          >
            Términos y Condiciones
          </button>
          {" | "}
          <button
            className="text-purple underline hover:no-underline"
            onClick={() => openModal("privacy")}
          >
            Política de Privacidad
          </button>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
              {/* Botón de cerrar */}
              <button
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
                onClick={closeModal}
              >
                ✕
              </button>
              {modalContent[isModalOpen as keyof typeof modalContent]}
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
