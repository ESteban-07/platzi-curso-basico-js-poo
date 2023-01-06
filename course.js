export default class Course {
    constructor({ name, lessons = [], teachers = [] }) {
        this.name = name;
        this.lessons = lessons;
        this.teachers = teachers;
    }

    addNewLesson(lesson) {
        this.lessons.push(lesson);
    }

    addNewTeacher(teacher) {
        this.teachers.push(teacher);
    }
}
