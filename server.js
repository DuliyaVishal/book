const app=require("./index");
const connect=require("./config/db");
    

app.listen(2000,async()=>{
    try{
        await connect();
        console.log("listen to your port 2000");
    }
    catch{
        console.log(err.massage);
    }
})