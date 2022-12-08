import { Rule } from "antd/es/form";
import { EMAIL_REGEX } from "@/consts";

export const emailRules: Rule[] = [
    { required: true, message: 'Adres email jest wymagany' },
    { max: 60, message: 'Adres email jest zbyt długi' },
    { pattern: EMAIL_REGEX, message: 'Niepoprawny adres email' }
];

export const passwordRules: Rule[] = [
    { required: true, message: 'hasło jest wymagane' },
    { max: 20, message: 'Hasło jest zbyt długie, max 20 znaków' },
    { min: 8, message: 'Hasło jest zbyt krótkie, min 8 znaków' }
];
