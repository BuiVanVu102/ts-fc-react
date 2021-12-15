export interface Todo {
  id: number
  title?: string
  status: string
  date?: string
}
export interface Value {
  title: string
  date?: Date
}

export interface Edit {
  id?: number
  value?: string
}
