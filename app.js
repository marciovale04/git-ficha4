const express = require('express');
const app = express();


app.use(express.json());

const alunoRoutes = require('./src/routes/aluno.route');

app.use('/api/alunos', alunoRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor a correr em http://localhost:${PORT}`);
});