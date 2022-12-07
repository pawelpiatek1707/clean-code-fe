import { ACCESS_TOKEN } from "../consts"

export const setToken = (token: string) => {
    localStorage.setItem(ACCESS_TOKEN, token)
}