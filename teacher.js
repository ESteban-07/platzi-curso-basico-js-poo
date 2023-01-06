export default class Teacher {
    constructor({
        name,
        speciality,
        twitter = undefined,
        facebook = undefined,
        instagram = undefined,
    }) {
        this.name = name;
        this.speciality = speciality;
        this.socialMedia = {
            twitter,
            facebook,
            instagram,
        };
    }
}
