import mongoose from "mongoose";

// eslint-disable-next-line no-unused-vars
function manipuladorDeErros(erro, req, res, next) {
  if (erro instanceof mongoose.Error.CastError) {
    res.status(400).send({ message: "Dados fornecidos estão incorretos" });
  } else {
    res
      .status(500)
      .send({ message: `${erro.message} - Erro interno do servidor` });
  }
}

export default manipuladorDeErros;
