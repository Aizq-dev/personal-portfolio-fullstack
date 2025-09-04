/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // activa modo oscuro con <html class="dark">
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Fondos y superficies
        background: {
          DEFAULT: "#f8fafc", // modo claro
          dark: "#0b1220",   // modo oscuro elegante
          surface: "#111827" // tarjetas en dark
        },
        text: {
          DEFAULT: "#111827", // texto principal en light
          muted: "#6b7280",   // gris medio para secundarios
          light: "#e5e7eb"    // texto principal en dark
        },
        // Acentos TEAL (verde-azulado)
        primary: {
          50:  "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488", // tono base recomendado
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a"
        },
        // Secundario: azul suave para detalles
        secondary: {
          400: "#93c5fd",
          600: "#2563eb"
        },
        // Líneas y bordes
        line: "#e5e7eb"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Segoe UI", "Roboto", "sans-serif"],
        display: ["Raleway", "Inter", "sans-serif"]
      },
      maxWidth: {
        content: "72rem" // ~1152px contenedor central
      }
    }
  },
  plugins: [],
}
