const express = require('express');
const app = express();
const {resolve} = require('path');

app.use(express.static(resolve(__dirname + './dist')));

app.listen(process.env.PORT || 3000,(err)=>{
    if(err){
        console.log(err);
    }
    console.log('*running*');
});