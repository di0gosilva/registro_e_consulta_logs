const fs = require("fs")
const { v4: uuidv4 } = require('uuid')

const lerDados = () => {
    const dados = fs.readFileSync('./logs.txt', 'utf-8');
    return dados;
};

const salvarDados = (req, res) => {
    const data = new Date().toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo' });
    const horario = new Date().toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo' });
    const newId = uuidv4()
    const {nome} = req.body
    const formato = `${newId} - ${data} ${horario} - ${nome} \n`
    fs.writeFile('./logs.txt', formato, { flag: 'a' }, (error) => {
        if(error) {
            console.error("Erro ao salvar log:", error)
            return res.status(404).send('Erro ao salvar log.');
        } else {
            return res.status(200).json({
                message: "Log salvo com sucesso.",
                id: newId
            })
        }
    });
};

module.exports = { lerDados, salvarDados }
