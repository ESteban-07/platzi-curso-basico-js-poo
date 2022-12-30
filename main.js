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

// Creando un Prototipo de función
function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
}

// Debemos crear métodos directamente en el Prototipo
// Para evitar un consumo innecesario de cursos
Student.prototype.aprobarCurso = function (nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
};

// Instancia de prototipo de función Student
const juanita = new Student('Juanita Alejandra', 15, [
    'Curso de Introducción a los Producción de Videojuegos',
    'Curso de Creación de Personajes',
]);

// Prototipos con la sintaxis de clases
class Student2 {
    /*
    Aplicando Patrón de diseño RORO (Receive an Object, Return an Object)
    ---------------------------------------------------------------------

    Nos ayuda cuando tenemos muchos parámetros en nuestro constructor,
    ya que al instanciar la clase debemos acordarnos del orden de los
    parámetros y, además, no podemos tener parámetros por defecto.

    La versatilidad de tener un objeto literal dentro de la función 
    constructor facilita todo, ya que un objeto literal esta constituido
    por el par “key:value” donde la analogía que se puede tener presente
    es la de “parámetro:argumento” a la hora de crear nuestro objeto.
    */
    constructor({ name, age, cursosAprobados = [], email }) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito);
    }
}

// instancia de la clase Student2 basada en prototipos
const miguelito = new Student2({
    name: 'Miguel',
    age: 28,
    email: 'miguelito@platzi.com',
});
