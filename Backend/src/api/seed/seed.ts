import { SeedData } from "../../types/models";

export const seed: SeedData = {
  profile: [
    // ES
    {
      locale: "es",
      name: "Adrián Izquierdo ",
      avatar:
        "https://res.cloudinary.com/ddumhsyl6/image/upload/v1756289125/fotoperfil.jpg",
      title: "Full Stack Developer",
      slogan: "Evolucionando cada día. Aprendiendo, creando, mejorando.",
      bio: "Soy desarrollador Full Stack con formación técnica en electricidad industrial y experiencia previa en entornos donde la precisión, la lógica y la responsabilidad son clave. En los últimos años he volcado ese enfoque en el desarrollo web, aprendiendo a crear soluciones funcionales con tecnologías como JavaScript, TypeScript, React y Node.js. Me gusta construir cosas que funcionen bien, entender cómo mejorar cada día y seguir creciendo en el mundo del desarrollo.",
      links: [
        { icon: "github", url: "https://github.com/Aizq-dev" },
        {
          icon: "linkedin",
          url: "https://linkedin.com/in/adrian-izquierdo-delgado",
        },
        { icon: "gmail", url: "adrizq.dev@gmail.com" },
      ],
    },
    // EN
    {
      locale: "en",
      name: "Adrián Izquierdo ",
      avatar:
        "https://res.cloudinary.com/ddumhsyl6/image/upload/v1756289125/fotoperfil.jpg",
      title: "Full-Stack Developer",
      slogan: "Evolving every day. Learning, building, improving.",
      bio: "I’m a Full-Stack developer with a technical background in industrial electricity and hands-on experience in environments where precision, logic, and accountability are essential. Over the past years I’ve brought that mindset into web development, building functional solutions with JavaScript, TypeScript, React, and Node.js. I enjoy creating things that work well, improving a bit every day, and continuing to grow as a developer.",
      links: [
        { icon: "github", url: "https://github.com/Aizq-dev" },
        {
          icon: "linkedin",
          url: "https://linkedin.com/in/adrian-izquierdo-delgado",
        },
        { icon: "gmail", url: "adrizq.dev@gmail.com" },
      ],
    },
  ],

  projects: [
    // ---------- FRONTEND ----------
    // ES
    {
      locale: "es",
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
    // EN
    {
      locale: "en",
      title: "Portfolio Project 1 — Static Landing Page (HTML + CSS)",
      description:
        "Static landing page built with plain HTML and CSS. The goal was to practice semantic structure, responsive design, and custom styling without frameworks. This project helped me solidify frontend fundamentals and learn how to craft a clean interface from scratch.",
      img: "https://res.cloudinary.com/ddumhsyl6/image/upload/v1756288277/lading-page-img.png",
      gif: "https://res.cloudinary.com/ddumhsyl6/video/upload/v1756288634/landing-page-gif.mp4",
      tech: ["HTML", "CSS"],
      githubUrl:
        "https://github.com/Aizq-dev/Proyecto.Frontend.1-WebResponsive",
      demoUrl: "https://landing-my-first-proyect.netlify.app/",
      stack: "frontend",
      origin: "bootcamp",
    },

    // ES
    {
      locale: "es",
      title: "Product Filter - Catálogo interactivo",
      description:
        "Página web con listado de productos y funcionalidad de filtrado dinámico por nombre y precio, implementada con JavaScript puro. Este proyecto me permitió incorporar lógica de programación al frontend, trabajar con arrays de objetos y manipular el DOM para actualizar el contenido en tiempo real. También reforzó el diseño responsive y el enfoque en la experiencia de usuario.",
      img: "https://res.cloudinary.com/ddumhsyl6/image/upload/v1756288270/filterlist-img.png",
      gif: "https://res.cloudinary.com/ddumhsyl6/video/upload/v1757328441/filterlist-gif.mp4",
      tech: ["JavaScript", "HTML", "CSS"],
      githubUrl: "https://github.com/Aizq-dev/Proyecto.Frontend.2.web.Dinamica",
      demoUrl: "https://filter-working.netlify.app/",
      stack: "frontend",
      origin: "bootcamp",
    },
    // EN
    {
      locale: "en",
      title: "Product Filter — Interactive Catalog",
      description:
        "Product listing with dynamic filtering by name and price using vanilla JavaScript. I added business logic to the frontend, worked with arrays of objects, and manipulated the DOM to update the UI in real time. It also reinforced responsive design and UX focus.",
      img: "https://res.cloudinary.com/ddumhsyl6/image/upload/v1756288270/filterlist-img.png",
      gif: "https://res.cloudinary.com/ddumhsyl6/video/upload/v1757328441/filterlist-gif.mp4",
      tech: ["JavaScript", "HTML", "CSS"],
      githubUrl: "https://github.com/Aizq-dev/Proyecto.Frontend.2.web.Dinamica",
      demoUrl: "https://filter-working.netlify.app/",
      stack: "frontend",
      origin: "bootcamp",
    },

    // ES
    {
      locale: "es",
      title: "NASA Explorer - Consumo de API e interacción dinámica",
      description:
        "Aplicación web que consume la API pública de la NASA para mostrar la imagen del día junto a su descripción. Incluye un selector que permite alternar entre el contenido general de la NASA y las imágenes del rover de Marte. Este proyecto consolidó mis conocimientos en manejo de APIs con fetch, asincronía en JavaScript, y actualización dinámica del DOM. Además, trabajé la presentación visual de datos externos y la mejora de la experiencia de usuario.",
      img: "https://res.cloudinary.com/ddumhsyl6/image/upload/v1756288303/APP-NASA-img.png",
      gif: "https://res.cloudinary.com/ddumhsyl6/video/upload/v1757328429/APP-NASA-gif.mp4",
      tech: ["HTML", "CSS", "Javascript", "VITE", "React", "API REST"],
      githubUrl:
        "https://github.com/Aizq-dev/Proyecto.Frontend.Nasa.React.Basic",
      demoUrl: "https://photosnasa.netlify.app/APOD",
      stack: "frontend",
      origin: "bootcamp",
    },
    // EN
    {
      locale: "en",
      title: "NASA Explorer — Public API & Dynamic Interaction",
      description:
        "Web app that consumes NASA’s public API to display the Picture of the Day with its description. It includes a selector to switch between global NASA content and Mars rover images. This project strengthened my skills in API consumption (fetch), JavaScript async, and dynamic DOM updates, plus presenting external data with a better UX.",
      img: "https://res.cloudinary.com/ddumhsyl6/image/upload/v1756288303/APP-NASA-img.png",
      gif: "https://res.cloudinary.com/ddumhsyl6/video/upload/v1757328429/APP-NASA-gif.mp4",
      tech: ["HTML", "CSS", "Javascript", "VITE", "React", "API REST"],
      githubUrl:
        "https://github.com/Aizq-dev/Proyecto.Frontend.Nasa.React.Basic",
      demoUrl: "https://photosnasa.netlify.app/APOD",
      stack: "frontend",
      origin: "bootcamp",
    },

    // ES
    {
      locale: "es",
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
    // EN
    {
      locale: "en",
      title: "WeatherApp — Real-Time Weather with Geolocation & Forecast",
      description:
        "React app that shows current weather and a multi-day forecast. It uses the browser’s Geolocation API to detect the user’s position and provides a search with autocomplete via Google Places. When you search a city, it displays current conditions and a button to view the forecast. The background changes dynamically based on the weather. I worked on components, state management, and multiple APIs, with Vite for a fast dev setup.",
      img: "https://res.cloudinary.com/ddumhsyl6/image/upload/v1756288311/Weather-App-img.png",
      gif: "https://res.cloudinary.com/ddumhsyl6/video/upload/v1756288613/Weather-app-gif.mp4",
      tech: ["HTML", "CSS", "Javascript", "VITE", "React", "API REST"],
      githubUrl: "https://github.com/Aizq-dev/Proyecto.Frontend.app.weather",
      demoUrl: "https://weatherfewdaysforecast.netlify.app/",
      stack: "frontend",
      origin: "bootcamp",
    },

    // ES
    {
      locale: "es",
      title: "GameHub - Juegos clásicos con gestión de usuarios",
      description:
        "Aplicación desarrollada con React que permite al usuario jugar a Tic Tac Toe, Ahorcado y Sudoku desde una única interfaz. Todos los juegos han sido programados desde cero, salvo el Sudoku, que se carga como dependencia externa y requiere transformación del tablero para mostrarlo de forma visual, controlar qué celdas son editables y validar errores del jugador en tiempo real. Incluye un sistema de registro e inicio de sesión con almacenamiento local para acceder a un marcador de victorias personalizado. El proyecto refuerza mis habilidades en programación lógica, gestión de estado, navegación condicional y persistencia de datos en frontend.",
      img: "https://res.cloudinary.com/ddumhsyl6/image/upload/v1756288319/GamesHUb-img.png",
      gif: "https://res.cloudinary.com/ddumhsyl6/video/upload/v1757328781/GamesHUb-gif.mp4",
      tech: [
        "React",
        "React DOM",
        "React Router DOM",
        "Reactstrap",
        "Sudoku (lib npm)",
        "Vite",
        "ESLint",
        "CSS",
      ],
      githubUrl:
        "https://github.com/Aizq-dev/Proyecto.Frontend.6.GameHub/tree/main",
      demoUrl: "https://gamehubbyadrian.netlify.app/",
      stack: "frontend",
      origin: "bootcamp",
    },
    // EN
    {
      locale: "en",
      title: "GameHub — Classic Games with User Management",
      description:
        "React app to play Tic-Tac-Toe, Hangman, and Sudoku from a single interface. All games were coded from scratch except Sudoku, which is loaded from a dependency and requires transforming the board to render, controlling editable cells, and validating mistakes in real time. It includes sign-up/sign-in with local storage to keep a personalized win scoreboard. This reinforced logical programming, state management, conditional navigation, and persistence in the frontend.",
      img: "https://res.cloudinary.com/ddumhsyl6/image/upload/v1756288319/GamesHUb-img.png",
      gif: "https://res.cloudinary.com/ddumhsyl6/video/upload/v1757328781/GamesHUb-gif.mp4",
      tech: [
        "React",
        "React DOM",
        "React Router DOM",
        "Reactstrap",
        "Sudoku (lib npm)",
        "Vite",
        "ESLint",
        "CSS",
      ],
      githubUrl:
        "https://github.com/Aizq-dev/Proyecto.Frontend.6.GameHub/tree/main",
      demoUrl: "https://gamehubbyadrian.netlify.app/",
      stack: "frontend",
      origin: "bootcamp",
    },

    // ES
    {
      locale: "es",
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
    },
    // EN
    {
      locale: "en",
      title: "React Landing with Unit Tests",
      description:
        "Landing page built with React, focused on unit testing using Vitest and React Testing Library. The goal was to validate components, events, and expected UI behavior with automated tests. I also used styled-components for modular styling and a clean architecture. Vite powered a fast modern dev environment.",
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
    },

    // ---------- BACKEND ----------
    // ES
    {
      locale: "es",
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
    // EN
    {
      locale: "en",
      title: "Vehicle Management REST API (Node.js + MongoDB)",
      description:
        "REST API built with Node.js, Express, and MongoDB to manage vehicles. It provides full CRUD endpoints, filtering by model or brand via query params, and a seeding mechanism on server start to reset data automatically. This project covers backend fundamentals: route design, controllers, and Mongoose modeling.",
      img: "",
      gif: "",
      tech: ["Node.js", "Express", "MongoDB", "Mongoose", "JavaScript"],
      githubUrl: "https://github.com/Aizq-dev/Proyecto-1-Backend",
      demoUrl: "",
      stack: "backend",
      origin: "bootcamp",
    },

    // ES
    {
      locale: "es",
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
    // EN
    {
      locale: "en",
      title: "Full CRUD API — Cars & Brands with Relations",
      description:
        "REST API deployed on Vercel using Express and MongoDB Atlas. It provides full CRUD for vehicles and brands, including relations between both collections. GET endpoints return combined data from linked entities. It also supports advanced features like dynamically linking/unlinking cars to brands through endpoint params. Environment variables are used to keep the DB connection secure.",
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

    // ES
    {
      locale: "es",
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
    // EN
    {
      locale: "en",
      title: "Advanced Vehicle Manager — Node.js + MongoDB + JWT + Cloudinary",
      description:
        "REST API deployed on Render with MongoDB Atlas, providing full CRUD on vehicles and brands, including relations between both entities. It features user authentication via JWT, image uploads with Cloudinary, password validations, rate limiting (50 requests every 3 minutes), and route protection (public GET; protected POST/PUT/DELETE). This project consolidates key concepts like Express middleware, access control, and file handling with Multer.",
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

    // ---------- FULLSTACK ----------
    // ES
    {
      locale: "es",
      title: "Portfolio Full Stack con CMS personalizado y API propia",
      description: `Portfolio Full-Stack en TypeScript. El contenido (perfil y proyectos) se sirve desde MongoDB a través de una API Express propia. El frontend en React + Vite está diseñado desde cero e incluye un formulario de contacto con modal accesible (focus trap, aria), validación (honeypot + teléfono con + opcional y dígitos), y envío de emails mediante Nodemailer (Gmail SMTP) con aviso al administrador y acuse de recibo al contacto.
Implementa multidioma ES/EN: datos localizados en BBDD y i18n para textos de UI con un diccionario y contexto ligero. El switch de idioma es instantáneo (carga ES/EN una vez y filtra en cliente).

Roadmap:
• Botón para descargar CV (sirviendo el fichero “current” desde la API).
• Login de administrador (JWT) y panel para listar/ver/archivar mensajes de contacto (con filtros y paginación).
• Pequeños refinamientos de accesibilidad y metadatos SEO.`,
      img: "",
      gif: "",
      tech: [
        "TypeScript",
        "React",
        "Vite",
        "Tailwind CSS",
        "Context API (estado global)",
        "i18n (diccionario + contexto)",
        "Axios",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "Nodemailer (Gmail SMTP)",
        "REST API",
        "HTML5",
        "CSS3",
        "JWT (admin login · planned)",
      ],

      githubUrl: "https://github.com/Aizq-dev/personal-portfolio-fullstack",
      demoUrl: "",
      stack: "fullstack",
      origin: "personal",
    },
    // EN
    {
      locale: "en",
      title: "Full-Stack Portfolio with Custom CMS & API",
      description: `Full-stack Portfolio in TypeScript. Content (profile & projects) is served from MongoDB via a custom Express REST API. The React + Vite frontend is built from scratch and includes an accessible contact modal (focus trap, ARIA), validation (honeypot + phone sanitization with optional leading “+”), and email delivery through Nodemailer (Gmail SMTP) with admin notification and an auto-reply to the sender.
It implements bilingual ES/EN: localized data in the DB and lightweight i18n for UI strings (dictionary + context). Language switching is instant (both locales are fetched once and selected client-side).

Roadmap:
• Download CV button serving the current file from the API.
• Admin login (JWT) and dashboard to list/view/archive contact messages (with filters & pagination).
• Minor accessibility/SEO refinements.`,
      img: "",
      gif: "",
      tech: [
        "TypeScript",
        "React",
        "Vite",
        "Tailwind CSS",
        "Context API (estado global)",
        "i18n (diccionario + contexto)",
        "Axios",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "Nodemailer (Gmail SMTP)",
        "REST API",
        "HTML5",
        "CSS3",
        "JWT (admin login · planned)",
      ],
      githubUrl: "https://github.com/Aizq-dev/personal-portfolio-fullstack",
      demoUrl: "",
      stack: "fullstack",
      origin: "personal",
    },

    // ---------- PROFESSIONAL ----------
    // ES
    {
      locale: "es",
      title: "Funnel de ventas personalizado en Funnelish",
      description:
        "Creación de un embudo de ventas completo en Funnelish, tomando como base la página de producto del cliente y transformándola en una landing page personalizada. Como segundo paso, se desarrolló un checkout totalmente customizado, integrando selectores de variantes creados con HTML y CSS propios, los cuales interactúan con el sistema nativo de Funnelish (oculto para mantener el diseño). Se añadió una página de agradecimiento coherente con el funnel y se tradujo todo el contenido al neerlandés. La maquetación se adaptó cuidadosamente a cada dispositivo para asegurar un diseño responsive funcional y atractivo tanto en móvil como en escritorio.",
      img: "https://res.cloudinary.com/ddumhsyl6/image/upload/v1756898250/funelish_chekout_img.png",
      gif: "https://res.cloudinary.com/ddumhsyl6/video/upload/v1756898254/funnelis_landingpage_gif.mp4",
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
    // EN
    {
      locale: "en",
      title: "Custom Sales Funnel in Funnelish",
      description:
        "I built a complete sales funnel in Funnelish, starting from the client’s product page and turning it into a tailored landing page. Next, I developed a fully custom checkout, integrating variant selectors built with my own HTML/CSS that interact with Funnelish’s native system (kept hidden to preserve the UI). I added a thank-you page consistent with the funnel and translated all content into Dutch. The layout was carefully adapted to each device to ensure a responsive, functional, and attractive design on both mobile and desktop.",
      img: "https://res.cloudinary.com/ddumhsyl6/image/upload/v1756898250/funelish_chekout_img.png",
      gif: "https://res.cloudinary.com/ddumhsyl6/video/upload/v1756898254/funnelis_landingpage_gif.mp4",
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "Funnelish",
        "Responsive Design",
        "Sales Funnel",
      ],
      githubUrl: "",
      demoUrl: "https://izbzridkik.myfunnelish.com/landing-page",
      stack: "frontend",
      origin: "professional",
    },
  ],
};
