const express=require('express');
const mongoose=require('mongoose');
const productMessage=require('./model/products')
const cors=require('cors');
const router=express.Router()
var bodyParser = require('body-parser');  
const app=express();
// var urlencodedParser = bodyParser.urlencoded({ extended: false })  
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors())


app.post('/products', async (req,res)=>{
    console.log('hi');
    // console.log(req.body);
    const {pname,price,rating}=req.body;
        
    const prd=new productMessage({name:pname,price:price,rating:rating})
    // console.log(prd);
    try{
       
        const a1=await prd.save()
        // console.log("yyy" ,a1);
        res.send('product added successfully ')
        console.log("bye");
    }catch(err){
        return res.status(400).json({message:err})
    }
})

app.get('/products', async(req,res)=>{
    try{
        // console.log("in get");
        const products=await productMessage.find({})
        // console.log("out get");
        
        res.send(products)
        console.log(products);
    }catch(err){
        return res.status(400).json("went wrong")
    }
})

const CONNECTION_URL='mongodb+srv://Aakash:Aakash123@cluster0.xbcu1.mongodb.net/Test'
const PORT=3000;
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{app.listen(PORT,()=>{console.log(`Server running on port ${PORT}`)})})
.catch((error)=>{console.log(error.message)});