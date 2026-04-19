const express = require('express');
const router = express.Router();

// Importamos o controlador que tu acabaste de criar
const alunoController = require('../controllers/aluno.controller');

// Definir os "caminhos" (endpoints) para os alunos
// O '/' aqui refere-se à base da rota (ex: /api/alunos)

router.get('/', alunoController.getAllStudents);
router.post('/', alunoController.createStudent);
router.put('/:id', alunoController.updateStudent);
router.delete('/:id', alunoController.deleteStudent);

module.exports = router;