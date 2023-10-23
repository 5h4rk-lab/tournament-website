const express=require("express")
const cors=require("cors")
const collection=require("./mongo")
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors()) 


app.get("/data", async (req, res) => {
    try {
      const data = await collection.find({});
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  });

app.post("/", async (req, res) => {
    const { msg, tournamentName, startDate, endDate, description } = req.body;

    const data = {
        msg: msg,
        tournamentName: tournamentName,
        startDate: new Date(startDate),
        endDate: new Date(endDate),     
        description: description
    };

    try {
        await collection.insertMany([data]);
        res.status(200).send("Data saved successfully.");
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});


app.listen(8000,()=>{
    console.log("port connected")
})