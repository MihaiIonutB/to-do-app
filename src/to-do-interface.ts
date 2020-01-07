export interface ToDoModel {
    title: string,
    responsable: string,
    dueDate: any,
    finishedDate?: Date | null
}
export interface ToDoModelStatus extends ToDoModel{
    _id:string;
    status: "PLANNED" | "IN_PROGRESS" | "DONE" | "BLOCKED",
}