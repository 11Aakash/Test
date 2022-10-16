
const mongoose=require('mongoose')

const productSchema=mongoose.Schema({
    name:String,
    price:Number,
    rating:Number,
   
});

const productMessage=mongoose.model('products',productSchema)
// export default ProductMessage;
module.exports=productMessage