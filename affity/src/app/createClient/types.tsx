export interface FormData {
  Cedula: string
  Nombres: string
  Apellidos: string
  Telefono: string
  'Correo electronico': string
  'Precio mensualidad': string
}

export interface FormDataAditional {
  'Fecha de nacimiento': string
  Genero: string
  'Tipo de sangre': string
  'Plan de pago': string
  'Direccion del cliente': string
  'Nombre contacto de emergencia': string
  'Telefono contacto de emergencia': string
  'Objetivos del cliente': string
  Observacion: string
  'Fecha de inicio': Date
  'Fecha limite de membresia': Date
}
