const mongoose = require('mongoose');

let englishWordsSchema = mongoose.Schema({
    id: {
        type: Number,
        require: [true]
    },
    word: {
        type: String,
        require: [true]
    },
    meaning: {
        type: String,
        require: [true]
    },
    length_word: {
        type: Number,
        require: [true]
    }
});

module.exports = mongoose.model('english_words', englishWordsSchema);