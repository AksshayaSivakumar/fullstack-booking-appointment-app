const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./util/database');

//const cors=require('cors');
const rootDir=require('./util/path');

const app = express();

const adminRoutes = require('./routes/admin');


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/admin', adminRoutes);


sequelize.sync()
.then(result=>{
    
    app.listen(3000);
})
.catch(err=>console.log(err))


