const dbConfig = require("../config/db.config")
const mongoose = require("mongoose")
mongoose.Promise = global.Promise;

const db = {}
db.mongoose = mongoose
db.url = dbConfig.mongoURL

module.exports = db