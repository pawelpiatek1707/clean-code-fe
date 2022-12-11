import { Rule } from "antd/es/form";

export const titleRules: Rule[] = [
    { required: true, message: 'Tytuł jest wymagane' },
    { max: 60, message: 'Tytuł jest zbyt długie' }
];

export const descriptionRules: Rule[] = [
    { required: true, message: 'Opis jest wymagane' },
    { max: 60, message: 'Opis jest zbyt długie' }
];