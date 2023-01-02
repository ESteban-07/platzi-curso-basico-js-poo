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
    courses: [
        'Curso Definitivo de HTML y CSS',
        'Curso Práctico de HTML y CSS',
        'Curso Profesional de Git y Github',
    ],
});

const escuelaData = new LearningPath({
    name: 'Escuela de Data Science e IA',
    courses: [
        'Cómo y Por Qué Aprender Data Science e IA',
        'Curso de Análisis de Negocios para Ciencia de Datos',
        'Curso de Ética y Manejo de Datos para Data Science e IA',
    ],
});

const escuelaVdgs = new LearningPath({
    name: 'Escuela de Videojuegos',
    courses: [
        'Curso de Programación de Videojuegos 2D con Unity',
        'Curso de Introducción a la Programación de Videojuegos 3D con Unity',
        'Curso de VR con Unity',
    ],
});

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
});

const miguelito2 = new Student({
    name: 'Miguelito',
    username: 'miguelitofeliz',
    email: 'miguelito@miguelito.com',
    instagram: 'miguelito_feliz',
});
