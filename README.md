# 🛰️ Joystick Server - BitDogLab IoT Communication

Este projeto é um **servidor Node.js com Express**, criado para **receber dados em tempo real de um sistema embarcado baseado na placa BitDogLab**. A placa coleta dados como **temperatura, posição do joystick, direção da rosa dos ventos** e o **estado dos botões A e B**, e envia esses dados para a web via conexão TCP/IP, diretamente para este servidor hospedado no **Railway**.

---

## 🚀 Objetivo

Criar uma aplicação capaz de:
- Escutar requisições HTTP do tipo `POST` vindas da BitDogLab.
- Receber e validar dados de sensores embarcados.
- Imprimir essas informações no console do servidor para monitoramento.
- Estar disponível na web via deploy no Railway, sem necessidade de servidor local.

---

## 🧩 Tecnologias Utilizadas

- **Node.js** – Ambiente de execução JavaScript.
- **Express.js** – Framework web para criação de APIs.
- **CORS** – Middleware para permitir requisições externas.
- **Railway** – Plataforma de hospedagem de projetos Node.js.
- **TCP/IP via lwIP (na BitDogLab)** – Protocolo usado para envio dos dados.

---

## 📡 Estrutura dos Dados Enviados

A placa BitDogLab envia um objeto JSON com o seguinte formato:

```json
{
  "temperatura": 27.5,
  "joystick": {
    "x": 1023,
    "y": 512
  },
  "direcao": "Norte",
  "botoes": {
    "A": true,
    "B": false
  }
}
