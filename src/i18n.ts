import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      navbar: {
        home: "Home",
        portfolio: "Portfolio",
        aboutMe: "About Me",
        testimonials: "Testimonials",
        contactMe: "Contact Me",
        myExpertise: "My Expertise",
      },
      hero: {
        introduce: "I'm Katiuska",
        title:
          "A Systems Engineer & Developer. Passionate about Frontend with React, but skilled across the full stack.",
        subtitle:
          "Currently focusing on frontend development with React and React Native, but with solid experience in backend technologies like .NET and SQL database.",
        cta: "Get in Touch",
      },
      "expertise": {
        "title": "My Expertise",
        "fullstackTitle": "Fullstack Development",
        "fullstackDescription": "Development of ERP systems, health insurance platforms using .NET and SQL Server, offering comprehensive expertise.",
        "frontendTitle": "Frontend with React",
        "frontendDescription": "Building engaging web applications with React and TypeScript and mobile applications with React Native.",
        "uiuxTitle": "UI/UX Design",
        "uiuxDescription": "Designing appealing and functional interfaces to enhance user experience.",
        "teachingTitle": "Teaching & Mentoring",
        "teachingDescription": "Experience in educational institutions, guiding students in mathematics and technology, fostering problem-solving skills."
      },
      aboutMe: {
        title: "About Me",
        description:
          "I am a reliable person, I love my family, and I am enthusiastic about always learning and growing as an individual. I also love helping others. As a developer, I am passionate about creating modern and responsive web applications. I have experience in .NET, C#, and SQL Server, and I am now expanding my skills in React and React Native to build dynamic, user-friendly solutions. In my role as an educator, it was exciting to teach young people and be a part of their growth. Additionally, I love traveling, discovering new places, and connecting with nature, which inspires me to keep growing and learning continuously.",
        skills: "Skills: Frontend Development, React, React Native, SQL Server, Teaching & Mentoring",
      },
      portfolio: {
        title: "Portfolio",
        button: "View My GitHub",
        titleButtonCard: "View in Github",
        projects: [
          {
            title: "SPA Website",
            description: "Responsive website for an SPA with a contact form, developed with HTML and CSS, attractive and functional design.",
            link: "https://katitafranco.github.io/web_spa_responsive/index.html",
            image: "./assets/imagenSPA.png"
          },
          {
            title: "Tourism Website",
            description: "Responsive web app for exploring tourist destinations, using HTML, CSS, and SASS.",
            link: "https://katitafranco.github.io/dynamic-travel-sass/dist/index.html",
            image: "./assets/imagenTurismo.png", // Cambia por la imagen de tu proyecto

          },
          {
            "title": "Business Agency",
            "description": "Responsive website for a business agency with HTML, CSS, JS, animations, and video.",
            "link": "https://katitafranco.github.io/biz-agency-site/",
            "image": "./assets/imagenBusiness.png",

          },
          {
            "title": "Hosting Price Calculator",
            "description": "Responsive layout of a hosting price calculator using Flexbox.",
            "link": "https://katitafranco.github.io/flex-cotizador-hosting/",
            "image": "./assets/imagenCotizador.png", // Cambia por la imagen de tu proyecto

          },
          {
            title: "Interactive Testimonials",
            description: "Web page with an interactive testimonial slider, using HTML, CSS, and native JavaScript with smooth transitions.",
            link: "https://katitafranco.github.io/slider-testimonios-js/",
            image: "./assets/imagenSliders.png",
          },
          {
            title: "MERN User CRUD",
            description: "User CRUD app using MongoDB, Mongoose, Express, React, Node.js with AOS animations and SweetAlert2 notifications.",
            link: "https://github.com/katitafranco/crud-mern-stack/tree/master",
            image: "./assets/imagenCRUD2.png",
          },
        ],
      },
      "testimonials": {
        "title": "Testimonials",
        "list": [
          {
            "name": "Veronica Franco",
            "company": "Liris SA",
            "feedback": "She is always learning and improving, which inspires the team.",
            "rating": 5,
            "image": "./assets/person3.jpg",
            "link": "https://www.linkedin.com/in/vero-franco-41162331/"
          },
          {
            "name": "Dover Alvarez",
            "company": "UE Steve Jobs by Genialopolis.",
            "feedback": "She always shows empathy and is willing to support others in the team.",
            "rating": 5,
            "image": "./assets/person2.jpg",
            "link": "https://genialopolis.com/"
          },
          {
            "name": "Alfredo Varas",
            "company": "BairesDev",
            "feedback": "He has a great ability to generate creative and effective solutions.",
            "rating": 5,
            "image": "./assets/person4.jpg",
            "link": "https://www.linkedin.com/in/alfredo-varas/"
          },
          {
            "name": "Ramon Chancay",
            "company": "Desarol",
            "feedback": "Katiuska always brings valuable ideas and is a great support for the team.",
            "rating": 5,
            "image": "./assets/person1.jpg",
            "link": "https://www.linkedin.com/in/devrchancay/"
          }
        ]

      },
      "contact": {
        "form": {
          "title": "Contact Me",
          "subtitle": "Feel free to send me a message using this form.",
          "placeholders": {
            "firstName": "Your first name",
            "lastName": "Your last name",
            "email": "Your email",
            "phoneNumber": "Your phone number",
            "topic": "Select a topic",
            "message": "Your message"
          },
          "topics": {
            "general": "General Inquiry",
            "support": "Support",
            "feedback": "Feedback"
          },
          "buttons": {
            "submit": "Send"
          },
          "acceptTerms": "I accept the terms and conditions.",
          "statusMessages": {
            "success": "Message sent successfully!",
            "error": "There was an error sending your message."
          }
        }
      },
    },
  },
  es: {
    translation: {
      navbar: {
        home: "Inicio",
        portfolio: "Portafolio",
        aboutMe: "Sobre mí",
        testimonials: "Testimonios",
        contactMe: "Contáctame",
        myExpertise: "Mis Habilidades",
      },
      hero: {
        introduce: "Hola soy Katiuska",
        title:
          "Ingeniera en Sistemas y Desarrolladora. Apasionada por el Frontend con React, con experiencia y habilidades fullstack.",
        subtitle:
          "Actualmente enfocada en el desarrollo frontend con React y React Native, pero con experiencia sólida en tecnologías de backend como .NET y bases de datos SQL.",
        cta: "Contáctame",
      },

      "expertise": {
        "title": "Mis Habilidades",
        "fullstackTitle": "Desarrollo Fullstack",
        "fullstackDescription": "Desarrollo en sistemas ERP y plataformas usando .NET y SQL Server, experiencia integral en desarrollo.",
        "frontendTitle": "Frontend con React",
        "frontendDescription": "Creación de aplicaciones web atractivas con React y TypeScript y aplicaciones moviles con React Native.",
        "uiuxTitle": "Diseño UI/UX",
        "uiuxDescription": "Diseño de interfaces atractivas y funcionales para mejorar la experiencia del usuario.",
        "teachingTitle": "Enseñanza y Mentoría",
        "teachingDescription": "Experiencia en instituciones educativas, guiando a estudiantes en matemáticas y tecnología, fomentando habilidades de resolución."
      },
      aboutMe: {
        title: "Sobre mí",
        description:
          "Soy una persona muy confiable, amo a mi familia, soy entusiasta por siempre aprender y crecer como persona, y me encanta ayudar a otros. Como desarrolladora, me apasiona crear aplicaciones web modernas y responsivas. Tengo experiencia en .NET, C# y SQL Server, y ahora estoy ampliando mis habilidades en React y React Native para construir soluciones dinámicas y fáciles de usar. En mi faceta de educadora, fue emocionante enseñar a jóvenes y ser parte de su crecimiento. Además, me encanta viajar, descubrir nuevos lugares y conectar con la naturaleza, lo que me inspira a seguir creciendo y aprendiendo constantemente.",
        skills: "Habilidades: Desarrollo Frontend, React, React Native, SQL Server, Enseñanza y Mentoría",
      },
      portfolio: {
        title: "Portafolio",
        button: "Ver Mi GitHub",
        titleButtonCard:"Ver en Github",
        projects: [
          {
            title: "Sitio Web SPA",
            description: "Sitio web responsivo para una SPA con un formulario de contacto, desarrollado con HTML y CSS, diseño atractivo y funcional.",
            link: "https://katitafranco.github.io/web_spa_responsive/index.html",
            image: "./assets/imagenSPA.png"
          },
          {
            title: "Sitio Web de Turismo",
            description: "Aplicación web responsiva para explorar destinos turísticos, utilizando HTML, CSS y SASS.",
            link: "https://katitafranco.github.io/dynamic-travel-sass/dist/index.html",
            image: "./assets/imagenTurismo.png"
          },
          {
            title: "Agencia de Negocios",
            description: "Sitio web responsivo para una agencia de negocios con HTML, CSS, JS, animaciones y video.",
            link: "https://katitafranco.github.io/biz-agency-site/",
            image: "./assets/imagenBusiness.png"
          },
          {
            title: "Calculadora de Precios de Hosting",
            description: "Diseño responsivo de una calculadora de precios de hosting usando Flexbox.",
            link: "https://katitafranco.github.io/flex-cotizador-hosting/",
            image: "./assets/imagenCotizador.png"
          },
          {
            title: "Testimonios Interactivos",
            description: "Página web con un slider de testimonios interactivo, utilizando HTML, CSS y JavaScript nativo con transiciones suaves.",
            link: "https://katitafranco.github.io/slider-testimonios-js/",
            image: "./assets/imagenSliders.png"
          },
          {
            title: "CRUD de Usuarios MERN",
            description: "Aplicación CRUD de usuarios utilizando MongoDB, Mongoose, Express, React, Node.js con animaciones AOS y notificaciones SweetAlert2.",
            link: "https://github.com/katitafranco/crud-mern-stack/tree/master",
            image: "./assets/imagenCRUD2.png"
          }
        ]
      },

      "testimonials": {
        "title": "Testimonios",
        "list": [
          {
            "name": "Veronica Franco",
            "company": "Liris SA",
            "feedback": "Siempre está aprendiendo y mejorando, lo que inspira al equipo.",
            "rating": 5,
            "image": "./assets/person3.jpg",
            "link": "https://www.linkedin.com/in/vero-franco-41162331/"
          },
          {
            "name": "Dover Alvarez",
            "company": "UE Steve Jobs by Genialopolis.",
            "feedback": "Siempre muestra empatía y está dispuesta a apoyar a los demás en el equipo.",
            "rating": 5,
            "image": "./assets/person2.jpg",
            "link": "https://genialopolis.com/"
          },
          {
            "name": "Alfredo Varas",
            "company": "BairesDev",
            "feedback": "Tiene una gran capacidad para generar soluciones creativas y efectivas.",
            "rating": 5,
            "image": "./assets/person4.jpg",
            "link": "https://www.linkedin.com/in/alfredo-varas/"
          },
          {
            "name": "Ramon Chancay",
            "company": "Desarol",
            "feedback": "Katiuska siempre aporta ideas valiosas y es un gran apoyo para el equipo",
            "rating": 5,
            "image": "./assets/person1.jpg",
            "link": "https://www.linkedin.com/in/devrchancay/"
          }
        ]
      },
      "contact": {
        "form": {
          "title": "Contáctame",
          "subtitle": "Puedes enviarme un mensaje a través de este formulario.",
          "placeholders": {
            "firstName": "Tu nombre",
            "lastName": "Tu apellido",
            "email": "Tu correo electrónico",
            "phoneNumber": "Tu número telefónico",
            "topic": "Selecciona un tema",
            "message": "Tu mensaje"
          },
          "topics": {
            "general": "Consulta general",
            "support": "Soporte",
            "feedback": "Comentarios"
          },
          "buttons": {
            "submit": "Enviar"
          },
          "acceptTerms": "Acepto los términos y condiciones.",
          "statusMessages": {
            "success": "¡Mensaje enviado correctamente!",
            "error": "Hubo un error al enviar tu mensaje."
          }
        }
      }
    },
  },
};

i18n
  .use( LanguageDetector )
  .use( initReactI18next )
  .init( {
    resources,
    fallbackLng: "en", // Idioma por defecto
    interpolation: {
      escapeValue: false, // React ya maneja la protección contra XSS
    },
  } );


export default i18n;
