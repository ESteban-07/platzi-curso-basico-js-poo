/* ---------- LESSONS ---------- */

class Lesson {
    constructor({ id, title }) {
        this.id = id;
        this.title = title;
    }
}

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

class Course {
    constructor({ name, lessons = [] }) {
        this.name = name;
        this.lessons = lessons;
        this.teachers = [];
    }

    addNewLesson(lesson) {
        this.lessons.push(lesson);
    }
}

const cursoProgBasica = new Course({
    name: 'Curso Gratis de Programación Básica',
    lessons: [lesson1PB, lesson2PB],
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

class LearningPath {
    constructor({ name, courses = [] }) {
        this.name = name;
        this.courses = courses;
    }

    addCourse(course) {
        this.courses.push(course);
    }

    removeCourse(course) {
        const index = this.courses.indexOf(course);
        return this.courses.splice(index, 1);
    }
}

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

class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }

    addLearningPath(escuela) {
        this.learningPaths.push(escuela);
    }

    removeLearningPath(escuela) {
        const index = this.learningPaths.indexOf(escuela);

        return this.learningPaths.splice(index, 1);
    }
}

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
