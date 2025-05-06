export interface Usuario {
  nombre: string;
  apellido: string;
  edad: number | null;
  email: string;
  telefono: string;
  direccion: string;
  uuid?: string
}