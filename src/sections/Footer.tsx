// components/Footer.tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-lightGray text-gray-700 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-8">
          {/* GitHub */}
          <a
            href="https://github.com/katitafranco"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:text-purple transition-all"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
            <p className="text-xs mt-2">GitHub</p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/katiuska-franco-t/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:text-purple transition-all"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
            <p className="text-xs mt-2">LinkedIn</p>
          </a>

          {/* Email */}
          <a
            href="mailto:kati.franco@gmail.com"
            className="flex flex-col items-center hover:text-purple transition-all"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
            <p className="text-xs mt-2">Email</p>
          </a>
        </div>
        <p>
          &copy; {new Date().getFullYear()} Katiuska Franco. All rights
          reserved.
        </p>
        <p className="text-xs">
          Image credits: Foto de{" "}
          <a
            className="hover:text-white"
            href="https://unsplash.com/es/@ngeshlew?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
            target="_blank"
          >
            Lewis Kang'ethe Ngugi
          </a>{" "}
          en{" "}
          <a
            className="hover:text-white"
            href="https://unsplash.com/es/fotos/computadora-portatil-negra-encendida-f5pTwLHCsAg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
            target="_blank"
          >
            Unsplash
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
