import {
  LearningPath,
  Student,
  Course,
  Teacher,
  Lesson,
} from './src/routes/routes.js';

/* ---------- TEACHERS ---------- */

const teacherFreddyVega = new Teacher({
  name: 'Freddy Vega',
  speciality: 'CEO of Platzi',
  twitter: '@freddier',
  instagram: '@freddiervega',
  facebook: 'John Freddy Vega',
});

const teacherJuanDC = new Teacher({
  name: 'Juan Gallegos',
  speciality: 'Course Director at Platzi',
  twitter: '@fjuandc',
  instagram: '@fjuandc',
});

/* ---------- LESSONS ---------- */

const lesson1PB = new Lesson({
  id: 1,
  title: 'Clase 1 de Programación Básica',
});

const lesson2PB = new Lesson({
  id: 2,
  title: 'Clase 2 de Programación Básica',
});

const lesson1DefHTML = new Lesson({
  id: 1,
  title: 'Clase 1 del Curso Definitivo de HTML',
});

const lesson2DefHTML = new Lesson({
  id: 2,
  title: 'Clase 2 del Curso Definitivo de HTML',
});

const lesson1PractHTML = new Lesson({
  id: 1,
  title: 'Clase 1 del Curso Práctico de HTML',
});

const lesson2PractHTML = new Lesson({
  id: 2,
  title: 'Clase 2 del Curso Práctico de HTML',
});

const lesson1DataViz = new Lesson({
  id: 1,
  title: 'Clase 1 del Curso de Visualización de Datos',
});

const lesson2DataViz = new Lesson({
  id: 2,
  title: 'Clase 2 del Curso de Visualización de Datos',
});

const lesson1BI = new Lesson({
  id: 1,
  title: 'Clase 1 del Curso de BI',
});

const lesson2BI = new Lesson({
  id: 2,
  title: 'Clase 2 del Curso de BI',
});

const lesson1Unity = new Lesson({
  id: 1,
  title: 'Clase 1 del Curso de Unity',
});

const lesson2Unity = new Lesson({
  id: 2,
  title: 'Clase 2 del Curso de Unity',
});

const lesson1Unreal = new Lesson({
  id: 1,
  title: 'Clase 1 del Curso de Unreal',
});

const lesson2Unreal = new Lesson({
  id: 2,
  title: 'Clase 2 del Curso de Unreal',
});

/* ---------- COURSES ---------- */

const cursoProgBasica = new Course({
  name: 'Curso Gratis de Programación Básica',
  lessons: [lesson1PB, lesson2PB],
  teachers: [teacherFreddyVega, teacherJuanDC],
});

const cursoDefinitivoHTML = new Course({
  name: 'Curso Definitivo de HTML y CSS',
  lessons: [lesson1DefHTML, lesson2DefHTML],
});

const cursoPracticoHTML = new Course({
  name: 'Curso Práctico de HTML y CSS',
  lessons: [lesson1PractHTML, lesson2PractHTML],
});

const cursoDataViz = new Course({
  name: 'Curso de Principios de Visualización de Datos para Business Intelligence',
  lessons: [lesson1DataViz, lesson2DataViz],
});

const cursoBI = new Course({
  name: 'Curso de Business Intelligence: Utilidad y Áreas de Oportunidad',
  lessons: [lesson1BI, lesson2BI],
});

const cursoUnity = new Course({
  name: 'Curso de Unity',
  lessons: [lesson1Unity, lesson2Unity],
});

const cursoUnreal = new Course({
  name: 'Curso de Unreal Engine',
  lessons: [lesson1Unreal, lesson2Unreal],
});

/* ---------- LEARNING PATHS ---------- */

const escuelaWeb = new LearningPath({
  name: 'Escuela de Desarrollo Web',
  courses: [cursoProgBasica, cursoDefinitivoHTML, cursoPracticoHTML],
});

const escuelaData = new LearningPath({
  name: 'Escuela de Data Science e IA',
  courses: [cursoProgBasica, cursoDataViz, cursoBI],
});

const escuelaVdgs = new LearningPath({
  name: 'Escuela de Videojuegos',
  courses: [cursoProgBasica, cursoUnity, cursoUnreal],
});

/* ---------- STUDENTS ---------- */

const juan2 = new Student({
  name: 'JuanDC',
  username: 'juandc',
  email: 'juanito@juanito.com',
  twitter: 'fjuandc',
  learningPaths: [escuelaWeb, escuelaVdgs],
});

const miguelito2 = new Student({
  name: 'Miguelito',
  username: 'miguelitofeliz',
  email: 'miguelito@miguelito.com',
  instagram: 'miguelito_feliz',
  learningPaths: [escuelaWeb, escuelaData],
});

/* ---------- PLATZI CLASS ---------- */

import { PlatziClass } from './src/routes/routes.js';

const clase65 = new PlatziClass({
  name: 'Javascript: orientado a objetos, basado en prototipos',
  videoID: 'nfdkñmsa;f78dlksf',
});

clase65.reproducir();
clase65.pausar();
