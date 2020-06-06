//importar a dependencia do aqlite3
const sqlite3 = require("sqlite3").verbose()

//criar o objeto que ira fazer operaçoes no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
/*crair o objetivo de banco de dados, para nossas operaçoes
//db.serialize(() => {

   // com commandos SQL eu vou

   // 1 criar tabela
db.run(`
         CREATE TABLE IF NOT EXISTS places (
           id INTEGER PRIMARY KEY AUTOINCREMENT,
           image TEXT,
           name TEXT,
           address TEXT,
           address2 TEXT,
           state TEXT,
           city TEXT,
           items TEXT
         );
      `)

// 2 inserir dados da tabela
const query = `
INSERT INTO places (
   image,
   name,
   address,
   address2,
   state,
   city,
   items
   ) VALUES (?, ?, ?, ?, ?, ?, ?);
`

const values = [
   "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1101&q=80",
   "Colectoria",
   "Guilherme Gemballa, jardim America",
   "Nº 260",
   "Santa Catarina",
   "Rio do Sul",
   "Residous Eletronicos, Lampadas"
]

function afterInsertData(err) {
   if (err) {
      return console.log(err)
   }

   console.log("Cadastro com Sucesso")
   console.log(this)
}

db.run(query, values, afterInsertData) */
   // 4 deletar  dado da tabela
   //db.run(query, values, afterInsertData)

   // 3 consulta os dados da tabela
   // db.all(`SELECT * FROM places WHERE id = ? `, [1], function (err, rows) {
   //if (err) {
   // return console.log(err)
   // }
   // console.log.log("Registro deletado co scesso!")
   //})

   //db.all(`SELETCT nome FROM place`, function (err, rows) {
   // (err) {
   //   return console.log(err)
   // }

   //console.log("Aqui estao seus resitros: ")

   //console.log(rows)
   //}
   // 4 Consultar os Dados da Tabela tabela
// })

