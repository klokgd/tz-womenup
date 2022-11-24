import {model, Schema} from "mongoose";

const schema = new Schema({
    description: String,
    date: {
        type: Date,
        default: Date.now()
    },
    isDone: {
        type: Boolean,
        default: false
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
})

export const todoModel = model('todo', schema)

