import './App.css';
import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const FormInput = styled.input`
border: 1px solid red;
`;
const ErrorSpan = styled.span`
  color: red;
  display: ${(props) => props.isError ? 'block' : 'none'};
`;


const App = () => {

  const fetchAddress = async () => {
    const address = await axios.get(`https://viacep.com.br/ws/${form.cep}/json/`);
    setForm({ ...form, endereco: address.data.logradouro + ', ' + address.data.complemento, 
    bairro: address.data.bairro,
    cidade: address.data.localidade, 
    estado: address.data.uf
    });
  };

  const createCandidate = async (candidate) => {
    try {
      const user = await axios.post('http://localhost:5000/register', form);
      if (user.status === 200) {
        alert('Cadastrado com sucesso.');
      }

    } catch (error) {
      setCpfError(true);
    }
  };

  const [form, setForm] = useState({
    nome: '',
    cep: '',
    endereco: '',
    bairro: '',
    cidade: '',
    estado: '',
    email: '',    
    cpf: '',
    dataNascimento: '',
    celular: '',
    profissao: '',
    identidade: '',
    telefone1: '',
    telefone2: '',
    sexo: '',
    cargoPretendido: '',
    estadoCivil: '',
    contato: '',
    veiculo: '',
    habilitacao: ''
  });

  const [cpfError, setCpfError] = useState(false);



  return (
    
    <div>
      <div class="App-header">
    DADOS PESSOAIS
    </div>
      <div>
        <label>Nome Completo</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, nome: e.target.value });
        }} value={form.nome}></FormInput>
      </div>
      <div>
        <label>CPF</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, cpf: e.target.value });
        }} value={form.cpf}></FormInput>
        <ErrorSpan isError={cpfError}>CPF incorreto</ErrorSpan>
      </div>
      <div>
        <label>Data de Nascimento</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, dataNascimento: e.target.value });
        }} value={form.dataNascimento}></FormInput>
      </div>
      <div>
        <label>Celular</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, celular: e.target.value });
        }} value={form.celular}></FormInput>
        <label>Telefone Fixo 1</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, telefone1: e.target.value });
        }} value={form.telefone1}></FormInput>
        <label>Telefone Fixo 2</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, telefone2: e.target.value });
        }} value={form.telefone2}></FormInput>
      </div>
      <div>
        <label>CEP: </label>
        <FormInput onBlur={() => {
          fetchAddress();
        }} onChange={(e) => {
          setForm({ ...form, cep: e.target.value });
        }} value={form.cep}></FormInput>
        
        <label>Endereço: </label>
        <FormInput onBlur={() => {
        }} onChange={(e) => {
          setForm({ ...form, endereco: e.target.value });
        }} value={form.endereco}></FormInput>

        <label>Bairro</label>
        <FormInput onBlur={() => {
        }} onChange={(e) => {
          setForm({ ...form, bairro: e.target.value });
        }} value={form.bairro}></FormInput>

        <label>Cidade</label>
        <FormInput onBlur={() => {
        }} onChange={(e) => {
          setForm({ ...form, cidade: e.target.value });
        }} value={form.cidade}></FormInput>

        <label>Estado</label>
        <FormInput onBlur={() => {
        }} onChange={(e) => {
          setForm({ ...form, estado: e.target.value });
        }} value={form.estado}></FormInput>
      </div>

      <div>
        <label>E-mail</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, email: e.target.value });
        }} value={form.email}></FormInput>
      </div>

      <div>
        <label>Gênero </label>
        <FormInput onChange={(e) => {
          setForm({ ...form, sexo: e.target.value });
        }} value={form.sexo}></FormInput>
      </div>

      <div>
        <label>Cargo Pretendido</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, cargoPretendido: e.target.value });
        }} value={form.cargoPretendido}></FormInput>
      </div>

      <div>
        <label>Estado Civil</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, estadoCivil: e.target.value });
        }} value={form.estadoCivil}></FormInput>
      </div>

      <div>
        <label>Contato</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, contato: e.target.value });
        }} value={form.contato}></FormInput>
      </div>

      <div>
        <label>Veículo</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, veiculo: e.target.value });
        }} value={form.veiculo}></FormInput>
      </div>
      <div>
        <label>Profissão</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, profissao: e.target.value });
        }} value={form.profissao}></FormInput>
      </div>
      <div>
        <label>Habilitação</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, habilitacao: e.target.value });
        }} value={form.habilitacao}></FormInput>
      </div>
      <div>
        <label>Identidade</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, identidade: e.target.value });
        }} value={form.identidade}></FormInput>
      </div>

      <button onClick={() => createCandidate()}>Cadastrar</button>
    </div>

  );
};

export default App;