const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        required: [true, "Post must be have title"],
        type: String
    },
    body: {
        required: [true, "Post must be have body"],
        type: String
    }
});

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;