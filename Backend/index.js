const connectToMongo=require('./db')
connectToMongo();
const express=require('express');
const app=express();
const port=8000;
app.use(express.json())
//Useable Routes
app.use('/api/auth',require('./Routes/auth')); 
app.use('/api/auth',require('./Routes/users')); 
app.use('/api/movie',require('./Routes/movies')); 
// app.use('/api/notes',require('./Routes/Note'));  //Initiator Line

app.listen(port,()=>
{
    console.log(`Server started at port http://localhost:${port}`);
})
