const express=require('express');
const app=express();
app.use((req,res,next)=>{
  const timestamp=new Date().toLocaleString();
  const log=[${timestamp}] ${req.method} request to ${req.originalUrl}';
  console.log(log);
  next();
});
app.get('/',(req,res)=>{
  res.send('hello');
});
app.listen(3000, ()=>{
  console.log('live at http://localhost:3000');
});
