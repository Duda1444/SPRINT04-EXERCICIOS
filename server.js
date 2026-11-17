//exercicio 3.2
import { lerMensagens, salvarMensagens } from "./store.js";
import express from "express"

const app  = express()
const PORT = 3000

app.get("/mensagens",async (req,res) =>{
    try{
        res.json(await lerMensagens())
    } catch(error){
        res.status(500).json({ erro: "Erro na leitura" })
    }
})

app.get("/exemplo-salvar", async (req, res) => {
  try {
    const lista = await lerMensagens();
    lista.push({ id: Date.now(), usuario: "Aluno", texto: "Mensagem gravada no disco!" });
    await salvarMensagens(lista);
    res.json({ gravado: true, total: lista.length });
  } catch (erro) {
    res.status(500).json({ erro: "Falha ao gravar" });
  }
});

app.listen(PORT,()=>{
    console.log(`Servidor no link: http://localhost:${PORT}`)
})