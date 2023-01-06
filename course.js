export default class Course {
    constructor({ name, lessons = [], teachers = [] }) {
        this._name = name;
        this.lessons = lessons;
        this.teachers = teachers;
    }

    addNewLesson(lesson) {
        this.lessons.push(lesson);
    }

    addNewTeacher(teacher) {
        this.teachers.push(teacher);
    }

    get name() {
        return this._name;
    }
    set name(newName) {
        if (newName === 'Curso Malito de Progamación Básica') {
            console.error('Wey...no');
        } else {
            this._name = newName;
        }
    }
}
