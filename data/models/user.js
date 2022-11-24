import {Types, Schema, model} from "mongoose";

const schema = new Schema({
    name: String,
    email: String,
    password: String,
    taskList: [{
        type: Types.objectId,
        ref: "todo"
    }]
})

export const userModel = model('user', schema)

