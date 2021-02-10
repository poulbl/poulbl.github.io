const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/user')
const Setting = require('./models/usersetting')
const bodyParser = require('body-parser')

// TODO Mulighed for at ændre Kelvin til Celcius og farhashdsdneheit i bruger indstillinger

const app = express();

app.use(express.static('./public'))
app.use(bodyParser.urlencoded({extended: false}))


// connect to MongoDB
//#region mongo login
const dbURI = 'mongodb+srv://poulbl:hestehest1234@merc.cmdke.mongodb.net/lavejr?retryWrites=true&w=majority'
//#endregion

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => {
        console.log('connected to db')
        app.listen(3000)
    })
    .catch((err) => console.log(err))

app.get("/", (req, res) => {
    console.log('Responding to root route')
    res.send('Root')
})

// mongo routes
// Add a user to database
app.post('/create-user', (req, res) => {
    const user = new User({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    })

    user.save()
    .then((result) => {
        console.log('user saves successfully')
        res.redirect('/index.html')
    })
    .catch((err) => {
        console.log(err)
    })
})

app.post('/saveSettings', (req, res) => {
    const settings = new Setting({
        theme: req.body.theme,
        hometown: req.body.hometown
    })
})

app.post('/login-user', (req, res) => {
    const users = User.find()
    
    //const user = users.find(users => users.password === req.body.password)

    console.log(users)

    /*
    if(req.body.password === user.password)
    {
        console.log('login succesful')
    }
    else {
        console.log(req.body.password)
        console.log(user)
        console.log(user.password)
        console.log('login failed')
    }
    */
})

// Finds all users
app.get('/users', (req, res) => {
    User.find()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    })
})

// TODO parameter ID
var id
// Find single user by ID
app.get('/single-user', (req, res) => {
    User.findById(id)
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    })
})