import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
    photos: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
        default: '',
    },
}, {
    timestamps: true,
})

export default mongoose.model('Post', PostSchema)