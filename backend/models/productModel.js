const mongoose= require("mongoose")

const productSchema =   mongoose.Schema({
    name:{
        type:String,
        required: [true,"please Enter Product Name"],
        trim:true
    },
    description:{
        type:String,
        required: [true,"please Enter Product Description"] 
    },
    price:{
        type:Number,
        required: [true,"please Enter Product Price"],
        maxLength:[8,"Price cannot exceed 8 characters"]
    },
    rating:{
        type:Number,
        default:0
    },
    images:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    category:{
        type:String,
        required:[true,"plase Enter Product Catagory"],
    },
    Stock:{
        type:Number,
        required:[true,"Plase Enter Product stock"],
        maxLength:[4,"Plase Enter exceed 4 characters"],
        default:1
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true,
            },
            rating:{
                type:String,
                required:true,
            },
            comment:{
                type:String,
                required:true,
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }

})
module.exports = mongoose.model("product",productSchema)