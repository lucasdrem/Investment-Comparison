import { pathVCCMD3 } from '../Utils/endPoint';
import gerarCpf from './generateCPF.js';

async function cadastraUsuario<T>(
  nome: string,
  email: string,
  senha: string,
): Promise<T> {
  const apiTeste = `nome=${nome}&email=${email}&senha=${senha}&telefone=11989513986&aceita_email=true&cpf=${gerarCpf()}&data_nascimento=26/12/1996&uf=35&municipio=Jundiai&renda=1&perfil=1&g-recaptcha-response=&redes_sociais=false&token=&format=json2`;
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: '/',
    },
    body: apiTeste,
  };

  const result = await fetch(`${pathVCCMD3}Cadastro.php?`, requestOptions);
  return result.json();
}

export default cadastraUsuario;
