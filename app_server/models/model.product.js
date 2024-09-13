// const mongoose = require('mongoose');

// const schema = mongoose.Schema;

// // product Schema
// const productSchema = new schema({
    
//     title:{
//         type: String
//     },
//     picture:{
//         type: String,
//         default:''
//     },
//     description:{
//         type: String
//     },
//     tool_technology:[
//         {
//             technology_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Technology',}
//         }
//     ],
//     date_time:{
//         type: Date, default: Date.now 
//     },
//     state:{
//         type:String,
//         default:"active"
//     },
  
// })


// const Product= module.exports = mongoose.model('product',productSchema);



const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  coverImage: {
    type: String, // Store the URL or file path of the image
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  blocked: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
