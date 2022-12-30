// Objeto Literal no instanciado de un prototipo creado por el desarrollador
const natalia = {
    name: 'Natalia',
    age: 20,
    cursosAprobados: [
        'Curso Definitivo de HTML Y CSS',
        'Curso Práctico de HTML y CSS',
    ],
    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    },
};

// Creando un Prototipo
function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;

    /*
    NO es una buena práctica crear métodos dentro de
    la clase contructora ya que todas las instancias
    heredarían dicho método lo que recurre a un gran
    consumo innecesario de recursos afectando el 
    rendimiento
    */

    // this.aprobarCurso = function (nuevoCursito) {
    //     this.cursosAprobados.push(nuevoCursito);
    // };
}

// Debemos crear métodos directamente en el Prototipo
// Para evitar un consumo innecesario de cursos
Student.prototype.aprobarCurso = function (nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
};

// Instancia de prototipo Student
const juanita = new Student('Juanita Alejandra', 15, [
    'Curso de Introducción a los Producción de Videojuegos',
    'Curso de Creación de Personajes',
]);
