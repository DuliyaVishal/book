const express=require("express")
const bookController=require("./model/book_controller")
const userController=require("./model_controller")
const app= express();
app.use(express.json())
app.use("/users",user_Controller);
app.use("/users",book_Controller);

module.exports=app;