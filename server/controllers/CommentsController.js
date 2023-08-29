import CommentsModel from '../models/CommentsModel.js'
import PostModel from '../models/PostModel.js'
import mongoose from 'mongoose';
export const newComment = async(req, res) => {
    try{
        const postId = req.body.postId;
        const doc = new CommentsModel({
            postId: postId,
            comment: req.body.comment,
        })
        const post = await PostModel.findById(postId);
        if (!post) {
            return res.status(404).json({ message: 'Пост не найден' });
        }
        await doc.save()
        post.comments.push(doc._id);
        await post.save();

        res.json({ message: 'Комментарий добавлен к посту', comments: doc });
    }catch(err){
        console.log(err)
        res.status(500).json({
            message: 'Не удалось добавить комментарий'
        })
    }
}

export const removeComment = async(req, res) => {
    try{
        const commentId = req.params.commentId;
        const postId = req.params.id;
        const post = await PostModel.findById(postId);
        if (!post) {
            return res.status(404).json({ message: 'Пост не найден' });
        }
        const commentIndex = post.comments.indexOf(commentId);
        if(commentIndex !== -1){
            post.comments.splice(commentIndex, 1)
        }
        await post.save();

        const deletedComment = await CommentsModel.findByIdAndDelete(commentId);
        if (!deletedComment) {
            return res.status(404).json({ message: 'Комментарий не найден' });
          }
      
        res.status(200).json({ message: 'Комментарий успешно удален', log: postId, kok: commentId});
    }catch(err){
        console.log(err)
        res.status(500).json({
            message: 'Не удалось удалить комментарий'
        })
    }
}