const express = require('express') 
require('dotenv').config()
const app = express()

const port = process.env.PORT || 3003

//import the fruits from models folder
const fruits = require('./models/fruits.js')

//view engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//middleware
app.use((req, res, next) => {
	console.log('I run for all routes')
	next()
}) 
app.use(express.urlencoded({extended:false}));


// app.get('/', (req, res) => {
//     res.send(fruits)
// })
app.get('/fruits', function(req, res){
    res.render('Index', { fruits: fruits });
});    
 
//put this above your Show route
app.get('/fruits/new', (req, res) => {
    res.render('New');
});
app.post('/fruits', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true; //do some data correction
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false; //do some data correction
    }
    fruits.push(req.body);
    res.redirect('/fruits') 
}); 

app.get('/fruits/:indexOfFruitsArray', function(req, res){
    res.render('Show', {
        fruit:fruits[req.params.indexOfFruitsArray] 
    });
}); 



app.listen(3000, function() { console.log('Listening on port', port) })