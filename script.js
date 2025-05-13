const fs = require('fs')
const path = require('path')
const { v4: uuidv4 } = require('uuid')

const lerDados = (req, res) => {
    const { id } = req.params
    const logsFilePath = path.join(__dirname, 'logs.txt');

    fs.readFile(logsFilePath, 'utf-8', (error, data) => {
        if(error) {
            return res.status(500).json({ error: 'Erro ao ler o arquivo de logs.' })
        }

        const logs = data.split('\n').find(log => log.startsWith(`${id} -`))

        if(logs) {
            return res.status(200).json({ message: 'Log encontrado.', log: logs })
        } else {
            return res.status(404).json({ error: `Log não encontrado. ID: ${id}`})
        }
    })
};

const salvarDados = (req, res) => {
    const data = new Date().toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo' });
    const horario = new Date().toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo' });
    const newId = uuidv4()
    const { nome } = req.body
    const formato = `${newId} - ${data} ${horario} - ${nome} \n`
    fs.writeFile('./logs.txt', formato, { flag: 'a' }, (error) => {
        if(error) {
            console.error('Erro ao salvar log:', error)
            return res.status(404).json({ error: 'Erro ao salvar log.' });
        } else {
            return res.status(200).json({
                message: 'Log salvo com sucesso.',
                id: newId
            })
        }
    });
};

module.exports = { lerDados, salvarDados }
