const catchAsync = require("../utils/catchAsync");
const Post = require("../models/Post");
const Comment = require("../models/Comment");

// exports.makeComment = catchAsync(async (req, res, next) => {
//     const comment = await Comment.create({
//         comment: req.body.comment,
//         user: req.user,
//         post: req.params.id,
//     });
//     console.log(comment);
//     res.status(201).json({ status: "success", comment });
// });

// exports.getPostComments = catchAsync(async (req, res, next) => {
//     const comments = await Comment.find({ post: req.params.id });
//     res.status(200).json({
//         status: "success",
//         result: comments.length,
//         data: { comments },
//     });
// });
exports.makePost = catchAsync(async (req, res, next) => {
    const post = await Post.create({
        title: req.body.title,
        user: req.user,
        likes: 0,
        caption: req.body.caption,
    });
    res.status(201).json({
        status: "success",
        post,
    });
});
exports.getPost = catchAsync(async (req, res, next) => {
    const post = await Post.findById(req.params.id);
    res.status(201).json({
        status: "success",
        post,
    });
});

exports.updateLikes = catchAsync(async (req, res, next) => {
    const post = await Post.findByIdAndUpdate(
        req.params.id,
        {
            $inc: { likes: 1 },
        },
        { new: true }
    );
    res.status(200).json({ status: "success", post });
});

exports.deletePost = catchAsync(async (req, res, next) => {
    const post = await Post.findByIdAndDelete(req.params.id);
    res.status(204).json({ status: "success" });
});
exports.allPosts = catchAsync(async (req, res, next) => {
    const posts = await Post.find();
    res.status(200).json({ status: "success", result: posts.length, posts });
});
