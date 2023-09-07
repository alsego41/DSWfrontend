export interface LoginAuth {
    message: string,
    token: string,
    userStatus: boolean
}
export interface LoginBody {
    email: string,
    password: string
}