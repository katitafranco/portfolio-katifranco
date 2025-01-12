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
        button: "View In GitHub",
        projects: [
          {
            title: "SPA Website",
            description: "Responsive website for an SPA with a contact form, developed with HTML and CSS, attractive and functional design.",
            link: "https://katitafranco.github.io/web_spa_responsive/index.html",
            image: "../assets/imagenSPA.png"
          },
          {
            title: "Tourism Website",
            description: "Responsive web app for exploring tourist destinations, using HTML, CSS, and SASS.",
            link: "https://katitafranco.github.io/dynamic-travel-sass/dist/index.html",
            image: "../assets/imagenTurismo.png", // Cambia por la imagen de tu proyecto

          },
          {
            "title": "Business Agency",
            "description": "Responsive website for a business agency with HTML, CSS, JS, animations, and video.",
            "link": "https://katitafranco.github.io/biz-agency-site/",
            "image": "../assets/imagenBusiness.png",

          },
          {
            "title": "Hosting Price Calculator",
            "description": "Responsive layout of a hosting price calculator using Flexbox.",
            "link": "https://katitafranco.github.io/flex-cotizador-hosting/",
            "image": "../assets/imagenCotizador.png", // Cambia por la imagen de tu proyecto

          },
          {
            title: "Interactive Testimonials",
            description: "Web page with an interactive testimonial slider, using HTML, CSS, and native JavaScript with smooth transitions.",
            link: "https://katitafranco.github.io/slider-testimonios-js/",
            image: "../assets/imagenSliders.png",
          },
          {
            title: "MERN User CRUD",
            description: "User CRUD app using MongoDB, Mongoose, Express, React, Node.js with AOS animations and SweetAlert2 notifications.",
            link: "https://github.com/katitafranco/crud-mern-stack/tree/master",
            image: "../assets/imagenCRUD2.png",
          },
        ],
      },
      "testimonials": {
        "title": "Testimonials",
        "list": [
          {
            "name": "Daniel Russell",
            "company": "Starbucks",
            "feedback": "This service exceeded my expectations. Highly recommend it to everyone.",
            "rating": 5,
            "image": "../assets/person1.jpg",
            "link":""
          },
          {
            "name": "Kristin Watson",
            "company": "Louis Vuitton",
            "feedback": "Amazing experience! The design and functionality are top-notch.",
            "rating": 5,
            "image": "../assets/person2.jpg",
            "link":""
          },
          {
            "name": "Kathryn Murphy",
            "company": "McDonald's",
            "feedback": "Outstanding quality and attention to detail. Couldn't be happier.",
            "rating": 5,
            "image": "../assets/person3.jpg",
            "link":""
          },
          {
            "name": "Ronald Richards",
            "company": "Apple Inc.",
            "feedback": "Great support and incredible performance. Worth every penny.",
            "rating": 5,
            "image": "../assets/person4.jpg",
            "link":""
          }
        ]
      },
      "contact": {
        "form": {
          "title": "Contact Me",
          "subtitle":"Feel free to send me a message using this form.",
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
        button: "Ingresa a mi Github",
        projects: [
          {
            title: "SPA Website",
            description: "Responsive web for a SPA with an attractive design and contact form, using HTML and CSS.",
            link: "https://katitafranco.github.io/web_spa_responsive/index.html",
            image: "./src/assets/imagenSPA.png",
          },
          {
            title: "Tourism Website",
            description: "Responsive web to explore tourist destinations, using HTML, CSS, and SASS.",
            link: "https://katitafranco.github.io/dynamic-travel-sass/dist/index.html",
            image: "./src/assets/imagenTurismo.png", // Replace with your project's image
          },
          {
            title: "Business Agency",
            description: "Responsive web with HTML, CSS, JS, animations, and video.",
            link: "https://katitafranco.github.io/biz-agency-site/",
            image: "./src/assets/imagenBusiness.png",
          },
          {
            title: "Hosting Quotation Tool",
            description: "Responsive layout for a hosting quotation tool using Flexbox.",
            link: "https://katitafranco.github.io/flex-cotizador-hosting/",
            image: "./src/assets/imagenCotizador.png", // Replace with your project's image
          },
          {
            title: "Interactive Testimonials",
            description: "Interactive testimonial slider using HTML, CSS, and JavaScript.",
            link: "https://katitafranco.github.io/slider-testimonios-js/",
            image: "./src/assets/imagenSliders.png",
          },
          {
            title: "MERN User CRUD",
            description: "User CRUD application with MongoDB, Express, React, Node.js, AOS, and SweetAlert2.",
            link: "https://github.com/katitafranco/crud-mern-stack/tree/master",
            image: "./src/assets/imagenCRUD2.png",
          },
        ],
      },
      "testimonials": {
        "title": "Testimonios",
        "list": [
          {
            "name": "Daniel Russell",
            "company": "Starbucks",
            "feedback": "Este servicio superó mis expectativas. Lo recomiendo a todos.",
            "rating": 5,
            "image": "../assets/person1.jpg",
            "link":""
          },
          {
            "name": "Kristin Watson",
            "company": "Louis Vuitton",
            "feedback": "¡Una experiencia increíble! El diseño y la funcionalidad son excepcionales.",
            "rating": 5,
            "image": "../assets/person2.jpg",
            "link":""
          },
          {
            "name": "Kathryn Murphy",
            "company": "McDonald's",
            "feedback": "Excelente calidad y atención al detalle. No podría estar más feliz.",
            "rating": 5,
            "image": "../assets/person3.jpg",
            "link":""
          },
          {
            "name": "Ronald Richards",
            "company": "Apple Inc.",
            "feedback": "Gran soporte e increíble rendimiento. Vale cada centavo.",
            "rating": 5,
            "image": "../assets/person4.jpg",
            "link":""
          }
        ]
      },
      "contact": {
        "form": {
          "title": "Contáctame",
          "subtitle":"Puedes enviarme un mensaje a través de este formulario.",
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
