export interface User {
    id: number
    name: string
    surname: string
    email: string
    passwordHashed: string | null
    aboutMe: string | null
    city: string | null
    country: string | null
    university: string | null
}