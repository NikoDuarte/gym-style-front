import { Injectable } from '@angular/core';
import { _carrusel, _data_about, _data_clases } from '../interface/interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //* |-> Imagenes y titulos del carrucel de imagenes
  public dataCarrusel: _carrusel[] = [
    {
      title: 'GymStyle',
      img: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000'
    },
    {
      title: 'GymStyle',
      img: 'https://images.pexels.com/photos/863926/pexels-photo-863926.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
    },
    {
      title: 'GymStyle',
      img: 'https://images.pexels.com/photos/917653/pexels-photo-917653.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000'
    }
  ]

  //* |-> Informacion de nosotros sentralizada
  public aboutData: _data_about[] = [
    {
      title: 'Nuestro proposito',
      icon: 'bx bx-message-alt',
      descr: 'Educar y desarrollar golbalmente la salud de sus clientes ha sido la tarea mas importante del Gimnasio, asesorar en alcanzar un estilo de vida saludable y trabajar por el bienestar de la gente que se encuentra en su entorno inmediato en diferentes clasese y rutinas.'
    },
    {
      title: 'Entrenamientos y equipos',
      icon: 'bx bx-dumbbell',
      descr: 'En GYMSTYLE los entrenamientos son pensados y personalizados de acuerdo a los objetivos de cada persona. Todos los centros de acondicionamiento y preparacion fisico cuentan con equipos de alta calidad y tecnologia, diseñados para mejorar tu rendimiento y que entrenes de forma segura.'
    },
    {
      title: 'Facilidades',
      icon: 'bx bxs-shapes',
      descr: 'Pensando en tu comodidad, contamos con diferentes  servicios en linea como inscripcion rapida, agendamiento de citas transferencia de sedes y cambio de plan. Ademas del acompañamiento de nuestros profesores de planta. tendras acceso a nuestro Entrenador Virtual para que entrenes de forma autonoma.'
    },
    {
      title: 'Accesibilidad',
      icon: 'bx bx-brain',
      descr: 'Nuestra mision es entregar fitness de alta calidad, haciendolo accesible para todos. Es por eso que todos nuestros centros de acomodamiento y preparacion fisica - CAPF cuentan con la tecnologia e instalaciones adecuadas para satisfacer las necesidades de nuestro usuario.'
    }
  ]

  constructor() { }
}
