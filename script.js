const fs = require("fs")
const { v4: uuidv4 } = require('uuid')

const lerDados = () => {
    const dados = fs.readFileSync('./logs.txt', 'utf-8');
    return dados;
};

const salvarDados = (nome) => {
    const data = new Date().toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo' });
    const horario = new Date().toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo' });
    const newId = uuidv4()
    const formato = `${newId} - ${data} ${horario} - ${nome} \n`
    fs.writeFile('./logs.txt', formato, { flag: 'a' }, (error) => {
        if(error) {
            console.error("Erro ao salvar log:", error)
        }
    });
};

// const dados2 = salvarDados("Maria")

module.exports = { lerDados, salvarDados }
