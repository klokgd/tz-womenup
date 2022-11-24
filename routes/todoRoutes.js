import express from "express";
import {create, getAll, getById, safeDelete, update} from "../data/repositories/todoRepositories.js";
const router = express.Router();

router.post("/", async (req, res, next) => {
    await create(req.body)
    res.status(201).end();
});

router.patch("/:id", async (req, res, next) => {
    await update(req.params["id"], req.body);
    res.status(200).end();
});

router.delete("/:id", async (req, res, next) => {
    await safeDelete(req.params["id"]);
    res.status(200).end();
});

router.get("/", async (req, res, next) => {
    let todoList = await getAll();
    res.json(todoList);
});

router.get("/:id", async (req, res, next) => {
    let todo = await getById(req.params["id"]);
    res.json(todo);
});

export const todoRoutes = router;