import {todoModel} from "../models/todo.js";

export function create(data){
    todoModel.create(data);
}

export function update(data){
    todoModel.findByIdAndUpdate(data);
}

export function safeDelete(data){
    todoModel.findByIdAndUpdate();
}

export function getAll(){
    return todoModel.find();
}

export function getById(id){
    return todoModel.findById(id);
}