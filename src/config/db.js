const mongoose = require('mongoose')
require('dotenv').config()
// mongoose.connect(`mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false`)
mongoose.connect(process.env.MONGODB_URI)
.then(data=>console.log("connected"))
.catch(err=>console.log(err))

// const mongoose = async() => {
//     try {
//         await mongo.connect('mongodb+srv://kiranrathor:KiranRathor@kiran.ov8n8w8.mongodb.net/?retryWrites=true&w=majority')
//         console.log('connected')
//     } catch (error) {
//         console.log(error)
//     }
// }

module.exports = { mongoose }

//MONGODB_URI="mongodb+srv://vercel-admin-user-6412a67ba2ff7937bd264f85:FbrdA5xmHYrYkaRL@cluster0.rktvjqq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"