import Axios from 'axios'

const baseUrl = 'http://localhost:4000/'

export function postLogin(obj: { email: string, password: string }) {
    return Axios.post(`${baseUrl}auth/login`, obj)
}
export function postAddToDos(obj: { title: string, responsable: string, dueDate: Date }) {
    return Axios.post(`${baseUrl}todo/AddTodo`, obj)
}
export function deleteToDos(id: string) {
    return Axios.delete(`${baseUrl}todo/deleteTodo/${id}`)
}
export function getToDos() {
    return Axios.get(`${baseUrl}todo/getTodos`)
}
export function postUpdateStatus(idOfToDo: string, status: string) {
    return Axios.post(`${baseUrl}todo/updateTodoStatus/${idOfToDo}`, { status })

}
export function postGetToDoByStatus(status: string) {
    return Axios.post(`${baseUrl}todo/getTodosByStatus`, { status })
}
export function postFilteredTodos(obj: { pageSize: number, pageNr: number, key?: string, status?: "PLANNED" | "IN_PROGRESS" | "DONE" | "BLOCKED" | undefined}) {
    return Axios.post(`${baseUrl}todo/getFilteredTodoS`, obj)
}