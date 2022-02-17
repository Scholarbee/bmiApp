var express = require('express')
var path = require('path')

const app = express();

const port = process.env.PORT || 1010

// Set public folder
app.use(express.static(path.join(__dirname, 'asset')));

app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.listen(port,()=>{
    console.log(`BMI app running on http://localhost:${port}`)
})