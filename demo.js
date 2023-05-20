const express = require('express')
const app = express()


//routes
app.get("/",( req, res) => {
    res.send("Hello Api")
})

app.listen(3000,()=> {
    console.log("Node runing in a port 3000")

})





// const {MongoClient} = require('mongodb');

// async function main (){
//     const uri = "mongodb+srv://accessManager:FUUSmPRt2J8JvLV9@shopwebsite.4udfl98.mongodb.net/?retryWrites=true&w=majority "

//     const client = new MongoClient(uri)

//     try{
//         await client.connect();
//         createListing(client, {
//             name: "Mark",
//             surname: "Smith",
            

//         })

//     } catch(e) {
//         console.error(e);

//     }
//     finally{
//         await client.close()
//     }



// }

// main().catch(console.error);
// async function createListing(client, newListing){
//    const result = await client.db("NodeJS").collection("User").insertOne(newListing)

//    console.log(` New listing created with an id: ${result}`)
// }

// async function listDatabases (client){
//     const databaseList = await client.db().admin().listDatabases();

//     console.log("Databases: ");
//     databaseList.databases.forEach(db => {
//         console.log(` - ${db.name}`);
        
        
//     });
// }