const mongoose = require("mongoose");

const schema = mongoose.Schema({
    title : String, 
    description: String, 
    published: Boolean
}, { timeStamps: true })

schema.method("toJSON", function(){
    const { _v, _id, ...object } = this.toObject();
    object.id = _id
    return object
})


module.exports =  mongoose.model("vendor", schema)
