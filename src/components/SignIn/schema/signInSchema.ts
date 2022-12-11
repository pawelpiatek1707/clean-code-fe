import { Rule } from "antd/es/form";
import { EMAIL_REGEX } from "@/consts";

export const emailInputRules: Rule[] = [
    { required: true, message: 'Adres email jest wymagany' },
    { pattern: EMAIL_REGEX, message: 'Niepoprawny adres email' },
    { max: 60, message: 'Zbyt długi adres email' }
];

export const passwordInputRules: Rule[] = [
    { required: true, message: 'Hasło jest wymagane' },
    { min: 8, message: 'Minimum 8 znaków' },
    { max: 40, message: 'Hasło zbyt długie, maksimum 40 znaków' }
];