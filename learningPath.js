export default class LearningPath {
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
