import mongoose from "mongoose";

async function conectaNaDatabase() {
  mongoose.connect(
    "mongodb+srv://admin:felicia123@cluster0.k9oif.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0"
  );

  return mongoose.connection;
}

export default conectaNaDatabase;
