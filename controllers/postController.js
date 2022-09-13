const Post = require("../models/postModel");

exports.getAllPosts = async (req, res, next) => {    
    try {
        const posts = await Post.find();

        res.status(200).json({
            success: 'success',
            results: posts.length,
            data: {posts}
        });
    } catch (err) {
        res.status(400).json({
            success: 'failure'
        })
    }
}

exports.getOnePost = async (req, res, next) => {
    try {
        const posts = await Post.findById(req.params.id);

        res.status(200).json({
            success: 'success',
            results: posts.length,
            data: {posts}
        });
    } catch (err) {
        res.status(400).json({
            success: 'failure'
        })
    }
}