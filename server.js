const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json()); // Habilita o parse do JSON no corpo da requisição

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor escutando na porta ${PORT}`);
});

// Endpoint para receber os dados da BitDogLab
app.post('/receiveData', async (req, res) => {
    const { temperatura, joystick, direcao, botoes } = req.body;

    // Verificação básica dos dados recebidos
    if (
        typeof temperatura !== 'number' ||
        !joystick || typeof joystick.x !== 'number' || typeof joystick.y !== 'number' ||
        typeof direcao !== 'string' ||
        !botoes || typeof botoes.A !== 'boolean' || typeof botoes.B !== 'boolean'
    ) {
        return res.status(400).json({ erro: "Formato inválido. Esperado: { temperatura, joystick: { x, y }, direcao, botoes: { A, B } }" });
    }

    // Exibe os dados recebidos no console
    console.log(`📥 Dados recebidos da BitDogLab:`);
    console.log(`🌡️ Temperatura: ${temperatura}°C`);
    console.log(`🎮 Joystick - X: ${joystick.x}, Y: ${joystick.y}`);
    console.log(`🧭 Direção: ${direcao}`);
    console.log(`🔘 Botão A: ${botoes.A ? 'Pressionado' : 'Solto'}`);
    console.log(`🔘 Botão B: ${botoes.B ? 'Pressionado' : 'Solto'}`);

    // Envia resposta de sucesso
    res.status(200).json({ mensagem: 'Dados recebidos com sucesso.' });
});
