export type Users = {
  id: number
  name: string
  email: string
}

export type Passwords = {
  id?: number
  service: string
  email: string
  name: string
  password: string
  two_factor: boolean
}
