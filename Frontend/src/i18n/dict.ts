
export const DICT = {
  es: {
    // Navbar / secciones
    nav_about: "Sobre mí",
    nav_experience: "Experiencia laboral",
    nav_personal_projects: "Proyectos Personales",
    nav_bootcamp_projects: "Proyectos Bootcamp",

    section_experience: "Experiencia profesional",
    section_personal_projects: "Proyectos Personales",
    section_frontend: "Frontend",
    section_fullstack_work: "Fullstack (Trabajo)",

    // Acciones
    action_view_repo: "Ver Repositorio",
    action_live_demo: "Live Demo",

    // Switch idioma
    lang_switch_to_en: "Switch to English",
    lang_switch_to_es: "Cambiar a Español",

    // Form contacto
    
    contact_title: "Contactar",
    contact_subtitle: "Rellena el formulario y te responderé lo antes posible.",
    form_name: "Nombre",
    form_company: "Empresa",
    form_phone: "Teléfono",
    form_email: "Email",
    form_message: "Mensaje",
    form_optional: "opcional",

    ph_name: "Tu nombre",
    ph_company: "Tu empresa",
    ph_phone: "+34 600 000 000",
    ph_email: "tu@email.com",
    ph_message: "Cuéntame en qué puedo ayudarte...",

    btn_cancel: "Cancelar",
    btn_send: "Enviar",

    // Mensajes comunes
    loading: "Cargando...",
    no_data: "Sin datos",
    msg_required: "Por favor, completa nombre, email y mensaje.",
    msg_send_ok: "¡Mensaje enviado! Gracias por contactar.",
    msg_send_err: "No se pudo enviar. Inténtalo de nuevo.",

    // ARIA
    aria_email: "Email",
  },

  en: {
    nav_about: "About me",
    nav_experience: "Work experience",
    nav_personal_projects: "Personal Projects",
    nav_bootcamp_projects: "Bootcamp Projects",

    section_experience: "Professional Experience",
    section_personal_projects: "Personal Projects",
    section_frontend: "Frontend",
    section_fullstack_work: "Full-Stack (Work)",

    action_view_repo: "View Repository",
    action_live_demo: "Live Demo",

    lang_switch_to_en: "Switch to English",
    lang_switch_to_es: "Switch to Spanish",

    contact_title: "Contact",
    contact_subtitle: "Fill in the form and I'll get back to you as soon as possible.",
    form_name: "Name",
    form_company: "Company",
    form_phone: "Phone",
    form_email: "Email",
    form_message: "Message",
    form_optional: "optional",

    ph_name: "Your name",
    ph_company: "Your company",
    ph_phone: "+34 600 000 000",
    ph_email: "you@email.com",
    ph_message: "Tell me how I can help…",

    btn_cancel: "Cancel",
    btn_send: "Send",

    loading: "Loading...",
    no_data: "No data",
    msg_required: "Please fill in name, email and message.",
    msg_send_ok: "Message sent. Thanks for reaching out!",
    msg_send_err: "Couldn't send. Please try again.",

    aria_email: "Email",
  },
} as const;

export type Locale = keyof typeof DICT;
export type I18nKey = keyof typeof DICT["es"];
