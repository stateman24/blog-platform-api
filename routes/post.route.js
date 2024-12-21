import express from "express"
import {getPost, getPosts, updatePost, deletePost, createPost} from "../controller/post.controller.js"

export const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", createPost);
router.delete("/:id", deletePost);
router.put("/:id", updatePost);