const mongoose = require('mongoose');

const keepSchema = new mongoose.Schema ({
    title: String,
    description: String
})

const Keep = new mongoose.model('Keep', keepSchema);

module.exports = Keep;