import { Post } from  "../models/post.model.js"

export const getPosts = async(req, res) =>{
    try{
        const posts = await Post.find({});
        res.status(200).json(posts);
    }catch(error){
        res.status(500).json({message: "Error fetching posts"});
    }
};

export const getPost = async(req, res) =>{
    try{
        const { id } = req.params;
        const post = await Post.findById(id);
        res.status(200).json(post);
    }catch(error){
        res.status(500).json({message: error.message});
    }
};

export const createPost = async(req, res) =>{
    try{
        const post = await Post.create(req.body);
        res.status(201).send(post);
    }catch(error){
        res.status(500).send({ message: error.message });
    }
};

export const updatePost = async(req, res) =>{
    try{
        const { id } = req.params;
        const post = await Post.findByIdAndUpdate(id, req.body);
        if(!post){
            return res.status(404).send({"message": "Post not found"});
        }
        res.status(200).send(post);
    }catch (error){
        res.status(500).send({"message": error.message});
    }
};

export const deletePost = async(req, res) =>{
    try{
        const { id } = req.params;
        const post = await Post.findByIdAndDelete(id);
        if(!post){
            return res.status(404).send({"message": "Post not Found"})
        }
        res.status(200).send({"message": "Post deleted successfully"});
    }catch(error){
        res.status(500).send({"message": error.message});
    }
}

