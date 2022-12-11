import { Rule } from "antd/es/form";

export const nameRules: Rule[] = [
    { required: true, message: 'Imię jest wymagane' },
    { max: 60, message: 'Imię jest zbyt długie' }
];

export const lastNameRules: Rule[] = [
    { required: true, message: 'Nazwisko jest wymagane' },
    { max: 60, message: 'Nazwisko jest zbyt długie' }
];

export const aboutMeRules: Rule[] = [
    { required: true, message: 'Opis jest wymagane' },
    { max: 150, message: 'Opis jest zbyt długi' },
];

export const cityRules: Rule[] = [
    { required: true, message: 'Miasto jest wymagane' },
    { max: 30, message: 'Nazwa miasta jest za długa' },
];

export const countryRules: Rule[] = [
    { required: true, message: 'kraj jest wymagany' },
    { max: 30, message: 'Nazwa kraju jest zbyt długa' },
];

export const universityRules: Rule[] = [
    { required: true, message: 'Nazwa uniwersytetu jest wymagana' },
    { max: 80, message: 'Nazwa uniwersytetu jest zbyt długa' },
];
