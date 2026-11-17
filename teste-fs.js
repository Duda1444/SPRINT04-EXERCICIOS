//exercicio 2.1

import { mkdir, writeFile } from "node:fs/promises";

async function salvarHistorico() {
    await mkdir(new URL("./data/", import.meta.url), { recursive: true });
    const caminhoArquivo = new URL("./data/mensagens-teste.json", import.meta.url);
    await writeFile(caminhoArquivo, JSON.stringify(lista, null, 2), "utf8");
}

salvarHistorico();

//exercício 2.2

import { mkdir, writeFile, readFile } from "node:fs/promises";

async function lerDadosSeguros(nomeArquivo) {
  try {
    const ler = await readFile(nomeArquivo, "utf8");
    const array = JSON.parse(ler);
    return array;
  } catch (error) {
    if (error.code === "ENOENT") {
      return [];
    }
    throw error;
  }
}

const caminhoArquivo = new URL("./data/mensagens2-teste.json", import.meta.url);
const dadosExistentes = await lerDadosSeguros(caminhoArquivo);
console.log("Resultado com arquivo existente:", dadosExistentes);

const dados = await lerDadosSeguros(new URL("./data/arquivo-fantasma.json", import.meta.url));
console.log("Resultado com arquivo ausente:", dados);