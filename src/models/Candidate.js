const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    nome: { type: String, unique: false, required: true },
    cpf: { type: String, unique: true, required: true },
    dataNascimento: { type: Date, unique: false, required: true },
    endereco: { type: mongoose.Schema.Types.ObjectId, ref:'Enderecos', unique: false, required: true },
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
    habilitacao: { type: Boolean, unique: false, required: false }
}, {
    timestamps: true
});

const EnderecoSchema = new mongoose.Schema({
    cep: { type: String, unique: false, required: true },
    logradouro: { type: String, unique: false, required: true },
    numero: { type: String, unique: false, required: true },
    bairro: { type: String, unique: false, required: true },
    cidade: { type: String, unique: false, required: true },
    estado: { type: String, unique: false, required: false }
}, {
    timestamps: true
});

module.exports = mongoose.model('Enderecos', EnderecoSchema);
module.exports = mongoose.model('Candidate', CandidateSchema);