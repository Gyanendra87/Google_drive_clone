const express=require('express')
const app=express()
const morgan = require('morgan');
app.set('view engine','ejs' )
const userModel=require('./models/user')
const dbConnection=require('./config/db')
app.use(morgan('dev'))
app.use(express.json())
app.use(express.static('public'))// stic file user direct can access
app.use(express.urlencoded({extended:true}))
app.use((req,res,next)=>{
    console.log("Middleware executed")
    return next()

})
app.get('/',
    (req,res)=>{
    res.render('index')
})
app.post('/get-from-data',(req,res)=>{
    console.log(req.body);
    res.send("Data received")   
})
app.get('/register',(req,res)=>{
    res.render('register')
})
app.post('/register',async(req,res)=>{
    const {username,email,password}= req.body
    const newUser= await userModel.create({
        username:username,
        email:email,
        password:password
    })
    res.send(newUser)
    // await aur async use krne se jb tak database me response add 
    //nhi ho jata tb tk agla code nhi chlega
    
    res.send("user received")
    console.log("User receiver ho gya bhai")
})


app.get('/get-users',async(req,res)=>{
    userModel.find( {
        username:"23222"
        
    }).then((users)=>{
        res.send(users)
        
        // find one ek user laayega jo sbse phle milega
        // find db se jitne bhi users milenge wo de dega
})
})
app.listen(3000)