export type Patient = {
  id: string
  name: string
  caretaker: string
  email: string
  date: Date
  symptoms: string
  maxLenght: number
}

export type DraftPatient = Omit<Patient, 'id'>