import {userModel} from "../models/user.js";

export function signin(data){
    userModel.create(data);
}

export function login(data){

}