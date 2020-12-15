const { Schema } = require('mongoose');

const newsArticleSchema = new Schema({
    source: {
        id: Schema.Types.String,
        name: Schema.Types.String
    },
    author: Schema.Types.String,
    title: Schema.Types.String,
    description: Schema.Types.String,
    url: Schema.Types.String,
    urlToImage: Schema.Types.String,
    publishedAt: Schema.Types.String,
    content: Schema.Types.String,
})

exports.newsArticleSchema = newsArticleSchema;
