const mongoose =require('mongoose')
mongoose.connect('mongodb://10.9.62.162:27017/shopping',{useNewUrlParser:true})
const db = mongoose.connection;
db.on('error',(err)=>{
    console.log('数据库连接错误')
})
db.on('open',()=>{
    console.log('数据库连接OK')
})