import { SeedData } from "../../types/models";
export const seed: SeedData = {
  profile: [
    {
      name: "Adrián Izquierdo ",
      avatar:
        "https://res.cloudinary.com/ddumhsyl6/image/upload/v1756289125/fotoperfil.jpg",
      title: "Full Stack Developer",
      slogan: "Evolucionando cada día. Aprendiendo, creando, mejorando.",
      bio: "Soy desarrollador Full Stack con formación técnica en electricidad industrial y experiencia previa en entornos donde la precisión, la lógica y la responsabilidad son clave. En los últimos años he volcado ese enfoque en el desarrollo web, aprendiendo a crear soluciones funcionales con tecnologías como JavaScript, TypeScript, React y Node.js. Me gusta construir cosas que funcionen bien, entender cómo mejorar cada día y seguir creciendo en el mundo del desarrollo.",
      links: {
        github: {
          url: "https://github.com/Aizq-dev",
          svg: "https://res.cloudinary.com/ddumhsyl6/image/upload/v1757006584/github.svg.svg"
        },
        linkedin: {
          url: "https://linkedin.com/in/adrian-izquierdo-delgado",
          svg: "https://res.cloudinary.com/ddumhsyl6/image/upload/v1757006584/linkedin.svg.svg"
        },
        gmail: { email: "adrizq.dev@gmail.com", svg:"https://res.cloudinary.com/ddumhsyl6/image/upload/v1757007360/email.svg"}
      },
  
    },
  ],

  projects: [
    //primero frontend
    {
      title: "Portfolio Proyecto 1 - Landing Page Estática (HTML + CSS)",
      description:
        "Maquetación de una landing page estática utilizando únicamente HTML y CSS. El objetivo fue aplicar principios básicos de estructura semántica, diseño responsive y estilos personalizados sin frameworks. Este proyecto me permitió afianzar las bases del desarrollo frontend y comprender cómo construir una interfaz limpia desde cero.",
      img: "https://res.cloudinary.com/ddumhsyl6/image/upload/v1756288277/lading-page-img.png",
      gif: "https://res.cloudinary.com/ddumhsyl6/video/upload/v1756288634/landing-page-gif.mp4",
      tech: ["HTML", "CSS"],
      githubUrl:
        "https://github.com/Aizq-dev/Proyecto.Frontend.1-WebResponsive",
      demoUrl: "https://landing-my-first-proyect.netlify.app/",
      stack: "frontend",
      origin: "bootcamp",
    },
    {
      title: "Product Filter - Catálogo interactivo",
      description:
        "Página web con listado de productos y funcionalidad de filtrado dinámico por nombre y precio, implementada con JavaScript puro. Este proyecto me permitió incorporar lógica de programación al frontend, trabajar con arrays de objetos y manipular el DOM para actualizar el contenido en tiempo real. También reforzó el diseño responsive y el enfoque en la experiencia de usuario.",
      img: "https://res.cloudinary.com/ddumhsyl6/image/upload/v1756288270/filterlist-img.png",
      gif: "https://res.cloudinary.com/ddumhsyl6/image/upload/v1756288197/filterlist-gif.gif",
      tech: ["JavaScript", "HTML", "CSS"],
      githubUrl: "https://github.com/Aizq-dev/Proyecto.Frontend.2.web.Dinamica",
      demoUrl: "https://filter-working.netlify.app/",
      stack: "frontend",
      origin: "bootcamp",
    },
    {
      title: "NASA Explorer - Consumo de API e interacción dinámica",
      description:
        "Aplicación web que consume la API pública de la NASA para mostrar la imagen del día junto a su descripción. Incluye un selector que permite alternar entre el contenido general de la NASA y las imágenes del rover de Marte. Este proyecto consolidó mis conocimientos en manejo de APIs con fetch, asincronía en JavaScript, y actualización dinámica del DOM. Además, trabajé la presentación visual de datos externos y la mejora de la experiencia de usuario.",
      img: "https://res.cloudinary.com/ddumhsyl6/image/upload/v1756288303/APP-NASA-img.png",
      gif: "https://res.cloudinary.com/ddumhsyl6/image/upload/v1756288305/APP-NASA-gif.gif",
      tech: ["HTML", "CSS", "Javascript", "VITE", "React", "API REST"],
      githubUrl:
        "https://github.com/Aizq-dev/Proyecto.Frontend.Nasa.React.Basic",
      demoUrl: "https://photosnasa.netlify.app/APOD",
      stack: "frontend",
      origin: "bootcamp",
    },
    {
      title:
        "WeatherApp - Clima en tiempo real con geolocalización y predicción extendida",
      description:
        "Aplicación web desarrollada con React que muestra el clima actual y la previsión de varios días. Utiliza la API de geolocalización del navegador para detectar la ubicación del usuario y ofrece también un buscador con autocompletado gracias a la API de Google Places. Al buscar una ciudad, se muestra el clima actual y un botón permite consultar la previsión futura. El fondo de la app cambia dinámicamente según el clima. Este proyecto me permitió trabajar con componentes, gestión de estado y consumo de múltiples APIs, todo estructurado con Vite para optimizar el entorno de desarrollo.",
      img: "https://res.cloudinary.com/ddumhsyl6/image/upload/v1756288311/Weather-App-img.png",
      gif: "https://res.cloudinary.com/ddumhsyl6/video/upload/v1756288613/Weather-app-gif.mp4",
      tech: ["HTML", "CSS", "Javascript", "VITE", "React", "API REST"],
      githubUrl: "https://github.com/Aizq-dev/Proyecto.Frontend.app.weather",
      demoUrl: "https://weatherfewdaysforecast.netlify.app/",
      stack: "frontend",
      origin: "bootcamp",
    },
    {
      title: "GameHub - Juegos clásicos con gestión de usuarios",
      description:
        "Aplicación desarrollada con React que permite al usuario jugar a Tic Tac Toe, Ahorcado y Sudoku desde una única interfaz. Todos los juegos han sido programados desde cero, salvo el Sudoku, que se carga como dependencia externa y requiere transformación del tablero para mostrarlo de forma visual, controlar qué celdas son editables y validar errores del jugador en tiempo real. Incluye un sistema de registro e inicio de sesión con almacenamiento local para acceder a un marcador de victorias personalizado. El proyecto refuerza mis habilidades en programación lógica, gestión de estado, navegación condicional y persistencia de datos en frontend.",
      img: "https://res.cloudinary.com/ddumhsyl6/image/upload/v1756288321/GamesHUb-gif.gif",
      gif: "https://res.cloudinary.com/ddumhsyl6/image/upload/v1756288319/GamesHUb-img.png",
      tech: ["HTML", "CSS"],
      githubUrl:
        "https://github.com/Aizq-dev/Proyecto.Frontend.6.GameHub/tree/main",
      demoUrl: "https://gamehubbyadrian.netlify.app/",
      stack: "frontend",
      origin: "bootcamp",
    },
    {
      title: "Landing React con test unitarios",
      description:
        "Proyecto de landing page desarrollada con React, centrado en la aplicación de testing unitario con la librería Vitest y React Testing Library. El objetivo principal fue practicar la validación de componentes, eventos y comportamiento esperado de la interfaz mediante pruebas automatizadas. Además, se utilizó styled-components para aplicar estilos modulares y mantener una arquitectura clara. El entorno fue configurado con Vite para un flujo de desarrollo moderno y eficiente.",
      img: "https://res.cloudinary.com/ddumhsyl6/image/upload/v1756288344/pistachio-img.png",
      gif: "https://res.cloudinary.com/ddumhsyl6/video/upload/v1756288665/PISTACCHIO-gif.mp4",
      tech: [
        "React",
        "JavaScript",
        "Vite",
        "Styled-components",
        "Vitest",
        "React Testing Library",
        "JSDOM",
        "ESLint",
      ],
      githubUrl: "https://github.com/Aizq-dev/Proyecto.Frontend.UnitTestDemo",
      demoUrl: "https://pistacchio.netlify.app/",
      stack: "frontend",
      origin: "bootcamp",
    }, //A partir de aqui Backend
    {
      title: "API REST de Gestión de Vehículos (Node.js + MongoDB)",
      description:
        "API REST construida con Node.js, Express y MongoDB para la gestión de vehículos. Incluye endpoints para operaciones CRUD completas, soporta filtros por modelo o marca mediante query parameters, y utiliza un sistema de seed al iniciar el servidor para resetear los datos de forma automática. Este proyecto me permitió aplicar conceptos clave de desarrollo backend, diseño de rutas, controladores y uso de Mongoose para modelar la base de datos.",
      img: "",
      gif: "",
      tech: ["Node.js", "Express", "MongoDB", "Mongoose", "JavaScript"],
      githubUrl: "https://github.com/Aizq-dev/Proyecto-1-Backend",
      demoUrl: "",
      stack: "backend",
      origin: "bootcamp",
    },
    {
      title: "API Full CRUD – Autos y marcas con relaciones",
      description:
        "API REST desplegada en Vercel con Express y MongoDB Atlas. Permite la gestión completa de vehículos y marcas mediante operaciones CRUD, incluyendo relaciones entre ambas colecciones. Las respuestas de tipo GET devuelven información combinada de las entidades vinculadas. Incorpora funcionalidades avanzadas como la vinculación/desvinculación dinámica de coches a marcas a través de parámetros en los endpoints. Utiliza variables de entorno para mantener la seguridad de la conexión a base de datos.",
      img: "",
      gif: "",
      tech: [
        "Node.js",
        "Express",
        "MongoDB Atlas",
        "Mongoose",
        "dotenv",
        "JavaScript",
        "Vercel (deploy)",
      ],
      githubUrl: "https://github.com/Aizq-dev/Proyecto-2-Backend",
      demoUrl:
        "https://proyecto6-backend-psg7odcpb-ragnarks-projects.vercel.app/api/autos",
      stack: "backend",
      origin: "bootcamp",
    },
    {
      title:
        "Gestor avanzado de vehículos – Node.js + MongoDB + JWT + Cloudinary",
      description:
        "API REST desplegada en Render con MongoDB Atlas, que permite operaciones CRUD completas sobre vehículos y marcas, incluyendo relaciones entre ambas entidades. Incorpora autenticación de usuarios mediante JWT, subida de imágenes con Cloudinary, validaciones de contraseña, rate limiting (50 peticiones cada 3 minutos) y seguridad de rutas (GET públicas, POST/PUT/DELETE protegidas). Este proyecto consolida conceptos clave como middleware de Express, control de acceso, y gestión de archivos con Multer.",
      img: "",
      gif: "",
      tech: [
        "Node.js",
        "Express",
        "MongoDB Atlas",
        "Mongoose",
        "JWT (jsonwebtoken)",
        "bcrypt",
        "Cloudinary",
        "Multer",
        "CORS",
        "dotenv",
        "express-rate-limit",
        "JavaScript",
        "Render (deploy)",
      ],
      githubUrl: "https://github.com/Aizq-dev/Proyect-3-backend",
      demoUrl: "https://proyect-7-backend.onrender.com/api/autos",
      stack: "backend",
      origin: "bootcamp",
    },
    // A partir de aqui fullstack
    {
      title: "Portfolio Full Stack con CMS personalizado y API propia",
      description:
        "Proyecto en desarrollo de portfolio profesional Full Stack desarrollado con TypeScript. Toda la información de los proyectos se gestiona desde una base de datos en MongoDB, consultada a través de una API propia. El frontend está diseñado desde cero e incluye un formulario de contacto funcional. Se encuentra en proceso de integración un sistema de login para administrador, que permitirá modificar los proyectos directamente desde la interfaz. Este proyecto demuestra mis habilidades completas como desarrollador Full Stack, tanto en frontend como en backend, usando herramientas modernas y código tipado.",
      img: "",
      gif: "",
      tech: [
        "TypeScript",
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "Vite",
        "HTML5",
        "CSS3",
        "API REST",
        "JWT (login admin - en desarrollo)",
      ],
      githubUrl: "https://github.com/Aizq-dev/personal-portfolio-fullstack",
      demoUrl: "",
      stack: "fullstack",
      origin: "personal",
    },
    // A partir de aqui Funnleish
    {
      title: "Funnel de ventas personalizado en Funnelish",
      description:
        "Creación de un embudo de ventas completo en Funnelish, tomando como base la página de producto del cliente y transformándola en una landing page personalizada. Como segundo paso, se desarrolló un checkout totalmente customizado, integrando selectores de variantes creados con HTML y CSS propios, los cuales interactúan con el sistema nativo de Funnelish (oculto para mantener el diseño). Se añadió una página de agradecimiento coherente con el funnel y se tradujo todo el contenido al neerlandés. La maquetación se adaptó cuidadosamente a cada dispositivo para asegurar un diseño responsive funcional y atractivo tanto en móvil como en escritorio.",
      img: "https://res.cloudinary.com/ddumhsyl6/image/upload/v1756898250/funelish_chekout_img.png",
      gif: "https://player.cloudinary.com/embed/?cloud_name=ddumhsyl6&public_id=funnelis_landingpage_gif&profile=cld-looping",
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "Funnelish",
        "Responsive Design",
        "Embudo de ventas",
      ],
      githubUrl: "",
      demoUrl: "https://izbzridkik.myfunnelish.com/landing-page",
      stack: "frontend",
      origin: "professional",
    },
  ],
};
