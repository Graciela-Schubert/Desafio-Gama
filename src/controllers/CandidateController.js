const Candidate = require('../models/Candidate');


module.exports = {
    async register(req, res) {

        const { nome, cpf, dataNascimento, endereco, celular, email, profissao, identidade, telefone1, telefone2, sexo, cargoPretendido, estadoCivil, contato, veiculo, habilitacao  } = req.body;

        // regra do CPF unico
        if (CheckCPF(cpf))
        {
            const newCandidate = new Candidate();

            newCandidate.nome = nome;
            newCandidate.cpf = cpf;
            newCandidate.dataNascimento = dataNascimento;
            newCandidate.endereco = endereco;
            newCandidate.celular = celular;
            newCandidate.email = email;
            newCandidate.profissao = profissao;
            newCandidate.identidade = identidade;
            newCandidate.telefone1 = telefon1;
            newCandidate.telefone2 = telefone2;
            newCandidate.sexo = sexo;
            newCandidate.cargoPretendido = cargoPretendido;
            newCandidate.estadoCivil = estadoCivil;
            newCandidate.contato = contato;
            newCandidate.veiculo = veiculo;
            newCandidate.habilitacao = habilitacao;

            newCandidate.save((err, savedCandidate) => {
                if (err) {
                    console.log(err);
                    return res.status(500).send('Erro interno do servidor, ao tentar salvar candidato! Verifique log de mensagens.');
                }

                return res.status(200).send(savedCandidate);
            });
        }
        else
        {
            console.log('Cpf já cadastrado.');
            return res.status(500).send('Cpf já cadastrado.');
        }
    },
};

function CheckCPF(cpf, cadastrados) {
    //cadastrados -> pegar lista do banco de dados!
    //return (cpf.indexOf(cadastrados) <= 0);
    return 1 == 1;
}
