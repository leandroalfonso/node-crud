const express = require("express")
const app =express();
const mysql = require("mysql")
const cors =require("cors")

const db = mysql.createPool({
    host:"sql201.epizy.com",
    user:"epiz_32732654",
    password:"RHmeHkk9kgdXyLT",
    database: "epiz_32732654_bd_crud"

});
app.use(cors())
app.use(express.json())

app.post("/registro", (req, res)=>{
    const {nome_produto} = req.body;
    const {valor_produto} = req.body;
    const {desc_produto} = req.body;
    const {foto_produto} = req.body;
    console.log(nome_produto)

    let sql= "INSERT INTO produtos(nome_produto,valor_produto,desc_produto) VALUES(?,?,?)"
    db.query(sql,[nome_produto, valor_produto,desc_produto], (err,result)=>{
        console.log(err)
    })

})

app.get("/getprodutos", (req, res)=>{
    let sql = "SELECT * FROM produtos"

    db.query(sql, (err, result)=>{
        if(err) console.log(err)
        else res.send(result);
    })
})




app.listen(3306, ()=>{
    console.log("servidor rodando na porta 3306")
});
