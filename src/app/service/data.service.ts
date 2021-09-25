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
      img: 'https://images.pexels.com/photos/703016/photo-703016.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000'
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

  //* |-> Informacion de nosotros sentralizada
  public clasesData: _data_clases[] = [
    {
      title: 'YOGA',
      img: '../../../assets/img/yoga.jpg',
      descripcion: 'El yoga es una disciplina que se originó en la India y te ayuda a conectar tu cuerpo y tu mente. El tipo que nosotros impartimos es el hatha yoga que es el más difundido en todo el mundo, conocido por sus ásanas o posiciones corporales. Se trata de un sistema de posturas físicas cuyo propósito es mantenernos en forma, aumentar nuestra flexibilidad y además lograr la serenidad física y mental, donde se enfatiza mucho la relajación. Las clases tienen una duración de 45 minutos y comienzan y terminan con ejercicios de relajación.'
    },
    {
      title: 'BOXEO',
      img: '../../../assets/img/boxeo.png',
      descripcion: 'El Boxeo o Box, como también se lo denomina popularmente, es un deporte de contacto en el cual se enfrentan dos individuos que lucharán únicamente con sus puños enfundados en unos guantes especiales con los cuales se golpearán y cuya principal condición será golpear al contrario por encima de la cintura dentro de un cuadrilátero que se encuentra especialmente diseñado para tal fin. Este deporte de caracter olímpico consta de breves secuencias de lucha denominadas asaltos o rounds en las cuales los boxeadores luchan entre sí, pero siempre siguiendo el riguroso mandato que impone el reglamento que será aplicado por el árbitro quien sigue de cerca cada uno de los movimientos y los golpes dentro del cuadrilátero junto a los luchadores.'
    },
    {
      title: 'TRX',
      img: '../../../assets/img/trx.jpg',
      descripcion: 'El TRX es un sistema de entrenamiento basado en la realización de ejercicios en suspensión, donde en las actividades que desempeña el deportista, las manos o los pies se encuentran sostenidos en un punto de anclaje mientras que la otra parte del cuerpo está apoyada en el suelo. En esta disciplina aprovechando el peso del propio cuerpo se consigue ejercitar toda la musculatura corporal. Para entrenar se utiliza una cinta de nylon resistente y regulable que, por un lado, tiene un punto de anclaje en un extremo y soportes para los pies y empuñaduras, por el otro. Esos sistemas de anclaje se pueden sujetar en casi cualquier punto, lo que favorece que el TRX se pueda realizar en cualquier lugar.'
    },
    {
      title: 'ENTRENAMIENTO FUNCIONAL',
      img: '../../../assets/img/entrenamientof.jpg',
      descripcion: 'El entrenamiento funcional es una gama de ejercicios físicos que te permiten entrenar tus músculos para trabajar juntos y prepararlos para realizar tareas cotidianas con mayor facilidad y sin lesiones, ya sea en casa, en el trabajo o durante las sesiones deportivas. Utiliza principalmente actividades de carga de peso dirigidas a la espalda baja, así como a los músculos centrales del abdomen. Este tipo de entrenamiento utiliza equipos que ayudan a entrenar tus músculos para ser un todo, lo cual es fantástico para el deporte, la vida en general, la movilidad y mucho más. Además, también te permite trabajar a tu propio ritmo, como prefieren la mayoría de las personas, especialmente en un entorno de gimnasio.'
    }
  ]

  constructor() { }
}
