const express= require('express');
const path=require('path');
const app= express();
const port=3000;
app.use('/static', express.static('static'));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.get('/', (req,res)=>{
    res.status(200).render('index.pug');
});
app.listen(port, ()=>{
    console.log(`this application has started on port ${port}`);
});