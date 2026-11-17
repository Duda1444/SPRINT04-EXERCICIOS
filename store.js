//exercício 3.1

import { mkdir, writeFile, readFile } from "node:fs/promises"
const PASTA = new URL("./data/", import.meta.url)
const ARQUIVO = new URL("./data/mensagens.json", import.meta.url)

export async function lerMensagens() {
    try {
        const conteudo = await readFile(ARQUIVO, 'utf8')
        const dados = JSON.parse(conteudo)
        if (!Array.isArray(dados)) throw new Error("O JSON precisa conter um array.")
            return dados
    } catch(error) {
        if (error.code === "ENOENT") return []
        throw error
    }
}

export async function salvarMensagens(mensagens) {
  await mkdir(PASTA, { recursive: true })
  await writeFile(ARQUIVO, JSON.stringify(mensagens, null, 2), "utf8")
}