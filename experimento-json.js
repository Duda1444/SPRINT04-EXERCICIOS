
//exercício 1.1

const historicoMensagens = [
  { id: 1, nome: "João", idade: 25 },
  { id: 2, nome: "Maria", idade: 30 },
  { id: 3, nome: "Pedro", idade: 28 }
];

const conteudoSalvar = JSON.stringify(historicoMensagens, null, 2)
console.log(conteudoSalvar);
console.log("Tipo da variável:", typeof conteudoSalvar);

//exercício 1.2

const jsonValido = '[{"id": 10, "usuario": "Lucas", "texto": "Teste"}]';
const jsonCorrigido = JSON.parse(jsonValido)
const jsonQuebrado = '[{ id: 10, quebrado: sim '

async function testeJSON(){
    try {
        const tentativa = JSON.parse(jsonQuebrado)
        return tentativa
    } catch (erro) {
        if (erro instanceof SyntaxError)
            console.error("Alerta: JSON corrompido! Detalhes:", erro.message);
        }
}

testeJSON();
