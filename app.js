const express = require("express");
const app = express();
const AnalyticsFactory = require("./analytics/AnalyticsFactory");


app.use(express.json());

// Endpoint 1 - Configuração
app.get("/config", (req, res) => {
  res.json({
    name: "Scouts Challenge",
    version: "1.0",
    description: "Activity Provider do jogo educativo Scouts Challenge",
    domain: "Escutismo / Educação"
  });
});

// Endpoint 2 - Parâmetros
app.get("/parameters", (req, res) => {
  res.json([
    {
      name: "challengeType",
      type: "string",
      description: "Tipo de desafio escutista",
      values: ["orientacao", "primeiros_socorros", "sobrevivencia"]
    },
    {
      name: "difficulty",
      type: "string",
      values: ["facil", "medio", "dificil"]
    }
  ]);
});


// Endpoint 3 - Deploy
app.post("/deploy", (req, res) => {
  res.json({
    status: "success",
    activityId: "ACT123"
  });
});

// Endpoint 4 - Analytics disponíveis
app.get("/analytics", (req, res) => {
  res.json([
    { id: "successRate", description: "Taxa de sucesso" },
    { id: "averageTime", description: "Tempo médio" }
  ]);
});

// Endpoint 5 - Pedido de analytics
app.post("/analytics/request", (req, res) => {
  const { type } = req.body;

  const analytics = AnalyticsFactory.create(type);

  const result = analytics.calculate({
    successes: 8,
    attempts: 10,
    totalTime: 400
  });

  res.json({ result });
});


// Iniciar servidor
app.listen(3000, () => {
  console.log("Servidor a correr em http://localhost:3000");
});
