const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post('/receiveData', (req, res) => {
  const { temperatura, joystick, direcao, botoes } = req.body;

  if (
    typeof temperatura !== 'number' ||
    !joystick || typeof joystick.x !== 'number' || typeof joystick.y !== 'number' ||
    typeof direcao !== 'string' ||
    !botoes || typeof botoes.A !== 'boolean' || typeof botoes.B !== 'boolean'
  ) {
    return res.status(400).json({ erro: "Formato inválido." });
  }

  console.log('📥 Dados recebidos da BitDogLab:');
  console.log(`🌡️ Temperatura: ${temperatura}°C`);
  console.log(`🎮 Joystick - X: ${joystick.x}, Y: ${joystick.y}`);
  console.log(`🧭 Direção: ${direcao}`);
  console.log(`🔘 Botão A: ${botoes.A ? 'Pressionado' : 'Solto'}`);
  console.log(`🔘 Botão B: ${botoes.B ? 'Pressionado' : 'Solto'}`);

  res.status(200).json({ mensagem: 'Dados recebidos com sucesso.' });
});

app.get('/', (req, res) => {
  res.send('Servidor rodando no Railway!');
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor escutando na porta ${PORT}`);
});
