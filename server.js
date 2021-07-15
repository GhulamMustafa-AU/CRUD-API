const express = require("express")
const cors = require("cors")
const db = require("./models/index")
const routes = require("./routes/routes")
app = express()

db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
}).then(() => {
    console.log("Database Connected!")
}).catch((err) => {
    console.log("Cannot Connect To Database!: "+ err)
    process.exit()
});

var corsOptions = {
    orgin: "http://localhost:8081"
}
  
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/api/vendors", routes)


app.get("/", (req, res) => {
  res.json({message: "Welcome to the Application!"})
})

PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log("Server Started On :"+PORT))
