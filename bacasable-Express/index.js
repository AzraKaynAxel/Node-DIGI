const express = require("express");
const app = express();
const routerComputer = require('./router/routerComputer')

// Important utiliser json 
app.use(express.json());

// computer { id, marque, prix}
// Ici si j'aai plusieurs ressources (= ordinateur / bureaux) je mets une ligne par ressource
// car j'ai un router par ressource
app.use('/api/computer', routerComputer);



app.listen(3000, () => { console.log("Server is running on port 3000 http://localhost:3000"); })


// // Gérer le routing - route classique
// app.get('/', (req, res) => {
//     res.send("Hello World")
// })

// // Avec les url-params
// app.get('/url-params/:toto', (req, res) => {
//     const nameParam = req.params.toto
//     res.send(`Hello ${nameParam}`)
// })

// // Avec les query params
// app.get('/query-params', (req, res) => {
//     const nameParam = req.query.name
//     res.status(404).send(`Hello ${nameParam}`)
// })

// app.get('/route-json', (req, res) => {
//     res.json({
//         name: "John",
//         age: 30
//     })
// })