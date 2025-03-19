const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController.js");

const pessoaController = new PessoaController();

const router = Router();

router.get("/pessoas", (req, res) => pessoaController.pegaTodos(req, res));
router.get("/pessoa/:id", (req, res) => pessoaController.pegaUmPorId(req, res));
router.post("/pessoa", (req, res) => pessoaController.criaNovo(req, res));
router.put("/pessoa/:id", (req, res) => pessoaController.atualiza(req, res));
router.delete("/pessoa/:id", (req, res) => pessoaController.exclui(req, res));

module.exports = router;
