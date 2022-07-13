import PostMessage from "../models/postMessage.js"


export const getPosts = (req, res) => {
    res.send('THIS WORKS ')
}


export const createPost = async (req, res) => {
    const post = req.body;

    const NewPost = PostMessage(post);

    try {
        await NewPost.save();

        res.status(201).json(NewPost)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}