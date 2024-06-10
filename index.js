let express=require("express")
let app=express()

app.get('/',(req,res)=>{
    res.end('Hello World')
})

let router=require('./routes/appRoute.js')

app.set("views","./views")
app.set("view engine","ejs")

app.use("/",router)

app.listen(4000,()=>{
    console.log("App running di port:4000")
})