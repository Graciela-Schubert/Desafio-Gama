const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    nome: { type: String, unique: false, required: true },
    cpf: { type: String, unique: true, required: true },
    dataNascimento: { type: Date, unique: false, required: true },
    celular: { type: String, unique: false, required: true },
    email: { type: String, unique: false, required: true },
    profissao: { type: String, unique: false, required: true },
    identidade: { type: String, unique: true, required: true },
    telefone1: { type: String, unique: false, required: false },
    telefone2: { type: String, unique: false, required: false },
    sexo: { type: String, unique: false, required: false },
    cargoPretendido: { type: String, unique: false, required: false },
    estadoCivil: { type: String, unique: false, required: false },
    contato: { type: String, unique: false, required: false },
    veiculo: { type: Boolean, unique: false, required: false },
    habilitacao: { type: Boolean, unique: false, required: false },
    endereco: { type: String, unique: false, required: true }, //nome rua + nro + compl
    cep: { type: String, unique: false, required: true },
    bairro: { type: String, unique: false, required: true },
    cidade: { type: String, unique: false, required: true },
    estado: { type: String, unique: false, required: false }
}, {
    timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema);