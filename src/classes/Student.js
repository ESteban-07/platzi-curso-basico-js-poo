export default class Student {
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
