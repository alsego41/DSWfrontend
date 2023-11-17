export interface LoginAuth {
	message: string
	token: string
	userStatus: boolean
	userInfo: any
}
export interface LoginBody {
	email: string
	password: string
}
