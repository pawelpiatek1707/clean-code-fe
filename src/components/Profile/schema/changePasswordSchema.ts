import { Rule } from "antd/es/form";

export const passwordInputRules: Rule[] = [
    { required: true, message: 'Hasło jest wymagane' },
    { min: 8, message: 'Minimum 8 znaków' },
    { max: 40, message: 'Hasło zbyt długie, maksimum 40 znaków' }
];