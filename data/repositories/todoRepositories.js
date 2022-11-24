import {todoModel} from "../models/todo.js";

export async function create(data) {
    await todoModel.create(data);
}

export async function update(id, data) {
    await todoModel.findByIdAndUpdate(id, data);
}

export async function safeDelete(id) {
    await todoModel.findByIdAndUpdate(id, {
        isDeleted: true
    });
}

export async function getAll() {
    return todoModel.find();
}

export async function getById(id){
    return todoModel.findById(id);
}