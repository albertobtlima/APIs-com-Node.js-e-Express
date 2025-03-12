const Controller = require("./Controller.js");
const PessoaServices = require("../services/PessoaServices.js");

const PessoaServices = new PessoaServices();

class PessoaController extends Controller {
  constructor() {
    super(PessoaServices);
  }
}

module.exports = PessoaController;
