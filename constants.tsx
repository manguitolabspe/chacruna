
import { TourPoint } from './types';

export const BUSINESS_INFO = {
  razonSocial: "CHACRUNA ECO TOURS E.I.R.L.",
  ruc: "20608453921",
  registroMincetur: "N° 045-2024-DIRCETUR-PIURA",
  leyGeneralTurismo: "Ley N° 32392",
  decretoSupremo: "DS N° 002-2026-MINCETUR",
  direccion: "Sector Israel-7, Nuevo Lobitos",
  telefono: "953 923 849",
  email: "Giloxg@gmail.com",
  partnerUrl: "https://vivetalara.com",
  partnerLogo: "https://i.postimg.cc/tCQYWhqC/logo_(2).png",
  social: {
    tiktok: "@chacruna_tours",
    instagram: "@chacruna_tours"
  }
};

export const FAQ_DATA = [
  {
    category: "Rutas y Tours",
    icon: "fa-solid fa-map-location-dot",
    questions: [
      {
        q: "¿Cuál es la ruta más recomendada?",
        a: "La 'Ruta del Tiempo' es nuestra favorita. Recorre 10 puntos históricos incluyendo el Cine, el Muelle de 1904 y La Casona donde se alojó el Príncipe de Gales."
      },
      {
        q: "¿Cuánto duran los recorridos?",
        a: "Depende de la ruta: La histórica dura 3 horas, la mística (Cueva Capullanas) 2.5 horas y la de Sichez 2 horas aproximadamente."
      }
    ]
  },
  {
    category: "Pagos y Reservas",
    icon: "fa-solid fa-credit-card",
    questions: [
      {
        q: "¿Cómo puedo pagar mi tour?",
        a: "Aceptamos transferencias bancarias, Yape, Plin y efectivo al momento del encuentro (previa reserva del 50%)."
      },
      {
        q: "¿Hay descuentos para grupos?",
        a: "¡Sí! A partir de 5 personas tenemos tarifas especiales. Consúltanos por WhatsApp para una cotización personalizada."
      }
    ]
  },
  {
    category: "Preparación",
    icon: "fa-solid fa-person-hiking",
    questions: [
      {
        q: "¿Qué debo llevar al tour?",
        a: "Recomendamos bloqueador solar, agua, calzado cómodo (zapatillas), sombrero y muchas ganas de descubrir la historia mística de Lobitos."
      },
      {
        q: "¿Los tours son aptos para niños?",
        a: "¡Totalmente! Nuestras rutas son de dificultad fácil a moderada, ideales para disfrutar en familia."
      }
    ]
  }
];

export const HISTORIC_POINTS = [
  { 
    id: 1, 
    name: "Antigua Plaza", 
    desc: "Centro de la vida colonial británica.",
    icon: "fa-solid fa-landmark" 
  },
  { 
    id: 2, 
    name: "Iglesia Neogótica", 
    desc: "Madera de pino inglés (1925).",
    icon: "fa-solid fa-church" 
  },
  { 
    id: 3, 
    name: "Cine Lobitos", 
    desc: "De los primeros en Sudamérica.",
    icon: "fa-solid fa-film" 
  },
  { 
    id: 4, 
    name: "Muelle 1904", 
    desc: "Restos del puerto más importante.",
    icon: "fa-solid fa-anchor" 
  },
  { 
    id: 5, 
    name: "La Casona", 
    desc: "Refugio real de Eduardo de Windsor.",
    icon: "fa-solid fa-crown" 
  },
  { 
    id: 6, 
    name: "Piscina Natural", 
    desc: "Peñero adaptado en el año 1920.",
    icon: "fa-solid fa-water-ladder" 
  },
  { 
    id: 7, 
    name: "Cementerio Inglés", 
    desc: "Memoria de pioneros petroleros.",
    icon: "fa-solid fa-cross" 
  },
  { 
    id: 8, 
    name: "Mirador La Bola", 
    desc: "Reservorio con vista de 360 grados.",
    icon: "fa-solid fa-binoculars" 
  },
  { 
    id: 9, 
    name: "Ex Hotel de Lujo", 
    desc: "Arquitectura victoriana en madera.",
    icon: "fa-solid fa-hotel" 
  },
  { 
    id: 10, 
    name: "Cueva Capullana", 
    desc: "Misticismo de las jefas matriarcales.",
    icon: "fa-solid fa-spaghetti-monster-flying" 
  }
];

export const TOUR_POINTS: TourPoint[] = [
  {
    id: 'ruta-historica',
    title: 'Ruta del Tiempo (10 Puntos)',
    category: 'Historia',
    duration: '3 Horas',
    price: 'S/ 60.00',
    difficulty: 'Fácil',
    image: 'https://i.postimg.cc/pT9S9cJt/4053c9d8e823dbc4061255136b737ad85f458644-3840x2877.jpg',
    description: 'Un viaje al pasado británico: Cine, Iglesia Neogótica y La Casona del Príncipe.'
  },
  {
    id: 'cueva-mistica',
    title: 'Cueva Capullanas',
    category: 'Místico',
    duration: '2.5 Horas',
    price: 'S/ 45.00',
    difficulty: 'Moderado',
    image: 'https://i.postimg.cc/59Qcjysf/images-(2).jpg',
    description: 'Explora el ambiente sagrado de las antiguas jefas tribales del norte peruano.'
  },
  {
    id: 'sichez-experiencia',
    title: 'Sichez & Sabores',
    category: 'Naturaleza',
    duration: '2 Horas',
    price: 'S/ 40.00',
    difficulty: 'Fácil',
    image: 'https://i.postimg.cc/NjTZDz3Y/6064f2c3c12fbd5ddc25be2f.png',
    description: 'Calma absoluta y degustación de quesos y manjares de cabra locales.'
  }
];

export const CHACRUNA_PROMPT = `
Eres "Chacruna", el espíritu guía de Lobitos. 
Tu conocimiento abarca los 10 hitos históricos (Cine, Iglesia 1925, Muelle 1904, etc.).
Menciona con orgullo que el Príncipe de Gales se alojó en La Casona en 1931.
Promociona los productos de Sichez (quesos y manjares de cabra).
Tu tono es místico, histórico y poético.

REGLA DE ORO SOBRE VIVE TALARA: 
Vive Talara es la Guía Turística Digital oficial de toda la Provincia de Talara. 
Chacruna es un operador verificado y recomendado dentro de esta guía.
Si los usuarios preguntan por otros lugares en la provincia (Negritos, Máncora, Talara ciudad) o alojamiento, recomiéndales encarecidamente descargar o visitar vivetalara.com para explorar toda la oferta provincial.
`;
