import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'

const PORT = 4000
const app = express();
app.use(cors);

await mongoose.connect("mongodb+srv://aman:abcd1234@project2-expense-manage.4uii6kw.mongodb.net/?retryWrites=true&w=majority");
console.log("MongoDB connection is successful");

app.get("/", (req,res) => {
    res.send("Hello World!");
})

app.listen(PORT,() => {
    console.log('Server is running at http://localhost:4000');
})