import PostModel from '../models/PostModel.js'

export const create = async(req, res) =>{
    try{
        const doc = new PostModel({
            photos: req.body.photos,
            description: req.body.description,
            // user: req.userId,
        })
        const post = await doc.save();

        res.json(post)
    }catch(err){
        console.log(err)
        res.status(500).json({
            message: 'Не удалось выложить пост'
        })
    }
}

export const getAll = async(req, res) =>{
    try{
        const posts = await PostModel.find();
        res.json(posts)
    }catch(err){
        console.log(err)
        res.status(500).json({
            message: 'Не удалось посмотреть посты'
        })
    }
}

export const getOne = async(req, res) =>{
    try{
        const postId = req.params.id;
        const post = await PostModel.findById(postId)
        if (!post) {
            return res.status(404).json({ message: 'Article not found' });
          }
      
        res.json(post);
    }catch(err){
        console.log(err)
        res.status(500).json({
            message: 'Не удалось посмотреть посты'
        })
    }
}

export const remove = async(req, res) =>{
    try{
        const postId = req.params.id;
        const deletedPost = await PostModel.findByIdAndDelete(postId);

        if (!deletedPost) {
        return res.status(404).json({ message: 'Post not found' });
        }

        res.json({ message: 'Post deleted successfully' });
    }catch(err){
        console.log(err)
        res.status(500).json({
            message: 'Не удалось удалить'
        })
    }
}

export const update = async(req, res) =>{
    try{
        const postId = req.params.id;
        const updatedData = req.body; 

        const updatedPost = await PostModel.findByIdAndUpdate(postId, updatedData, { new: true });

        if (!updatedPost) {
        return res.status(404).json({ message: 'Пост не найден' });
        }

        res.json(updatedPost);
    }catch(err){
        console.log(err)
        res.status(500).json({
            message: 'Не удалось найти статью'
        })
    }
}
