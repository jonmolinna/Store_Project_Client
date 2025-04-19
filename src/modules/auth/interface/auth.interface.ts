interface Error {
    id: number
    message: string
}

export interface AuthState {
    token: string,
    loading: boolean,
    error: Error | null
}

export interface AuthForms {
    username: string,
    password: string
}

export interface AuhtResponse {
    access_token: string
}
