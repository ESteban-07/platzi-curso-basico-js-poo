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

/*
Dadas la siguientes clases:

Clase Banda con las propiedades:

nombre - string
generos - Array
integrantes - Array
Crea una clase llamada "Integrante" con las propiedades:

nombre - string
instrumento - string

Escribe la lógica para agregar integrantes a la clase Banda
en la función agregarIntegrante. En esta función no debe dejar
agregar más de un baterista, es decir hay que validar que solo
se pueda agregar un integrante con instrumento "Bateria".
*/

// SOLUCIÓN:

class Banda {
    constructor({ nombre, generos = [] }) {
        this.nombre = nombre;
        this.generos = generos;
        this.integrantes = [];
    }

    agregarIntegrante(integranteNuevo) {
        const tenemosBaterista = this.integrantes.some(
            (integrante) => integrante.instrumento === 'Bateria'
        );

        const nuevoIntegranteBaterista =
            integranteNuevo.instrumento === 'Bateria';

        // Validar si ya existe un baterista
        if (tenemosBaterista && nuevoIntegranteBaterista) {
            return;
        }

        this.integrantes.push(integranteNuevo);
    }
}

//Crear clase Integrante
class Integrante {
    constructor({ nombre, instrumento }) {
        this.nombre = nombre;
        this.instrumento = instrumento;
    }
}

const data = {
    nombre: 'Los Jacks',
    generos: ['rock', 'pop', 'post-punk'],
    integrantes: [],
};
const banda = new Banda(data);

banda.agregarIntegrante(
    new Integrante({ nombre: 'Elijah', instrumento: 'Guitarra' })
);

banda.agregarIntegrante(
    new Integrante({ nombre: 'Joshua', instrumento: 'Bateria' })
);
