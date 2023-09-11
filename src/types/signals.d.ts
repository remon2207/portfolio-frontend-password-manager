export type Users = {
  id: number
  name: string
  email: string
}

export type Passwords = {
  service: string
  email: string
  name: string
  password: string
  twoFactor: boolean
  secret: string
}
