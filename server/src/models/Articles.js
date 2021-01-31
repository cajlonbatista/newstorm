const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    cap: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: false,
    },
    created: {
        type: Date,
        default: Date.now()
    },
});
ArticleSchema.plugin(mongoosePaginate);
mongoose.model("Article", ArticleSchema);