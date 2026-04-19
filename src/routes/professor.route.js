const express = require('express');
const router = express.Router();

// Importar o respetivo controlador do professor
const professorController = require('../controllers/professor.controller');

router.get('/', professorController.getAllProfessors);
router.post('/', professorController.createProfessor); 
router.put('/:id', professorController.updateProfessor);
router.delete('/:id', professorController.deleteProfessor);

module.exports = router;