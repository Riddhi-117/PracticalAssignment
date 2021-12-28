const mongo = require("mongoose");
const productModel = new mongo.Schema({

    name : {type : String},
    price : {type : Number}
});

module.exports = mongo.model('products',productModel);