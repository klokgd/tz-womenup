const {Schema, model} = require('mongoose')

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
    isDelete: {
        type: Boolean,
        default: false
    }
})

export const todoModel = model('todo', schema)

