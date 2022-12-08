import { Rule } from "antd/es/form";

export const nameRules: Rule[] = [
    { required: true, message: 'Imię jest wymagane' },
    { max: 60, message: 'Imię jest zbyt długie' }
];

export const lastNameRules: Rule[] = [
    { required: true, message: 'Nazwisko jest wymagane' },
    { max: 60, message: 'Nazwisko jest zbyt długie' }
];