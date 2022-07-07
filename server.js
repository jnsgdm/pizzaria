const express = require('express');
const app = express();

app.use(express.static(__dirname + './dist'));

app.get('/',(req,res)=>{res.sendFile(__dirname+'./dist/html')});

app.listen(process.env.PORT || 3000,(err)=>{
    if(err){
        console.log(err);
    }
    console.log('*running*');
});