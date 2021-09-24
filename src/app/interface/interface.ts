/*********/
//? -_ Definicion de interfaces
//* |-> Menu
interface _menu {
    title: string,
    icon?: string,
    path: string
}
//* |-> Carrusel
interface _carrusel {
    title: string,
    img: string
}
//* |-> About data
interface _data_about {
    title: string,
    icon: string,
    descr: string
}
//* |-> Crear usuario
interface _user {
    name: string,
    email: string,
    password: string,
    phone: string,
    role: 'DEFAULT-ROLE' | 'ADMIN-ROLE' | 'ENTRE-ROLE',
    limitaciones: string,
    medicamentos: string,
    contacto: string,
    eps: string
}
//* |-> Actualizar usuario
interface _update_user {
    _id: string,
    name: string,
    email: string,
    phone: string,
}
//* |-> Informacion para el login
interface _login {
    email: string,
    password: string
}
//* |-> Crear clases
interface _create_course{
    title: string,
    descr: string,
    cupos: number
}
/*********/
// TODO: Exportacion del modulo
export {
    _menu,
    _carrusel,
    _data_about,
    _user,
    _update_user,
    _login,
    _create_course
}