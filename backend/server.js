import express from "express"
import cors from "cors"

// app config
const app = express();
const port = 4000;

// to parse request coming from frontend
app.use(express.json());
// to access backend from any frontend
app.use(cors());


app.get("/",(req,res) => {
    res.send("API Working");
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`);
})