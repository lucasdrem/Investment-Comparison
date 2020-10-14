import tokenLogin from '../Utils/token';
import EndPoint from '../Utils/endPoint';

async function geraTokenAutocomplete(): Promise<any> {
  const tokenAutocompleteValue = 1;
  const apiTeste = `token=${tokenLogin}&token_autocomplete=${tokenAutocompleteValue}`;
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: '/',
    },
    body: apiTeste,
  };
  const result = await fetch(`${EndPoint}code=get_token`, requestOptions);
  return result.json();
}

const fetchAutocompleteAtivoBoletaCV = (
  valorDigitado: string,
  maxListSize: number,
): Promise<any> => {
  return geraTokenAutocomplete().then(token => {
    const tokenAutocomplete = encodeURIComponent(token);

    const apiURL = encodeURIComponent(
      `AJAX/AJAX_BUSCADOR_001.php?codigo=&parametro1=2+12+14&parametro2=${maxListSize}&parametro3=&parametro4=&token=${tokenAutocomplete}&term=${valorDigitado}`,
    );

    const apiTeste2 = `token=${tokenLogin}&format=json2&URL=${apiURL}`;

    const requestOptions2 = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: '/',
      },
      body: apiTeste2,
    };
    return fetch(`${EndPoint}code=import_data`, requestOptions2)
      .then(response => response.json())
      .then(response => response);
  });
};

export default fetchAutocompleteAtivoBoletaCV;
