import mongoose from 'mongoose'

const CommentsSchema = new mongoose.Schema({
    postId: { type: mongoose.Schema.Types.ObjectId, required: true },
    comment: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
})

export default mongoose.model('Comments', CommentsSchema)