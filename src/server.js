const express = require("express")
const server = express()

//configuraçao pasta publica
server.use(express.static("public"))

//configurar template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
            express: server,
            noCache: true
})

//configurar caminhos da minha aplicaçao
//pagina inicial
//req: Requisiçao
//res: Resposta
server.get("/", (req, res) => {
            return res.render("index.html", { title: "um titulo" })
})

server.get("/create-point", (req, res) => {
            return res.render("create-point.html")
})

server.get("/search", (req, res) => {
            return res.render("search-results.html")
})

//ligar o servidor
server.listen(3000)