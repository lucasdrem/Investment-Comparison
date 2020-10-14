import endPoint, { pathVCCMD } from '../Utils/endPoint';

interface LoginProps {
  email: string;
  password: string;
}

interface TransformaEmailUsernameProps {
  username: string;
  status: string;
}

interface LoginComdinheiroProps {
  access_token: string;
  expires_in: string;
}

async function comdadoLogin({
  email,
  password,
}: LoginProps): Promise<LoginComdinheiroProps> {
  let apiTeste;
  const username = await transformaEmailUsername(email);
  if (username.status === 'ok') {
    apiTeste = `username=${username.username}&password=${password}`;
  } else {
    apiTeste = `username=${email}&password=${password}`;
  }

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: '/',
    },
    body: apiTeste,
  };
  const result = await fetch(`${endPoint}code=get_token`, requestOptions);
  return result.json();
}

export default comdadoLogin;

async function transformaEmailUsername(
  email: string,
): Promise<TransformaEmailUsernameProps> {
  const apiTeste = `email=${email}`;

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: '/',
    },
    body: apiTeste,
  };

  const result = await fetch(
    `${pathVCCMD}TransformaEmailUsername.php?`,
    requestOptions,
  );
  return result.json();
}
