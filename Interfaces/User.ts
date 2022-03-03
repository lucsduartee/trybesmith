export interface User {
  username: string,
  classe: string,
  level: number,
  password: string,
}

export interface UserCreated extends User {
  id: number,
}
