import { Language } from "./language";

export class User {
    id: Number;
    username: String;
    name: String;
    email: String;
    password: String;
    languages: Language[];
    achievements: String[];
    points: number;

    constructor(id: Number, username: String, name: String, email: String, password: String, languages: Language[], achievements: String[], points: number) {
        this.id = id;
        this.username = username;
        this.name = name;
        this.email = email;
        this.password = password;
        this.languages = languages;
        this.achievements = achievements;
        this.points = points;
    }
}