
export interface TourPoint {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'Historia' | 'Naturaleza' | 'Místico';
  duration: string;
  price: string;
  difficulty: 'Fácil' | 'Moderado' | 'Aventurero';
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export type Page = 'inicio' | 'ruta' | 'nosotros' | 'contacto' | 'legal';

export interface PreFilledBooking {
  tour?: string;
  personas?: number;
  fecha?: Date;
  nombre?: string;
}

export interface BookingData {
  nombre: string;
  email: string;
  fecha: string;
  personas: number;
  tour: string;
}

export interface Reclamo {
  id: string;
  fecha: string;
  detalle: string;
  tipo: 'Queja' | 'Reclamo';
}
